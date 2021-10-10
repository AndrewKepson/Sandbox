'use strict'

const stringOne = document.getElementById('string-one').textContent
const stringTwo = document.getElementById('string-two')

const newString = stringOne.replace(/'/i, "")

document.getElementById('string-one').textContent = newString

stringTwo.textContent.includes('coconuts') ? stringTwo.append('This sentence contains coconuts!') : null

const titleTag = document.getElementById('title-tag')

let titleText = titleTag.textContent

const titleTagForGoogle = titleText.replace(/-/ig, "")

titleTag.textContent = titleTagForGoogle