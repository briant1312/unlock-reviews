const removeOverlay = setInterval(() => {
    const overlay = document.querySelector("#HardsellOverlay")
    if (overlay) {
        overlay.remove()
        document.body.style.setProperty("overflow", "auto")
        document.body.style.setProperty("position", "static")
    }

    const hiddenText = document.querySelectorAll('[class*="isCollapsed"]')
    hiddenText.forEach(el => {
        el.className = ""
    })
}, 1000)

setTimeout(() => {
    clearInterval(removeOverlay)
}, 180000)
