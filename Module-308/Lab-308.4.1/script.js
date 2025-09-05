// Feeling Loopy Exercise 
/*
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let cellIndex = 0; 

for (let i = 0; i < csv.length; i++) {
  const char = csv[i];

  if (char === ",") {
    cellIndex++;
  } 
  else if (char === "\n") {
    console.log(cell1, cell2, cell3, cell4);

    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    cellIndex = 0;
  } 
  else {
    if (cellIndex === 0) cell1 += char;
    else if (cellIndex === 1) cell2 += char;
    else if (cellIndex === 2) cell3 += char;
    else if (cellIndex === 3) cell4 += char;
  }
}

if (cell1 || cell2 || cell3 || cell4) {
  console.log(cell1, cell2, cell3, cell4);
}
*/
// Part 1 

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function parseCsv(csvText) {
  const rows = [];    
  let headers = null;    

  let currentCell = "";  
  let currentRow = [];   

  for (let i = 0; i < csvText.length; i++) {
    const ch = csvText[i];

    if (ch === ",") {
      currentRow.push(currentCell);
      currentCell = "";
    } else if (ch === "\n") {

      currentRow.push(currentCell);

      if (!headers) {
        headers = currentRow; 
      } else {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentRow[j];
        }
        rows.push(obj);
      }

      currentRow = [];
      currentCell = "";
    } else {
      currentCell += ch;
    }
  }

  if (currentCell || currentRow.length > 0) {
    currentRow.push(currentCell);
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentRow[j];
    }
    rows.push(obj);
  }

  return rows;
}

const data = parseCsv(csv);

for (const row of data) {
  console.log(row.ID, row.Name, row.Occupation, row.Age);
}