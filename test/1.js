/**
 * author:  iamaprin
 * time: 2016/7/17 8:22
 */


var object = function (name, age, desc) {
    this.name = name;
    this.age = age;
    this.desc = desc;
    
    this.out = function () {
        return this.name + ": " + this.age + ": " + this.desc;
    }
};

console.log(new object("zhukuanxin", 23, "haha").out());
