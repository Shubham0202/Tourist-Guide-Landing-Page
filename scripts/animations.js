tl=gsap.timeline();
tl.from('nav div,nav li',{
    y:-100,
    opacity:0,
    delay:.5,
    stagger:.2,
});

t2 = gsap.timeline();
t2.from('.heading-main',{
    y:-100,
    opacity:0,
    delay:.5,
    stagger:.4,
});
t2.from('.main-hero-title',{
    opacity:0,
    x:-100,
})
t2.from('.hero-img',{
    scale:0,
    opacity:0,

});

// section2

gsap.from('.top-destinations',{
    scale:0,
    opacity:0,
    delay:.5,
    x:500,
    stagger:.5,
    scrollTrigger:{
        // markers:true,
        trigger:".top-destinations",
        scroller:"body",
        // start: "top 100%"
    }

})
// section 1.2
gsap.from('.cards',{
    x:-400,
    opacity:0,
    delay:.5,
    stagger:.4,
    scrollTrigger:{
        // markers:true,
        trigger:".sub-section1-2",
        scroller:"body",
        start: "top 50%"
    }

});
// discover  next trip
gsap.from('.discover-titles',{
    x:-400,
    opacity:0,
    delay:.5,
    stagger:.4,
    scrollTrigger:{
        // markers:true,
        trigger:".discover-titles",
        scroller:"body",
        start: "top 50%"
    }

})
// destination ul list 
gsap.from('.cards-2',{
    y:400,
    opacity:0,
    delay:.5,
    stagger:.4,
    scrollTrigger:{
        // markers:true,
        trigger:".destinations-list",
        scroller:"body",
        start: "top 50%"
    }

})
