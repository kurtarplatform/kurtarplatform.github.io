function changeLang(lang) {
  localStorage.setItem("selectedLang", lang);

  fetch(`lang/lang-${lang}.json`)
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll("[data-key]").forEach(el => {
        let key = el.getAttribute("data-key");
        if(el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = data[key]; // placeholder değiştir
        } else {
          el.textContent = data[key]; // normal metin
        }
      });
    });
}
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "en"; 
  changeLang(savedLang);
});


