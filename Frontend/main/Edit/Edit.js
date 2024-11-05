let edit = document.querySelector(".btn-submit-editedTask");
let task = document.getElementById("task1");
let desc = document.getElementById("desc1");
let priority = document.getElementById("tasks-priority");
const formContainer = document.querySelector('.form-container')
let task2;
let desc2;

async function updatedTask(updatedData, id) {
  try{
  const response = await fetch(`${BASE_URL}/updateTask/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData), 
  });


  if (response.ok) {
    setTimeout(() => {
      location.href = "../Home/Home.html";
    }, 1000);
  }
  } catch (error) {
      console.error(error);
  }
}

function handleEdit(id) {
  try {
    formContainer.classList.remove("hidden");
    formContainer.classList.add("visible");

    data.forEach(ele => {
      if (ele._id == id) {
        task2 = ele.task;
        desc2 = ele.description;
      }
    });
    task.value = task2;
    desc.value = desc2;

  } catch (error) {
    console.error(error);
  }


  edit.addEventListener("click", (e) => {
    taskEdit(e);
  });

  async function taskEdit(e) {
    try {
      e.preventDefault();
      task = task.value;
      desc = desc.value;
      priority = priority.value;

      let updatedData = {
        task,
        description: desc,
        time,
        dayOfMonth,
        priority,
      };

      updatedTask(updatedData, id);

    }catch(error){
      console.log(error);
    }
}
}
