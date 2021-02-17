
let ul = document.createElement("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

document.body.append(ul);

let interval = setInterval(function () {
    fetch("https://ita-ajax-default-rtdb.firebaseio.com/list.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(list) {
            ul.innerHTML = "";

            for (let i in list) {
                let li = returnListItem(list[i]);
                if (li) {
                    ul.append(li);
                }
            }
        });
}, 2000);

button.addEventListener("click", function () {
    fetch("https://ita-ajax-default-rtdb.firebaseio.com/list.json", {
        method: "POST",
        body: JSON.stringify(input.value),
    })
    .then(function(response) {
        if (response.ok) {
            let li = returnListItem(input.value);
            if (li) {
                input.value = '';
                ul.append(li);
            }
        }
    });
});

function returnListItem(text = '') {
    if (!text.trim()) {
        return false;
    }

    let li = document.createElement("li");
    let button = document.createElement("button");
    let span = document.createElement("span");

    button.innerText = "-";
    span.innerText = text;

    button.addEventListener("click", function () {
        li.remove();
    });
    span.addEventListener("click", function () {
        span.classList.toggle('done');
    });

    li.append(span);
    li.append(button);
    
    return li;
}