// step 1 - set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2: prevent default behavior(prevent reloading browser)
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin").value;

    //  bed way to validate number and pin
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = "/home-page.html";
    } else {
      alert("your number or password wrong");
    }
  });
