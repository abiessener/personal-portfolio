myApp.service('GithubService', function($http) {

  // Object that will store our user data
  var user = {};
  //Call to Github API to fetch user's profile info
  function githubProfile(){
    return $http({
      method: 'GET',
      url: '/github/user/',
    }).then(function(response) {
      console.log(response.data);
      user.data = response.data;
    });
  }


  // Object that will store our repo data
  var repos = {};

  // Array of repo names to star
  var reposToStar = [
    'prime-solo-project',
    'prime-memory-game',
    'prime-group-project'
  ];

  //Call to Github API to fetch list of user's repos
  function githubRepos(){
    $http({
      method: 'GET',
      url: '/github/repos/'
    }).then(function(response) {
      console.log(response.data);
      repos.data = response.data;

      for (var i = 0; i < repos.data.length; i++) {
        // console.log('checking', i, repos.data[i].name);

        if(reposToStar.indexOf(repos.data[i].name) >= 0){
          repos.data[i].starred = true;
          // console.log('starred', i);
        }
      }

    });
  }


  // Make requests for data when the service is created.
  // This will make our data appear to load faster.
  githubProfile();
  githubRepos();

  // Return objects and functions allowing them to be used
  // in our controllers.
  return {
    user: user,
    githubProfile: githubProfile,
    repos: repos,
    githubRepos: githubRepos
  }
});
