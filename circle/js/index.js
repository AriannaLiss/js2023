/*
 Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
 При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло". 
 Дана кнопка повинна бути єдиним контентом у тілі HTML документа, решта контенту повинен бути створений і доданий на сторінку за допомогою Javascript
 При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола. 
 При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл (10*10) випадкового кольору. 
 При натисканні на конкретне коло - це коло повинне зникати, при цьому порожнє місце заповнюватися, тобто всі інші кола зрушуються вліво.
*/

window.onload = () => {
    document.querySelector('input').onclick = function () {
        const gap = 10;
        const diameter = parseInt(prompt("Which diameter of circle do you prefer?",50));
        let container = document.querySelector('.container');
        if (!container) {
            container = document.createElement("div")
            container.classList.add("container");
            document.body.append(container);
        } else {
            container.innerHTML='';
        };
        container.style.margin="30px auto";
        container.style.display="flex";
        container.style.gap=gap+'px';
        container.style.flexWrap="wrap";
        container.style.width = `${(diameter+gap)*10}px`;
        for(i=0;i<100;i++){
            const div = document.createElement("div");
            div.classList.add('circle');;
            div.style.height = diameter+'px';
            div.style.width = diameter+'px';
            div.style.borderRadius = diameter/2+'px';
            div.style.backgroundColor = `hsl(${Math.floor(Math.random()*360)} 50% 50%)`;
            div.onclick=function(){
                div.remove();
            }
            container.append(div);
        }
    }
}
