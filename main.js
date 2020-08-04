function ex1() {
    for(let i = 1; i <= 20; i++) {
        console.log(i);}
}

function ex2() {
    for(let i = 1; i <= 20; i++) {
        if(i%2)
        console.log(i);}
}
function ex3(arr) {
    let res = 0;

    for(let i = 0; i < arr.length; i++) {
        res = res+arr[i];
    }

    return res;
}

function ex4(arr) {
    let m = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i]>m) {
            m=arr[i];
        }
    }
    return m;
}

function ex5(arr, e) {
    let o = 0;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i]==e) {
            o=o+1;
        }
    }
    return o;
}

function ex6() {
   
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++){
            console.log((i*4+j)%2);
        }
    }
}



console.log("ex1");
ex1();
console.log("ex2");
ex2();
console.log("ex3");
let arr1 = [1, 2, 3,1];
console.log(ex3(arr1));

console.log("ex4");
let arr2 = [1, 2, 3,100,300];
console.log(ex4(arr2));

console.log("ex5");
let arr3 = [1, 2, 3,1,300];
console.log(ex5(arr3,1));

console.log("ex6");
ex6();
