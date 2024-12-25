// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
// nav hide from inspect
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click" , function(){
        navCollapse.classList.remove("show");
    })
})
// count design
// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration){
//         let obj = document.getElementById(counter),
//         current = start,
//         range = end - start,
//         increament = end > start ? 1 : -1,
//         step = Math.obs(Math.floor(duration / range)),
//         timer = setInterval(() =>{
//             current += increament;
//             obj.textContent = current;
//             if(current === end) {
//                 clearInterval (timer);
//             }
//         }, step);
//     }
//     counter("count1" ,0, 1287, 3000);
//     counter("count3" ,100, 5786, 2500);
//     counter("count3" ,0, 1440, 3000);
//     counter("count4" ,0, 7110, 3000);
// });
// Selecting elements
// const countElement = document.getElementById("count1");
// const increaseButton = document.getElementById("count2");
// const decreaseButton = document.getElementById("count3");
// const resetButton = document.getElementById("count4");

// // Initial count value
// let count = 0;

// // Increase count
// count1Button.addEventListener("click", () => {
//   count++;
//   countElement.textContent = count;
// });

// // Decrease count
// count2Button.addEventListener("click", () => {
//   if (count > 0) {
//     count--;
//     countElement.textContent = count;
//   }
// });

// // Reset count
// count3Button.addEventListener("click", () => {
//   count = 0;
//   countElement.textContent = count;
// });
// Function to animate each counter
function animateCounter(id, target) {
    const counter = document.getElementById(id);
    let count = 0;
    const increment = Math.ceil(target / 100); // Speed of count animation
  
    // Animation function
    const updateCounter = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(updateCounter);
      }
      counter.textContent = count;
    }, 30); // Adjust the interval timing for animation speed
  }
  
  // Initializing the counters with target values
  document.addEventListener("DOMContentLoaded", () => {
    animateCounter("count1", 2000); // Replace 2000 with your target number for 'SAVINGS'
    animateCounter("count2", 1500); // Replace 1500 with your target number for 'PHOTOS'
    animateCounter("count3", 3100);  // Replace 300 with your target number for 'ROCKETS'
    animateCounter("count4", 2350);  // Replace 500 with your target number for 'GLOBES'
  });
  function validateForm() {
     var email = document.getElementById('email').value;
     if ( email == "") {
      alert("Please fill in all fields.");
      return false;
     }

   }
   document.getElementById('main-btn').addEventListener('click', function() {
    document.getElementById('orderForm').style.display = 'block'; // Show the order form
});

// Initialize an empty cart array to hold the orders
let cart = [];

// Function to handle the order when the "Order Now" button is clicked
function orderDish(dish, price) {
    // Create an order object with dish name and price
    const order = {
        dishName: dish,
        price: price
    };

    // Add the order to the cart
    cart.push(order);

    // Display an alert confirming the order has been placed
    alert(dish + " has been added to your cart. Price: " + price);

    // Optionally, you can display the cart content in the console (for debugging purposes)
    console.log(cart);

    // Redirect to the cart page (optional)
    // window.location.href = "cart.html"; // Uncomment to redirect to a cart page
}

// Add event listeners to all "Order Now" buttons
document.querySelectorAll('.main-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Get the dish name and price from the card
        const dishName = this.closest('.card').querySelector('h4').textContent; // Dish name from <h4>
        const dishPrice = this.closest('.card').querySelector('span').textContent.trim(); // Price from <span>

        // Call the function to process the order
        orderDish(dishName, dishPrice);
    });
});

