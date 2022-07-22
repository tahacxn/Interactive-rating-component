const mainCont = document.querySelector(".main");
const thanksCont = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thanksCont.classList.remove("hidden");
    mainCont.style.display = "none";
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})