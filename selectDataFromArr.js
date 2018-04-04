/**
 * 编写一个函数，从给定的有序列表中选取符合需求的元素：
 * 需求：从 start 开始选，每隔 offset 个选取，总共选择 count 个，若取到数组末尾则从前面循环取。
 *
 * @param {Number} total  总共多少元素，用于生成有序列表
 * @param {Number} start  从哪个开始选
 * @param {Number} offset 每隔多少个选一个
 * @param {Number} count  选取多少个元素
 * @return {Array}
 */
//解法一：通过计算需要多少个total长度的数组，才能使选完所有元素后下标依然不越界。
function selectDataFromArr(total, start, offset, count) {
    //结束位置的下标
    var end = start + count * offset;
    //需要多少个total长度的数组
    var needArrsLen = Math.ceil( (end + 1) / total);

    var i = 0,
        arr = [];
    while (i < needArrsLen) {
        //假设生成一个整数有序列表
        var j = 0;
        while (j < total) {
            arr.push(j);
            j++;
        }
        i++;
    }
    //结果数组
    var retArr = [], index = start; //待取元素的下标
    //取count个
    for (var k = 1; k <= count; k++ ) {
        //找到不为null的位置
        while ( arr[index] == null ) {
            index++;
        }
        //存入结果数组
        retArr.push( arr[index] );
        //移除该位置的元素( 已被添加就不能再添加 );
        var w = index;
        while (w < arr.length) {
            arr[w] = null;
            w += total;
        }
        //计算间隔
        index = start + k * offset
    }
    return retArr;
}
//解法二：根据题意，从start开始取，若取到数组末尾则从前面取，用 % 实现
function selectDataFromArr(total, start, offset, count) {
    var arr = [],
        retArr = [];

    //假设生成一个整数有序列表
    var i = 0;
    while (i < total) {
        arr.push(i);
        i++;
    }
    var j = 1,
        index = start;
    //取count个
    while (j <= count) {
        //找到不为空的位置
        while ( arr[index] == null ) {
            index++;
            //如果超出范围了，则回头开始
            if (index >= arr.length) {
                index = 0;
            }
        }
        //存入结果数组
        retArr.push(arr[index]);
        //移除该位置的元素( 已被添加就不能再添加 );
        arr[index] = null;
        //计算间隔
        index = (start + j * offset) % total;
        j++;
    }
    return retArr;
}
