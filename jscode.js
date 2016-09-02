$(document).ready(function() {

    var x = document.getElementById("doo");
    var y = document.getElementById("pickdate");

    function myFunction() {
      
        var node = document.createElement("li"),
            textnode = document.createTextNode(x.value + " on " + y.value+" "),
            buttonNode = document.createElement("input");
        node.appendChild(textnode);
        buttonNode.type = "button";
        buttonNode.className = "removeBtn";
        buttonNode.value = "Remove";
        node.appendChild(buttonNode);
        document.getElementById("list").appendChild(node);
        $("input.removeBtn").click(function() {
            $(this).parent().remove();
        });
    }


    // function kk(){
    //     if (x.value != "" && y.value !== "") {
    //         myFunction();
    //     }

    // }

    document.getElementById("bb").addEventListener("click", function() {
        if (x.value != "" && y.value !== "") {
            myFunction();
        } else  if (x.value==""){
            alert("Todo are missing !!");
        } else if (y.value==""){
            alert("Due Date are missing !!")
        }
    });

    /*
    x.addEventListener("keydown", function(event){
    	console.log(event);
    	if (event.keyCode == 13 && x.value != "") {
    		myFunction();
    	}
    */

    var d = new Date();
    document.getElementById("de").innerHTML = d.toDateString();

    $("#pickdate").datepicker();

});