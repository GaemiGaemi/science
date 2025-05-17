document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroImg = document.querySelector('.hero img');

  const maxHeight = window.innerHeight;
  const minHeight = 50;

  const updateHeroHeight = () => {
    const scrollY = window.scrollY;
    const newHeight = Math.max(minHeight, maxHeight - scrollY);
    hero.style.height = `${newHeight}px`;

    const scale = Math.max(0.3, 1 - scrollY / 1000);
    heroImg.style.transform = `scale(${scale})`;
  };

  updateHeroHeight();
  window.addEventListener('scroll', updateHeroHeight);
});




document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const openBtn = document.getElementById("menuOpenBtn");
  const closeBtn = document.getElementById("menuCloseBtn");

  openBtn.addEventListener("click", () => {
    menu.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
  });

  // 오버레이 바깥 클릭하면 닫기
  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      menu.style.display = "none";
    }
  });
});