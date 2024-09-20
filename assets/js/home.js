// add functionality for add money
document
  .getElementById("button-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // step 2: get money to be added to the account
    const amountInput = document.getElementById("Amount-input").value;
    const pinInput = document.getElementById("Pin-input").value;

    if (pinInput === "1234") {
      let availableBalance =
        document.getElementById("Available-balance").innerText;

      let updatedBalance = Number(amountInput) + Number(availableBalance);
      document.getElementById("Available-balance").innerText = updatedBalance;
    } else {
      alert("pin number is wrong. pls try again.");
    }
  });

// add functionality for cashOut
document
  .getElementById("button-cashOut")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const inputAmount = document.getElementById("cashOut-input").value;
    const pinInput = document.getElementById("cashOut-pin").value;

    if (pinInput === "1234") {
      const availableBalance =
        document.getElementById("Available-balance").innerText;

      const updatedBalance = availableBalance - inputAmount;
      document.getElementById("Available-balance").innerText = updatedBalance;
    } else {
      alert("pin number is wrong. pls try again.");
    }
  });

// add functionality for toggle
document.getElementById("btn-cash-out").addEventListener("click", function () {
  document.getElementById("cashOut-form").classList.remove("hidden");
  document.getElementById("add-money-form").classList.add("hidden");
});

document.getElementById("btn-add-money").addEventListener("click", function () {
  document.getElementById("cashOut-form").classList.add("hidden");
  document.getElementById("add-money-form").classList.remove("hidden");
});
