const storedData = localStorage.getItem("inventoryMap");
let inventoryMap = new Map();
if (storedData) {
  const parsedArray = JSON.parse(storedData);

  inventoryMap = new Map(parsedArray);
}
updateTable();

function toggleForm() {
  let a = document.getElementById("newform");
  if (a.style.display !== "none") {
    a.style.display = "none";
  } else {
    a.style.display = "flex";
  }
}

function addData(event) {
  event.preventDefault();

  let name = document.getElementById("name1").value;
  let buy = document.getElementById("buy").value;
  let sell = document.getElementById("sell").value;

  buy = parseInt(buy);
  sell = parseInt(sell);

  if (inventoryMap.has(name) === false) {
    inventoryMap.set(name, [0, 0]);
  }
  let arr = inventoryMap.get(name);

  arr[0] += buy;
  arr[1] += sell;

  inventoryMap.set(name, arr);

  const data = JSON.stringify([...inventoryMap]);
  localStorage.setItem("inventoryMap", data);

  document.getElementById("newform").reset();
  updateTable();
}
function updateTable() {
  let table = document.getElementById("table-body");
  // Clear the table except the header row
  table.innerHTML = "";

  // Traverse the map and add rows to the table
  for (let [name, arr] of inventoryMap) {
    let row = table.insertRow();
    row.classList.add("newrow");

    row.insertCell(0).innerHTML = name.toUpperCase();
    row.insertCell(1).innerHTML = arr[0];
    row.insertCell(2).innerHTML = arr[1];
    row.insertCell(3).innerHTML = arr[0] - arr[1];
  }
}
//updatetablefucntion 2 times
//line 41 data is not initialized

const searchfun = () => {
  let filter = document.getElementById("myinput").value.toUpperCase();

  let mytable = document.getElementById("table1");

  let tr = mytable.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      let txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
