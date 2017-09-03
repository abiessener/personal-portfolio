myApp.controller('CodeController', function(GithubService){
  console.log('CodeController loaded.')
  var self = this;
  self.code = GithubService.repos;

  self.orderBy = "updated_at";
  self.orderReverse = true;

});
