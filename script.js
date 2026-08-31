/* =========================================================
   YMA — INTERACTION LAYER
   Contact details, Paystack and all lightweight interactions live here.
   ========================================================= */

/* ---------- 1. BUSINESS CONTACTS ---------- */
const YMA_WHATSAPP = "254745843767";
const YMA_EMAIL = "info@yourmally.com";

/* ---------- 2. PAYSTACK CHECKOUT ----------
   Paste the LIVE Paystack checkout URL here when the product is ready.
   Until then, visitors are routed to WhatsApp rather than a dead link.
*/
const PAYSTACK_CHECKOUT_URL = ""; // <-- PASTE LIVE PAYSTACK LINK HERE

/* ---------- 3. MOBILE MENU ---------- */
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
if(menuToggle && mobileMenu){
  menuToggle.addEventListener("click",()=>{
    const open=mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",String(open));
    mobileMenu.setAttribute("aria-hidden",String(!open));
    document.body.classList.toggle("menu-open",open);
  });
  mobileMenu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded","false");
    mobileMenu.setAttribute("aria-hidden","true");
    document.body.classList.remove("menu-open");
  }));
}

/* ---------- 4. SCROLL REVEALS ---------- */
const revealItems=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){
  const observer=new IntersectionObserver((entries,obs)=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");obs.unobserve(entry.target);}});
  },{threshold:.12});
  revealItems.forEach(item=>observer.observe(item));
}else revealItems.forEach(item=>item.classList.add("visible"));

/* ---------- 5. CURSOR GLOW — DESKTOP ONLY ---------- */
const cursorGlow=document.querySelector(".cursor-glow");
if(cursorGlow && window.matchMedia("(pointer:fine)").matches){
  window.addEventListener("pointermove",event=>{
    cursorGlow.style.left=`${event.clientX}px`;
    cursorGlow.style.top=`${event.clientY}px`;
  });
}

/* ---------- 6. MAGNETIC BUTTONS — DESKTOP ONLY ---------- */
if(window.matchMedia("(pointer:fine)").matches){
  document.querySelectorAll(".magnetic").forEach(button=>{
    button.addEventListener("pointermove",event=>{
      const rect=button.getBoundingClientRect();
      const x=((event.clientX-rect.left)/rect.width-.5)*7;
      const y=((event.clientY-rect.top)/rect.height-.5)*7;
      button.style.transform=`translate(${x}px,${y}px)`;
    });
    button.addEventListener("pointerleave",()=>button.style.transform="");
  });
}

/* ---------- 7. PAYSTACK BUTTON ---------- */
const paystackButton=document.querySelector("[data-paystack-checkout]");
const checkoutNote=document.querySelector("[data-checkout-note]");
if(paystackButton){
  if(PAYSTACK_CHECKOUT_URL.trim()){
    paystackButton.href=PAYSTACK_CHECKOUT_URL;
    paystackButton.target="_blank";
    paystackButton.rel="noopener";
    if(checkoutNote) checkoutNote.textContent="Secure checkout powered by Paystack.";
  }else{
    paystackButton.addEventListener("click",event=>{
      event.preventDefault();
      const message=encodeURIComponent("Hi YMA, I'm interested in Practical AI 101: For SMEs. Please let me know when checkout is available.");
      window.open(`https://wa.me/${YMA_WHATSAPP}?text=${message}`,"_blank","noopener");
    });
    if(checkoutNote) checkoutNote.textContent="Checkout is being connected. You can reserve your copy on WhatsApp.";
  }
}

/* ---------- 8. CURRENT YEAR ---------- */
const year=document.getElementById("year");
if(year) year.textContent=new Date().getFullYear();

/* ---------- 9. ACTIVE SECTION IN NAV ---------- */
const navLinks=[...document.querySelectorAll(".nav-links a")];
const sections=[...document.querySelectorAll("main section[id]")];
if("IntersectionObserver" in window && navLinks.length){
  const sectionObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      navLinks.forEach(link=>{
        link.style.color=link.getAttribute("href")===`#${entry.target.id}`?"var(--red)":"";
      });
    });
  },{rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(section=>sectionObserver.observe(section));
}
