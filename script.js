(function(){
  const year = document.getElementById("year");
  if(year) year.textContent = String(new Date().getFullYear());

  const hb = document.getElementById("hamburger");
  const mobile = document.getElementById("mobileNav");
  if(hb && mobile){
    hb.addEventListener("click", ()=>{
      const isHidden = mobile.hasAttribute("hidden");
      if(isHidden) mobile.removeAttribute("hidden");
      else mobile.setAttribute("hidden","");
    });
    mobile.querySelectorAll("a").forEach(a=>{
      a.addEventListener("click", ()=> mobile.setAttribute("hidden",""));
    });
  }

  // Contact form: mailto (no backend)
  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name")||"").trim();
      const phone = String(fd.get("phone")||"").trim();
      const message = String(fd.get("message")||"").trim();

      const subject = encodeURIComponent("Nuevo mensaje desde DiazRealtyProperties.com");
      const body = encodeURIComponent(
        `Nombre: ${name}\nTel: ${phone}\n\nMensaje:\n${message}\n`
      );

      window.location.href = `mailto:enriqueexprealty@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
