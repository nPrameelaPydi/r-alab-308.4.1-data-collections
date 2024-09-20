console.log(`Data Collections`);

//***********Part 1 & 2*************** */

//console.log(`*****part 1 & 2************`)
let csv = "ID,Name,Occupation,Age,city\n42,Bruce,Knight,41,bnnb\n57,Bob,Fry Cook,19,lk\n63,Blaine,Quiz Master,58,jk\n98,Bill,Doctor’s Assistant,26,nm\n";
let temp = '';
let row = [];
let main = [];
for (const c of csv) {
    if (c != ',' && c != '\n') {
        temp = temp + c;
    } else if (c == ',') {
        row.push(temp);
        temp = ""
    } else if (c == '\n') {
        row.push(temp);
        //Array.from(originalArray)- original array will not be affected
        main.push(Array.from(row));
        temp = '';
        row = [];
    }
}
//console.log(main);

//*******Part 3**********/
console.log(`********Part 3***********`)
let heading = main[0];
let objArr = [];
for (let i = 1; i < main.length; i++) {
    let val = main[i];
    let obj = {};
    for (let j = 0; j < val.length; j++) {
        obj[heading[j].toLowerCase()] = val[j];
    }
    objArr.push(obj);
}
console.log(objArr);









































