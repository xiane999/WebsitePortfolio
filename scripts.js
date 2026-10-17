var form = document.getElementById("contact-form");
var result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    result.textContent = "Please fill in all the fields.";
  } else {
    result.textContent = "Thank you, " + name + "! Your message was sent.";
    form.reset();
  }
});