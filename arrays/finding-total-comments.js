// same as forEach but now creates a copy of array


const post = {
    id: '1',
    likes: 20,
    username: 'akhilboddu',
    timestamp: '15:45',
    comments: []
}
 


const posts = [
    {
    id: '0',
    likes: 20,
    username: 'akhilboddu',
    timestamp: '15:45',
    comments: [
            {
                username: 'akhilboddu',
                comment: 'Nice picture',
                id: 'xhabjjdsASDddsa'
            }
        
        ]
    }
];

// push object in array
// posts.push(post)

posts.push(post, {
    id: '2',
    likes: 20,
    username: 'akhilboddu1111',
    timestamp: '16:45',
    comments: []

}, {id: '3',
    likes: 25,
    username: 'akhilboddu1234',
    timestamp: '16:45',
    comments: []
});

// pop the last element from this array
// posts.pop()
// console.log(posts);

// MAP
// ADD NEW PROPERTY CALLED SHARES USING MAP
// console.log(posts.map((item,index) => {
//     return {...item, shares: 0, duration: 0}
// }))

// write new map function to addd duration property

// console.log(posts.map((item,index) => {
//     return {...item, }
// }))

// console.log(postsWithShares);

// console.log(posts.filter((item) => {
//     return item.likes > 10 ? true : false;
// }))

// OR

// console.log(posts.filter((item) => (item.likes > 10)))

// console.log(posts.find((item) => item.id ==0));

// REDUCE

// console.log(posts.reduce((acc, item) => acc += item.likes, 0))

// write a filter on posts to only show posts with 0 comments

// console.log(posts.filter((item) => item.comments.length === 0));
// find first post posted by akhilboddu

// console.log(posts.find(item => item.username === 'akhilboddu'))

// write an operation that finds the total number of comments

console.log(posts.reduce((acc,item) => acc += item.comments.length, 0))