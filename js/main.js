'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {

    // 確率を操作する方法
    const n = Math.random();
    console.log(n);
    if(n < 0.05) {
      btn.textContent = '大吉'; //5%
    } else if(n < 0.2) {
      btn.textContent = '中吉'; //15%      
    } else {
      btn.textContent = '凶'; //80%
    }
  });
}