let cardTile = document.getElementById('tile');
let toggle = false;

cardTile.addEventListener('click', function(event){
    let ele = event.currentTarget;
    
    if(!toggle){
        ele.classList.add('tile-an');
        toggle = true;
    }else{
        ele.classList.remove('tile-an');
        toggle = false;
    }

    console.log("clicked");
});

cardTile.addEventListener('mouseleave', function(event){
    let ele = event.currentTarget;
    
    if(toggle){
        ele.classList.remove('tile-an');
        toggle = false;
    }
});