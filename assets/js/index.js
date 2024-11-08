const menubtn = document.getElementById("menubtn");
const menuIcon = document.getElementById("menuIcon");
let switchmenu = false;
function testbtn() {
  switchmenu = !switchmenu;
  console.log(switchmenu);
  console.log(menuIcon.attributes.src.value);
  if (switchmenu) {
    menubtn.style = "display: flex ; overflow: hidden; ";
    menubtn.classList.add("active_menu");
    // menuIcon.classList.add("active_arrow");
    menuIcon.classList.remove("active_menuarrow");
    // menuIcon.attributes.src.value = "assets/icons/exit.svg";
    menuIcon.style = "opacity: 0.2;";
  } else {
    menubtn.style = "display: none; ";
    menuIcon.classList.remove("active_arrow");
    menuIcon.classList.add("active_menuarrow");
    // menuIcon.attributes.src.value = "assets/icons/menu.svg";
    menuIcon.style = "width: 33px; height: 25px;";
  }
}
// menuIcon.addEventListener("click", testbtn)
function thescroll(to) {
  window.scrollTo({
    top: to,
    behavior: "smooth",
  });
  testbtn();
}
