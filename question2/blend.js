const divSlider = document.createElement("input");
divSlider.type = "range";
divSlider.id="SizeSlider";


const divSliderText = document.createElement("p");

divSliderText.textContent = "SIZE OF THE DISPLAY";

const divSliderContainer = document.createElement("div");

divSliderContainer.id = "divSliderID";
divSliderContainer.style.display = "flex";


divSliderContainer.appendChild(divSliderText);
divSliderContainer.appendChild(divSlider);

const div = document.createElement("div"); //This div I will use it to package the button and the h4(GO)

div.style.display = "flex";
div.style.flexDirection = "row"
div.id = "blendButtonContainer";
div.style.gap = "5px";

const h4 = document.createElement("h4");

h4.textContent = "GO:"

const blendButton = document.createElement("button");

blendButton.textContent = "Blend now";
blendButton.style.padding = "2px";
blendButton.style.width = "100px";
blendButton.style.borderRadius = "5px";
blendButton.id = "blendBtn";

blendButton.style.backgroundColor = "lightgreen";

div.appendChild(h4);
div.appendChild(blendButton);

document.body.appendChild(div);

const displayContainer = document.createElement("div"); //This div is what I will use to display the blended surname

displayContainer.id= "letters-container";
displayContainer.style.border = "2px solid orange";
displayContainer.style.width = "500px";
displayContainer.style.height = "200px";
displayContainer.style.margin = "10px";
displayContainer.style.position ="relative"; 

document.body.appendChild(displayContainer);

document.body.insertBefore(divSliderContainer,displayContainer);

const colors = ["black" ,"red","blue","green"]; //This Array will contain the list of the colors

const selectColor = document.createElement("select");

selectColor.id = "theColor";
selectColor.style.margin="10px";
selectColor.style.padding = "2px";


const divSlideSizeContainer = document.createElement("div");

divSlideSizeContainer.id = "sizeSlide";
divSlideSizeContainer.style.display = "flex";
// div.style.flexDirection = "column";

const sizeP = document.createElement("p");

sizeP.textContent = "LETTER SIZE";

const sizeSlider = document.createElement("input");

sizeSlider.id ="sizeAdjusting";
sizeSlider.type ="range";
sizeSlider.id="sizeAd"

divSlideSizeContainer.appendChild(sizeP);
divSlideSizeContainer.appendChild(sizeSlider);

document.body.insertBefore(divSlideSizeContainer,displayContainer);

const theFont = document.getElementById("font");

const parent = theFont.parentNode; //I'm getting the parent element of the font to insert the dropdown for colors

const divLetterSpacing = document.createElement("div");

divLetterSpacing.id ="letterSpacingDiv";

divLetterSpacing.style.display="flex";

// divLetterSpacing.style.flexDirection="column";

const letterSpacing = document.createElement("input");

letterSpacing.type = "range";

letterSpacing.id="spaceInput";

const pSpacing  = document.createElement("p");

pSpacing.textContent = "Letter Spacing";

divLetterSpacing.appendChild(pSpacing);

divLetterSpacing.appendChild(letterSpacing);

document.body.insertBefore(divLetterSpacing,displayContainer);

//I will throup the colors and then append them to the dropdown
for(let i = 0 ; i < colors.length ; i++){

    let option = document.createElement("option");

    let eachColor = colors[i];

    option.innerHTML = eachColor;

    selectColor.appendChild(option)

    parent.insertBefore(selectColor , theFont);

}

const radioButtons = document.querySelectorAll("[surname='pos']"); //This will return an arrray of the radio buttons that has the attribute name surname with the value pos

console.log(radioButtons);

let lastChecked = "sequential"; //This will store the last checked buttons and sequentila is the default button stored!!

//Now I will loop throug the radioButtons array
for(let i = 0; i < radioButtons.length ; i++){

    let eachRadio = radioButtons[i];

    console.log(eachRadio.checked);

    eachRadio.addEventListener("click" , function(){

        console.log(this , "This"); //this === the radio that is clicked!

        //if the button that was last checked equal to this button then I uncheck it
        if(lastChecked === this.id){

            this.checked = false;

            lastChecked = null; 

            return;
        }

        //This will loop uncheck the other buttons first before checking the clicked button 
        for(let i = 0 ; i < radioButtons.length ; i++){

            radioButtons[i].checked = false;
            
            lastChecked = null;

        }

        this.checked = true;
        lastChecked = this.id;

        console.log(lastChecked , "lastchecked");

    })
}


//function for displaying the word sequential 

const sequential = (word , font , color)=>{

    if(!word){
        alert("Please enter your Surname!!");
        return;
    }

    for(let i = 0 ; i < word.length ; i++){

        let span = document.createElement("span");

        span.textContent = word[i];

        span.style.left = (15 * (i + 1)) + "px";

        span.style.top = (15 * (i + 1)) + "px";

        span.style.position = "absolute"; 

        span.style.fontFamily = font;
        
        span.style.color = color;

        displayContainer.appendChild(span);

    }

}

//function for displaying the word reverse!!!
const reverse = (word, font, color)=>{

    if(!word){
        alert("Please enter your Surname!!");
        return;
    }

    let reversedOutput = "";

    for(let i = 0 ; i < word.length ; i++){
        reversedOutput = word[i] + reversedOutput;
    }

    for(let i = 0; i < reversedOutput.length ; i ++){

        let span = document.createElement("span");

        span.textContent = reversedOutput[i];

        span.style.left = (15 * (i+1)) + "px";

        span.style.top = (15 * (i+1)) + "px";

        span.style.position = "absolute";

        span.style.fontFamily = font;

        span.style.color = color;

        displayContainer.appendChild(span);
    }

}


//function to display the letters random

const randomLetters = (word , font , color)=>{

    if(!word){
        alert("Please enter your Surname!!");
        return;
    }
    
    let words = word.split("");

    for(let i = 0; i < word.length ; i++){

        let randomRumber = Math.floor(Math.random() * words.length);

        let span = document.createElement("span");

        span.style.position = "absolute";

        span.style.left = Math.floor(Math.random() * 300) + "px";

        span.style.top = Math.floor(Math.random() * 100) + "px";

        span.textContent = words[randomRumber];

        span.style.fontFamily = font;

        span.style.color = color;

        words.splice(randomRumber, 1);

        displayContainer.appendChild(span);

    }

}


blendButton.addEventListener("click" , ()=>{

    displayContainer.innerHTML = "";

    const font = document.getElementById("font").value;

    const word = document.getElementById("surname").value;

    const color = document.getElementById("theColor").value;

    if(lastChecked === "sequential"){
        sequential(word , font , color);
    }else if(lastChecked === "random"){
        randomLetters(word , font , color);
    }
    else if(lastChecked === "reverse"){
        reverse(word,font , color);
    }

})

document.getElementById("SizeSlider").addEventListener("input" , (e)=>{

    const displayContainer = document.getElementById("letters-container");

    displayContainer.style.height = 200+ "px";

    displayContainer.style.width = 500 +"px"

    const theValue = e.target.value;

    console.log(theValue);

    
    let lookingForTheHeight = displayContainer.style.height.split("px");

    let heightPx = lookingForTheHeight[0];

    console.log(heightPx);

    console.log(( theValue/100) + "px" , "this is the pix");

    displayContainer.style.height =  heightPx + (theValue + "px");

    let lookingForTheWidth = displayContainer.style.width.split("px");

    let widthPx = lookingForTheWidth[0];

    displayContainer.style.width = widthPx + theValue + "px";
    
})

document.getElementById("sizeAd").addEventListener("input" , (e)=>{

    let value = e.target.value;

    console.log(value);

    const eachSpan = displayContainer.querySelectorAll("span");

    console.log(eachSpan);

    for(let i = 0; i < eachSpan.length ; i++){

        let each = eachSpan[i];

        each.style.fontSize = value + "px";
    }
    
})

document.getElementById("spaceInput").addEventListener("input" , (e)=>{

    let value = e.target.value;

    console.log(value);

    const eachSpan = displayContainer.querySelectorAll("span");

    console.log(eachSpan);

    for(let i = 0; i < eachSpan.length ; i++){

        let each = eachSpan[i];


        each.style.letterSpacing = value + "px";

        console.log(each.style.letterSpacing ,"This is the letter spacing");
    }


})

