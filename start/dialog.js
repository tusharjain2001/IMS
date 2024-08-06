function openform() {
  let a = document.getElementById("newform");
  a.style.display = "block";
}

function addData(event) {
    
  event.preventDefault();

  let table = document.getElementById("table1");
  
  let row = table.insertRow();

  let name = document.getElementById("name1").value;
  let quantity = document.getElementById("qty").value;
  let buy = document.getElementById("buy").value;
  let sell = document.getElementById("sell").value;

  row.insertCell(0).innerHTML = name;
  row.insertCell(1).innerHTML = quantity;
  row.insertCell(2).innerHTML = buy;
  row.insertCell(3).innerHTML = sell;

  document.getElementById("newform").reset();
}
