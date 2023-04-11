// Qno 1

// function outer(numOuter){
//  return function(numInner){
// console.log(numOuter+numInner);
     
// }
// }
// let store = outer(5);
//  store(4);




// Qno 2
// let arr1 = ["Ameen","Ishaq","Farhan","Sagheer","Hasnain"];
//  function  arrFindRecFun(num){
//  let store = arr1.includes("Ameen");
//      console.log(store);
//      let decre = num - 1 ;
//      if(decre>0){
//         arrFindRecFun();
//      }

//    }
//   arrFindRecFun(3);



// Qno:6

// let check = localStorage.getItem("students");
// let studentss = check ? JSON.parse(check)  : [];

// function localStor(name,obj){
//    obj = {
//       Name: name,
      
//    }  

//    studentss.push(obj);
//    console.log(studentss);
//    let store = JSON.stringify(studentss);
//    localStorage.setItem("studentss",store);
// }
// localStor("Ameen");


// Qno:7 will get Data of Question number 6 from localStorage 

// function getObj (getobjFromlocal) {
//    let store = localStorage.getItem(getobjFromlocal);

//   return store;

// }

// let printLocalStorageOb= getObj("studentss");
// console.log(printLocalStorageOb);




// Qno:8

// let studentsss = [];
// function TakeGetFunc(){
//     let TakeGetObj = {
//        name: prompt("enter your name"),
//        age:  +prompt("enter your age "),
//        add:  prompt("enter your address"),
//     }
//     studentsss.push(TakeGetObj);
//     let converTOString = JSON.stringify(studentsss);
//     localStorage.setItem("studentsss",converTOString);
//     let getObjectData = localStorage.getItem("studentsss");

//     return getObjectData;

// }

// let  printData = TakeGetFunc();

// console.log(printData);

