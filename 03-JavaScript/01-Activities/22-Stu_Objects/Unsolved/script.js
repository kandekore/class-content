//WRITE YOUR CODE BELOW

var customerOrder = {
  drinksName: "Coffee",
  numberOfSugars: "2",
  isReady: true,
};

console.log(customerOrder.drinksName);

if (customerOrder.isReady) {
  console.log("Ready for pick-up");
} else if (!customerOrder.isReady) {
  console.log("Still in order queue");
}
