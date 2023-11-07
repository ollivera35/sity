function insert_img(){
// Создаем элемент изображения
const img = document.createElement('img');

// Устанавливаем путь к изображению
img.src = 'image.jpg';

// Устанавливаем альтернативный текст для изображения
img.alt = 'Описание изображения';
img.height = '150';
img.width='150';

// Получаем контейнер, куда нужно вставить изображение
//const container = document.querySelector('#image-container');
const container = document.getElementById("image-container");
// Вставляем изображение в контейнер
container.append(img);

//document.getElementsByTagName("div")[0].appendChild(img); // вставили в div 1(внизу)
}
const node_insert_img = document.getElementById("insert_img")
node_insert_img.addEventListener("click",insert_img)