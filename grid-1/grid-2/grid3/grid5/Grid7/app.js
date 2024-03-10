const navbtn = document.getElementById("navbtn")
const navclose = document.getElementById("navclose")
const navbar = document.getElementById("navbar")
navbtn.addEventListener("click", () =>{
  navbar.classList.add("open");
});
navclose.addEventListener("click", () =>{
  navbar.classList.remove("open")
})
