/**
 * 编写一个数组去重函数，尽可能的处理不同的数据类型。
 *
 * @param {Array} arr
 * @return {Array}
 *
 * removeDuplicate([1,1,1,2,2,2,3,3,3,'',null,undefined]) => [1,2,3,'',null,undefined]
 */
//解法一：创建一个新数组，遍历旧数组。如果新数组没有该元素，则添加到新数组
function removeDuplicate (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++ ) { //遍历旧数组

        if ( newArr.indexOf(arr[i]) === -1 ) { //indexOf 使用的是 === 比较
            newArr.push( arr[i] );
        }
    }
    return newArr;
}

//解法二：用对象充当哈希表，把数组元素序列化后当作对象的属性,利用对象的属性唯一的特性去重
function removeDuplicate (arr) {
    var hashObject = {}, newArr = [];
    for (var i = 0; i < arr.length; i++ ) {
        var hash = arr[i] + '';
        if ( !hashObject.hasOwnProperty( hash ) ) {
            newArr.push( arr[i] );
            hashObject[hash] = true;
        }
    }
    return newArr;
}

//解法三：双重循环
function removeDuplicate(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j = j - 1;
            }
        }
    }
    return arr;
}
