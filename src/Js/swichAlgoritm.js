import bubbleSort from './bubleSort';
import selectionSort from './selectionSort';
import insertionSort from './insertionSort';
import quickSort from './quicksort';
import heapSort from './heapsort';
import countingSort from './coutsort';
import shellSort from './shellsort';
import bucketSort from './bucketsort';
import swicthArray from './swichArray';

function swicthAlgoritm(name,array){
    let times = [];
    const arraylist = swicthArray(array);
    switch (name) {
        case 'BubbleSort':

            for (let i = 0; i < 1; i++) {
                let t0 = Date.now();
                bubbleSort(arraylist);
                let t1 =Date.now();
                times.push('Bubble',t1 - t0);
            }
            return times;
            break;
        case 'SelectionSort':


            for (let i = 0; i < 1; i++) {
                let t0 = Date.now();
                selectionSort(arraylist)
                let t1 =Date.now();
                times.push('Select',t1 - t0);
            }
            return times;
            break;

        case 'InsertionSort':

            for (let i = 0; i < 1; i++) {
                let t0 = Date.now();
                insertionSort(arraylist);
                let t1 =Date.now();
                times.push('Insertion',t1 - t0);
            }
            return times;
            break;
        case 'QuickSort':

            for (let i = 0; i < 1; i++) {
                let t0 = Date.now();
                quickSort(arraylist,0,arraylist.length-1)
                let t1 =Date.now();
                times.push('Quick',t1 - t0);
            }
            return times;

            break;
        case 'HeapSort':

            for (let i = 0; i < 1; i++) {
                let t0 = Date.now();
                heapSort(arraylist)
                let t1 =Date.now();
                times.push('Heap',t1 - t0);
            }
            return times;
            break;
        case 'BucketSort':
            for (let i = 0; i < 1; i++) {
                let t0 = Date.now();
                bucketSort(arraylist)
                let t1 =Date.now();
                times.push('Bucket',t1 - t0);
            }
            return times;


            break;
        case 'CountSort':
            for (let i = 0; i < 1; i++) {
                let t0 = Date.now();
                countingSort(arraylist)
                let t1 =Date.now();
                times.push( 'Count',t1 - t0);
            }
            return times;
            break;
        case 'ShellSort':

            for (let i = 0; i < 1; i++) {
                let t0 = Date.now();
                shellSort(arraylist);
                let t1 =Date.now();
                times.push( 'Shell',t1 - t0);
            }
            return times;
            break;
        default:
            times.push(swicthAlgoritm("BubbleSort",array));
            times.push(swicthAlgoritm("SelectionSort",array));
            times.push(swicthAlgoritm("InsertionSort",array));
            times.push(swicthAlgoritm("QuickSort",array));
            times.push(swicthAlgoritm("HeapSort",array));
            times.push(swicthAlgoritm("BucketSort",array));
            times.push(swicthAlgoritm("CountSort",array));
            times.push(swicthAlgoritm("ShellSort",array));
            return times;
            break;
    }

}

export default swicthAlgoritm;
