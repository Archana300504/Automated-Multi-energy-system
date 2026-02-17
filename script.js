function submitData() {
  let energy = document.querySelector('input[name="energy"]:checked')?.value;
  let amount = document.getElementById("amount").value;
  let otp = Math.floor(1000 + Math.random() * 9000);

  if (!energy || !amount) {
    alert("Fill all fields");
    return;
  }

  fetch("YOUR_GOOGLE_SCRIPT_URL?energy=" + energy +
        "&amount=" + amount +
        "&otp=" + otp);

  alert("Your OTP is: " + otp);
}
