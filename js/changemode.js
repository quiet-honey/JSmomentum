modebtn = document.querySelector("#mode");
namebtn = document.querySelector("#namebutton");

function handleModebtnClick() {
  if (document.body.classList.contains("normalmode")) {
    darkImage();
    document.body.classList.remove("normalmode");
    document.body.classList.add("darkmode");
    modebtn.classList.remove("btnNormal");
    modebtn.classList.remove("mdNormal");
    modebtn.classList.add("btnDark");
    modebtn.classList.add("mdDark");
    logoutbtn.classList.remove("btnNormal");
    logoutbtn.classList.add("btnDark");
    loginInput.classList.remove("normalmode");
    loginInput.classList.add("darkmode");
    namebtn.classList.remove("normalmode");
    namebtn.classList.add("darkmode");
    toDoInput.classList.remove("normalmode");
    toDoInput.classList.add("darkmode");
    weatherWindow.classList.remove("wsNormal");
    weatherWindow.classList.add("wsDark");
  } else {
    normalImage();
    document.body.classList.remove("darkmode");
    document.body.classList.add("normalmode");
    modebtn.classList.remove("btnDark");
    modebtn.classList.remove("mdDark");
    modebtn.classList.add("btnNormal");
    modebtn.classList.add("mdNormal");
    logoutbtn.classList.remove("btnDark");
    logoutbtn.classList.add("btnNormal");
    loginInput.classList.remove("darkmode");
    loginInput.classList.add("normalmode");
    namebtn.classList.remove("darkmode");
    namebtn.classList.add("normalmode");
    toDoInput.classList.remove("darkmode");
    toDoInput.classList.add("normalmode");
    weatherWindow.classList.remove("wsDark");
    weatherWindow.classList.add("wsNormal");
  }
}
modebtn.addEventListener("click", handleModebtnClick);
