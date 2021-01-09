const misha = document.getElementById("misha");
const vodka = document.getElementById("vodka");

document.addEventListener("keydown", function(event) {
    jump();
})

function jump () {
    if (misha.classList != "jump") {
        misha.classList.add("jump")
    }
    setTimeout( function() {
        misha.classList.remove("jump")
    }, 300)
}

 let isAlive = setInterval ( function() {
     let mishaTop = parseInt(window.getComputedStyle(misha).getPropertyValue("top"));
     let vodkaLeft = parseInt(window.getComputedStyle(vodka).getPropertyValue("left"));

     if (vodkaLeft <50 && vodkaLeft > 0 && mishaTop >= 140) {
         alert("ПОТРАЧЕНО")
     }
 }, 10 )