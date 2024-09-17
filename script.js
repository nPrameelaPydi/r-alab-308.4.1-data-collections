//console.log(`Data Collections`);

//let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n";

//let cell = 1;
//let cell1 = '';
//let cell2 = '';
//let cell3 = '';
//let cell4 = '';
//let temp = '';

//for (const c of csv) {
//    if (c == '\n') {
//        cell4 = temp;
//        cell = 1;
//        console.log(`${cell1}, ${cell2}, ${cell3}, ${cell4}`);
//        temp = '';
//    } else if (c == ',') {
//        if (cell == 1) {
//            cell1 = temp;
//        } else if (cell == 2) {
//            cell2 = temp;
//        } else if (cell == 3) {
//            cell3 = temp;
//        }
//        cell = cell + 1;
//        temp = '';
//    } else {
//        temp = temp + c;
//    }

//}


console.log(`Data Collections`);

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

console.log(main);















//if (c == '\n') {
//    cell4 = temp;
//    subArr[3] = cell4;
//    //console.log(subArr);
//    mainArr.push(Array.from(subArr));

//    cell = 1;
//    console.log(`${cell1}, ${cell2}, ${cell3}, ${cell4}`);


//    temp = '';
//} else if (c == ',') {
//    if (cell == 1) {
//        cell1 = temp;
//        subArr[0] = (cell1);

//    } else if (cell == 2) {
//        cell2 = temp;
//        subArr[1] = cell2;

//    } else if (cell == 3) {
//        cell3 = temp;
//        subArr[2] = cell3;
//    }
//    cell = cell + 1;
//    temp = '';
//} else {
//    temp = temp + c;
//}





























