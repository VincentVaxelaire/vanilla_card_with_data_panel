const CONTENT_CONTAINER = document.getElementById('content-container');

// Generate content function
const generateContent = (post) => {
    CONTENT_CONTAINER.textContent = '';
    let contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');
    contentWrapper.innerHTML = `
            <div class="content-image-galery">`
                + post.images.map((image) => {
                    return `<img src="/images/${image.src}" alt="${image.alt}">`;
                }).join('') +
            `</div>
            <div class="content-infos">
                <h2 class="content-title">${post.title}</h2>
                <p class="content-hastag">${post.hastag}</p>
            </div>
    `;
    CONTENT_CONTAINER.appendChild(contentWrapper);
}

export { generateContent };
