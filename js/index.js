/*

Створіть програму секундомір.

* Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
* При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий 
* Виведення лічильників у форматі ЧЧ:ММ:СС
* Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції
*/

let counter = 0, flag = false, timer,

get = id => document.getElementById(id),

getDigit = (a) => {
    let res;
    (a<10)
    ? res = '0'+ a
    : res = a;
    return res
},

count = () => {
    counter++;
        get("seconds").innerText = getDigit(counter%60);
        get("minutes").innerText = getDigit(Math.floor(counter/60)%60);
        get("hours").innerText = getDigit(Math.floor(counter/3600));
},

clearCounter = () => {
    counter=0;
    get("seconds").innerText = 
    get("minutes").innerText = 
    get("hours").innerText = '00';
},

setTimerColor = (color) => {
    get('timer').classList.remove('red');
    get('timer').classList.remove('black');
    get('timer').classList.remove('green');
    get('timer').classList.remove('silver');
    get('timer').classList.add(color);
};

window.onload= () => {

    get('stop').onclick = () => {
        if (flag){
            flag=false;
            setTimerColor('red');
            clearInterval(timer);
        }
    }

    get('start').onclick = () => {
        if (!flag){
            flag=true;
            setTimerColor('green');
            timer = setInterval(count, 1000/60);
        }
    }

    get('reset').onclick = () => {
        flag=false;
        setTimerColor('silver');
        clearInterval(timer);
        clearCounter();
    }
}
