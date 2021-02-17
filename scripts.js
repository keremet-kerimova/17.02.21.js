let table = document.createElement("table");
let th = document.createElement("th");
let td = document.createElement("td");



fetch("./data.json").then(function(response) {
    response.json().then(function(json) {
        for (let i in json.todo) {
            let li = returnListItem(json.todo[i]);
            if (li) {
                ul.append(li);
            }
        }
    })
})

// button.addEventListener("click", function () {
//     let li = returnListItem(input.value);
//     if (li) {
//         input.value = '';
//         ul.append(li);
//     }
// });

// function returnListItem(text = '') {
//     if (!text.trim()) {
//         return false;
//     }

//     let li = document.createElement("li");
//     let button = document.createElement("button");
//     let span = document.createElement("span");

//     button.innerText = "-";
//     span.innerText = text;

//     button.addEventListener("click", function () {
//         li.remove();
//     });
//     span.addEventListener("click", function () {
//         span.classList.toggle('done');
//     });

//     li.append(span);
//     li.append(button);
    
//     return li;
// }