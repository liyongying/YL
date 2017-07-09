//轮播图
var index=1;
function task(){
    index++;
    (index>5)&&(index=1);
    var path="../images/hometurn00"+index+".jpg";
    $("#section>#in_turn>img").attr("src",path);
    $("#section>#in_turn>ul>li").removeClass("turnActive");
    $("#in_turn>ul>li:eq("+(index-1)+")").addClass("turnActive");
}
var timer=setInterval(task,2500);

var $li=$("#section>#in_turn>ul>li");
$li.click(function(){
    clearInterval(timer);
    timer=null;
    $("#section>#in_turn>ul>li").removeClass("turnActive");
    $(this).addClass("turnActive");
    index=$(this).html();
    var path="../images/hometurn00"+index+".jpg";
    $("#section>#in_turn>img").attr("src",path);
});
$(function(){
    $("#section>#in_turn>img").mouseover(function(){
        clearInterval(timer);
        timer=null;
    });
    $("#section>#in_turn>img").mouseout(function(){
        timer=setInterval(task,2500);
    });
});

//阻止a的默认行为
//$("a").click(function(e){
  //  e.preventDefault();
//})



//turnRight处js

$("#turnRight #list1").on("click","li",function(e){
    $(this).css("border-right","none").siblings().css("border-right","1px solid #0053ac");
    var divId=$(this).find("a").attr("href");
    console.log(divId);
    $(divId).addClass("active").siblings(".active").removeClass("active");
})