(() => {
  /* 定义变量时赋值了, 推断为对应的类型 */
  let b9 = 123 // number
  // b9 = 'abc' // error 

  /* 定义变量时没有赋值, 推断为any类型 */
  let b10  // any类型
  b10 = 123
  b10 = 'abc'
})();

