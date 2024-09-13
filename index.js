let count = 0;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById('save-el')

function increment() {
    count += 1;
    countEl.textContent = count;
}

function reset() {
    count = 0;
    countEl.textContent = 0;
}

function save() {
    let countEntries = count + " - "
    saveEl.textContent += countEntries;
    count = 0;
    countEl.textContent = 0;
}




