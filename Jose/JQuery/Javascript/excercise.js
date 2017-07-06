/*$(document).ready(function(){
    
    $("#firstOne").click(function(){
        $(this).css("background-color", "red");
    })
    $("#secondOne").click(function(){
        $(this).css("background-color", "yellow");
    })
    $("#thirdOne").click(function(){
        $(this).css("background-color", "blue");
    })
    
    var button = $('<button id = "lastOne">Reset</button>');
    $("body").append(button);
    
    $("#lastOne").click(function(){
        $("button").css("background-color", "");
    })
});*/


$(document).ready(function(){
    $("button").click(function(){
    
        var color = $(this).text();
        switch(color){

            case "Red":
                $("button").css("background-color", "");
               $(this).css("background-color", "red");
                break;
            case "Yellow":
                $("button").css("background-color", "");
                $(this).css("background-color", "yellow");
                break;
            case "Blue":
                $("button").css("background-color", "");
                $(this).css("background-color", "blue");
                break;
         }
    });
    
    var button = $('<button id = "lastOne">Reset</button>');
    $("body").append(button);
    
    $("#lastOne").click(function(){
        $("button").css("background-color", "");
    });
  
});
    





