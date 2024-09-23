const post = {
    likes: 20,
    username: 'tinyiko',
    timestamp: '15:45',
    comments: 25
}
// do some object destruction
const {username, likes, timestamp, comments} = post;
console.log(`${username} just posted a photo with ${likes} likes
    it was posted at ${timestamp}, and currently has ${comments} comments`)