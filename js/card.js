var $input3 = $("#td3 input");
var num3 = Number($input3.parent().prev().html().slice(1));
var n = 0;
$input3.prev().click(function () {
    if (n > 0) {
        n--;
    }
    $input3.val(num3 * n);
    var total = num7 * d + num6 * c + num5 * b + num4 * a + num3 * n;
    $("#total").text(total);
});
$input3.next().click(function () {
    n++;
    $input3.val(num3 * n);
    var total = num7 * d + num6 * c + num5 * b + num4 * a + num3 * n;
    $("#total").text(total);
});


var $input4 = $("#td4 input");
var num4 = Number($input4.parent().prev().html().slice(1));
var a = 0;
$input4.prev().click(function () {
    if (a > 0) {
        a--;
    }
    $input4.val(num4 * a);
    var total = num7 * d + num6 * c + num5 * b + num4 * a + num3 * n;
    $("#total").text(total);
});
$input4.next().click(function () {

    a++;
    $input4.val(num4 * a);
    var total = num7 * d + num6 * c + num5 * b + num4 * a + num3 * n;
    $("#total").text(total);
});


var $input5 = $("#td5 input");
var num5 = Number($input5.parent().prev().html().slice(1));
var b = 0;
$input5.prev().click(function () {
    if (b > 0) {
        b--;
    }
    $input5.val(num5 * b);
    var total = num7 * d + num6 * c + num5 * b + num4 * a + num3 * n;
    $("#total").text(total);
});
$input5.next().click(function () {
    b++;
    $input5.val(num5 * b);
    var total = num7 * d + num6 * c + num5 * b + num4 * a + num3 * n;
    $("#total").text(total);
});

var $input6 = $("#td6 input");
var num6 = Number($input6.parent().prev().html().slice(1));
var c = 0;
$input6.prev().click(function () {
    if (c > 0) {
        c--;
    }
    $input6.val(num6 * c);
    var total = num7 * d + num6 * c + num5 * b + num4 * a + num3 * n;
    $("#total").text(total);
});
$input6.next().click(function () {
    c++;
    $input6.val(num6 * c);
    var total = num7 * d + num6 * c + num5 * b + num4 * a + num3 * n;
    $("#total").text(total);
});

var $sp1 = $("#special_1");
var $input7 = $("#special_2");
var num7 = 0;
var d = 0;
$input7.prev().click(function () {
    var num7 = $sp1.val();
    if (d > 0) {
        d--;
    }
    $input7.val(num7 * d);
    var total = num7 * d + num6 * c + num5 * b + num4 * a + num3 * n;
    $("#total").text(total);

});
$input7.next().click(function () {
    d++;
    var num7 = $sp1.val();
    $input7.val(num7 * d);
    var total = num7 * d + num6 * c + num5 * b + num4 * a + num3 * n;
    $("#total").text(total);

});


$("#total").get(0).style.textDecoration = "none";




