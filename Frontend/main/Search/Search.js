
let searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  let search = searchInput.value.toLowerCase();
  filterTasks(search);
});

function filterTasks(search) {

  try {
    let count = 0;
    let entireInfo = [];
    
    data.forEach((value, i) => {
      if (
       ( value.task.toLowerCase().includes(search) ||
        value.description.toLowerCase().includes(search)) && value.stage == "Upcoming"
      ) {
        count++;
        entireInfo = render(value, entireInfo);
      }
    });
  
    taskModule.innerHTML = entireInfo.join("");
    tasksCount.innerHTML = ` <div>
    <p>All tasks(${count} tasks)</p>
  </div>
  `;
  } catch (error) {
    console.log(error);
  } 
}



















