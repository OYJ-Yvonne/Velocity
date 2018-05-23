(function($){
/****************one part***************************/
	//one method
	$('#div1').velocity({
		width:'300px'
	},{
		duration:1000
	});

	$('#div2').velocity({
		width:'300px'
	},{
		duration:1000,
		delay:1000//延迟3s进行,依赖上一个duration
	});

	// two method
	// $('#div1').velocity({
	// 	width:'300px'
	// },{
	// 	duration:1000,
	// 	complete:function(){
	// 		$('#div2').velocity({
	// 			width:'300px'
	// 		},{
	// 			duration:1000,
	// 			complete:function(){
	// 				$('#div3').velocity({
	// 					width:'300px'
	// 				},{
	// 					duration:1000
	// 				});
	// 			}
	// 		});
	// 	}
	// });

	//three method
	//先定义一个seq
	// var seq = [
	// {
	// 	elements:$('#div1'), //需要动画的元素
	// 	properties:{width:'300px'},//css属性
	// 	options:{duration:1000}//velocity选项
	// },
	// {
	// 	elements:$('#div2'), //需要动画的元素
	// 	properties:{width:'300px'},//css属性
	// 	options:{duration:1000}//velocity选项
	// },
	// {
	// 	elements:$('#div3'), //需要动画的元素
	// 	properties:{width:'300px'},//css属性
	// 	options:{duration:1000}//velocity选项
	// }];
	//
	// $.Velocity.RunSequence(seq);

/****************two part***************************/
	//velocity预定义动画（pre-registered effects）
	// $('#div1').on('mouseover',function(){
	// 	$(this).velocity('callout.shake');
	// });


	//自定义动画
	//RegisterEffect与RegisterUI函数
	// $.Velocity.RegisterEffect('oyj.pulse',{//脉动动画
	// 	defaultDuration:300,
	// 	calls:[
	// 		[{scaleX:1.1},0.5],//scaleX表示在x轴的尺寸比例变化，在前50%时间内，将x轴变成原来的1.1倍,0.5表示时间百分比
	// 		[{scaleX:1.0},0.5]
	// 	]
	// });
	//
	// $('#div2').on('mouseover',function(){
	// 	$(this).velocity('oyj.pulse');
	// });
	//RegisterEffect与Sequence比较：RegisterEffect一次定义多次使用，在其他地方可通过动画名引用，减少代码的重复率。
})(jQuery);
