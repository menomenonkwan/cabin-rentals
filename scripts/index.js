const get = element => document.getElementById(element);

const open = get('menu-btn');
const nav = get('nav');
const exit = get('exit-btn');

const toggleNav = () => {
  nav.classList.toggle('open-nav');
}

open.addEventListener('click', toggleNav);
exit.addEventListener('click', toggleNav);