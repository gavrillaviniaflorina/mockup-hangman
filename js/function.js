let phrase = "ana are mere";

let correct = "";

let alfabet = '';

let life = 6;

function same(phrase, correct) {
    let partial = "";
    for (let el of phrase) {
        if (correct.includes(el) == false) {
            partial += ' ';
        } else {
            partial += el;
        }
    }
    return partial;
}

function sameDiv() {
    let container = document.querySelector(".container1");
    let partial = "";
    for (let el of phrase) {
        if (correct.includes(el) == false) {
            if (el == " ") {
                partial += `<div class="goala">  </div>`;
            } else {
                partial += `<div >  </div>`;
            }
        } else {
            partial += `<div> ${el}</div>`;
        }
    }
    container.innerHTML = partial;
}

function setHome() {


    let container = document.querySelector('.container');


    container.innerHTML = `
     
    <main class="start">
    <h1>BINE ATI VENIT!</h1>
    <button class="joaca">JOACA!</button>
</main>
    `



    let btn = document.querySelector(".joaca");


    btn.addEventListener("click", () => {

        setPlay(phrase);


    })





}


function setWords() {

    let choice = prompt("Introduceti cuvantul");
    for (let el of choice) {
        phrase += el;
    }
}



function letter(x) {


    if (phrase.includes(x) == true) {


        correct += x;


        let s = same(phrase, correct);






    } else if (phrase.includes(x) == false || correct.includes(x)) {
        life--;


    }
}

function win(value) {


    if ((phrase.includes(value) == false && life == 1)) {
        setLoose();
    } else

    {

        letter(value);
        let final = same(phrase, correct);

        if (phrase == final) {

            setWin();
        }
    }




}



function setLife(life) {
    let container = document.querySelector(".life");
    container.innerHTML = `
       ${createLife(life)}
    `;


}


function setPlay(words = "") {
    life = 6;
    correct = "";
    let container = document.querySelector('.container');

    container.innerHTML = `

    <main>

    <div class="life">
  
    </div>
    
        <h1>Guess!</h1>
        <aside class="container1">

    
        
           ${createDiv(words)}

        </aside>

        <aside class="alfabet">
            ${createAlfabet()}

        </aside>
    </main>
    `



    let alfabet = document.querySelector(".alfabet");


    setLife(life);
    alfabet.addEventListener('click', (e) => {


        let obj = e.target;


        if (obj.tagName == "BUTTON") {

            let value = obj.textContent;

            correct += value;


            console.log(life);
            sameDiv();
            win(value);

            setLife(life);



        }


    });




}

function updateLife(life) {
    let container = document.querySelector(".life");
    let div = "";
    console.innerHTML = `
    ${createLife(life)}
    `;



}


function createUpdate() {
    let container = document.querySelector(".container1");





    let div = "";
    let aux = same(phrase, correct);

    for (let i of phrase) {
        if (correct.includes(i)) {
            div += `<div >  ${i}  </div> `;
        } else {

            if (phrase.charAt(i) == ' ') {
                console.log("test");
                div += `<div  class="goala"> </div>`;
            } else {

                div += `<div> </div>`;
            }
        }




    }



    container.innerHTML = div;
}



function createDiv(words) {

    let div = "";

    for (let i of words) {
        if (i != ' ') {

            div += '<div > </div> ';
        } else {
            div += '<div  class="goala"> </div> ';
        }

    }

    return div;
}

function createLife(life) {
    let noLives = "";
    for (i = 1; i <= life; i++) {
        noLives += ` <img src="../img/life.jpg">`;
    }

    return noLives;
}



function createAlfabet() {
    let div = "";
    for (let i = 97; i <= 122; i++) {
        div += '<button >' + String.fromCharCode(i) + '</button> ';
    }
    return div;
}


function setWin() {

    let container = document.querySelector('.container');

    container.innerHTML = `
    <main class="win">
    <h1>You won!</h1>

    <section>

        <button class="again">Play again!</button>
    </section>
</main>
    `;

    let btn = document.querySelector(".again");


    btn.addEventListener("click", () => {

        setHome();


    })

}

function setLoose() {
    let container = document.querySelector('.container');

    container.innerHTML = `
    
    <main class="loose">
        <h1>You lost!</h1>
        <section>

            <button class="again">Play again!</button>
        </section>

    </main>
    `;

    let btn = document.querySelector(".again");


    btn.addEventListener("click", () => {

        setHome();


    })

}