var likes = document.getElementsByClassName('like')
for(let i=0; i<likes.length;i++){
let like=likes[i]
like.addEventListener('click',function(){
    if(like.style.color=='red'){
        like.style.color='black';
    }else{
        like.style.color='red';
    }
})
// plus button
}
let plus = document.getElementsByClassName('plus-btn')
var qtr = document.getElementsByClassName('Quant')
for(let i =0 ; i<plus.length;i++){
plus[i].addEventListener('click',function(){
qtr[i].value++
console.log(qtr[i].value);
totale();
})
}
//min button
let min = document.getElementsByClassName('minus-btn')
var qtr = document.getElementsByClassName('Quant')

for(let i =0 ; i<plus.length;i++){
min[i].addEventListener('click',function(){
if (qtr[i].value !=0){
    qtr[i].value--
}
totale();
});
}


//delete function
let del = document.querySelectorAll('.delete')

for(let i = 0; i < del.length ; i++){
    del[i].addEventListener('click',function(){
    del[i].parentElement.remove();
totale();    
});
    
}

// Total function
function totale(){
var qtr = document.getElementsByClassName('Quant');
var prix = document.getElementsByClassName('price');
var totale = document.getElementById("finalPrice")
var sum = 0;

for (let i = 0; i < prix.length; i++) {

        sum= sum + qtr[i].value * prix[i].innerText;
        
    }
    totale.value=sum;
}
totale();