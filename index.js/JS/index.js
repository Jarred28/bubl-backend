const navBar = document.querySelector("nav");

navBar.addEventListener('click', function(event) {
    event.preventDefault();
    event.target.style.color = "green";
});

const smallBus = document.querySelector('.fun-bus');

smallBus.addEventListener('mouseover', function(event) {
    event.target.style.display = "none";
});
