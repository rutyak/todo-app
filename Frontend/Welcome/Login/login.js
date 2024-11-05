let BASE_URL = "https://todo-list-app-2.onrender.com";

async function login() {
  const warn = document.getElementById("warning");
  const emailInput = document.getElementById("email1");
  const passwordInput = document.getElementById("password1");
  const email = emailInput.value.trim(); 
  const password = passwordInput.value.trim();

  warn.innerHTML = '';

  if (email === "" || password === "") {
    const warningDiv = document.createElement('div');
    warningDiv.style.color = 'red';
    const warningText = document.createElement('p');
    warningText.textContent = 'Please fill in all fields';
    warningDiv.appendChild(warningText);
    warn.appendChild(warningDiv);
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    const messageDiv = document.createElement('div');
    const messageText = document.createElement('p');

    try {
      if (response.ok) {
        messageDiv.style.color = 'green';
        messageText.textContent = data.message;
        messageDiv.appendChild(messageText);
        warn.appendChild(messageDiv);
        
        localStorage.setItem("User", email);

        setTimeout(() => {
          location.href = "../../main/Home/Home.html";
        }, 2000);
      } else {
        messageDiv.style.color = 'red';
        messageText.textContent = data.message;
        messageDiv.appendChild(messageText);
        warn.appendChild(messageDiv);
      }
    } catch (error) {
      console.error(error);
    }
   
  } catch (error) {
    console.log(error);
  }
}
