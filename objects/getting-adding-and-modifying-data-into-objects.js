// Instagram Profile & Post Objects

// Creating an object
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

// get data
console.log(profile.username, profile.followers, profile.posts); //this is how you access different keys in the object.

// modify:

profile.posts = 56;
profile.posts = profile.posts + 1 // another way
console.log(profile);

// create a new key:
profile.email = 'ttsamane.mashaba@gmail.com';
profile.phoneNumber = '0831232139';

console.log(profile);