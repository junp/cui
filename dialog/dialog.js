function Dialog(config, okFn, cancelFn){
	config = config || {};

	if(typeof config === 'string' || config.nodeType === 1){
		config = {content : config};
	}

	var setting = Dialog.setting;

	for(var p in setting){
		if(setting[p] === undefined){
			config[p] = setting[p];
		}
	}
}

Dialog.prototype = {
	_init : function(){},
		
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
			config = self.config,
			docWidth = ,
			docHeight = ,
			maskWrap = self.maskWrap || document.body.appendChild(document.createElement('div')),
			mask = self.mask || maskWrap.appendChild(document.createElement('div')),
			sizeCss = 'width:100%;height:100%',
			ie6Css = isIE6 ? 'position:absolute;left:expression(' + domTxt + '.scrollLeft);top:expression(' + domTxt + '.scrollTop);width:expression(' + domTxt + '.clientWidth);height:expression(' + domTxt + '.clientHeight)' : '';

		maskWrap.style.cssText = sizeCss + ';position:fixed;z-index:'+zIndex + ';top:0;left:0;overflow:hidden;' + ie6Css;
		mask.style.cssText = 'height:100%;background:' + config.background + ';filter:alpha(opacity=0);opacity:0;';
	},

	/**
	* 解锁
	*/
	unlock : function(){
	
	},
};

Dialog.setting = {};