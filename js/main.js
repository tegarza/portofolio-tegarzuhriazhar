(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
/* tema */
var root=document.documentElement;
$('#tg').onclick=function(){var dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;root.dataset.theme=dark?'light':'dark'};
/* logo skill */
var G={
tek:[['Troubleshooting','wr','#ff5d73'],['Maintenance Komputer','pc','#4f7cff'],['Instalasi OS dan Aplikasi','cog','#8b5cf6'],['Dasar Jaringan','net','#14b8a6'],['Word','b-w','b'],['Excel','b-x','b'],['PowerPoint','b-p','b'],['Google Workspace','b-gd','b'],['UI/UX Design','pen','#ff8a00']],
ai:[['ChatGPT','b-gpt','b'],['Gemini','b-gem','w'],['Claude','b-cl','w'],['Prompt Engineering','ai','#ec4899'],['Riset dan Penulisan','doc','#06b6d4'],['Otomasi Tugas','cog','#84cc16'],['Evaluasi Hasil AI','ck','#f59e0b']],
adm:[['Data Entry','doc','#3b82f6'],['Pengolahan Data','bar','#10b981'],['Pengarsipan','fol','#f59e0b'],['Pelaporan','doc','#8b5cf6'],['Toko Online','bag','#f43f5e'],['Digital Marketing','bar','#ec4899'],['Customer Service','chat','#06b6d4']],
int:[['Problem Solving','ck','#22c55e'],['Komunikasi','chat','#3b82f6'],['Negosiasi','swap','#f97316'],['Public Speaking','mic','#a855f7'],['Kepemimpinan','cap','#eab308'],['Kerja Tim','us','#ec4899'],['Manajemen Waktu','clk','#14b8a6']]};
function ic(s,c){if(c==='b')return '<svg viewBox="0 0 24 24"><use href="#'+s+'"/></svg>';
 if(c==='w')return '<svg viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="7" fill="#fff" stroke="#0003"/><use href="#'+s+'" transform="translate(4 4) scale(.67)"/></svg>';
 return '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="7" fill="'+c+'"/><g class="gl" transform="translate(5 5) scale(.58)"><use href="#'+s+'"/></g></svg>'}
$$('.chips').forEach(function(el){el.innerHTML=G[el.dataset.g].map(function(x){return '<span>'+ic(x[1],x[2])+x[0]+'</span>'}).join('')});
/* foto profil: images/foto-profil.jpg (kalau belum ada, tampil placeholder; klik untuk pratinjau) */
var lb=$('#lb');lb.onclick=function(){lb.style.display='none'};
function openLb(src){$('img',lb).src=src;lb.style.display='grid'}
$$('.vw').forEach(function(b){b.onclick=function(){openLb($('img',b).src)}});
$$('.lg img').forEach(function(i){i.style.cursor='zoom-in';i.onclick=function(){openLb(i.src)}});
/* project: pratinjau foto, placeholder kalau file belum ada */
$$('.pv').forEach(function(b){var im=$('img',b);
 function miss(){b.classList.add('no')}
 im.addEventListener('error',miss);
 if(im.complete&&im.naturalWidth===0&&im.getAttribute('src'))miss();
 b.onclick=function(){if(!b.classList.contains('no'))openLb(im.src)}});
(function(){var s=$('.slot[data-k="foto"]');if(!s)return;var im=$('img',s),f=$('input',s);
 im.onload=function(){s.classList.add('has')};im.src='images/foto-profil.png';
 f.onclick=function(e){e.stopPropagation()};
 f.onchange=function(){if(f.files[0]){im.src=URL.createObjectURL(f.files[0])}};
 s.onclick=function(){if(s.classList.contains('has'))openLb(im.src);else f.click()};
 $('.chg',s).onclick=function(e){e.stopPropagation();f.click()};})();
/* peran bergantian */
var roles=['IT Support','Administrasi dan Data Entry','Digital Marketing','UI/UX dan Web Dasar'],ri=0,role=$('#role');
setInterval(function(){ri=(ri+1)%roles.length;if(window.gsap&&!reduce){gsap.to(role,{opacity:0,y:-10,duration:.25,onComplete:function(){role.textContent=roles[ri];gsap.fromTo(role,{opacity:0,y:10},{opacity:1,y:0,duration:.35})}})}else role.textContent=roles[ri]},2600);
if(!window.gsap||reduce)return;
/* Lenis + GSAP */
gsap.registerPlugin(ScrollTrigger);
var lenis=window.Lenis?new Lenis({lerp:.09}):null;
if(lenis){lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(function(t){lenis.raf(t*1000)});gsap.ticker.lagSmoothing(0);
 $$('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=$(a.getAttribute('href'));if(t){e.preventDefault();lenis.scrollTo(t,{offset:-80})}})})}
/* hero */
var nm=$('#nm');nm.innerHTML=nm.textContent.split(' ').map(function(w){return '<span style="display:inline-block;white-space:nowrap">'+w.split('').map(function(c){return '<span class="ch">'+c+'</span>'}).join('')+'</span>'}).join(' ');
gsap.from('.ch',{yPercent:110,opacity:0,rotate:8,duration:.9,ease:'back.out(1.6)',stagger:.04,delay:.1});
gsap.from(['.hi','.role','.lead','.cta'],{y:26,opacity:0,duration:.8,ease:'power3.out',stagger:.1,delay:.55});
gsap.from('.ph .slot',{scale:.8,rotate:-8,opacity:0,duration:1,ease:'back.out(1.4)',delay:.35});
gsap.to('.ph',{yPercent:-6,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
/* motion library: chips */
if(window.Motion&&Motion.inView){Motion.inView('.chips',function(el){Motion.animate(el.children,{opacity:[0,1],transform:['translateY(14px) scale(.9)','none']},{delay:Motion.stagger?Motion.stagger(.04):0,duration:.45})})}
/* reveal */
$$('.rv').forEach(function(e){gsap.from(e,{y:44,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 90%'}})});
/* counter: teks akhir sudah ada di HTML, animasi hanya efek tambahan */
$$('[data-n]').forEach(function(e){var fin=e.textContent,n=parseFloat(e.dataset.n),d=+e.dataset.d||0,p=e.dataset.p||'',o={v:0};
 ScrollTrigger.create({trigger:e,start:'top 92%',once:true,onEnter:function(){gsap.to(o,{v:n,duration:1.4,ease:'power2.out',onUpdate:function(){e.textContent=o.v.toFixed(d).replace('.',',')+p},onComplete:function(){e.textContent=fin}})}})});
/* progress */
var pg=$('#pg');ScrollTrigger.create({start:0,end:'max',onUpdate:function(s){pg.style.width=(s.progress*100)+'%'}});
})();
