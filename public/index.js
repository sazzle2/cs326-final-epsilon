'use strict';

/**
 * send search info to server
 */
async function search(){
    let g = JSON.stringify({keyword: document.getElementById("mySearch").value, halal: document.getElementById("halal").checked, vegetarian: document.getElementById("vegetarian").checked, wholeGrain: document.getElementById("wholeGrain").checked});
    let response = await fetch('/search',{
        method: 'POST',
        body: g,
        headers: { 'Content-Type': 'application/json'}
    })
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        document.getElementById("berkshire").innerHTML = '';
        document.getElementById("hampshire").innerHTML = '';
        document.getElementById("franklin").innerHTML = '';
        document.getElementById("worcester").innerHTML = '';
        for (let i = 0; i < data.length; i++){
            if(data[i]['hall'] === "Berkshire"){
                let newDiv = document.createElement('div');
                newDiv.classList.add("item");
                newDiv.innerHTML = `item: ${JSON.stringify(data[i]['name'])} date: ${JSON.stringify(data[i]['date'])} meal: ${JSON.stringify(data[i]['meal'])}`;
                document.getElementById("berkshire").appendChild(newDiv);

            }
            if(data[i]['hall'] === "Hampshire"){
                let newDiv = document.createElement('div');
                newDiv.classList.add("item");
                newDiv.innerHTML = `item: ${JSON.stringify(data[i]['name'])} date: ${JSON.stringify(data[i]['date'])} meal: ${JSON.stringify(data[i]['meal'])}`;
                document.getElementById("hampshire").appendChild(newDiv);
            }
            if(data[i]['hall'] === "Franklin"){
                let newDiv = document.createElement('div');
                newDiv.classList.add("item");
                newDiv.innerHTML = `item: ${JSON.stringify(data[i]['name'])} date: ${JSON.stringify(data[i]['date'])} meal: ${JSON.stringify(data[i]['meal'])}`;
                document.getElementById("franklin").appendChild(newDiv);
            }
            if(data[i]['hall'] === "Worcester"){
                let newDiv = document.createElement('div');
                newDiv.classList.add("item");
                newDiv.innerHTML = `item: ${JSON.stringify(data[i]['name'])} date: ${JSON.stringify(data[i]['date'])} meal: ${JSON.stringify(data[i]['meal'])}`;
                document.getElementById("worcester").appendChild(newDiv);
            }
        }
    } 
    else {
        alert("An error has occured.");
    }
    
}


window.onload = initialize;
function initialize(){
    document.getElementById("search").addEventListener("click", search)
}
