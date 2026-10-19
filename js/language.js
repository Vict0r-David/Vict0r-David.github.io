// Preserve the chosen language only after the visitor explicitly selects it.
(function(){
  var links=document.querySelectorAll('.language-switch a');
  links.forEach(function(link){link.addEventListener('click',function(){try{localStorage.setItem('victor-site-language',link.lang);}catch(e){}});});
  var lang;try{lang=localStorage.getItem('victor-site-language');}catch(e){}
  if(lang==='fr' && !location.pathname.startsWith('/fr/')){
    var target='/fr'+(location.pathname==='/'?'/index.html':location.pathname);
    location.replace(target+location.search+location.hash);
  }else if(lang==='en' && location.pathname.startsWith('/fr/')){
    var target=location.pathname.slice(3);if(target==='/index.html')target='/';
    location.replace(target+location.search+location.hash);
  }
})();
