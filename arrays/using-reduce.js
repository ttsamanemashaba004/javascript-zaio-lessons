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
posts.pop()
// console.log(posts);

// I HAVE CHAINED TWO FUNCTIONS .forEach
// const postsWithShares = posts.map((item,index) => {
//     return {...item, shares: 0}
// }).forEach((item, index) => { // this line is where I chained.
//     console.log(`
//         ${item.username}     | ${item.timestamp}
//         IMAGE
//         ${item.likes}  likes     | ${item.comments.length} comments | ${item.shares} shares.
//         `)
// })

// console.log(postsWithShares);

// console.log(posts.filter((item) => {
//     return item.likes > 10 ? true : false;
// }))

// OR

// console.log(posts.filter((item) => (item.likes > 10)))

// console.log(posts.find((item) => item.id ==0));

// REDUCE

console.log(posts.reduce((acc, item) => acc += item.likes, 0))