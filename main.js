const button = document.querySelector('button')
const blockquote = document.querySelector('blockquote')
const author = document.querySelector('footer')
console.log(blockquote)
console.log(author)

button.addEventListener('click', getQuote)


function getQuote(){
  blockquote.style.display = "block"
  blockquote.innerText = ""
  author.innerText = "— "
  fetch('https://stoic-quotes.com/api/quotes')
  .then(res => res.json())
  .then(data => {
    console.log(data[0]);
    blockquote.innerText = data[0].text
    author.innerText += data[0].author
    button.style.marginTop = "2rem"
  })
  .catch(error => console.error('Error:', error));
}
