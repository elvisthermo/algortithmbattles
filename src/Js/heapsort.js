const heapSort=(array)=> {
    // Build our max heap.
    buildMaxHeap(array);
    // Find last element.
    lastElement = array.length - 1;

    // Continue heap sorting until we have
    // just one element left in the array.
    while(lastElement > 0) {
        swap(array, 0, lastElement);

        heapify(array, 0, lastElement);

        lastElement -= 1
    }
    return array;
}

const buildMaxHeap=(array)=> {
    let i;
    i = array.length / 2 - 1;
    i = Math.floor(i);

    // Build a max heap out of
    // all array elements passed in.
    while (i >= 0) {
        heapify(array, i, array.length);
        i -= 1;
    }
}

const heapify=(heap, i, max)=> {
    let index, leftChild, righChild;

    while(i < max) {
        index = i;

        leftChild = 2*i + 1;
        righChild = leftChild + 1;

        if (leftChild < max && heap[leftChild] > heap[index]) {
            index = leftChild;
        }

        if (righChild < max && heap[righChild] > heap[index]) {
            index = righChild;
        }

        if (index == i) {
            return;
        }

        swap(heap,i, index);

        i = index;
    }
}

const swap=(array, firstItemIndex, lastItemInde)=> {
    let tmp = array[firstItemIndex];

    // Swap first and last items in the array.
    array[firstItemIndex] = array[lastItemInde];
    array[lastItemInde] = tmp;
}

export default heapSort;
