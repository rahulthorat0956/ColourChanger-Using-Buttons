const buttons =document.querySelectorAll('button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        if(event.target.id === 'btn1'){
            body.style.backgroundColor="orange";
        }
        if(event.target.id === 'btn2'){
            body.style.backgroundColor="yellow";
        }
        if(event.target.id === 'btn3'){
            body.style.backgroundColor="white";
        }
        
    })
})