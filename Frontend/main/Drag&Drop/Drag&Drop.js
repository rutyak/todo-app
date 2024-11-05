const pro = document.querySelector(".progress-stage");
const done = document.querySelector(".done-stage");

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

async function fetchTasks() {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${currentUser}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function renderTasks(container, tasks, stage) {
  let entireInfo = [];
  tasks.forEach(task => {
    if (task.stage === stage) {
      entireInfo = render(task, entireInfo);
    }
  });
  container.innerHTML = entireInfo.join("");
}

async function displayTasksByStage() {
  const tasks = await fetchTasks();
  renderTasks(pro, tasks, "In progress");
  renderTasks(done, tasks, "Done");
}

async function updateTaskStage(ev, stage, container) {
  ev.preventDefault();
  var id = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(id);

  try {
    let updatedData = { stage: stage };
    const response = await fetch(`${BASE_URL}/updateTask/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    
    if (response.ok) {
      container.appendChild(draggedElement);
      const stageIndicator = draggedElement.querySelector(".priority-p");
      stageIndicator.textContent = stage;
    } else {
      console.error("Failed to update task stage");
    }
  } catch (error) {
    console.error(error);
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

displayTasksByStage();

async function progressDrop(ev) {
  await updateTaskStage(ev, "In progress", pro);
}

async function doneDrop(ev) {
  await updateTaskStage(ev, "Done", done);
}
