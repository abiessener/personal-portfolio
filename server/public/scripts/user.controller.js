myApp.controller('UserController', function(GithubService){
  console.log('UserController loaded.')
  var self = this;
  self.user = GithubService.user;
});
