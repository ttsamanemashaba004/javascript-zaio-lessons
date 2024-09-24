// same as forEach but now creates a copy of array


const post = {
    id: '1',
    likes: 20,
    username: 'akhilboddu',
    timestamp: '15:45',
    comments: []
}
 


const postsInKenya = [
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

const postsInSa = [];

postsInSa.push(post, {
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

// // pop the last element from this array
// posts.pop()
// // console.log(posts);

// // ADD NEW PROPERTY CALLED SHARES
// const postsWithShares = posts.map((item,index) => {
//     return {...item, shares: 0}
// });

// console.log(postsWithShares);

// // iterate over the elements
// // posts.forEach((item, index) => {
// //     console.log(`
// //         ${item.username}     | ${item.timestamp}
// //         IMAGE
// //         ${item.likes}  likes     | ${item.comments.length} comments.
// //         `)
// // })

const totalPosts = [...postsInKenya, ...postsInSa];
console.log(totalPosts);