const POSTS = [];
const ITEMS = [
    {
        "title": "Card 1",
        "hastag": ["#tag1", "#tag2"],
        "images":  [
            {
                "src": "image1.jpg",
                "alt": "Card 1"
            },
            {
                "src": "image2.jpg",
                "alt": "Card 2"
            }
        ]
    },
    {
        "title": "Card 2",
        "hastag": ["#tag3", "#tag4"],
        "images":  [
            {
                "src": "image3.jpg",
                "alt": "Card 3"
            },
            {
                "src": "image4.jpg",
                "alt": "Card 4"
            }
        ]
    },
    {
        "title": "Card 3",
        "hastag": ["#tag5", "#tag6"],
        "images":  [
            {
                "src": "image5.jpg",
                "alt": "Card 5"
            },
            {
                "src": "image6.jpg",
                "alt": "Card 6"
            }
        ]
    },
    {
        "title": "Card 4",
        "hastag": ["#tag7", "#tag8"],
        "images":  [
            {
                "src": "image7.jpg",
                "alt": "Card 7"
            },
            {
                "src": "image8.jpg",
                "alt": "Card 8"
            }
        ]
    },
    {
        "title": "Card 5",
        "hastag": ["#tag9", "#tag10"],
        "images":  [
            {
                "src": "image9.jpg",
                "alt": "Card 9"
            },
            {
                "src": "image10.jpg",
                "alt": "Card 10"
            }
        ]
    },
    {
        "title": "Card 6",
        "hastag": ["#tag11", "#tag12"],
        "images":  [
            {
                "src": "image11.jpg",
                "alt": "Card 11"
            },
            {
                "src": "image12.jpg",
                "alt": "Card 12"
            }
        ]
    }
]

// Push items to posts
for (let i = 0; i < ITEMS.length; i++) {
    POSTS.push({
        "title": ITEMS[i].title,
        "hastag": ITEMS[i].hastag,
        "images": ITEMS[i].images
    });
}

export { POSTS }