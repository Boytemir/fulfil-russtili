let signUp = document.querySelector(".sign-up");
let signUp__box = document.querySelector(".sign-up__box");
let x = document.querySelector(".x");
let signUpBtn = document.querySelector(".sign-up__btn");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    signUp.classList.add("active");
});

function remove() {
    signUp.classList.remove("active");
}

x.addEventListener("click", remove);
signUp.addEventListener("click", remove);


signUp__box.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
})