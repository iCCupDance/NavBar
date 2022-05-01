const openBtn = document.querySelector (`#openBtn`);
const closeBtn = document.querySelector (`#closeBtn`);
const navBtn = document.querySelector (`#navBtn`);

openBtn.addEventListener (`click`, function () {
    openBtn.classList.add(`closeNav`);
    openBtn.classList.remove(`openNav`);
    navBtn.classList.add(`openNav`);
    navBtn.classList.remove(`closeNav`);
    closeBtn.classList.add(`openNav`);
    closeBtn.classList.remove(`closeNav`);
})

closeBtn.addEventListener(`click`, function () {
    openBtn.classList.add(`openNav`);
    openBtn.classList.remove(`closeNav`);
    navBtn.classList.add(`closeNav`);
    navBtn.classList.remove(`openNav`);
    closeBtn.classList.add(`closeNav`);
    closeBtn.classList.remove(`openNav`);
})