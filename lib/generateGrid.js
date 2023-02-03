const CONTAINER = document.getElementById('grid-container');

// Generate grid function
const generateGrid = (columns, posts) => {
    CONTAINER.textContent = '';
    let columnWrappers = {};

    // Create column wrappers
    for (let i = 0; i < columns; i++) {
        columnWrappers[`column${i}`] = [];
    }

    // Distribute posts to columns
    for (let i = 0; i < posts.length; i++) {
        const column = i % columns;
        columnWrappers[`column${column}`].push(posts[i]);
    }

    // Generate grid
    for (let i = 0; i < columns; i++) {
        let columnposts = columnWrappers[`column${i}`];
        let column = document.createElement('div');
        column.classList.add('column');

        // Generate posts
        columnposts.forEach((post) => {
            let postWrapper = document.createElement('div');
            postWrapper.classList.add('post');
            postWrapper.innerHTML = `
                <img src="/images/${post.images[0].src}" alt="${post.images[0].alt}">
                <div class="content">
                    <div class="post-infos">
                        <h2 class="post-title">${post.title}</h2>
                        <span class="post-image-number">1/${post.images.length}</span>
                    </div>
                    <p class="post-hastag">${post.hastag}</p>
                    <span class="post-hover-interaction"><span>Show</span> <span>project</span></span>
                </div>
            `;
            column.appendChild(postWrapper);
        });
        CONTAINER.appendChild(column);
    }
};

export { generateGrid };