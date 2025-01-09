let animation = gsap.timeline();

animation.from("nav h1", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.7,
});

animation.from("nav h3", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.4,
});

animation.from("nav h2", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.4,
});

let theme = document.getElementById("theme");

theme.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});

gsap.from(".home img", {
  opacity: 0,
  duration: 0.5,
  delay: 1,
});

gsap.from(".home h2", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 1,
});

gsap.from(".home h1", {
  opacity: 0,
  duration: 0.5,
  delay: 1,
});

gsap.from(".home a", {
  opacity: 0,
  duration: 0.5,
  delay: 1,
});

gsap.from(".projects .project-heading", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 1,
});
