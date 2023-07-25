const emailElm = document.getElementById("email_field");
document.getElementById("sign_upForm").addEventListener("submit", function (e) {
  e.preventDefault();
  resetErrorMsg();
  var email = emailElm.value;
  var regexp1 = /^[a-zA-Z0-9_]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(regexp1)) {
    displaySucess(email);
    document.getElementById("m").style.display = "none";
    var elm = document.getElementById("success");
    elm.classList.add("show");
  } else {
    errorMsg();
  }
});
const opennew = () => {
  window.open("./index.html", "_self");
};
const resetErrorMsg = () => {
  document.getElementById("error_email").innerHTML = "";
  emailElm.style.color = "black";
  emailElm.style.border = "1px solid black";
  emailElm.style.backgroundColor = " white";
};
const errorMsg = () => {
  document.getElementById("error_email").innerHTML = "Valid email required!";
  emailElm.style.color = "red";
  emailElm.style.border = "1px solid red";
  emailElm.style.backgroundColor = " rgb(253, 157, 157)";
};
const displaySucess = (email) => {
  document.getElementById("display_email").innerHTML = email;
};
