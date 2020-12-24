 function getMarks(){
    var maths = Number(document.getElementById("maths").value);
    var english = Number(document.getElementById("english").value);
    var physics = Number(document.getElementById("physics").value);
    var computer = Number(document.getElementById("computer").value);
    var grade = "";
    var totalMarks=400;
    var marksObtained= maths+english+physics+computer;
    var percentageObtained= (marksObtained/totalMarks)*100;
    var pass="";


    document.getElementById("percentage").innerHTML = percentageObtained+"%";

    
    if(percentageObtained>90){
        grade="A";
    }
    else if(percentageObtained>80 && percentageObtained<=90){
        grade="B";
    }
    else if(percentageObtained>70 && percentageObtained<=80){
        grade="C";
    }
    else {
        grade="D";
    }
    document.getElementById("grade").innerHTML = grade;

    // if(percentageObtained < 30){
    //     pass="Sorry! You have failed!";

    // }else{
    //    pass="Congratulations! You have passed!";
    // }
    // document.getElementById("text").innerHTML= pass;


 
}
