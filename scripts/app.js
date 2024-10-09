const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))


const confettiSettings = { 
    target: 'confetti',
    max: 80,
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
    clock: 25,
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
};
const confetti = new window.ConfettiGenerator(confettiSettings);
confetti.render();

// Add this event listener to resize confetti canvas when window is resized
window.addEventListener('resize', () => {
    confetti.clear();
    confettiSettings.width = document.documentElement.clientWidth;
    confettiSettings.height = document.documentElement.clientHeight;
    confetti.render();
});