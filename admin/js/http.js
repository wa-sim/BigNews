/* 沙箱模式 */
(function(window) {
  //  获取 有没有 token 令牌
  const token = localStorage.getItem("token");
  // ajaxSetup() 方法为将来的 Ajax 请求设置默认值
  $.ajaxSetup({
    //  发送请求前运行的函数
    beforeSend(xhr) {
      // alert("发送请求前运行的内部函数");
      //  没有令牌跳转到登录页面
      if (!token) {
        location.href = "./login.html";
      }
      // 如果不是 login.html 登录页，就统一添加请求头
      if (location.href.indexOf("login.html") === -1) {
        //  注意这里的 xhr 是原生对象，所以用原生的方式添加请求头
        xhr.setRequestHeader("Authorization", token);
      }
    }
  });
  //  完整的 url : http://localhost:8080/api/v1/admin/user/info
  // 获取用户详情  /admin/user/info
  // 获取用户详情  /admin/user/detail
  //  设置请求的服务器根路径
  const baseURL = "http://localhost:8080/api/v1";
  const urls = {
    // 获取用户详情
    userInfo: baseURL + "/admin/user/info",
    // 获取用户详情
    userDetail: baseURL + "/admin/user/detail",
    // 获取用户信息
    userEdit: baseURL + "/admin/user/edit"
  };
  //  把 urls 对象暴露到全局对象中
  window.urls = urls;
})(window);
