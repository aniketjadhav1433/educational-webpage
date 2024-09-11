let add = document.querySelectorAll(".add")
let answers = document.querySelectorAll(".answer")
let questions = document.querySelectorAll(".faq-box")
let menu = document.querySelector(".menu")
let options = document.querySelector(".options2")
let form  = document.querySelector("form")



questions.forEach((que)=>{

    que.addEventListener("click",()=>{
        que.classList.toggle("show")

        let addIcon = que.querySelector("#add")

        if (addIcon.textContent == "add") {
            addIcon.textContent = "remove"
        }else{
            addIcon.textContent  = "add"
        }
    })


})


menu.addEventListener("click",()=>{
    
    if (menu.className == 'fa-solid fa-bars menu') {
        options.style.display = "flex"
        menu.className = "fa-solid fa-x menu"
        
    }else{
        menu.className =  'fa-solid fa-bars menu'
        options.style.display = "none"
    }
})

