// Object destructuring
// The destricturing assignment syntax is a JavaScript expression
//that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.

const profile = {
    // key: value
    username: "tinyikotsamane",
    posts: 55,
    followers: 800,
    following: 750,
    fullName: "Tinyiko Tsamane",
    bio: "Some information",
    link: "zaio.io",
    // info (){
    //     const {username, posts, followers} = this; // unpacking values in this, now i do not have to say this.username
    //     return `
    //         Info for: ${username}
    //         Posts: ${posts}
    //         Follwers: ${followers}
    //     `
    // },
    

    posted (){
        this.posts = this.posts + 1;
        return `${this.username} just posted a photo \n
        Total number of posts updated to ${this.posts}`;
    }
}

const info = (profile) => {
    const {username, posts, followers} = profile; // another way of destructuring.
    return `
        Info for: ${username}
        Posts: ${posts}
        Follwers: ${followers}
    `
}; 

console.log(info(profile));