import insertionSort from './insertionSort';

const bucketSort = (list,bucketCount)=>{
    let min = Math.min.apply(Math,list),
        buckets = [],
        bucket_count = bucketCount || 200

    for(let i = 0;i<list.length;i++){
        let newIndex = Math.floor( (list[i] - min) / bucket_count );

        buckets[newIndex] = buckets[newIndex] || []
        buckets[newIndex].push(list[i])
    }

    let idx = 0;
    for(let i = 0;i<buckets.length;i++){
        if(typeof buckets[i] !== "undefined"){
            insertionSort(buckets[i]);
            for(let j = 0;j<buckets[i].length;j++){
                list[idx++] = buckets[i][j]
            }
        }
    }
    return list
}

export default bucketSort;
