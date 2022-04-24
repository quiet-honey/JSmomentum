function handleLogout() {
  if (
    confirm(
      "If you logout, your to-do list will be deleted.\nDo you really want to logout?"
    )
  ) {
    window.localStorage.clear();
    location.replace(location.href);
  }
}

logoutbtn.addEventListener("click", handleLogout);
