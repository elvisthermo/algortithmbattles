import insertionSort from './insertionSort';

const shellSort =(arr)=> {
    let increment = arr.length / 2; // increment is arbitrary
    while(increment >= 1) {
        for(let startIndex = 0; startIndex < increment; startIndex++) {
            insertionSort(arr, startIndex, increment);
        }

        increment = Math.floor(increment / 2);
    }
    return arr;
}

const swap=(arr, i, j)=> {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export default shellSort;


