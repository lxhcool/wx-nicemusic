/**
 * 随机数组中取几个元素
 */
function getRandomArrayElements(arr, count) {
	var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
	while (i-- > min) {
		index = Math.floor((i + 1) * Math.random());
		temp = shuffled[index];
		shuffled[index] = shuffled[i];
		shuffled[i] = temp;
	}
	return shuffled.slice(min);
}

// 单位转换 100000 -> 10万
function tranNumber(num, point) {
	let numStr = num.toString()
	// 十万以内直接返回
	if (numStr.length < 6) {
		return numStr
	} else if (numStr.length > 8) {
		// 大于8位数是亿
		let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point)
		return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿'
	} else if (numStr.length > 5) {
		// 大于6位数是十万 (以10W分割 10W以下全部显示)
		let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
		return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万'
	}
}


module.exports = {
	getRandomArrayElements,
	tranNumber
}