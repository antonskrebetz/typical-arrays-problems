
exports.min = function min (array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    if (array.length) {
        let min = array[0];
        for (i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
}

exports.max = function max (array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    if (array.length) {
        let max = array[0];
        for (i = 0; i < array.length; i++) {
            if(array[i] > max) {
            max = array[i];
            }
        }
    return max;
    }
}

exports.avg = function avg (array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    if (array.length) {
        let avg = 0;
        for(i = 0; i < array.length; i++) {
            avg += array[i]; 
        }
        return avg / array.length;
    }
}