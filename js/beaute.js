const links= document.querySelectorAll("nav li")
console.log("links)")

burger.addEventListener("click", function() => {
    nav.mainMenu.toggle("active");
});

links.forEach((link)=>{
    link.addEventListener("click", ( =>{
        nav.classlist.remove("active")
    }))
})