var formatNumber = function (n) {
  return ('' + n)[1] ? n : '0' + n;
};
var formatTime = function (t) {
  const year = t.getFullYear();
  return t.getFullYear() + '年' + formatNumber(t.getMonth() + 1) + '月' + formatNumber(t.getDate()) + '日 ' + formatNumber(t.getHours()) + ':' + formatNumber(t.getMinutes()) + ':' + formatNumber(t.getSeconds());
};
var formatDateTime = function (timeStamp){
    var date = new Date();
    if (timeStamp != null) {
      date.setTime(timeStamp * 1000);
    }
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}

/*
* 暴露接口给外部
*/
module.exports = {
   formatTime:formatTime ,
   formatDateTime: formatDateTime
   };