let run = true
function getName() {
    name = prompt("Как тебя зовут?")
    isNaN(name) ? alert(`Привет, ${name}! Приятно познакомиться!`) :
        confirm("Ты уверен, что твоё имя состоит из чисел?") ?
            alert(`Привет, ${name}! Приятно познакомиться!`) : getName()
}
while (run) {
    getName()
    run = confirm("Попробуем ещё раз?")
}

