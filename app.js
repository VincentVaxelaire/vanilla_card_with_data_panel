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

// quand on clique sur un post, ça créé une div avec le contenu du post
const POSTS_CONTAINER = document.getElementById('grid-container');
POSTS_CONTAINER.addEventListener('click', (e) => {
    const POST = e.target.closest('.post');
    if (POST) {
        const POST_INDEX = [...POSTS_CONTAINER.children].indexOf(POST.parentElement);
        generateContent(POSTS[POST_INDEX]);
    }
});

