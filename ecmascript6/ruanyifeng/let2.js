/**
 * author:  iamaprin
 * time: 2016/7/10 21:30
 */


/*let声明的变量报错，var声明的变量返回了正确的值。这表明，let声明的变量只在它所在的代码块有效。*/
var a = [];
for (var i = 0; i < 10; i++) {
    let/*var*/ c = i;                      // 使用let并不会报错
    a[i] = function () {
        console.log(c)
    };
}

a[6]();