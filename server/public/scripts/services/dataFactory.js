colorBlocks.factory('dataFactory', [function() {
  console.log("data factory running");
  var colors = ['purple', 'black', 'orange', 'yellow', 'red'];

  var publicApi = {
  colors: colors,

};

return publicApi;

}]);
