function handleClose() {
    formContainer.classList.remove("visible");
    formContainer.classList.add("hidden");
}
  
function handleTaskForm() {
    formContainer.classList.remove("hidden");
    formContainer.classList.add("visible");
    
    edit.addEventListener("click", (e) => {
      taskAdd(e);
    });
  
    async function taskAdd(e) {
      try {
        e.preventDefault();
        const warn = document.getElementById("warning");
        let task = document.getElementById('task1').value;
        let desc = document.getElementById('desc1').value;
        let priority = document.getElementById('tasks-priority').value;
        let stage = "Upcoming";
       
        if (task === "" || desc === "") {
          warn.innerHTML = `<div style="color: red"><p>Please fill in all fields</p></div>`;
          return;
        }
      
        const response = await fetch(`${BASE_URL}/taskform`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({task, desc, time, dayOfMonth, priority, stage,email:currentUser})
        });
      
        const data = await response.json();
      
        if (response.ok) {
          warn.innerHTML = `<div style="color: white;"><p>${data.message}</p></div>`;
          
          setTimeout(() => {
            location.href = "../Home/Home.html";
          }, 2000);
        } else {
          warn.innerHTML = `<div style="color: red"><p>Invalid data</p></div>`;
        }
    } catch (error) {
        console.log("Error",error);
    }
  }
  }
  
  