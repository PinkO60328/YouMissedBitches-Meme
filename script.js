(function(){
const valid=/^0x[a-fA-F0-9]{40}$/.test(CA);
// Robinhood Chain (chain ID 4663). Duo/aiubc pattern.
const buy=valid
  ?"https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency="+CA
  :"https://app.uniswap.org/swap?chain=robinhood";
document.querySelectorAll('.ca-val').forEach(e=>e.textContent=CA);
document.querySelectorAll('.chain').forEach(e=>e.textContent=CHAIN);
document.querySelectorAll('.xlink').forEach(a=>{
  if(!X_LINK){a.style.display='none';a.setAttribute('aria-hidden','true');return;}
  a.href=X_LINK;a.style.display='';
});
document.querySelectorAll('.social').forEach(a=>a.href=SOCIAL_LINK);
document.querySelectorAll('.ytlink').forEach(a=>a.href=YOUTUBE_LINK);
document.querySelectorAll('.buy').forEach(a=>{a.href=buy;a.target='_blank';a.rel='noopener'});
document.querySelectorAll('.scan').forEach(a=>{
  if(valid){a.href="https://robinhoodchain.blockscout.com/token/"+CA;a.target='_blank';a.rel='noopener';}
  else a.remove();
});
document.querySelectorAll('.copy').forEach(b=>b.onclick=()=>{const done=()=>{b.textContent='copied';setTimeout(()=>b.textContent='copy',1500)};
if(navigator.clipboard)navigator.clipboard.writeText(CA).then(done,fb);else fb();function fb(){const t=document.createElement('textarea');t.value=CA;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();done()}});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
})();
