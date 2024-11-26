function navDisplay(){
    const dropdown = document.getElementsByClassName("dropdown");
    for(i in dropdown){
        console.log(dropdown[i].children)
    
        var hidden = document.getElementsByClassName("hidden");
    
        function onMouseOver(i){
            dropdown[i].addEventListener('mouseover', function(){
                hidden[i].style = "display: block";
            }, true);
        }
        function onMouseOut(i){
            dropdown[i].addEventListener('mouseout', function(){
                hidden[i].style = "display: none";
            }, true);
        }
    onMouseOver(i);
    onMouseOut(i);
    };
};
navDisplay();