document.getElementById('algForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var S = Number(document.getElementById('S').value);
  var R = Number(document.getElementById('R').value);
  var K = Number(document.getElementById('K').value);

  if (a >= R * 2 + K) {
    alert("Можно разместить сцену и проход в квадратном зале.");
    return;
  } else {
  if (b >= R * 2 + K) {
    alert("Можно разместить сцену и проход в квадратном зале.");
    return;
  } else{
    alert("Невозможно разместить сцену и проход в квадратном зале.");
  }}

  this.reset();
});

var text = document.getElementById("ans").textContent;
document.getElementById("ans").textContent = "Это — просто текст";