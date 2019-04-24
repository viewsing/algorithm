/**
 * 判断给定字符串是否回文
 * @param {String str}
 * @return {Boolean}
 */

//解法一：利用数组的 reverse 方法把字符串反转，反转后的字符串与原字符串相等，即为回文
function isPalindrome (str) {
    var newStr = str.split('').reverse().join('');
    return newStr === str;
}

//解法二：把字符串的第一个字符和最后一个字符，第二个和倒数第二个比较，依次类推。全部都相同则为回文
function isPalindrome (str) {
    var len = str.length; 
    if (len === 0) return false; //如果为空字符串
    var middle = Math.floor( len / 2 ); //循环中间点
    for ( var i = 0; i < middle; i++ ) {
        if ( str[i] !== str[ len - i - 1 ] ) { 
            return false;
        }
    }
    return true;
}

//解法三：
function isHuiwen (str) {
	const arr = str.split('')
	const len = arr.length
	let start = 0, end = len - 1
	while(start <= end) {
		if (arr[start] !== arr[end]) {
			return false
		} else {
			start ++
			end --
		}
	}
	return true
}
