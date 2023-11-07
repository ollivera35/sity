const button = document.getElementById("for_click_change_language");

const button1 = document.getElementById("for_click_change_rus")

function find_edit_all(){

    document.getElementsByTagName('p1')[0].innerText='Kolchurina'
    document.getElementsByTagName('p2')[0].innerText='Olga'
    document.getElementsByTagName('p3')[0].innerHTML='Aleksandrovna'

}

function find_edit_rus(){

    document.getElementsByTagName('p1')[0].innerText='Кольчурина'
    document.getElementsByTagName('p2')[0].innerText='Ольга'
    document.getElementsByTagName('p3')[0].innerHTML='Александровна'

}

button.addEventListener("click",find_edit_all)

button1.addEventListener("click",find_edit_rus)




