(function(){
function fallback(t){var ta=document.createElement('textarea');ta.value=t;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.top='0';document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,t.length);var ok=false;try{ok=document.execCommand('copy');}catch(e){}document.body.removeChild(ta);return ok;}
document.addEventListener('click',function(ev){
 var b=ev.target.closest('button.copy');if(!b)return;
 var el=document.getElementById(b.getAttribute('data-t'));if(!el)return;var t=el.textContent;
 function done(){var o=b.textContent;b.textContent='Kopioitu ✓';b.classList.add('done');setTimeout(function(){b.textContent='Kopioi';b.classList.remove('done');},2000);}
 if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(done,function(){if(fallback(t))done();});}
 else if(fallback(t))done();
});
})();
