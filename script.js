// SELECTORS 

const colorArr = [
    "#4c059490", "#357ECD90", "#24C44290", "#E5E33F90", "#E57C90", "#CE141F90", "#0602E790", "#CA14CE90"];


// EVENTS
    // document.addEventListener('click', shapes);
    // function shapes(){
    //     const newDiv = document.createElement('div');
    //     newDiv.classList.add("jsShapeContainer");
    //     document.body.appendChild(newDiv);
    //     const shaped = document.createElement('div');
    //     shaped.classList.add('jsShape');
    //     newDiv.appendChild(shaped);

    //     console.log(newDiv)
    // }
    // shapes()
 
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



// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 100;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 470)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});






