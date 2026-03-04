function submitData() {
  // Read inputs
  let phone = document.getElementById("phone").value;
  let energy = document.querySelector('input[name="energy"]:checked')?.value;
  let amount = document.getElementById("amount").value;
  let quantity = document.getElementById("quantity").value;

  // Generate OTP
  let otp = Math.floor(1000 + Math.random() * 9000);

  // Demo transaction id & payment status
  // (replace transactionId with Razorpay payment id later)
  let transactionId = "TXN_" + Date.now();
  let paymentStatus = "SUCCESS";

  if (!phone || !energy || !amount || !quantity) {
    alert("Please fill all fields");
    return;
  }

  // Google Apps Script Web App URL
  let url = "https://script.google.com/macros/s/AKfycbwsUhfdQF87GO5fqFKqlfIfdIK_oxJE263wrzSpNzZMXiTpSRyjywE1fNGKZMofW9-t/exec";

  // Send data using POST (recommended)
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phone: phone,
      energy: energy,
      amount: amount,
      quantity: quantity,
      otp: otp,
      transactionId: transactionId,
      paymentStatus: paymentStatus
    })
  })
  .then(response => response.text())
  .then(data => {
    alert("OTP Generated: " + otp);
    console.log("Server response:", data);
  })
  .catch(err => {
    alert("Error sending data");
    console.error(err);
  });
}
