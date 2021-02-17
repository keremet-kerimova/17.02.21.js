
let table = document.createElement('table');
let tr = document.createElement('tr');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');

th1.innerText = "Place";
th2.innerText = "Name";
th3.innerText = "Wealth";

table.append(tr);
tr.append(th1);
tr.append(th2);
tr.append(th3);
document.body.append(table);

fetch('./task.json')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        for (const key in json) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            
            td1.innerText = json[key].id;
            td2.innerText = json[key].name;
            td3.innerText = json[key].wealth;
        
            table.append(tr);
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
        }
    });