let that = this;
let height = 0;
wx.getSystemInfo({
	success: function (res) {
		let clientHeight = res.windowHeight;
		let clientWidth = res.windowWidth;
		let ratio = 750 / clientWidth;
		height = clientHeight * ratio;
	}
});

module.exports = {
	"container": `width:750rpx;height:${height}rpx;top:0rpx;left:0rpx`,
	"lists": [{
		"type": "bg",
		"elements": [
			"width:750rpx;height:522rpx;left:0rpx;top:0rpx"
		]
	},
	{
		"type": "rect",
		"elements": [
			"width:calc(100% - 40rpx);height:256rpx;left:20rpx;top:170rpx",
			"width:223rpx;height:223rpx;left:20rpx;top:670rpx",
			"width:223rpx;height:40rpx;left:20rpx;top:923rpx",
			"width:223rpx;height:223rpx;left:263rpx;top:670rpx",
			"width:223rpx;height:40rpx;left:263rpx;top:923rpx",
			"width:223rpx;height:223rpx;right:20rpx;top:670rpx",
			"width:223rpx;height:40rpx;right:20rpx;top:923rpx",
			"width:223rpx;height:223rpx;left:20rpx;top:1020rpx",
			"width:223rpx;height:40rpx;left:20rpx;top:1276rpx",
			"width:223rpx;height:223rpx;left:263rpx;top:1020rpx",
			"width:223rpx;height:40rpx;left:263rpx;top:1276rpx",
			"width:223rpx;height:223rpx;right:20rpx;top:1020rpx",
			"width:223rpx;height:40rpx;right:20rpx;top:1276rpx",
			"width:calc(100% - 40rpx);height:395rpx;left:20rpx;top:1376rpx"
		]
	},
	{
		"type": "circle",
		"elements": [
			"width:58rpx;height:58rpx;left:20rpx;top:92rpx",
			"width:400rpx;height:58rpx;left:120rpx;top:92rpx",
		]
	},
	{
		"type": "circle",
		"elements": [
			"width:100rpx;height:100rpx;left:20rpx;top:465rpx",
			"width:100rpx;height:20rpx;left:20rpx;top:590rpx",
			"width:100rpx;height:100rpx;left:220rpx;top:465rpx",
			"width:100rpx;height:20rpx;left:220rpx;top:590rpx",
			"width:100rpx;height:100rpx;left:420rpx;top:465rpx",
			"width:100rpx;height:20rpx;left:420rpx;top:590rpx",
			"width:100rpx;height:100rpx;right:20rpx;top:465rpx",
			"width:100rpx;height:20rpx;right:20rpx;top:590rpx",
		]
	}
	]
}