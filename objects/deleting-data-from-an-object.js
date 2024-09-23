// // Creating an object
const profile = {
    // key: value
    username: "tinyikotsamane",
    posts: 55,
    followers: 800,
    following: 750,
    fullName: "Tinyiko Tsamane",
    bio: "Some information",
    link: "zaio.io"
}
// CRUD:
// CREATE
// READ
// UPDATE
// DELETE

// hOW TO DELETE A KEY
delete profile.link;
console.log(profile);