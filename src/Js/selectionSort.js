const selectionSort = (inputArr)=> {
    let temp;

    for(let i=0; i<inputArr.length; i++){
        let mi = i;

        for(let j = i + 1; j<inputArr.length; j++) {
            if(inputArr[j] < inputArr[mi])
                mi = j;
        }

        temp = inputArr[i];
        inputArr[i] = inputArr[mi];
        inputArr[mi] = temp;
    }
    return inputArr
};


export default selectionSort;
//
// let arr = [5,3,1,4,6,10,12,29,30];
// let result = insertionSort(arr);
// console.log(result);
