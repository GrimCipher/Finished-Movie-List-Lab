document.addEventListener('DOMContentLoaded', function() {
console.log('Hello World')


function addMovie(event) {
    event.preventDefault()
    
    
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    
    movieTitle.addEventListener(`click`, crossOffMovie)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    
    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}



function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.childNodes[0].textContent} deleted!`
    revealMessage()
}


function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}



function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

document.querySelector('form').addEventListener('submit', addMovie)
})