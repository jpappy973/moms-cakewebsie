const toggle = document.getElementsByClassName("toggle-btn")[0]
const navL = document.getElementsByClassName("nav-links")[0]
const myslid = document.querySelectorAll(".myslider")

let count = 0;
slidefun(count);

let timer = setInterval(autoslide,8000)

function autoslide(){
    count +=1
    slidefun(count)
}

function plusSlide(n){
    count +=n 
    slidefun(count)
    resetS()
}

function currentslide(n){
    count =n
    slidefun(count)
    resetS()
}

function resetS(){
    clearInterval(timer)
    timer= setInterval(autoslide, 8000)
}

function slidefun(n){
   for(let i =0; i<myslid.length;i++){
       myslid[i].style.display = "none"

   }
   if(n > myslid.length){
    count =1 ;
   }

   if(n < 1){
       count = myslid.length
   }
   myslid[count -1].style.display = "block"

}


toggle.addEventListener('click', () => {
    navL.classList.toggle('active')
})

