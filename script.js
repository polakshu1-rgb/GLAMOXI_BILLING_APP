function calculateTotal() {
  const price = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  let total = price * quantity;

  // Diwali offer: Buy 5 get 1 free
  if (quantity >= 6) {
    const freeItems = Math.floor(quantity / 6);
    const paidItems = quantity - freeItems;
    total = paidItems * price;
    document.getElementById("result").innerText = 
      `Total: ₹${total} (Offer applied: ${freeItems} free!)`;
  } else {
    document.getElementById("result").innerText = `Total: ₹${total}`;
  }

  document.getElementById("payButton").style.display = "inline-block";
}

function makePayment() {
  const totalText = document.getElementById("result").innerText;
  const amount = totalText.match(/\d+/)[0];
  const upiLink = `upi://pay?pa=polpreeti75-1@okicici&pn=Glamoxi&am=${amount}&cu=INR`;
  window.location.href = upiLink;
}
