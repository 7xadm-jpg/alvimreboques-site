/* ===== CONFIGURAÇÃO =====
   Informe o WhatsApp oficial com DDI+DDD, só números. Ex.: "5531999999999"
   Enquanto estiver vazio, os botões de WhatsApp levam ao telefone/formulário. */
const WHATSAPP = "5531996534296";
const TELEFONE = "553139119292";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const anoEl = $("#ano"); if (anoEl) anoEl.textContent = new Date().getFullYear();

  // WhatsApp / telefone
  $$("[data-wa]").forEach(a => {
    if (WHATSAPP) {
      a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Olá! Preciso de um reboque. Vim pelo site da Alvim.");
      a.target = "_blank"; a.rel = "noopener";
    } else {
      a.href = "tel:+" + TELEFONE;
    }
  });

  // Menu hambúrguer
  const burger = $(".burger"), menu = $("#menu");
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("aberto");
    burger.setAttribute("aria-expanded", open);
  });
  $$("#menu a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("aberto"); burger.setAttribute("aria-expanded", false);
  }));

  // Voltar ao topo
  const topo = $(".topo-btn");
  addEventListener("scroll", () => topo.classList.toggle("vis", scrollY > 500), { passive: true });
  topo.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  // FAQ
  $$(".faq-q").forEach(b => b.addEventListener("click", () => {
    const aberto = b.getAttribute("aria-expanded") === "true";
    b.setAttribute("aria-expanded", !aberto);
    b.nextElementSibling.hidden = aberto;
  }));

  // Lightbox
  const lb = $(".lightbox"), lbImg = $("img", lb);
  const fechar = () => { lb.hidden = true; lbImg.src = ""; };
  $$(".galeria img").forEach(i => i.addEventListener("click", () => { lbImg.src = i.src; lbImg.alt = i.alt; lb.hidden = false; }));
  lb.addEventListener("click", e => { if (e.target !== lbImg) fechar(); });
  addEventListener("keydown", e => { if (e.key === "Escape") fechar(); });

  // Formulário -> WhatsApp
  const form = $("#form-orc");
  if (form) form.addEventListener("submit", e => {
    e.preventDefault();
    const erro = $(".erro", form);
    let ok = true;
    $$("[required]", form).forEach(c => {
      const v = c.value.trim();
      const bad = !v || (c.name === "tel" && v.replace(/\D/g, "").length < 10);
      c.classList.toggle("inv", bad); if (bad) ok = false;
    });
    if (!ok) { erro.textContent = "Preencha todos os campos corretamente (telefone com DDD)."; erro.hidden = false; return; }
    if (!WHATSAPP) {
      erro.textContent = "O WhatsApp da empresa ainda não foi configurado no site. Ligue para (31) 3911-9292 ou envie e-mail para alvimreboques@hotmail.com.";
      erro.hidden = false; return;
    }
    erro.hidden = true;
    const d = Object.fromEntries(new FormData(form));
    const msg = `*Solicitação de orçamento - Alvim Reboques*\n\n*Nome:* ${d.nome}\n*Telefone:* ${d.tel}\n*Tipo de veículo:* ${d.tipo}\n*Modelo:* ${d.modelo}\n*Local de retirada:* ${d.origem}\n*Destino:* ${d.destino}\n*Ocorrência:* ${d.desc}`;
    window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });
});
