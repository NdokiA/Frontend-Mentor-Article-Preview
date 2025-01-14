const button = document.querySelector('.share-icon')
const shareLinks = document.querySelector('.share-links')

button.addEventListener('click', () => {
    shareLinks.classList.toggle('active')

    if (button.classList.contains('share-icon-active')){
        button.classList.remove('share-icon-active')
    } else {
        button.classList.add('share-icon-active')
    }
})