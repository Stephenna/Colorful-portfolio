// SELECTORS 

const colorArr = [
    "#4c059490", "#357ECD90", "#24C44290", "#E5E33F90", "#E57C90", "#CE141F90", "#0602E790", "#CA14CE90"];


// EVENTS
    document.addEventListener('click', shapes);
    function shapes(){
        const newDiv = document.createElement('div');
        newDiv.classList.add("jsShapeContainer");
        document.body.appendChild(newDiv);
        const shaped = document.createElement('div');
        shaped.classList.add('jsShape');
        newDiv.appendChild(shaped);

        console.log(newDiv)
    }
    shapes()
 
// FUNCTIONS
    function colorfulName(){
        const first = document.querySelector('.first-ab');
        const firstSplit = first.innerText.split('');
        const bigSpan = [];

        for(let i = 0; i < firstSplit.length; i++){
            let colors = colorArr[Math.floor(Math.random() * colorArr.length)];

            let littleSpan = "<span style= 'color:" + colors + ";'>" + firstSplit[i] + "</span>";

            bigSpan.push(littleSpan);
        }

        first.innerHTML = bigSpan.join('');

        const middle = document.querySelector('.mid-ab');
        const middleSplit = middle.innerText.split('');
        const biggerSpan = [];
        for(let i = 0; i < middleSplit.length; i++){
            let colors = colorArr[Math.floor(Math.random() * colorArr.length)];

            let littleSpan = "<span style='color:" + colors + ";'>" + middleSplit[i] + '</span>';

            biggerSpan.push(littleSpan);
        }
        
        middle.innerHTML = biggerSpan.join('')

    }

    

// CALLS
colorfulName();

