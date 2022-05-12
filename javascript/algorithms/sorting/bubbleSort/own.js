const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const max = Math.max(...array)
    const min = Math.min(...array)
    let stop = true
    while(stop){
        for(let i =0; i<= array.length;i++){
            if(i !=array.length){
                if(array[i] > array[i+1]){
                    const temp = array[i]
                    array[i] = array[i+1]
                    array[i+1] = temp
                }
            }
        }

        if(array[array.length-1 ] === max && array[0] === min){
            stop = false
        }
    }

    return array
}

bubbleSort(numbers);
console.log(numbers);