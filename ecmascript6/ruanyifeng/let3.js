/**
 * author:  iamaprin
 * time: 2016/7/10 21:36
 */

function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }

    console.log(n);
}

f1();   //5 外层代码块不受内层代码块的影响
