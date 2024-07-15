
//camelCase
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")//pass in argument(count-el)(arrow ke beech wale ko bolte hai)
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr // textContent because innerText ignores spaces because it is not human readable
    countEl.textCount = 0
    count = 0
}







