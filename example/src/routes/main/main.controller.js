
angular.module('hackstack demo app').controller('main',
function (hackstack, birds, $log) {
  var vm = this;

  function success(result) {
    vm.loadingMessage = null;
    vm.cards = result.data;
  }

  console.log('main running');

  function error(err) {
    $log.info(err);
    vm.loadingMessage = null;
    vm.errorMessage = err.data;
  }

  vm.loadingMessage = 'Loading...';
  birds.getAllBirds().then(success, error)
});
