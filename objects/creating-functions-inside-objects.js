// Creating an object
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
    }
}

console.log(profile.info());
