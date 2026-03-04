function saveData() {
  const data = {
    timestamp: new Date().toISOString(),
    phone: document.getElementById("phone").value,
    energy: document.getElementById("energy").value,
    amount: document.getElementById("amount").value,
    quantity: document.getElementById("quantity").value,
    otp: Math.floor(1000 + Math.random() * 9000),
    paymentStatus: "SUCCESS",
    motorStatus: "OFF"
  };

  firebase.database()
    .ref("smartEnergyBunk")
    .set(data)
    .then(() => {
      alert("Data saved to Firebase");
      console.log("Saved:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
