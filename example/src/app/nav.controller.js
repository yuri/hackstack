
angular.module('hackstack demo app').controller('nav',
function (config, $location, $route) {
  var vm = this;
  vm.types = [
    {name: 'live', href: 'live'},
    {name: 'hackstack.mock', href: 'mock'},
    {name: 'hackstack.wrap', href: 'wrap'}
    ];
  vm.isActive = function isActive(href) {
    return href === $location.path();
  }
  vm.click = function click(event) {
    $route.reload();
    config.backendType = event.currentTarget.type.slice();
  }
  vm.setBackend = function setBackend(backendType) {
    config.backendType = backendType;
  }
})
