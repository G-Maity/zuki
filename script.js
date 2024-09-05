gsap.from("h2",{
    y:-30,
    opacity:0,
    delay:1,
    duration:0.8,
})
// var tl = gsap.timeline()
// tl.from("h4",{
//     y:-30,

// })
gsap.from("h4",{
    y:-30,
    opacity:0,
    delay:1,
    duration:0.8,
    stagger:0.2,
})
gsap.from("h1",{
    x:0,
    y:0,
    opacity:0,
    delay:1,
    duration:2.5,
    rotate:360,
    scale:0.05,
    // repeat:-1,
    // yoyo:true,
})