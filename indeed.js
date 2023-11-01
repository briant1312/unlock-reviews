let pos = 0
const removeLoginPrompt = setInterval(() => {
    const loginScreen = document.querySelector(".gnav-mq5q72")
    if (window.scrollY !== 0) {
        pos = window.scrollY
    }
    if (loginScreen) {
        loginScreen.remove()

        document.body.style.setProperty("overflow", "auto")
        document.body.style.setProperty("position", "static")
        window.scrollTo(0, pos)
    }
}, 1000)

setTimeout(() => {
    clearInterval(removeLoginPrompt)
}, 15000)

// these just remove the classes that indeed uses to blur the reviews section as well as the 
// pros and cons section. It also adds in the classes on the non blurred sections to keep 
// up with consistency
const blurredText = document.querySelectorAll(".css-qodkr")
blurredText.forEach(el => {
    el.classList.remove("css-qodkr")
    el.classList.add("css-1cxc9zk")
})

const prosAndCons = document.querySelectorAll(".css-1jysqrt")
prosAndCons.forEach(el => {
    el.classList.remove("css-1jysqrt")
    el.classList.add("css-1z0411s")
})
