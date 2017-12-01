export default {
  /**
   * 设置授权
   * @param token
   */
  setAuthorization:function(authorization){
    let authorizationStr = JSON.stringify(authorization)
    localStorage.setItem("authorization",authorizationStr);
  },
  /**
   * 获取授权
   */
  getAuthorization:function(){
    let authorizationStr = localStorage.getItem("authorization");
    if(authorizationStr){
      return JSON.parse(authorizationStr)
    }
    return undefined;
  },
  /**
   * 删除授权
   */
  delAuthorization:function(){
    localStorage.removeItem("authorization");
  }
}
