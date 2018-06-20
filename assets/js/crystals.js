// assign all vars first
// vars for counters
$(document).ready(function(){
    var calculatedNumber = 0;
    var randomNumber;
    var wins = 0;
    var losses = 0;
    var crystals;
    
    
    // create function
    
    
    function crystalGenerator(){
        return {
            red: {
                points: Math.floor(Math.random() * 14 ) + 1,
                img: "http://via.placeholder.com/350x150"
            },
            yellow: {
                points: Math.floor(Math.random() * 14 ) + 1,
                img: "http://via.placeholder.com/350x150"            
            },
            blue: {
                points: Math.floor(Math.random() * 14 ) + 1,
                img: "http://via.placeholder.com/350x150"            
            },
            green: {
                points: Math.floor(Math.random() * 14 ) + 1,
                img: "http://via.placeholder.com/350x150"            
            }
        }
    }
    // function randomNumber(){
    //     return 
    // }
    function start(){
        calculatedNumber = 0;
        crystals = crystalGenerator();
        randomNumber = Math.floor(Math.random() * 100) + 20;
        $("#randomNumber").text(randomNumber);
        renderCalculatedNumber();
    
    }
    
    function display(){
        for (var key in crystals){
            var crystalSpan = $("<span class='crystalButton' data-name='"+ key +"'>");
            var crystalImage = $("<img alt='image' class='crystalImage'>").attr("src", crystals[key].img);
            crystalSpan.append(crystalImage);
            $("#crystals").append(crystalSpan);
        }
    }

    
    function renderCalculatedNumber(){
        var calculatedNumberDiv = $("<div id='calculatedNumber'>").text(calculatedNumber);
        $("#calculatedNumber").html(calculatedNumberDiv);
    }

    function updateCalculatedNumber(crystal){
calculatedNumber += crystals[crystal.attr("data-name")].points;
    }
    start();
    display();
    renderCalculatedNumber();

    $(".crystalButton").on("click", function(event){
updateCalculatedNumber($(this));
renderCalculatedNumber();

if (randomNumber === calculatedNumber){
     wins++;
$("#wins").text(wins);
     start ();
    }
    else if (randomNumber < calculatedNumber) {
     losses++;
     $("#losses").text(losses);
    start ();
    }
    })
    });
    // make the numbers add up
    
    
    
    // conditionals for counters

  
    
    
    

    