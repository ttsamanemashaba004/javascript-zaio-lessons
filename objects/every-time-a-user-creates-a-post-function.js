// // Creating an object
const profile = {
    // key: value
    username: "tinyikotsamane",
    posts: 55,
    followers: 800,
    following: 750,
    fullName: "Tinyiko Tsamane",
    bio: "Some information",
    link: "zaio.io",
    info (){
        return `
            Info for: ${this.username}
            Posts: ${this.posts}
            Follwers: ${this.followers}
        `
    },
    posted (){
        this.posts = this.posts + 1;
        return `${this.username} just posted a photo \n
        Total number of posts updated to ${this.posts}`;
    }
}

// Function: posted
// action: increase number of posts by 1
// print out: username just posted a photo.
// console.log(the posted function)

// console.log(profile.posted());
profile.books = {
    title: "love",
    autho: 'tinyiko',
}

console.log(typeof(profile.books));