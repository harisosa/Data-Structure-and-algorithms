const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length
    for(let i =0;i<length;i++){
        let red = 0
        for(let j = 0; j< length;j++){
            const current = array[j]
            if(current <= red){
                red = array[j]
                array.splice(j,1)
                array.unshift(red)
            }
        }
       
    }
}

selectionSort(numbers);
console.log(numbers);