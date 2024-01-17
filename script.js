var ToDo = JSON.parse(localStorage.getItem("TODO")) || [];
const List = document.querySelector(".todo");
const List_Item = document.querySelector(".data");
const Add = document.querySelector("#button");
const Clear = document.querySelector(".clear");

Add.addEventListener("click", function () {
  AddItem(List_Item.value);
});
function AddItem(item) {
  if (item) {
    ToDo.push(item);
    makelist();
  }
  localStorage.setItem("TODO", JSON.stringify(ToDo));
}
function makelist() {
  var m = [];
  for (i = ToDo.length - 1; i >= 0; i--) {
    m[ToDo.length - i] =
      `<li class= item${i} ><input type="checkbox" class="box" ><span class="work">` +
      ToDo[i] +
      "</span></li>";
  }
  List.innerHTML = "<ul>" + m.join("") + "</ul>";
}
makelist();

Clear.addEventListener("click", function () {
  localStorage.clear();
  makelist();
});
