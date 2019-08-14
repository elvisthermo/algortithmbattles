import data10 from '../data/data10';
import data100 from '../data/data100';
import data1000 from '../data/data1000';
import data5000 from '../data/data5000';
import data10000 from '../data/data10000';

function swicthArray(array){
    switch (array) {
        case '10':
            return data10.data;
        case '100':
            return data100.data;
        case '1000':
            return data1000.data;
        case '5000':
            return data5000.data;
        case '10000':
            return data10000.data;
        default:
            break;
    }

}

export default swicthArray;
