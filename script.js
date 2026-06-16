const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

function onScroll(){
  if(window.scrollY > 18){ header.classList.add('scrolled'); }
  else { header.classList.remove('scrolled'); }
}
window.addEventListener('scroll', onScroll);
onScroll();

if(menuToggle){
  menuToggle.addEventListener('click', () => document.body.classList.toggle('menu-open'));
  navLinks.forEach(link => link.addEventListener('click', () => document.body.classList.remove('menu-open')));
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.16});
reveals.forEach(el => observer.observe(el));

const mailForms = document.querySelectorAll('[data-mail-form]');
mailForms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'Upit sa web stranice';
    const phone = data.get('phone') || '';
    const email = data.get('email') || '';
    const service = data.get('service') || '';
    const message = data.get('message') || '';
    const body = `Ime i prezime / tvrtka: ${name}\nTelefon: ${phone}\nE-mail: ${email}\nInteres: ${service}\n\nPoruka:\n${message}`;
    const subject = `Upit s web stranice - ${name}`;
    window.location.href = `mailto:hitpublishing12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
