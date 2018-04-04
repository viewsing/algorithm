/**
 * 编写一个函数，获取 1 - n 之间的数字总共包含多少个 0。
 *
 * @param {Number} number
 * @return {Number}
 * @example
 *
 * zeroCount(101) => 11
 */

//遍历 1 - n 个数字，转为字符串，计算所有数字的 0 的个数
function zeroCount ( n ) {
    if ( parseInt(n, 10) !== n || n < 1) throw new Error ('输入参数必须为大于等于1的正整数');

    var zeroNum = 0;
    for (var i = 1; i < n; i++ ) {
        var nStr = i + '';
        for (var j = 1; j < nStr.length; j++ ) {
            if ( nStr[j] === '0' ) {
                zeroNum++;
            }
        }
    }
    return zeroNum;
}