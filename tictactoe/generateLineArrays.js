let downArrays = () => {
    let i; 
    let numArray = []
    for (i = 0; i < 9; i++){
        numArray.push(i)
    }
    let lineArray = []
    numArray.forEach(number => {
        lineArray.push([number, number+9, number+(9*2)])
    });
    console.log(lineArray)
}

let diagArrays = () => {
    let i; 
    let numArray = []
    for (i = 0; i < 9; i++){
        numArray.push(i)
    }
    let lineArray = []
    let decrementor = 14
    numArray.forEach(number => {
        decrementor = decrementor-1
        lineArray.push([number, number+decrementor, number+(decrementor*2)])
    });
    console.log(lineArray)

}
