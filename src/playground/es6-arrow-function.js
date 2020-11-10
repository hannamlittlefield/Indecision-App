const square = function (x) {
    return x * x;
};

const squareArrow = (x) => {
return x * x;
};
console.log(squareArrow(9));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}; 
console.log(getFirstName('Mike Smith'));

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName)