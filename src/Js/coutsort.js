const countingSort = (list)=>{
    let bucket = [],idx = 0;

    for(let i = 0;i<list.length;i++){
        bucket[list[i]] = bucket[list[i]] || 0
        bucket[list[i]] ++
    }


    for(let i = 0; i< bucket.length;i++){
         while(bucket[i] && bucket[i] > 0){
            list[idx++] = i;
            bucket[i] --;
        }
    }
    return  list;
}

export default countingSort;
