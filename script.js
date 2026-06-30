const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('active'));}
document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>nav?.classList.remove('active')));

const animationLink=document.createElement('link');
animationLink.rel='stylesheet';
animationLink.href='animations.css';
document.head.appendChild(animationLink);

const animatedItems=document.querySelectorAll('.section,.trust span,.card,.why>div,.areas span,details,.contact-grid>div,.contact-grid iframe,footer');
animatedItems.forEach(item=>item.classList.add('reveal-ready'));

if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -45px 0px'});
  animatedItems.forEach(item=>revealObserver.observe(item));
}else{
  animatedItems.forEach(item=>item.classList.add('is-visible'));
}
