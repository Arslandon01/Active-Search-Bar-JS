# Anime Website Clone with Live Search

A simple and clean anime homepage clone with an interactive real-time search bar using JavaScript.

## ✨ Features

- Anime-style homepage UI (HTML/CSS)
- **Live search** functionality powered by JavaScript
- No external libraries — pure JavaScript
- Uses:
  - `.includes()` method to match input with anime titles
  - `.forEach()` loop to dynamically show/hide content

## 📸 Preview

> Add a screenshot or GIF here (optional but recommended)

## 🧠 How It Works

When a user types in the search bar:
- The script captures input using `document.getElementById('searchInput').value.toLowerCase()`
- Loops through all anime cards using `.forEach()`
- If the `h3` title inside each card **includes** the input, it's shown — otherwise hidden

```js
function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const posts = document.querySelectorAll('.product-post-container');

    posts.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();

        if (title.includes(input)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
    });
}
