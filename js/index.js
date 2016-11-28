;(function($){
	var swiper = new Swiper(".zhu",{
		//loop:true,
		onTouchEnd:function(){
			var ind = swiper.activeIndex+1;
			//if(ind==5)ind=0;
			//alert(ind);
			$("#nav").find("a").eq(ind).addClass("red").siblings().removeClass("red");
		}
	});
})(Zepto)