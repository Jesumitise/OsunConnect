const navSlide = ()=>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(`nav-links li`);
    //toggle nav

    burger.addEventListener('click',()=>{
        nav.classList.toggle("nav-active");
    });
    //animate links
    navLinks.forEach((link, index)=>{
        link.style.animation = `navLinkFade 0.5s ease fowards $(index /7 + 0.3)s`;

    });

}

navSlide();



// const imageSlide = document.querySelector(".image-slide");
// const imagesContainer= document.querySelectorAll(" .image-slide img");

// const prev = document.querySelector("#prev");
// const next = document.querySelector("#next");

// let counter = 1;
// const size = imagesContainer[0].clientWidth;

// imageSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';


// next.addEventListener('click',()=>{
//     imageSlide.style.transition = 'transform 0.4s ease-in-out';
//     counter++;
//     imageSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
// });
// prev.addEventListener('click',()=>{
//     imageSlide.style.transition = 'transform 0.4s ease-in-out';
//     counter--;
//     imageSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
// });

// imageSlide.addEventListener('transitionend', ()=>{
//     if (imagesContainer[counter].id === 'last'){
//         imageSlide.style.transition = 'none';
//         counter = imagesContainer.length -2 ;
//         imageSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
//     }
//     if (imagesContainer[counter].id === 'first'){
//         imageSlide.style.transition = 'none';
//         counter = imagesContainer.length - counter ;
//         imageSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
//     }
// });
