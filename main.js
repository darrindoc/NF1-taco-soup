
/*
//Harry Potter

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

let i = 0;

while( i < harryPotterTitles.length){
    console.log(harryPotterTitles[i]);
    i++;
}




//Grades

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for(var i = 0; i < grades.length; i++){
    if(grades[i] >= 0 && grades[i] < 69){
    console.log("You got an F.")
} else if(grades[i] >= 70 && grades[i] < 76){
    console.log("You got a D.")
} else if(grades[i] >= 76 && grades[i] < 84){
    console.log("You got a C. ")
} else if(grades[i] >= 84 && grades[i] < 92){
    console.log("You got an B.")
} else if(grades[i] >= 92 && grades[i] <= 100){
    console.log("You got an A.")
}
}




//Grades Part 2

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

let gradesCount = {
    "F" : 0,
    "D" : 0,
    "C" : 0,
    "B" : 0,
    "A" : 0,
};

for(var i = 0; i < grades.length; i++) {
    if (grades[i] >0 && grades[i] < 69){
        gradesCount["F"]++;
} else if (grades[i] >= 70 && grades[i] < 76){
    gradesCount["D"]++;
} else if (grades[i] >= 77 && grades[i] < 84){
    gradesCount["C"]++;
} else if (grades[i] >= 85 && grades[i] < 92){
    gradesCount["B"]++;
} else if (grades[i] >= 93 && grades[i] <= 100){
    gradesCount["A"]++;
}
}

//console.log(`In this class, there were ${gradesCount.A} A's, ${gradesCount.B} B's, ${gradesCount.C} C's, ${gradesCount.D} D's, and ${gradesCount.F} F's.`)
console.log(`The most common letter grade in this class was ${(Math.max(gradesCount.A, gradesCount.B, gradesCount.C, gradesCount.D, gradesCount.F))}`)

*/

//2-4-6-8

// let appreciate = 0;

// while(appreciate < 8){
//     appreciate += 2;
//     console.log(`${appreciate}, `);
// }

// console.log("Who do we appreciate?")

// let val= [];

// for (let i = 2; i < 9; i += 2){
//     val = val + i+ ",";
// }
 
// console.log(val + " " + "Who do we appreciate!?");

//Interrupting Cow

// var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// for(var i = 0; i < sentenceArray.length; i++){
//     if ((i+1) % 3 === 0){
//         console.log(sentenceArray[i]);
//         console.log("MOOOOO")
//     }
//     else console.log(sentenceArray[i]);
// }

// var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// let interruptingCow = "MOOOOOO"
// let modifiedSentenceArray = []

// for(let i = 0; i < sentenceArray.length; i++){
//     modifiedSentenceArray.push(sentenceArray[i]);
    
//     if ((i + 1) % 3 === 0 && i !== sentenceArray.length - 1){
//         modifiedSentenceArray.push(interruptingCow);
//     }
// }

// console.log(modifiedSentenceArray.join(" "));


const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[0].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[0].birth}. He contributed heavily to the ${beatles.albums[0]} Album. ${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[1]} Album. ${beatles.members[2].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[2].birth}. He contributed heavily to the ${beatles.albums[2]} Album. ${beatles.members[3].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[3].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`) 
