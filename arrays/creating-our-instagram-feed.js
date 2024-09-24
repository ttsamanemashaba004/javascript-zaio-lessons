// push 5 posts objects using push ()
// remove post from feed (by unflowwing)


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
console.log(posts);