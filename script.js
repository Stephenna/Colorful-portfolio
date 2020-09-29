// SELECTORS 

const colorArr = [
    "#4c059490", "#357ECD90", "#24C44290", "#E5E33F90", "#E57C90", "#CE141F90", "#0602E790", "#CA14CE90"];


// EVENTS

// FUNCTIONS
    
    // function firstNamee(){
    //    let firstName = document.querySelector("#first-name");
    //     let stephenna = firstName.innerText.split('');
    //     let spans = [];

    //     for(let i = 0; i < stephenna.length; i++){
    //         let colors = colorArr[Math.floor(Math.random() * colorArr.length)];
    //         let span = "<span style='color: " + colors + ";'>" + stephenna[i].toUpperCase() + "</span>";

    //         spans.push(span);
    //     }

    //     firstName.innerHTML = spans.join('');
    // }
        
        

    // function middleName(){
    //         const midName = document.querySelector('#middle');
    //         const jemae = midName.innerText.split('');
    //         const midSpan = [];
        
    //         for(let i = 0; i < jemae.length; i++){
    //             let colors = colorArr[Math.floor(Math.random() * colorArr.length)];
    //             let span = "<span style='color:" + colors + ";'>" + jemae[i].toUpperCase() "</span>";
;
    //             midSpan.push(span);
    //         }
    //         midName.innerHTML = midSpan.join('');
        
    // }

    function navNamecolor(){
        let firstName = document.querySelector('.first-ab');
        let fNameArr = firstName.innerText.split('');
        // console.log(fNameArr);
        let span = [];

        for(let value of fNameArr){
            console.log(value)
            // for(let colorValue of colorArr ){
            //     // console.log(colorArr)
            //     let last = colorValue -1;
            //     if(value.indexOf() == colorValue.indexOf()){
            //         let spanned = "<span style='color:" + colorValue + ";'>" + value + "</span>"
            //         span.push(spanned)
            //     }
            // }

            let spanned = "<span style='color:" + colorArr[0] + ";'>" + value[0  ] + "</span>"
                    span.push(spanned)
            
        }
        firstName.innerHTML = span.join('');
    }  



// CALLS

// firstNamee();
// middleName();
navNamecolor();