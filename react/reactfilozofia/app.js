//natív->hogyan? 
const btn = document.createElement('button');

btn.onclick = function()
{
    alert ("Ez egy natív kód");
}

btn.innerHTML = "Natív gomb";

document.getElementById("nativ-button-container").appendChild(btn);

