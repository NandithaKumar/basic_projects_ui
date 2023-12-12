const panels = document.querySelectorAll('.panel');
console.log(panels[0]);

panels.forEach(frame => {
    frame.addEventListener('click', () => {
        removeClassList()
        frame.classList.add('active');
    })
})

function removeClassList() {
    panels.forEach(frame => {
        frame.classList.remove('active');
    })
}