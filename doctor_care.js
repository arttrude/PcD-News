window.addEventListener('scroll',onScroll)



function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(document.getElementById('home'))
    activateMenuAtCurrentSection(document.getElementById('services'))
    activateMenuAtCurrentSection(document.getElementById('about'))
    activateMenuAtCurrentSection(document.getElementById('contact'))
}

function   activateMenuAtCurrentSection(section){

    const targetLine = scrollY + innerHeight / 2


//verificar se a seção passou da linha

    const sectionTop=section.offsetTop
    
    const sectionHeight=section.offsetHeight
   
    //verificar se a sessao passou ou terminou
    const sectionTopReachOrPassedTargetLine= targetLine >= sectionTop

    const sectionEndsAt=sectionTop + sectionHeight

    const sectionEndPassedTargetLine= sectionEndsAt <=targetLine

    //limites da seçao
    const sectionBoundaries= sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId= section.getAttribute('id')
   
    const menuElement= document.querySelector(`.menu a[href*=${sectionId}]`)

    
    if (sectionBoundaries) {
        menuElement.classList.add('active')
        
    }

    else{
        menuElement.classList.remove('active')
    }

}



function showNavOnScroll(){
    if (scrollY >80) {

        document.getElementById('navigation').classList.add('scroll')
    
    }

    else {
        document.getElementById('navigation').classList.remove('scroll')
    }

}

function openMenu(){
    document.body.classList.add('expandedMenu')
}

function closeMenu(){
    document.body.classList.remove('expandedMenu')

}

function showBackToTopButtonOnScroll(){
    if(scrollY>500){
        backToTopButton.classList.add('show') 
       
    }

    else{
        backToTopButton.classList.remove('show')
    }

}

ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:700,
}).reveal('#home , #home img , #home .dados , #services , #services header , .card , #about , #about header , #about .content , #about img , #contact h2 , #contact img , footer , footer li')

onScroll()
