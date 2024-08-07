function openform() {
  let a = document.getElementById("newform");
  a.style.display = "block";
}

const map1 = new Map();

let array = [0, 0];

function addData(event) {
  event.preventDefault();

  let name = document.getElementById("name1").value;
  // let quantity = document.getElementById("qty").value;
  let buy = document.getElementById("buy").value;
  let sell = document.getElementById("sell").value;

  buy = parseInt(buy);
  sell = parseInt(sell);

  if (map1.has(name) === false) {
    map1.set(name, [0, 0]);
  }
  let arr = map1.get(name);

  arr[0] += buy;
  arr[1] += sell;

  map1.set(name, arr);

  // let table = document.getElementById("table1");

  // let row = table.insertRow();
  // row.insertCell(0).innerHTML = name;
  // row.insertCell(1).innerHTML = 0;
  // row.insertCell(2).innerHTML = buy;
  // row.insertCell(3).innerHTML = sell;

  document.getElementById("newform").reset();

  updateTable();
}
function updateTable() {
  let table = document.getElementById("table1");
  // Clear the table except the header row
  table.innerHTML = `
      <thead>
        <tr>
          <th >Item Name</th>
          <th>Buy</th>
          <th>sell</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody></tbody>
  `;

  // Traverse the map and add rows to the table
  for (let [name, arr] of map1) {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = arr[0];
    row.insertCell(2).innerHTML = arr[1];
    row.insertCell(3).innerHTML = arr[0] - arr[1];
  }
}
