myApp.controller('HomeController', function(GithubService){
  console.log('HomeController loaded.')
  var vm = this;
  vm.user = GithubService.user;
});
