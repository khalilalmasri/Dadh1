const menubtn = document.getElementById("menubtn");
const menuIcon = document.getElementById("menuIcon");
let switchmenu = false;
function testbtn() {
  switchmenu = !switchmenu;
  console.log(switchmenu);
  console.log(menuIcon.attributes.src.value);
  if (switchmenu) {
    menubtn.style = "display: flex ; overflow: hidden;";
    menubtn.classList.add("active_menu");
    menuIcon.classList.add("active_arrow");
    menuIcon.classList.remove("active_menuarrow");
    menuIcon.attributes.src.value = "assets/icons/back.svg";
  } else {
    menubtn.style = "display: none; ";
    menuIcon.classList.remove("active_arrow");
    menuIcon.classList.add("active_menuarrow");
    menuIcon.attributes.src.value = "assets/icons/menu.svg";
    
  }
}
// menuIcon.addEventListener("click", testbtn)
