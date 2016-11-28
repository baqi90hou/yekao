;(function($){
  $.dialog=function(option){
     option=$.extend({
        title:"消息",
        msg:"",
        buttons:["确认","取消"],
        okFn:null,
        noFn:null
     },option)

     // 渲染结构
     var baseHtml='<div class="dialog" id="dialog">'
     	             +'<div class="box">'
     		            +'<h2>'+option.title+'</h2>'
     		            +'<div class="msg">'+option.msg+'</div>'
     		            +'<p>'
     			           +'<span id="ok">'+option.buttons[0]+'</span><span id="no">'+option.buttons[1]+'</span>'
     		            +'</p>'
     		            +'<a href="javascript:void(0)" class="close"></a>'
     	           +'</div>'
                  +'</div>';

     $(baseHtml).appendTo($('body'));

     // 关闭
     $('.close').bind('click',function(){
     	$('.dialog').remove();
     })

     $('#ok').on('click',function(){
     	option.okFn && option.okFn();
     	$('.dialog').remove();
     })

      $('#no').on('click',function(){
     	$('.dialog').remove();
     })

     // 拖拽

     var $box=$('#dialog');
     
     $box.bind('mousedown',function(e){
         var disX=e.pageX-$box.offset().left;
         var disY=e.pageY-$box.offset().top;
         $(document).bind('mousemove',function(e){
             $box.css('cursor','move');
             var posX=e.pageX-disX,
                 posY=e.pageY-disY,
                 maxW=$(window).width()-$box.outerWidth(),
                 maxH=$(window).height()-$box.outerHeight();
             if(posX>maxW) posX=maxW;
             if(posX<0) posX=0;
             if(posY>maxH) posY=maxH;
             if(posY<0) posY=0;
             $box.css({
             	'left':posX+'px',
             	'top':posY+'px',
                'margin-left':0,
                'margin-top':0
              })
         })
         $(document).bind('mouseup',function(e){
            $(document).unbind('mousemove');
            return false;
         })
     })
  }

})(Zepto)
