let BASE_URL = "https://todo-list-app-2.onrender.com";

async function signup() {
  let warn = document.getElementById("warning");
  let name = document.getElementById("name");
  let email = document.getElementById("email").value;
  let cpassword = document.getElementById("cpassword");
  let passwordInput = document.getElementById("password");

  let password = passwordInput.value.trim();
  cpassword = cpassword.value.trim();
  name = name.value.trim();

  warn.innerHTML = "";

  const appendWarning = (message, color) => {
    let warningMessage = document.createElement("div");
    warningMessage.style.color = color;

    let p = document.createElement("p");
    p.textContent = message;
    warningMessage.appendChild(p);
    warn.appendChild(warningMessage);
  };

  if (email === "" || password === "" || name === "" || cpassword === "") {
    appendWarning("Please fill in all fields", "red");
    return;
  }
  if (password !== cpassword) {
    appendWarning("Passwords must be same.", "red");
    return;
  }
  if (password.length < 6) {
    appendWarning("Password must contain char greater than 6", "red");
    return;
  }
  
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      appendWarning(data.message, "green");
      localStorage.setItem("User", email);

      setTimeout(() => {
        location.href = "../../main/Home/Home.html";
      }, 2000);
    } else {
      appendWarning(data.message, "red");
    }
  } catch (error) {
    console.log(error);
  }
}
