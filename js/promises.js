'use strict'

const button = document.getElementById('upper-left-button')
const text = document.getElementById('upper-right-text')
const windowText = document.getElementById('window-text')

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

setTimeout(async () => {
    try {
      const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json') 
      const body = await data.json()

      const list = document.querySelector('#prices')
      const listItems = [...list.children]

      listItems.forEach(item => {
          const curr = item.id.slice(-3)
          item.lastElementChild.textContent = body.bpi[curr.toUpperCase()].rate
      })  
    } catch (e) {
        console.error(e.message)
    }
}, 1500)