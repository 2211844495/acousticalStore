const bg = document.querySelector('.bg');
const header = document.querySelector('.header');
const tl = new TimelineMax();
tl.fromTo(bg,1, {height: "0%"}, {height: "45%", ease: Power2.easeInOut })
.fromTo(header,1.2, {opacity:0}, {opacity: 1, ease: Power2.easeInOut }, "-=1")
