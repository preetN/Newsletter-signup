document.getElementById("sub_btn").addEventListener("click", function (e) {
  e.preventDefault();
  var email = document.getElementById("email_field").value;

  if (email.length === 0) {
    console.log("enter something");
  } else {
    if (email.includes("@") && email.includes(".com")) {
      console.log(email);
    } else {
      console.log("no valid email");
    }
  }
});
