// cars : write a function that store information about a car in a object.the function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword aruguments. call the function with the required information and two other name-value pairs, such as a color or an optional feature .print the object that's returned to make sure all the information was stored correctly.

function storecarinfo(manufacturer:string, modelname:string, ...extraoption:{ [key : string]: any}[]){

    const carinfo = {
        manufacturer,
        modelname,
        ...Object.assign({}, ...extraoption),
    }
    return carinfo;
}

let answer =storecarinfo('honda','civic',{color:'black'},{features:['navigation','power window']})
console.log(answer)