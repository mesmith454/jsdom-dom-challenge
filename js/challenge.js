document.addEventListener("DOMContentLoaded", function(){
// define variables: define variables we are working with
    let counter = document.getElementById('counter');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let heartButton = document.getElementById('heart');
    let likesUl = document.querySelector('.likes');
    let pause = document.getElementById('pause');
    let form = document.getElementById('comment-form')
    let commentList = document.getElementById('list')
    let ul = document.createElement('ul')
    let submit = document.getElementById('submit')

    commentList.appendChild(ul)
    pause.data = false;
 
//stand alone functions
    const intervalHandler = intervalId = setInterval(() => {
           counter.innerText++
        }, 1000);

//stand alone event listeners
    plus.addEventListener('click', () => counter.innerText++);
    
    minus.addEventListener('click', () => counter.innerText--);
    
    heartButton.addEventListener('click', () => {
        if(document.getElementById(counter.innerText) === null) {
            let li = document.createElement('li');
            li.id = counter.innerText;
            li.data = 1;
            li.innerHTML = counter.innerText + 'has been liked' + li.data + 'times';
            likesUl.appendChild(li);
        } else {
            let li = document.getElementById(counter.innerText);
            li.data++;
            li.innerHTML = counter.innerText + 'has been liked' + li.data + 'times';
        }
    });

    form.addEventListener('submit', e => {
        e.preventDefault()
        let input = e.target[0].value
        let li = document.createElement('li')
        li.innerText = input
        ul.appendChild(li)

        input.innerText = ''
    });


    pause.addEventListener('click', () => {
       if(pause.data === false) {
        pause.data = !pause.data;
        plus.disabled = true;
        minus.disabled = true;
        heartButton.disabled = true;
        pause.innerText = 'resume';
        window.clearInterval(intervalHandler);
       } else {
        pause.data = !pause.data;
        pause.innerText = 'pause';
        plus.disabled = false;
        minus.disabled = false;
        heartButton.disabled = false;
        window.intervalHandler();
       }
        
    });
//call function

// intervalHandler() 

// ending tag
})

//resume now functional