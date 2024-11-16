const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const burgerMenuContent = document.querySelector('.burger-menu__content');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenuBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('hidden')
  burgerMenuContent.classList.toggle('active')
})

function closeMenu(elementBackground, content) {
  elementBackground.classList.add('hidden');
  content.classList.remove('active');
}

burgerMenu.addEventListener('click', (evt) => {
  const contentClick = evt.target.closest('.burger-menu__content');

  if (!contentClick) {
    closeMenu(burgerMenu, burgerMenuContent);
  }
})