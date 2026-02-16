function submitData() {
  let energy = document.querySelector('input[name="energy"]:checked')?.value;
  let amount = document.getElementById("amount").value;
  let otp = document.getElementById("otp").value;

  if (!energy || !amount || !otp) {
    document.getElementById("status").innerText = "Fill all fields!";
    return;
  }

  // Store data for ESP32
  localStorage.setItem("energy", energy);
  localStorage.setItem("amount", amount);
  localStorage.setItem("otp", otp);

  document.getElementById("status").innerText =
    "Request sent. Proceed to bunk.";
}
