let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
function save() {
    if (saveEl.textContent.trim() === "") {
        saveEl.textContent = count;
    } else {
        saveEl.textContent += " - " + count;
    }
    countEl.textContent = 0;
    count = 0;
}


let errorParagraph = document.getElementById("total")
console.log(errorParagraph)

function total() {
    let total = 0;
    let savedCounts = saveEl.textContent.split(" - ");
    
    for (let i = 0; i < savedCounts.length; i++) {
        let count = parseInt(savedCounts[i]);
        if (!isNaN(count)) {
            total += count;
        }
    }

    errorParagraph.textContent = "Total: " + total;
    return total; // Returning total in case you want to use it elsewhere
}



function reset() {
    count = 0
    countEl.textContent = count
    saveEl.textContent = " "
    errorParagraph.textContent = "Total: 0"
    console.log("reset")
}
