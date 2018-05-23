(function($){
	var container = $('.container'),
		box = $('.box'),
		logo = $('.logo'),
		pop = $('.pop'),
		open = $('.btn'),
		close = $('.close'),
		imgs = pop.find('img'),
		imgPart1 = $('.img-part1 img'),
		imgPart2 = $('.img-part2 img'),
		imgPart3 = $('.img-part3 img');

	/***********************入场动画**********************/
	$.Velocity.RegisterUI('oyj.slideUpIn',{
		defaultDuration:500,
		calls:[
			[{opacity:[1, 0], translateY:[0, 100]}]//[结束时的状态，开始时的状态]
		]
	});
	/***********************出场动画**********************/
	$.Velocity.RegisterUI('oyj.slideDownOut',{
		defaultDuration:300,
		calls:[
			[{opacity:[0, 1], translateY:[100, 0]}]//[结束时的状态，开始时的状态]
		]
	});
	/***********************图片弹出动画**********************/
	$.Velocity.RegisterUI('oyj.scaleIn',{
		defaultDuration:300,
		calls:[
			[{opacity:[1, 0], scale:[1, 0.3], zIndex:2}]//[结束时的状态，开始时的状态]
		]
	});
	/***********************图片缩小动画**********************/
	$.Velocity.RegisterUI('oyj.scaleOut',{
		defaultDuration:300,
		calls:[
			[{opacity:[0, 1], scale:[0.3, 1], zIndex:-1}]//[结束时的状态，开始时的状态]
		]
	});

	//开始时动画序列(默认依次执行)
	var seqInit = [{
		elements:container,
		properties:'oyj.slideUpIn',
		options:{
			delay:300
		}
	},{
		elements:box,
		properties:'oyj.slideUpIn',
		options:{
			// sequenceQueue:false //此属性会让动画序列同时执行
		}
	},{
		elements:logo,
		properties:'oyj.slideUpIn',
		options:{
			// sequenceQueue:false,
			delay:60
		}
	}];
	//点击按钮后的动画序列
	var seqClick = [{
		elements:container,
		properties:'oyj.slideDownOut'
	},{
		elements:box,
		properties:'oyj.slideDownOut',
		options:{
			sequenceQueue:false //此属性会让动画序列同时执行
		}
	},{
		elements:container,
		properties:'oyj.slideUpIn'
	},{
		elements:pop,
		properties:'oyj.slideUpIn',
		options:{
			sequenceQueue:false //此属性会让动画序列同时执行
		}
	},{
		elements:imgPart1,
		properties:'oyj.scaleIn'
	}];

	//点击关闭按钮后的动画序列
	var seqClose = [{
		elements:imgs,
		properties:'oyj.scaleOut'
	},{
		elements:container,
		properties:'oyj.slideDownOut'
	},{
		elements:pop,
		properties:'oyj.slideDownOut',
		options:{
			sequenceQueue:false //此属性会让动画序列同时执行
		}
	},{
		elements:container,
		properties:'oyj.slideUpIn'
	},{
		elements:box,
		properties:'oyj.slideUpIn',
		options:{
			sequenceQueue:false //此属性会让动画序列同时执行
		}
	}];

	//切换图片序列
	var seqImgPart1 = [{
		elements: imgPart3,
		properties:'oyj.scaleOut'
	},{
		elements: imgPart1,
		properties:'oyj.scaleIn'
	}];
	var seqImgPart2 = [{
		elements: imgPart1,
		properties:'oyj.scaleOut'
	},{
		elements: imgPart2,
		properties:'oyj.scaleIn'
	}];
	var seqImgPart3 = [{
		elements: imgPart2,
		properties:'oyj.scaleOut'
	},{
		elements: imgPart3,
		properties:'oyj.scaleIn'
	}];


	$.Velocity.RunSequence(seqInit);

	open.on('click',function(){
		$.Velocity.RunSequence(seqClick);
	});
	close.on('click',function(){
		$.Velocity.RunSequence(seqClose);
	});
	//切换图片
	imgPart1.on('click',function(){
		$.Velocity.RunSequence(seqImgPart2);
	});
	imgPart2.on('click',function(){
		$.Velocity.RunSequence(seqImgPart3);
	});
	imgPart3.on('click',function(){
		$.Velocity.RunSequence(seqImgPart1);
	});

})(jQuery);
