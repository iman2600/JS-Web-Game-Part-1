function newImage(path, left, bottom) {
  let object = document.createElement("img");
  object.src = path;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}

function newItem(path, left, bottom) {
  let object = newImage(path, left, bottom);
  object.addEventListener("dblclick", function () {
    object.remove();
  });
}

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

newItem("assets/sword.png", 500, 405);
newItem("assets/sheild.png", 165, 185);
newItem("assets/staff.png", 600, 100);
