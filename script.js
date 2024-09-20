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
console.log(`********Part 3***********`);
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

//*******Part 4**********/
console.log(`********Part 4***********`);
//sorting basing on id
objArr.sort((a, b) => parseInt(a.id) - parseInt(b.id));
console.log(objArr);
//Remove the last element from the sorted array.
objArr.pop();
console.log(Array.from(objArr));
//Insert the following object at index 1:
//{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
let obj2 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
//splice(index, deleteCount, item1, item2, ...)
objArr.splice(1, 0, obj2);
console.log(Array.from(objArr));
//Add the following object to the end of the array:
//{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
objArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(Array.from(objArr));
//Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
let avgAge;
let sum = 0;
for (let i = 0; i < objArr.length; i++) {
    sum = sum + parseInt(objArr[i]['age']);
}
avgAge = sum / objArr.length;
console.log(avgAge);

//*******Part 5**********/
console.log(`********Part 5***********`);
//As a final task, transform the final set of data back into CSV format.
let str = '';
str = str + (Object.keys(objArr[0])).join(',') + '\\n';
//console.log(str);
for (let i = 0; i < objArr.length; i++) {
    str = str + (Object.values(objArr[i])).join(',') + '\\n';
}
console.log(str);






















































