// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Button Clicked .....');
//     e.preventDefault();
// });


// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//     console.log('Button Clicked .... ');
//     e.preventDefault();
// }

// const clearBtn = document.querySelector('.clear-tasks');
// const heading = document.querySelector('h5');
// const card = document.querySelector('.card');


//clearBtn.addEventListener('click', runEvents);

// card.addEventListener('mousemove',runEvents);

//Event Handler
// function runEvents(e){
//     console.log(`EVENTS REGISTERED ${e.type}`);
//     heading.textContent = `MOUSE X: ${e.offsetX} MOUSE Y: ${e.offsetY}`;
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
// }

// const inputElement = document.getElementById('task');

// inputElement.addEventListener('click', onClick);

// function onClick(e){
//     let input = e.target.value;
//     console.log(input);
// }

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    if(e.target.parentElement.className === 'delete-item secondary-content'){
        e.target.parentElement.parentElement.remove();
    }
}











