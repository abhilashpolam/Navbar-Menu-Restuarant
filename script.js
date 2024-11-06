let foods1=document.getElementById('food1');
let foods2=document.getElementById('food2');
let foods=document.getElementById('food');

foods1.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food1.png')";
})
foods2.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food.jpg')";
})