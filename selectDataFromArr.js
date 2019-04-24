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

//解法三：
function calIndex(start, offset, length) {
	const end = length - 1
	const afterIndex = start + offset
	if (afterIndex > end) {
		return afterIndex % end
	} else {
		return afterIndex
	}
}

//收集起点到结束的剩余元素和所需元素
function collectEle (arr, index, start) {
	const others = []
	for (var i = start; i < index; i++) {
		others.push(arr[i])
	}
	return {
		others,
		target: arr[index]
	}
}

function selectDataFormArr (start, offset, arr, count) {
	const ret = [] //最后返回的符合需求的元素
	let rest = [] //剩余数组，存储从0到当前游标下的剩余元素
	let curIndex = start //当前游标

	for (var i = 0; i < count; i++) {
		let index = curIndex
		//除了第一次直接取start下标的元素外，其它都要重新计算下标
		if (i !== 0) {
			let index = calIndex(curIndex, offset, arr.length)
		}
		let target, others
		//如果下标越界了，则用剩余元素组成数组从0开始遍历
		if (index < curIndex) {
			rest = rest.concat( arr.slice(curIndex+1) ) //要把最末尾的剩余元素也加上
			arr = rest //更改取数数组
			rest = [] //重置剩余数组
			{ target, others } = collectEle(arr, index, 0)
		} else {
			{ target, others } = collectEle(arr, index, curIndex+1)
		}
		//收集目标元素
		ret.push(target)
		//收集剩余元素
		rest = rest.concat(others)
		curIndex = index
	}
}
