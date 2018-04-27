/**
 * 编写一个函数，获取给定数组(unsort)中任意两个值求和的最大值。
 *
 * @param {Array} arr
 * @return {String}
 * @example
 */

//解法一：先从大到小排好序，取第一和第二两数的和
function getMaxFromArr (arr) {
    if (arr.length < 2) throw new Error('输入数组的长度必须大于等于2');
    //排序
    arr = quickSort(arr);
    return arr[0] + arr[1] + '';

    //快速排序，分治思想，递归地把数组拆分成左右两个数组。排序成左边的 > 基准点 > 右边的。左边的元素就不用和右边的元素比较。
    function quickSort (arr) {
        if (arr.length <= 1) return arr; //分治直至只剩一个元素

        var pivotIndex = Math.floor( arr.length / 2 );
        var pivot = arr[ pivotIndex ];  //基准值
        var leftArr = [], rightArr = [];
        //按大小分组
        for (var i = 0; i < arr.length; i++ ) {
            if ( i !== pivotIndex ) {
                if ( arr[i] > pivot ) {
                    leftArr.push( arr[i] );
                } else {
                    rightArr.push( arr[i] );
                }
            }
        }
        return quickSort( leftArr ).concat( [pivot] ).concat( quickSort(rightArr) );
    }
    function bubbleSort(arr) {
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i; j++) {
                if (arr[j] > arr[j+1]) {
                    arr[j] = arr[j] - arr[j+1];
                    arr[j+1] = arr[j+1] + arr[j];
                    arr[j] = arr[j+1] - arr[j];
                }
            }
        }
        return arr;
    }

    function selectSort(arr) {
        var maxIndex = 0;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length - i; j++) {
                if (arr[j] > arr[maxIndex]) {
                    maxIndex = j;
                }
            }
            if (maxIndex !== arr.length - 1 - i) {
                arr[maxIndex] = arr[maxIndex] - arr[arr.length - 1 - i];
                arr[arr.length - 1 - i] = arr[arr.length - 1 - i] + arr[maxIndex];
                arr[maxIndex] = arr[arr.length - 1 - i] - arr[maxIndex];
            }
            maxIndex = 0;
        }
        return arr;
    }
}

//解法二：找出数组中最大的两个数，两个最大的数相加，和最大
function getMaxFromArr (arr) {
    if (arr.length < 2) throw new Error('输入数组的长度必须大于等于2');
    
    var first = arr[0], second = arr[1]; //最大的数和第二大的数

    for (var i = 0; i < arr.length; i++ ) {
        if ( arr[i] > first ) { //如果有新的最大的数，则改变first和second;
            second = first;
            first = arr[i];
        } else {    
            if ( arr[i] > second ) { //不是新的最大的数，但有可能是新的第二大的数
                second = arr[i];
            }
        }
    }
    
    return first + second + '';
}

//解法三：用数组的reduce方法
function getMaxFromArr (arr) {
    var first, second, maxIndex=0;
    if (arr.length < 2) throw new Error('输入数组的长度必须大于等于2');

    //找出最大值
    //accum初始化为数组第一个，cur为第二个
    first = arr.reduce( function(accum, cur, curIndex) {
        if (cur > accum) {
            maxIndex = curIndex;
            return cur;
        } else {
            return accum;
        }
    });
    arr.splice(maxIndex, 1); //去掉最大值
    //找出第二大的值
    second = arr.reduce( function(accum, cur) {
        if (cur > accum) {
            return cur;
        } else {
            return accum;
        }
    });
    return first + second + '';
}
