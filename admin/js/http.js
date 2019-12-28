/* 沙箱模式 */
(function(window) {
  const token = localStorage.getItem("token");
  $.ajaxSetup({
    beforeSend(xhr) {
      alert("发送请求前运行的内部函数");

      if (!token) {
        location.href = "./login.html";
      }
      // 如果不是 login.html 登录页，就统一添加请求头
      if (location.href.indexOf("login.html") === -1) {
        xhr.setRequestHeader("Authorization", token);
      }
    }
  });
})(window);
