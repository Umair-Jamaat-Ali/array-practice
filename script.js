// array

let studentData = ["Saqib" , "Hassan", "Shahid", "Shakir", "Azan"];

studentData.push("Rahman"); /// push is used for add any things in array at the last
studentData.unshift("Umar"); /// unshift is used for add any value in array at the start 
studentData.pop(); /// pop is used for erased or delete the value from the last
studentData.shift();  /// shift is used for erased or delete the value from the start


console.log(studentData);


let students = [];

function addStudents(){
    students[students.length] = document.getElementById("studentsName").value;

    console.log(students);
};

function findStudents() {
    let searchStudent = document.getElementById("searchStudent").value;
    let result = "not found";

    for (index = 0 ; index < students.length ; index++){
        const student = students[index];
        if (student === searchStudent){
            result = `user found on index ${index}`
            break;
        }
    }

    document.getElementById("searchResult").innerHTML = result

};

function printStudents() {
    console.log('====================================');
    console.log(students);
    console.log('====================================');
};