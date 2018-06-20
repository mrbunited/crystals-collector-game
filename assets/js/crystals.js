// assign all vars first
// vars for counters

$(document).ready(function(){

    var calculatedNumber = 0;
    var randomNumber;
    var wins = 0;
    var losses = 0;
    var crystals;
    
    
    // assign each crystal
    
    function crystalGenerator(){
        return {
            
            blue: {
                points: Math.floor(Math.random() * 14 ) + 1,
                img: "assets/img/blue-crystal.jpg"            
            }, 
            red: {
                points: Math.floor(Math.random() * 14 ) + 1,
                img: "assets/img/red-crystal.jpg"
            },
            white: {
                points: Math.floor(Math.random() * 14 ) + 1,
                img: "assets/img/white-crystal.jpg"            
            },
            yellow: {
                points: Math.floor(Math.random() * 14 ) + 1,
                img: "assets/img/yellow-crystal.jpg"            
            }
           
        }
    }

// start/restart function

    function start(){
        calculatedNumber = 0;
        crystals = crystalGenerator();
        randomNumber = Math.floor(Math.random() * 80) + 20;
        $("#randomNumber").text("Get this number by clicking on crystals!:" + randomNumber);
        renderCalculatedNumber();
    
    }
    
    // rendering the crystals on the page
    function display(){
        for (var key in crystals){
            var crystalSpan = $("<span class='crystalButton' data-name='"+ key +"'>");
            var crystalImage = $("<img alt='image' class='crystalImage'>").attr("src", crystals[key].img);
            crystalSpan.append(crystalImage);
            $("#crystals").append(crystalSpan);
        }
    }
    
    // rendering the number on page
    function renderCalculatedNumber(){
        var calculatedNumberDiv = $("<div id='calculatedNumber'>").text("This is your number: " + calculatedNumber);
        $("#calculatedNumber").html(calculatedNumberDiv);
    }

    // make the numbers add up
    
    function updateCalculatedNumber(crystal){
calculatedNumber += crystals[crystal.attr("data-name")].points;
    }
    start();
    display();
    renderCalculatedNumber();

    $(".crystalButton").on("click", function(event){
updateCalculatedNumber($(this));
renderCalculatedNumber();


    // conditionals for counters


if (randomNumber === calculatedNumber){
     wins++;
$("#wins").text("These are your wins:" + wins);
     start ();
    }
    else if (randomNumber < calculatedNumber) {
     losses++;
     $("#losses").text("These are your losses: " + losses);
    start ();
    }
    })
    });

    
    


  
    
    
    

    