// Add your functions here
const map = (sourceArr, func) => {
    const newArr = [];
    for (let i = 0; i < sourceArr.length; i++) {
        newArr.push(func(sourceArr[i]));
    }
    return newArr;
}

const reduce = (sourceArr, func, startingValue) => {
    let memo = startingValue;
    for (let i = 0; i < sourceArr.length; i++) {
        if (i === 0 && !memo) {
            memo = sourceArr[i];
        } else {
            memo = func(sourceArr[i], memo);
        }
    }
    return memo;
}
