function submitData() {
  let energy = document.querySelector('input[name="energy"]:checked')?.value;
  let amount = document.getElementById("amount").value;
  let otp = Math.floor(1000 + Math.random() * 9000);

  if (!energy || !amount) {
    alert("Please fill all fields");
    return;
  }

  let url = "https://script.google.com/macros/s/AKfycbzTSF-Ha7EELjlytlS7MbiBqWaEktIBTM5zjw-OdyM-LgaCtZitcFZ6tBcxKiUctYc9/exec" +
            "?energy=" + energy +
            "&amount=" + amount +
            "&otp=" + otp;

  fetch(url)
    .then(response => response.text())
    .then(data => {
      alert("OTP: " + otp);
      console.log(data);
    })
    .catch(err => {
      alert("Error sending data");
      console.error(err);
    });
}
