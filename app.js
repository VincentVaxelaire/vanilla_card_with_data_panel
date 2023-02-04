import { POSTS } from './lib/items.js';
import { generateGrid } from './lib/generateGrid.js';
import { generateContent } from './lib/generateContent.js';

// Add event listener to window resize
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        generateGrid(1, POSTS);
    } else if (window.innerWidth < 960) {
        generateGrid(2, POSTS);
    } else if (window.innerWidth < 1200) {
        generateGrid(3, POSTS);
    } else {
        generateGrid(4, POSTS);
    }
});
generateGrid(4, POSTS);

// Add event listener to each post
const POSTS_LIST = document.querySelectorAll('.post');
const CONTENT_CONTAINER = document.getElementById('content-container');
const CLOSE_BUTTON = document.getElementById('close-content');
POSTS_LIST.forEach((post) => {
    post.addEventListener('click', (e) => {
        // block overflow
        // const main = document.querySelector('main');
        // main.style.overflow = 'hidden';

        // show close button
        CLOSE_BUTTON.style.display = 'block';

        // translate content container
        CONTENT_CONTAINER.classList.replace('translatePositive', 'translateNormal')
        
        // get current post
        const currentPost = POSTS.find((post) => post.title === e.target.closest('.post').querySelector('.post-title').textContent);
        generateContent(currentPost);
    });
});

CLOSE_BUTTON.addEventListener('click', () => {
    // hide close button
    CLOSE_BUTTON.style.display = 'none';

    // translate content container
    CONTENT_CONTAINER.classList.replace('translateNormal', 'translateNegative')

    setTimeout(() => {
        CONTENT_CONTAINER.classList.replace('translateNegative', 'translatePositive')
    }, 500);
});
