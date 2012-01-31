var DOM = QQVIP.dom;
var UA = QZFL.userAgent;
function Dialog(config, okFn, cancelFn){
	config = config || {};

	if(typeof config === 'string' || config.nodeType === 1){
		config = {content : config};
	}

	var setting = Dialog.setting;

	for(var p in setting){
		if(config[p] === undefined){
			config[p] = setting[p];
		}
	}
	this.config = config;

	this._init();
}

Dialog.prototype = {
	_init : function(){
		this.lock();
	},
		
	/**
	* 设置内容
	* @param	{String, HTMLElement}	内容
	* @return	{this, HTMLElement}
	*/
	content : function(msg){
	
	},

	/**
	* 设置标题
	* @param	{String, Boolean}
	* @return	{this, HTMLElement}
	*/
	title : function(text){
	
	},

	/**
	* 定位
	* @param	{Number, String}
	* @param	{Number, String}
	*/
	position : function(left, top){
		var self = this,
			left = left || 0,
			top = top || 0,
			config = self.config,
			wrap = self.wrap,
			docLeft = QZFL.dom.getScrollLeft(),
			docTop = QZFL.dom.getScrollTop(),
			winWidth = 0,
			winHeight = 0,
			ow = wrap.offsetWidth,
			oh = wrap.offsetHeight,
			style = wrap.style;

		style.top = top + 'px';
		style.left = left + 'px';

	},

	/**
	* @param	{Number, String}
	* @param	{Number, String}
	*/
	size : function(width, height){
	
	},

	/**
	* 显示
	*/
	show : function(){
	
	},

	/**
	* 隐藏
	*/
	hide : function(){
	
	},

	/**
	* 关闭
	*/
	close : function(){

	},

	/**
	* 锁屏
	*/
	lock : function(){
		var self = this;

		if(self.locked){
			return self;
		}

		var zIndex = Dialog.setting.zIndex - 1,
			isIE6 = UA.ie === 6,
			config = self.config,
			docWidth = DOM.getClientWidth(),
			docHeight = DOM.getClientHeight(),
			maskWrap = self.maskWrap || document.body.appendChild(document.createElement('div')),
			mask = self.mask || maskWrap.appendChild(document.createElement('div')),
			domTxt = '(document).documentElement',
			sizeCss = 'width:100%;height:100%',
			ie6Css = isIE6 ? 'position:absolute;left:expression(' + domTxt + '.scrollLeft);top:expression(' + domTxt + '.scrollTop);width:expression(' + domTxt + '.clientWidth);height:expression(' + domTxt + '.clientHeight)' : '';

		maskWrap.style.cssText = sizeCss + ';position:fixed;z-index:'+zIndex + ';top:0;left:0;overflow:hidden;' + ie6Css;
		mask.style.cssText = 'height:100%;background:' + config.background + ';filter:alpha(opacity=50);opacity:.5;';
	},

	/**
	* 解锁
	*/
	unlock : function(){
	
	},

	_getWrap : function(){
		var wrap = document.createElement('div'),
			body = document.body;
		wrap.style.cssText = 'position:absolute;left:0;top:0;';
		wrap.innerHTML = this._template;
		body.insertBefore(wrap, body.firstChild);
		return wrap;
	}
};

Dialog.setting = {
	background : '#000'
};