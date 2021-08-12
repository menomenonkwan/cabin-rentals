const get = element => document.getElementById(element);

const open = get('menu-btn');
const nav = get('nav');
const exit = get('exit-btn');

const toggleNav = () => {
  nav.classList.toggle('open-nav');
}

open.addEventListener('click', toggleNav);
exit.addEventListener('click', toggleNav);


const tl = gsap.timeline({defaults: {duration: 1}});

tl.from(".main-copy", {y: 50, opacity: 0})
  .to("h1 span", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=.7")
  .from("ul.featured-cabins li", {y: 50, opacity: 0, stagger: .3}, "-=.7")