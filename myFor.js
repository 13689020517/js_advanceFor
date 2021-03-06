// 定义一个数组arr
let i = 0;
let arr = [];
while (i < 50) {
    arr.push(i);
    i++;
}

//最普通的for循环，性能最差,这样的写法遍历是最慢的，他要经过两次迭代，第一次是 i 的迭代，
//每次都要判断 i 是否小于 arr.length，第二次是 arr 的迭代，每次循环 arr 都会调用底层的迭代
//器，对长度进行计算，这样循环的效率非常低，时间空间复杂度为 O[n^2]。
for (let i = 0; i < arr.length; i++) {
    // arr[i]
}

//简单优化的for循环，比普通的性能好，但是还是不够好,整个循环当中，我们预存了 len 来保存数组长
//度，这样不需要每次循环都调用底层迭代器，调用一次即可，这样的时间空间复杂度为 O[n+1]。
for (let i = 0, len = arr.length; i < len; i++) {
    // arr[i]
}

//终极优化的for循环，效果极好,速度是上面的几十倍，这次迭代的时间空间复杂度为 O[n] ，完美做到每
//次一迭代没有通过长度进行判断，而是直接通过下标进行取值的方式映射到了循环体内部。
for (let i = 0, item; item = arr[i++];) {
    // item
}
