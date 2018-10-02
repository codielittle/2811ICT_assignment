module.exports = {
  auth:function(uname, pwd){
    let err = [];
    var result = true;
    if (uname != "Codie" || pwd != "Super"){
      err.push('Not authenticated');
      result = false;
    }
    return {result: result, 'errors': err};
  }
}
