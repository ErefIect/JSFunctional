const add = (a, b) => a + b;

// rewrite it distributing arguments into multiple levels
const add_currying_1 = a => {
    return b => {
        return a + b;
    }
}

// curry(f) does the currying transform
const curry = f => a => b => f(a, b);
// function curry(f) { 
//     return function(a) {
//         return function(b) {
//             return f(a, b);
//         };
//     };
// }


const add_currying_2 = curry(add);

// Advanced curry implementation
function curry_addvance(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
            return curried.apply(this, args.concat(args2));
        }
      }
    };
  
}

const sum = (a, b, c) => a + b + c;
const sum_currying = curry_addvance(sum);

sum(1)(2, 3);
sum(1)(2)(3); 