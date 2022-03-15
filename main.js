let form  = document.querySelector("#formOne");
let finput  = document.querySelector("#fname");
let fage  = document.querySelector("#fage");
let fcountry = document.querySelector("#fcountry");

let outputname  = document.querySelector("#firstName");
let outputage  = document.querySelector("#age"); 
let outputcountry = document.querySelector("#country"); 

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  let fnamevalue = finput.value;
  let fagevalue = fage.value;
  let fcountryvalue = fcountry.value;
  let idval = "1";

  let tr = document.createElement("tr");
  tr.innerHTML = `<th scope="row" id = "id">${fnamevalue}</th>
    <td id="firstName">${fagevalue}</td>
    <td id="age">${fcountryvalue}</td>
    <td id="country">${idval}</td>`;
    bodytable.appendChild(tr);

  finput.value = "";
  fage.value = "";
  fcountry.value = "";
})