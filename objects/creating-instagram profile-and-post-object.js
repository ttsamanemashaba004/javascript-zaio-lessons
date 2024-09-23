// Instagram Profile & Post Objects

// // Creating an object
// const profile = {
//     // key: value
//     username: "tinyikotsamane",
//     posts: 55,
//     followers: 800,
//     following: 750,
//     fullName: "Tinyiko Tsamane",
//     bio: "Some information",
//     link: "zaio.io"
// }

// console.log(profile.username, profile.followers, profile.posts); //this is how you access different keys in the object.

// Another instagram post

const post = {
    likes: 20,
    username: 'tinyikotsamane',
    timestamp: '15:45',
    comments: 25
}

console.log(`${post.username} just posted a photo with ${post.likes} likes.`)

// Another way to acces the data;

console.log(post['likes']);