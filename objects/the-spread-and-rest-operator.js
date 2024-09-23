// const profile = {
//     username: "",
//     password: "",
//     email: "",
//     posts: 0,
//     followers: 0,
//     following: 0,
//     picture: "",
//     fullName: "",
//     bio: "",
//     link: "",
//     info() {
//         const {username, posts, followers, following, bio, link} = this;
//         return `
//             Info for: ${username}
//             Posts: ${posts}
//             Followers: ${followers}
//             Following: ${following}
//             bio: ${bio}
//             link: ${link}`;

//     },
//     posted() {
//         const {username, posts} = this;
//         posts = posts + 1;
//         return `
//         ${username} just posted a photo
//         Total number of posts updated to ${posts}`;
       
//     }

// };

// // ...
// // spread, spread the properties of an object inside another object

const signedUpUser = {
    username: "tinyikotsamane",
    email: "tinyiko@gmail.com",
    password: "recordingInfo"
}

const newUser = {...profile, ...signedUpUser};
newUser.password = "12";

console.log("combinedObject", newUser);
console.log("emptyProfileObject", profile);
console.log("signUpObject", signedUpUser);

// rest ...

function sum (...args){
    // summ all the parameters/ arguments
    console.log(args)
} // args is adding everything in an array

sum(22, 33, 99, 33, 66, 88);