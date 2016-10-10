var queryRequest = function(){

}

queryRequest.prototype = {
  api: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    console.log("open")
    request.onload = callback;
    request.send();
    console.log("sent")
  }
}

module.exports = queryRequest;