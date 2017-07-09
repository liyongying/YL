var $input1=$("#special2");
var $msg=$("#special");
$input1.click(function(){
   $msg.css("display","none");
});
$('#special span').click(function(){
   $input1.trigger('click');
});
//验证登录表单
var $txt=$("#input1");
var $pwd=$("#input2");
var $loginForm=$("#loginForm");
$loginForm.onsubmit=function(){
   var regTxt=/^\w{6,10}$/;
   var regPwd=/^\d{6,8}$/;
   var n=$txt.value;
   var p=$pwd.value;
   if(!regTxt.test(n)){
      $txt.css("background","red")
      return false;
   }
   if(!regPwd.test(p)){
      alert("密码格式不正确，请重新输入！");
      return false;
   }
   return ture;
}