t1 = gsap.timeline();
t1.to(".image-container",{
    width: "100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger:2
    
})
setInterval(()=>{
    t1.to(".image-container",{
        width: "0%",
        ease: Expo.easeInOut,
        duration: 2,
        stagger:2
        
    })
    t1.to(".image-container",{
        width: "100%",
        ease: Expo.easeInOut,
        duration: 2,
        stagger:2
        
    })
    
},6000)
gsap.to(".anim-text",{
    ease: Expo.easeInOut,
    stagger:2,
    top:0,
    
})
