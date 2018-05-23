(function($){

	//velocity预定义动画（pre-registered effects）
	$('.shrinkIn').on('mouseover',function(){
		$(this).velocity('transition.shrinkIn');  
	});
	$('.topic-content').on('mouseover',function(){
		$(this).velocity('transition.flipXIn');  
	});
	$('.label').on('mouseover',function(){
		$(this).velocity('transition.flipXIn');  
	});

})(jQuery);