myApp.controller('CodeController', function(GithubService){
  console.log('CodeController loaded.')
  var self = this;
  self.code = GithubService.repos;

  self.orderBy = "starred";
  self.orderReverse = false;

  self.sortDisplay = function(column){
    self.orderBy = column;
    self.orderReverse = !self.orderReverse;
    if (column === 'starred'){
      self.orderReverse = false;
    }
  }

});
