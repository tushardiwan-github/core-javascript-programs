// A callback is a function that is to be executed after another function has finished executing —
//  hence the name 'call back'. 


const posts = [
{title : "Post One", body: "This is post one"},
{title : "Post Two", body: "This is post two"}
];

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

//using callback function you can actually resolve the issue 
function createPost(post, callback){
    setTimeout(() =>{
        posts.push(post);
        callback();
    },2000)
    
}

//without callback we can not create new posts
/*
function createPost(post){
    setTimeout(() =>{
        posts.push(post);
    },2000)
    
}
getPost();
createPost({title: 'Post Three', body:'This is post three'});
*/
createPost({title: 'Post Three', body:'This is post three'},getPost);