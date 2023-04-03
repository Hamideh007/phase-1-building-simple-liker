// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector('#modal')
const errorMessage = document.querySelector('#modal-message')

// Hide the error modal initially
errorModal.classList.add('hidden')

// Heart elements
const hearts = document.querySelectorAll('.like-glyph')

// Event listener for clicking on a heart
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    // Clear any existing error message
    errorMessage.textContent = ''
    
    // Simulate a server call
    mimicServerCall()
      .then(() => {
        // Server call succeeded
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART
          heart.classList.add('activated-heart')
        } else {
          heart.textContent = EMPTY_HEART
          heart.classList.remove('activated-heart')
        }
      })
      .catch(error => {
        // Server call failed
        errorMessage.textContent = error
        errorModal.classList.remove('hidden')
        setTimeout(() => {
          errorModal.classList.add('hidden')
        }, 3000)
      })
  })
})
