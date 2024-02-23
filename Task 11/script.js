document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", function (event) {
    let isValid = true;
    if (nameInput.value.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      document.getElementById("emailError").textContent =
        "Invalid email format";
      isValid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }
    if (!isValid) {
      event.preventDefault();
    }
  });
});
