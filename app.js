
// Option 1:
(function () {
    [...document.querySelectorAll(".controll")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// Option 2:
// const controllBtn = document.querySelectorAll('.controll')
// const controllBtns = document.querySelectorAll('.controlls')

// function pageTransition(){
//     for (let i = 0; 1 < controllBtn.length; i++){
//         controllBtn[i].addEventListener('click', function(){
//             let clickedbtn = document.querySelectorAll('.active-btn');
//             clickedbtn[0].className = clickedbtn[0].className.replace('active-btn', '');
//             this.className += 'active-btn';
//         })
//     }
// }
// pageTransition();