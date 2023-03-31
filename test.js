// let markHeight = 1.7;
// let markWeight = 78;
// let johnHeight = 1.95;
// let johnWeight = 95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// console.log(markBMI, johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);


// const firstName = 'Julius';
// const job = 'marketer';
// const birthYear = 1990;
// const currentYear = 2030;

// const julius = "I'm " + firstName + ', a ' + (currentYear-birthYear)
// + ' year old ' + job + '!';
// console.log(julius);

// const juliusnew = `I'm ${firstName}, a ${(currentYear - birthYear)} year old ${job}!`;
// console.log(juliusnew);

// console.log(`Back ticks are actually a great choice & helps avoid confusion`);

// console.log(`Strings
// with multiple
// lines are cool
// `)

// const averageDoplhins = (109+ 109 + 99)/3
// const averageKaolas = (109 + 98 + 110)/3

// if(averageDoplhins > averageKaolas && averageDoplhins >= 100){
//     console.log('Dolphins are the champions')
// }else if(averageKaolas > averageDoplhins && averageKaolas >= 100){
//     console.log('Kaolas are the champions')
// }else if(averageDoplhins === averageKaolas && averageDoplhins >= 100 && averageKaolas >= 100){
//     console.log('Its a draw, stand down!!!')
// }else{
//     console.log('Theres no winner')
// }


// const day = 'monday'

// switch (day){
//     case 'monday':
//         console.log('plan course structure');
//         console.log('go to library');
//         break;
//     case 'tuesday':
//     case 'wednesday':
//     case 'thursday':
//         console.log('go to work')
//         break
//     case 'friday':
//         console.log('day off')
//         break
//     // default:
//     //     console.log('Invalid day entered!!')
//     }



// const days = 'wednesday'
// if(days === 'monday'){
//     console.log('plan course structure & go to library')
// }else if(days === 'tuesday' || days === 'wednesday' || days === 'thursday'){
//     console.log('go to work')
// }else if(days === 'friday'){
//     console.log('go to work')
// }else{
//     console.log('Invalid day entered, try lower case!!!')
// }

// let drink;

// if (age >= 18){
//     drink = 'wine🍷'
// }else{
//     drink = 'water💦'
// }


// const bill = 275
// let tip
// if (bill >= 50 && bill <= 300){
//     tip = bill * 0.15
//     console.log(bill + tip)
// }else{
//     tip = bill * 0.2
//     console.log(bill + tip)
// }

// const bill = 300
// const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
// console.log(tip + bill)

// let age;
// function checkAge(age){
//     if(age >= 18){
//         return true;
//     }else{
//         return confirm('Do you have permission from your parents?')
//     };
// };

// age = prompt('how old are you?');
// if (checkAge(age)){
//     alert(' Access granted');
// }else{
//     alert('Access Denied');
// };


// function fruitProcessor(banana, pineapple){
//     const juice = `The juice was made with ${banana} bananas and ${pineapple} pineapples`
//     return juice;
// }

// let result = fruitProcessor(2, 3);
// console.log(result);


// function marry(man, woman){
//     const marriage = `This wedding is between ${man} and ${woman}`;
//     return marriage;
// }

// const res = marry('Aderonke', 'Habeeb');
// console.log(res);



// function declaration
// function calcAge(birthYear){
//     let currentYear = 2023;
//     return currentYear - birthYear;
// }

// let result = calcAge(1998);
// console.log(result);



// // function expression
// const $calcAge = function(birthYear){
//     return 2023 - birthYear;
// }

// let res = $calcAge(1998);
// console.log(res);


// const $calcAge1 = birthYear => 2023 - birthYear;
// let res1 = $calcAge1(1998);
// console.log(res1);

// const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

// const avgDolphins= calcAverage(85,54,41);
// const avgKaolas = calcAverage(23,34,27);
// console.log(avgDolphins, avgKaolas);


// function checkWinner(avgDolphins, avgKaolas){
//     if (avgDolphins >= avgKaolas * 2){
//         return `Dolphins win ${avgDolphins} vs ${avgKaolas}`;
//     }else if( avgKaolas >= avgDolphins * 2){
//         return`Kaolas win ${avgKaolas} vs ${avgDolphins}`;
//     }else{
//         return`There's no winner, try next time !!`;
//     };
// };

// const winner = checkWinner(avgDolphins,avgKaolas);
// console.log(winner);

//ARRAYS

// const staff = ['Ayo', 'Julius', 'Ajoke'];
// console.log(staff);

// //add elements
// staff.push('Samuel');// adds element to the end of the array
// console.log(staff);

// staff.unshift('Aderonke');// adds element to the beginning of the array.
// console.log(staff);


// //remove elements
// staff.pop(); // removes the last element in the array
// console.log(staff);

// staff.shift();// removes the first element in the array
// console.log(staff);


const student = {
    name : 'Samuel',
    course : 'Computer Science',
    level : '400',
    tech : 'JavaScript',
}

console.log(student[`course`])


const mark = {
    fullname : 'Mark Spencer',
    mass : 78,
    height : 1.69,

    calcBMI : function(){
        this.resultBMI = this.mass / this.height * 2;
        return this.resultBMI;
    },

}


const john = {
    fullname : 'John Every',
    mass: 92,
    height : 1.96,

    calcBMI : function(){
        this.resultBMI = this.mass/ this.height * 2;
        return this.resultBMI;
    }
}


console.log(mark.calcBMI())
console.log(john.calcBMI())

// const final = `${mark.calcBMI()} > ${john.calcBMI()} ? console.log(John's BMI (${john.resultBMI}) is higher than Mark's BMI (${mark.resultBMI}): Mark's BMI (${mark.resultBMI}) is higher than John's BMI (${john.resultBMI})`;
// console.log(final);


if(mark.resultBMI > john.resultBMI){
    console.log("Mark has a higher BMI than John")
}else{
    console.log('John has a higher BMI than Mark')
}