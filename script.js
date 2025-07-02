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
 