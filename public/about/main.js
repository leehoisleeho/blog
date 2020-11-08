let width = document.body.clientWidth
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "ymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
if (IsPC()) {
  document.getElementById("img").style.width = 900 + "px"

} else {
  document.getElementById("img").style.width = width - 5 + "px"
}


