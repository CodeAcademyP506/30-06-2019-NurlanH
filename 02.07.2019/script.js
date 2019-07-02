var readData = localStorage.getItem("student")
var studentData;
var stData = [];

if(readData){
    $("table tbody").append(readData);
    
}

$("#registerList").click(function(){
    var _name = $("input[name='name']").val();
    var _lName = $("input[name='lastName']").val();
    var _eMail = $("input[name='email']").val();
    var _city = $("#city option:selected").text();
    var newStudent = "<tr><td>"+_name+ "</td><td>"+_lName+
     "</td><td>"+_eMail+ "</td>><td>"+_city+ 
     "</td>><td><button class='delete'>Sil</button></td></tr>"

    if($("input").val() !="" && $("input").val() != " "){
        $("table tbody").append(newStudent);
        stData.push(newStudent)
        studentData = localStorage.setItem("student",stData);
    }
})


$("#saveList").click(function(){

})


$("table tbody").on("click","button",function(){
    $(this).parent().parent().remove();
})
