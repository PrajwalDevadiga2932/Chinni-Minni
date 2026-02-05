const images = [
  "images/her1.jpg",
  "images/her2.jpg",
  "images/her3.jpg"
];

const container = document.getElementById("floating-images");

const positions = [
  { top: "5%", left: "10%" },
  { top: "5%", right: "10%" },
  { top: "40%", left: "3%" },
  { top: "40%", right: "3%" },
  { bottom: "8%", left: "12%" },
  { bottom: "8%", right: "12%" }
];

positions.forEach((pos, i) => {
  const img = document.createElement("img");
  img.src = images[i % images.length];
  img.className = "floating-img";

  Object.assign(img.style, pos);
  img.style.animationDelay = `${i * 0.6}s`;

  container.appendChild(img);
});
