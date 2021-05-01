var n=document.querySelectorAll(".drum").length;
for(var d=0;d<n;d++)
{
    document.querySelectorAll(".drum")[d].addEventListener("click", function(){
        
        var f=this.innerHTML;
        makesound(f);
    });
}
    document.addEventListener("keypress",function(event)
    {
        makesound(event.key);
    });
        function makesound(key)
        {
            switch(key)
            {
                case "w":
                    var audio1= new Audio("sounds/crash.mp3");
                    audio1.play();
                break;
                case "a":
                    var audio1= new Audio("sounds/kick-bass.mp3");
                    audio1.play();
                break;
                case "s":
                    var audio1= new Audio("sounds/snare.mp3");
                    audio1.play();
                break;
                case "d":
                    var audio1= new Audio("sounds/tom-1.mp3");
                    audio1.play();
                break;
                case "j":
                    var audio1= new Audio("sounds/tom-2.mp3");
                    audio1.play();
                break;
                case "k":
                    var audio1= new Audio("sounds/tom-3.mp3");
                    audio1.play();
                break;
                case "l":
                    var audio1= new Audio("sounds/tom-4.mp3");
                    audio1.play();
                break;
                default:console.log("Sorry Wrong value entered");
            }
        

        }
    

