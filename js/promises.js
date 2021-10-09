'use strict'

const button = document.getElementById('upper-left-button')
const text = document.getElementById('upper-right-text')

button.addEventListener('click', async () => {
    try {
        await new Promise((resolve, reject) => {
        text.textContent !== 'I promise to always love you' ?
        resolve(text.textContent = 'I promise to always love you')
        : resolve(text.textContent = 'New Promise')
    }) 
    } catch (error) {
        if (error) alert(error.message)
        reject(text.textContent = 'Rejection')
    }

})