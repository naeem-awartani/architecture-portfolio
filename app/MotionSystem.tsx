'use client';

import {useEffect} from 'react';

export default function MotionSystem(){
  useEffect(()=>{
    const root=document.documentElement;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile=window.matchMedia('(max-width: 760px), (pointer: coarse)').matches;
    if(reduced){root.classList.add('reduced-motion');return}

    const sections=[...document.querySelectorAll<HTMLElement>('main > section, main > footer, .next-project')];
    const reveal=(section:HTMLElement)=>{
      section.classList.add('is-revealed');
      section.classList.remove('reveal-pending');
    };

    root.classList.add('motion-ready');
    sections.forEach(section=>{
      section.classList.add('reveal-target');
      const items=section.querySelectorAll<HTMLElement>('h2, blockquote, .section-label, .identity-kicker, .case-facts, figure, .process-steps article, .skill-columns li, .available, .email, .footer-row');
      items.forEach((item,index)=>{
        item.classList.add('reveal-item');
        item.style.setProperty('--reveal-index',String(Math.min(index,10)));
      });
    });

    if(!('IntersectionObserver' in window)){
      sections.forEach(reveal);
      return()=>root.classList.remove('motion-ready');
    }

    sections.forEach(section=>{
      const box=section.getBoundingClientRect();
      if(box.top<window.innerHeight*.94&&box.bottom>0) reveal(section);
      else section.classList.add('reveal-pending');
    });

    const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){reveal(entry.target as HTMLElement);revealObserver.unobserve(entry.target)}
    }),{threshold:.01,rootMargin:'0px 0px -4%'});
    sections.filter(section=>!section.classList.contains('is-revealed')).forEach(section=>revealObserver.observe(section));

    const revealFallback=window.setTimeout(()=>sections.forEach(reveal),2400);

    const navLinks=[...document.querySelectorAll<HTMLAnchorElement>('.nav nav a[href^="#"]')];
    const navSections=navLinks.map(link=>document.querySelector<HTMLElement>(link.getAttribute('href')||'')).filter(Boolean) as HTMLElement[];
    const activeObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle('is-active',link.hash==='#'+entry.target.id))}
    }),{rootMargin:'-30% 0px -60%',threshold:0});
    navSections.forEach(section=>activeObserver.observe(section));

    let frame=0;
    const parallaxImages=mobile?[]:[...document.querySelectorAll<HTMLElement>('.hero-photo, .case-hero img, .featured-project .project img, .thesis-image-section img, .render-gallery img')];
    const updateParallax=()=>{
      frame=0;
      const viewport=window.innerHeight;
      parallaxImages.forEach(image=>{
        const box=image.getBoundingClientRect();
        if(box.bottom>0&&box.top<viewport){
          const progress=(box.top+box.height/2-viewport/2)/viewport;
          image.style.setProperty('--parallax-y',`${Math.max(-14,Math.min(14,-progress*18)).toFixed(2)}px`);
        }
      });
    };
    const onScroll=()=>{if(!frame)frame=requestAnimationFrame(updateParallax)};
    if(parallaxImages.length){window.addEventListener('scroll',onScroll,{passive:true});updateParallax()}

    return()=>{window.clearTimeout(revealFallback);revealObserver.disconnect();activeObserver.disconnect();window.removeEventListener('scroll',onScroll);if(frame)cancelAnimationFrame(frame);root.classList.remove('motion-ready')};
  },[]);
  return null;
}
