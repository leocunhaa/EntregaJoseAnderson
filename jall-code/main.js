function search() {
  let input = document.getElementById("search-bar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("courses-logo");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
      x[i].style.listStyleType = "none";
    }
  }
}
