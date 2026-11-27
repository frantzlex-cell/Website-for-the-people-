document.getElementById("callback").addEventListener("submit", function(event) {
event.preventDefault();
document.getElementById("thanks").textContent = "Thanks! We will call you back soon with booking times.";
});