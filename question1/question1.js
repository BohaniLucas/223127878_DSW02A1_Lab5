

// document.addEventListener("DOMContentLoaded" , ()=>{

//     const cars = [
//         {
//             name:"E36 M3",
//             make:"BMW",
//             image: "BMW.webp",
//             type:"Old School"
//         },
//         {
//             name:"GTI 8",
//             make:"VW",
//             image: "gti.jpg",
//             type:"SPORT CAR"
//         },
//         {
//             name:"MUNSTAGNG",
//             make:"FORD",
//             image: "horse.webp",
//             type:"SPORT CAR"
//         },
//         {
//             name:"LANDCRUISER",
//             make:"TOTOTA",
//             image: "landCruiser.jpg",
//             type:"MOUNTAIN CLIMBER"
//         },
//         {
//             name:"AMG C63",
//             make:"MERCEDES",
//             image: "mercedes.jpg",
//             type:"ALL MONEY GONE"
//         },
//         {
//             name:"GT 911",
//             make:"PORCHE",
//             image: "porche.webp",
//             type:"CLASSIC"
//         },
        
//     ]  
    
//     const carName = document.getElementById("car-name");

//     const carType = document.getElementById("car-type");

//     const image = document.getElementById("car-img");

//     //This will add the values to the options!!!!!
//     const list = document.getElementById("make-list");

    // for(let i = 0 ; i  < cars.length ; i ++){
    //     const options = document.createElement("option");
    //     let eachCar = cars[i];
    //     console.log(eachCar , "EACHCAR");
    //     options.innerHTML = eachCar.make;
    //     list.appendChild(options);
    // }

//     //Now I need to display the imgage
//     let count = 0;

//     const  showImage = ()=>{
        
//         let eachCar = cars[count];
 
//         carName.textContent = eachCar.name;
//         carType.textContent = eachCar.type;
//         image.src = eachCar.image;

//         count++;

//         if(count === cars.length){
//             count = 0;
//         }

//     }

//     showImage(count);

//     setInterval(()=>{
//         showImage();
//     } , 10000)

//     const guessBTN  = document.getElementById("guess-btn");

//     let correctGuesses = 0;

//     const correct = document.getElementById("correct");

//     let totalGuesses = 0;

//     const total = document.getElementById("total");

//     guessBTN.addEventListener("click" , ()=>{

//         const value =  document.getElementById("make-list").value;

//         const imageFrom = document.getElementById("car-img");

//         // console.log(imageFrom);

//         console.log(imageFrom.src);

//         for(let i = 0 ; i < cars.length ; i++){

//             let eachImage = cars[i];

//             if(eachImage.make === value && imageFrom.src.includes(eachImage.image)){
//                 correctGuesses++;
//                 correct.textContent = correctGuesses;
//             }
//         }

//         totalGuesses++;
//         total.textContent = totalGuesses;

//     })

// })


//The code above was displaying the cars randomly I skipped the requirements!!!!

document.addEventListener("DOMContentLoaded", () => {

    const img = document.querySelector("img");

    img.style.width = "400px";
    img.style.height ="250px";

    //This is object will store the cars
    const cars = [

        { name: "507 Roadster", make: "BMW", image: "bmwVintage.webp", type: "CARS" }, //BMW

        { name: "Beetle", make: "VW", image: "vwVintage.jpg", type: "CARS" }, //VW

        { name: "MUNSTAGNG", make: "FORD", image: "fordVintage.jpg", type: "CARS" }, //FORD

        { name: "Toyopet Crown ", make: "TOYOTA", image: "toyotaVintage.jpg", type: "CARS" }, //TOYOTA

        { name: "100 Coupe S ", make: "AUDI", image: "audiVintage.jpg", type: "CARS" },//AUDI

        { name: "W108/W109", make: "MERCEDES", image: "mercVintage.jpg", type: "CARS" },//MERC

        { name: "Spider (Duetto)", make: "ALFA ROMEO", image: "alfaRomeo.jpg", type: "CARS" },//ALFA ROMEO

        { name: "250 GT California Spider", make: "FERRARI", image: "ferrari.jpg", type: "CARS" },//FERRARI
    
    ];

    const carName = document.getElementById("car-name");

    const carType = document.getElementById("car-type");

    const image = document.getElementById("car-img");

    const list = document.getElementById("make-list");

    const guessBTN = document.getElementById("guess-btn");

    const correct = document.getElementById("correct");

    const total = document.getElementById("total");

    let currentCar;

    let correctGuesses = 0;

    let totalGuesses = 0;


    // Populate dropdown with value attributes
    for(let i = 0 ; i  < cars.length ; i ++){

        const options = document.createElement("option");

        let eachCar = cars[i];

        console.log(eachCar , "EACHCAR");

        options.innerHTML = eachCar.make;

        list.appendChild(options);
    }

    // This function will Show a random car
    const showCar = () => {
        let randomIndex = Math.floor(Math.random() * cars.length);

        currentCar = cars[randomIndex];

        carName.textContent = currentCar.name;

        carType.textContent = currentCar.type;

        image.src = currentCar.image;

        image.classList.remove("hidden");  

        guessBTN.removeAttribute("disabled"); 
    };

    showCar(); //This will display the picture when the page loads


    guessBTN.addEventListener("click", () => {

        guessBTN.setAttribute("disabled", true); 

        const value = list.value;

        if (currentCar.make === value) { 

            correctGuesses++;

            correct.textContent = correctGuesses;

        }

        totalGuesses++;

        total.textContent = totalGuesses;

        showCar(); 
    });

});
