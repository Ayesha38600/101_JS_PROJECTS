let cursor = document.documentElement;

cursor.addEventListener("mousemove", (e) => {
  cursor.style.setProperty("--1", e.clientX + "px");
  cursor.style.setProperty("--2", e.clientY + "px");
});