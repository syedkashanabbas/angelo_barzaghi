  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuPanel = document.getElementById("menuPanel");
  const menuBackdrop = document.getElementById("menuBackdrop");
  const closeMenu = document.getElementById("closeMenu");

  function openMenu() {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      menuPanel.classList.remove("translate-x-full");
    }, 10);
  }

  function closeMenuFn() {
    menuPanel.classList.add("translate-x-full");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  }

  menuBtn.addEventListener("click", openMenu);
  menuBackdrop.addEventListener("click", closeMenuFn);
  closeMenu.addEventListener("click", closeMenuFn);