import { clearElement, log}  from './common.js';

//
// HTML event callbacks
//

document.getElementById('button-demo-equality-operator').onclick = function() {
    clearElement('output');
    equalityOperatorDemo();
};

document.getElementById('button-demo-identity-operator').onclick = function() {
    clearElement('output');
    identityOperatorDemo();
};

document.getElementById('button-demo-spread-operator-properties').onclick = function() {
    clearElement('output');
    spreadOperatorOnPropertiesDemo();
};

//
// Core functions
//


function equalityOperatorDemo() {
    log(`' ' == 0: ${'' == 0}`);
    log(`0 == ' ':${0 == ''}`);
    log(`' ' == '0': ${'' == '0'}`);
    log(`'0' == ' ':${'0' == ''}`);

    function f(arg1) {
        log(`arg1 = ${arg1}`);

        if (arg1) {
            log('if (arg1) is true');
        }

        if (arg1 != null) {
            log('if (arg1 != null) is true');
        } else {
            log('if (arg1 == null) is true');
        }

        if (arg1 != undefined) {
            log('if (arg1 != undefined) is true');
        } else {
            log('if (arg1 == undefined) is true');
        }

        if (arg1 !== null) {
            log('if (arg1 !== null) is true');
        } else {
            log('if (arg1 === null) is true');
        }

        if (arg1 !== undefined) {
            log('if (arg1 !== undefined) is true');
        } else {
            log('if (arg1 === undefined) is true');
        }
    }

    log('f()');
    // It is possible to call a function which has parameters in its signature and not pass any arguments!
    // All parameters will become undefined.
    f();

    // f(undefinedVar); // undefinedVar is not defined

    const o = { 'a' : 1 };
    log('o = { "a" : 1 }');
    if (o.a) {
        log('if (o.a) is true');
    } else {
        log('if (o.a) is false');
    }

    if (o.b) {
        log('if (o.b) is true');
    } else {
        log('if (o.b) is false');
    }

    log('f(o.b)');
    f(o.b);

    const o2 = null;
    log('o2 = null');
    // if (o2.a) { // TypeError: Cannot read property 'a' of null
    //     log(`if (o2.a) is true`);
    // } else {
    //     log(`if (o2.a) is false`);
    // }

    log('f(o2)');
    f(o2);
}

function identityOperatorDemo() {

    log(`null == undefined: ${null == undefined}`);
    log(`null === undefined: ${null === undefined}`);
    
    // log(`undefinedVar === undefined: ${undefinedVar === undefined}`); // ReferenceError: undefinedVar is not defined
    const o = { 'a' : 1 };
    log(`o.b === undefined: ${o.b === undefined}`);

    // typeof accepts undeclared variables
    log(`typeof undefinedVar: ${typeof undefinedVar}`);

    // typeof operator returns string!
    log(`typeof undefinedVar === undefined: ${typeof undefinedVar === undefined}`); // false
    log(`typeof undefinedVar === 'undefined': ${typeof undefinedVar === 'undefined'}`); // true

    let a;
    log('let a;');
    log(`a == undefined: ${a == undefined}`);
    log(`a === undefined: ${a === undefined}`);
    log(`a == null: ${a == null}`);
    log(`a === null: ${a === null}`);

    let b = null;
    log('let b = null;');
    log(`b == undefined: ${b == undefined}`);
    log(`b === undefined: ${b === undefined}`);
    log(`b == null: ${b == null}`);
    log(`b === null: ${b === null}`);

    let c = undefined;
    log('let c = undefined;');
    log(`c == undefined: ${c == undefined}`);
    log(`c === undefined: ${c === undefined}`);
    log(`c == null: ${c == null}`);
    log(`c === null: ${c === null}`);
}

// TODO: spread operator
// https://zendev.com/2018/05/09/understanding-spread-operator-in-javascript.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
function spreadOperatorOnPropertiesDemo() {
    let a = 1;
    let b = 2;
    let c = {
        x: 3,
        y: 4
    };

    let aggregateObject = {a, b, ...c};
    log(`aggregateObject = ${JSON.stringify(aggregateObject)}`);
    // output: aggregateObject = {"a":1,"b":2,"x":3,"y":4}
    // This is something similar like flattening multidimensional objects into a 1-D list.

    // What happens if some of expanded objects has propertes with the same names as some of the previous variables
    // added to the aggegate?
    let d = {
        a : 3,
        b: 4
    };

    let aggregateObject2 = {a, b, ...d};
    log(`aggregateObject2 = ${JSON.stringify(aggregateObject2)}`);
    // Values are overwritten!
    // aggregateObject2 = {"a":3,"b":4}
}