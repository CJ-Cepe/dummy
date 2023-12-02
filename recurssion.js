//Collatz Conjecture


function collatz(n){
    //base-case 
    if(n === 1)
        return 0

    //recursive-case
    if(n%2 == 0){
        return 1 + collatz(n/2)
    } else {
        return 1 + collatz(3*n+1)
    }
}