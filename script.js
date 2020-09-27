// Text Colors
const colorArr = [
    "#4c059490", "#357ECD90", "#24C44290", "#E5E33F90", "#E57C90", "#CE141F90", "#0602E790", "#CA14CE90"];





    
    function firstName(){
        let firstName = document.querySelector("#first-name");
        let stephenna = firstName.innerText.split('');
        let spans = [];

        for(let i = 0; i < stephenna.length; i++){
            let colors = colorArr[Math.floor(Math.random() * colorArr.length)];
            let span = "<span style='color: " + colors + ";'>" + stephenna[i].toUpperCase() + "</span>";

            spans.push(span);
        }

        firstName.innerHTML = spans.join('');
        }
        
        firstName();

    function middleName(){
            const midName = document.querySelector('#middle');
            const jemae = midName.innerText.split('');
            const midSpan = [];
        
            for(let i = 0; i < jemae.length; i++){
                let colors = colorArr[Math.floor(Math.random() * colorArr.length)];
                let span = "<span style='color:" + colors + ";'>" + jemae[i].toUpperCase();
                midSpan.push(span);
            }
            midName.innerHTML = midSpan.join('');
        
        }

        middleName()

