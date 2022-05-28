const categoryEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryEl.length}`);

for (const el of categoryEl) {
  const liTitle = document.querySelector('h2');
console.log(`Category: ${liTitle.textContent}`);

const tagEl = document.querySelectorAll('li');
console.log(`Elements: ${tagEl.length}`);
}




