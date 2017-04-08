

var eat = "a";// 给eat赋值
if (eat == "rice"){//如果eat是rice
    console.log("吃米饭");// 输出吃米饭
}
else if (eat == "noodles") { //如果eat是noodles
    console.log("吃面条"); //输出吃面条
}
else { //以上条件都不符合
    console.log("只有馒头了啊！"); //输出只有馒头了啊
}


var eat = 5;// 为方便 switch 做判断，1 表示粥，2 表示米饭，3 表示面条，4 表示馒头
switch (eat) {
    case 1://值为空 则表示今天没有粥 选粥的默认到2米饭
    case 2:
        console.log("米饭");
        break;//拿饭走人
    case 3:
        console.log("面条");
        break;//拿面走人
    default:
        console.log("馒头");
}

var eat_arr = [2, 2, 3, 4, 2, 2];//吃饭选项数组
//循环条件设置
for (var i = 0; i < eat_arr.length; i++) {//循环开始大括号
    //以下为循环内容
    switch (eat_arr[i]){
        case 1:
        case 2:
            console.log("米饭");
            break;
        case 3:
            console.log("面条");
            break;
        default:
            console.log("馒头");
    }
    //循环内容结束
}//循环结束大括号


var eat_arr = [2, 2, 3, 4, 2, 2];//吃饭选项数组
var i = 0;//循环起点设置
while(i < eat_arr.length){//循环次数小于数组内元素总个数 循环开始大括号
    switch (eat_arr[i]) {
        case 1:
        case 2:
            console.log("米饭");
            break;
        case 3:
            console.log("面条");
            break;
        default:
            console.log("馒头")
    }
    i++;//使i自增
}//循环大括号结束





num= 1;
do{
    document.write("数值为:" +  num+"<br />");
    num++; //更新条件
}
while (num<=5)



var eat_arr = [9, 2, 3, 4, 2, 2];//吃饭选项数组
var i = 0;//循环起点
var eat_max = 4;//库存饭量只有4个
while (i < eat_arr.length) { //i小于数组长度是循环次数 循环开始大括号
    //以下为循环内容
    if(i == eat_max) break;// 如果饭菜没了 则解散队伍
    switch (eat_arr[i]) {
        case 1:
        case 2:
            console.log("米饭");
            break; //break是退出当前循环 即为 当i = 2时 输出米饭 如果不等于 2 则退出重新循环
        case 3:
            console.log("面条");
            break;
        default:
            console.log("馒头");
    }
    i++;//使i增加
} // 输出结果是 馒头 米饭 面条 馒头




var eat_arr = [2, 2, 3, 4, 2, 2]; // 吃饭选项数组
var i = 0; // 设置起点
var eat_null = 3; // 没钱童鞋的编号
while(i < eat_arr.length) // 循环次数
{ // 循环开始大括号
// 以下为循环内容
// 如果饭卡没钱了，就自己默默离开
    if(i == eat_null){
        i++;
        continue;
    }
    switch(eat_arr[i]){
        case 1:
        case 2:
            console.log("米饭");
            break;
        case 3:
            console.log("面条");
            break;
        default:
            console.log("馒头");
    }
    i++; // 使 i 自增
} // 循环结束大括号


var eat_arr = [2, 2, 3, 4, 2, 2];
var i = 0;
var eat_null = 3;
while (i < eat_arr.length) {
    if (i == eat_null) {
        i++;
        continue;
    }
    switch (eat_arr[i]) {
        case 1:
        case 2:
            console.log("米饭");
            break;
        case 3:
            console.log("面条");
            break;
        default:
            console.log("馒头")
    }
    i++;
}


//作业


// 1、如果 num 能同时被 3 和 5 整除，输出字符串 fizzbuzz
// 2、如果 num 能被 3 整除，输出字符串 fizz
// 3、如果 num 能被 5 整除，输出字符串 buzz
// 4、如果变量为空或者不是 Number 类型，输出 false
// 5、其余情况，输出 num


// var myNum = [2, 3, 6, 7, 10, 11, '', 15, 30, 35, 50, 'apple',60, 90, true, [1, 2]];
// for (var i = 0; i < myNum.length; i++) {
//     var val = myNum[i];
//     if (typeof val === 'number') {
//             if (val % 3 ===0 && val % 5 ===0) {
//                 console.log(val + "：能同时被3和5整除");
//             }else if (val % 3 === 0) {
//                 console.log(val + ": 只能被3整除");
//             }else if (val % 5 === 0) {
//                 console.log(val + ": 只能被5整除");
//             }else {
//                 console.log(val + ":不能被3也不能被5整除");
//             }
//     }else if (typeof val != 'number') {
//             console.log(false, '或' + val +':不是Number型');
//     }else{
//         console.log(val)
//     }
// }

var myNum = [2, 3, 6, 7, 10, 11, '', 15, 30, 35, 50, 'apple',60, 90, true, [1, 2]];
for (var i = 0; i < myNum.length; i++) {
    var val = myNum[i];
    if (typeof val == 'number') {
        if (val % 3 === 0 && val % 5 === 0) {
            console.log(val + ": 能被3和5整除");
        }else if (val % 3 === 0) {
            console.log(val + ": 只能被3整除");
        }else if (val % 5 === 0) {
            console.log(val + ": 只能被5整除")
        }else {
            console.log(val + ":既不能被3整除也不能被5整除")
        }
    }else if (typeof val != 'number') {
        console.log(false, '或'+ val + ":不是number型号")
    }else {
        console.log(val)
    }
}
