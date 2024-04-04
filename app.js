// 1 task

const CostNumber = 10;
if (CostNumber % 3 === 0) {
    console.log("fizz");
} else if (CostNumber % 5 === 0) {
    console.log("buzz");
} else if (CostNumber % 5 === 0 && CostNumber % 5 === 0) {
    console.log("Fizzbuzz");
} else {
    console.log(CostNumber);
}

// 2 task

function buManzara(width, height) {
    let result;
    if (width > height) {
        result = "Ha Bu Manzara";
    } else {
        result = "Yoq Bu Manzara emas";
    }
    return result;
}
console.log(buManzara(500, 100));

// 3- task

function MaxTwoNumbers( numberone,numbertwo) {
    let maxCount;
    if (numberone > numbertwo) {
        maxCount = numberone;
    }
    else {
        maxCount = numbertwo;
    }
    return maxCount;
}
console.log(MaxTwoNumbers(5,10))
