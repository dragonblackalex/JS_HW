//Task 1


const arr = ['Vasya', 'Petya', 'Alexey'];

const removeUser = (arr, i) => arr.splice(i, 1);

removeUser(arr, 1);
console.log(arr); /// ['Vasya', 'Alexey']

//Task 2

const obj = { name: 'Vasya', age: 1};

const getAllKeys = (obj) => Object.keys(obj);

console.log(getAllKeys(obj)); /// ["name", "age"]

// Task 3


const getAllValues = (obj) => Object.values(obj);

console.log(getAllValues(obj)); /// ["Vasya", 1]

// Task 4


const obj1 = {
    id: 3,
    name: 'Vasya'
};

const arr1 = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

const insertIntoarr = (obj, id, arr) => {
    const i = arr.findIndex((e) => e.id === id);
    return arr.splice(i, 0, obj);
};

insertIntoarr(obj1, 2, arr1);
console.log(arr1);

//Task 5


class Condidate {
    constructor(obj) {
        Object.assign(this, obj);
    }

    state() {
        return this.address.split(', ')[2];
    }
}

const condidate = new Condidate(condidateArr[0]);
console.log(condidate.state());

// Task 6


const getCompanyNames = (arr) => {
    const result = [];
    arr.forEach((obj) => result.push(obj.company));
    return result.filter((e, i, a) => i === a.indexOf(e));
}

const arr2 = [
    {
        id: 1,
        name: 'Kolya',
        company: 'Sony'
    },
    {
        id: 2,
        name: 'Petya',
        company: 'Apple'
    },
    {
        id: 3,
        name: 'Vasya',
        company: 'Apple'
    },
];

console.log(getCompanyNames(arr2));
console.log(getCompanyNames(condidateArr));

// Task 7


const getUsersByYear = (year, arr) => {
    const result = [];
    arr.forEach((obj) => {
        if (obj.registered.slice(0, 4) === year.toString()) {
            result.push(obj._id);
        }
    });
    return result;
}

console.log(getUsersByYear(2017, condidateArr));

// Task 8


const getCondidatesByUnreadMsg = (number) => {
    return condidateArr.filter((obj) => obj.greeting.split(' ')[5] === number.toString());
}

console.log(getCondidatesByUnreadMsg(4));

// Task 9


const getCondidatesByGender = (gender) => {
    return condidateArr.filter((obj) => obj.gender === gender);
}

console.log(getCondidatesByGender('male'));

// Task 10


Array.prototype.cReduce = function(callback, acc) {
    acc = acc === undefined ? 0 : acc;
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
}

const reduceResult = [1, 2, 3, 4, 5].cReduce((a, b) => a + b);
console.log(reduceResult);

Array.prototype.cJoin = function(separator) {
    separator = separator === undefined ? ',' : separator;
    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += this[i];
        if (i < this.length - 1) {
            result += separator;
        }
    }
    return result;
}

const joinResult = [1, 2, 3, 4, 5].cJoin('');
console.log(joinResult);