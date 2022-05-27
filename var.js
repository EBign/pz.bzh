function togglemenu() {
    const header = document.querySelector ('header');
    const navbar = document.querySelector ('nav');
    const ul = document.querySelector ('ul');
    const burger = document.querySelector ('.bouttonnav');
    burger.addEventListener('click', () => {
        header.classList.toggle('montreheader');
        ul.classList.toggle('montreul');
        navbar.classList.toggle('montrenav');
        burger.classList.toggle('croix');
    });
}
togglemenu();