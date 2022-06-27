
function min(...args) {
    if (args.length > 1) {
        return min(args.map(v => min(v)));
    }

    const [arg] = args;
    if (typeof arg === 'number') {
        return arg;
    }

    if (!Array.isArray(arg)) {
        return min(Object.values(arg));
    }

    return Math.min(...arg);
}



console.log(`args`, min(1, 2));
console.log(`array`, min([1, 2]));
console.log(`object`, min({ a: 1, b: 2 }));
console.log(`objects`, min({ a: 1, b: 2 }, { c: -1, d: 100 }));


// function min(...args) {
//     if (args.length > 1) {
//         return min(args.map(v => min(v)));
//     }

//     let  [arg] = args;
//     if (typeof arg === 'number') {
//         return arg;
//     }

//     if (!Array.isArray(arg)) {
//         return min(Object.values(arg));
//     }

//     return Math.min(...arg);
// }


