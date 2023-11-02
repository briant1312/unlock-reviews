const observer = new MutationObserver(entries => {
    entries.forEach(entry => {
        entry.addedNodes.forEach(node => {
            if (node.classList.contains("gnav-mq5q72")) {
                node.remove()
                document.body.style.setProperty("overflow", "auto")
                document.body.style.setProperty("position", "static")
            }
        })
    })
})

observer.observe(document.body, { childList: true })

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
