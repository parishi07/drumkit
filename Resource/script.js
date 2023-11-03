function tom1(sound,item){
    var audio = new Audio("resource/sounds/"+sound+".mp3");
    audio.play();
    toggle_html(item);
};
function togg(){
    document.querySelector('.item2').classList.remove('hover');
    document.querySelector('.item3').classList.remove('hover');
    document.querySelector('.item4').classList.remove('hover');
    document.querySelector('.item5').classList.remove('hover');
    document.querySelector('.item6').classList.remove('hover');
    document.querySelector('.item7').classList.remove('hover');
};

function toggle_html(item){
    togg();
    document.querySelector('.'+item).classList.toggle('hover');
}

document.addEventListener("keydown",(a)=>{
    a=a.key.toUpperCase();
    if (a == 'Z'){
        tom1('tom-1','item2');

    }
    if (a == 'X'){
        tom1('tom-2','item3');

    }
    if (a == 'C'){
        tom1('tom-3','item4');
       
    }
    if (a == 'V'){
        tom1('tom-4','item5');

    }
    if (a == 'B'){
        tom1('snare','item6');
  
    }
    if (a == 'N'){
        tom1('crash','item7');

    }else{
        
    }
});

