
//callback example solved by using promise, Please refer the callback.js file

const posts = [
    {title : "Post One", body: "This is post one"},
    {title : "Post Two", body: "This is post two"}
];
    
    function getPost(){
        setTimeout(() => {
            let output = '';
            posts.forEach((post,index) => {
                output += `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
        },1000)
}

    function createPost(post){
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                posts.push(post);
                const error = true;
                if(!error){
                    resolve();
                    //after resolve only it will call getPost() method,else it will not call getPost()
                    // method, dont belive me, try out buddy
                }else{
                    reject('Something went wrong badly....')
                }
            },2000)
        })
    }

    createPost({title: 'Post Three', body:'This is post three'})
                .then(getPost)
                .catch(error =>{
                    console.log(error);
});