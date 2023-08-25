gsap.to("nav",{
    backgroundColor:"#fff",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        start:"top -52%",
        end:"top -53%",
        scrub:1,
        // markers:true
    }
})
gsap.to("#btn",{    
    borderColor:"#1a8917",
    background:"#1a8917",
    scrollTrigger:{
        trigger:"#btn",
        scroller:"body",
        start:"top -51%",
        end:"top -52%",
        scrub:1,
    }
})