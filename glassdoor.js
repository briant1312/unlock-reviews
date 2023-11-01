const overlay = document.querySelector("#HardsellOverlay")
if (overlay) {
    overlay.remove()
    document.body.style.setProperty("overflow", "auto")
    document.body.style.setProperty("position", "static")
}

let hiddenText = document.querySelectorAll('[class*="isCollapsed"]')
hiddenText.forEach(el => {
    el.className = ""
})

const observer = new MutationObserver(entries => {
    entries.forEach(entry => {
        entry.addedNodes.forEach(node => {
            if (node.id == "HardsellOverlay") {
                node.remove()
                document.body.style.setProperty("overflow", "auto")
                document.body.style.setProperty("position", "static")

                setTimeout(() => {
                    window.scrollTo(0,0)
                }, 2000)
            }
        }) 
    })

    hiddenText = document.querySelectorAll('[class*="isCollapsed"]')
    hiddenText.forEach(el => {
        el.className = ""
    })
})

observer.observe(document.body, { childList: true, subtree: true })
