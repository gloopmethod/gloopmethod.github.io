// ========================= G-LOOP JS CORE =========================
document.addEventListener("DOMContentLoaded", function () {

  /* ========================= TEXT ROTATOR ========================= */
  const textEl = document.getElementById("text-rotator");

  if (textEl) {
    const texts = [
      "SEO Modern",
      "Bukan Tentang Keyword",
      "Tapi Tentang Entity",
      "Dan Trust",
      "Itulah G-Loop Method"
    ];

    let i = 0;

    setInterval(() => {
      textEl.classList.add("fade-out");

      setTimeout(() => {
        i = (i + 1) % texts.length;
        textEl.textContent = texts[i];
        textEl.classList.remove("fade-out");
        textEl.classList.add("fade-in");
      }, 300);

    }, 1200);
  }

  /* ========================= LOGO ROTATOR ========================= */
  const logoEl = document.getElementById("logo-rotator");

  if (logoEl) {
    const logos = [
      "assets/images/text 1.png",
      "assets/images/text 2.png",
      "assets/images/text 3.png"
    ];

    let index = 0;

    setInterval(() => {
      logoEl.style.opacity = 0;

      setTimeout(() => {
        index = (index + 1) % logos.length;
        logoEl.src = logos[index];
        logoEl.style.opacity = 1;
      }, 300);

    }, 1500);
  }

});
