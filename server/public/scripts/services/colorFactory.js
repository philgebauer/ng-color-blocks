colorBlocks.factory('ColorFactory', [function() {
  console.log("color factory running");
  
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];

  // private
  function addColor(newColor) {
    colors.push(newColor);
  }

  function moreColorStuff(newColor) {
    // check CSS colors for validity
    addColor(newColor);
  }

  // public
  var publicApi = {
    currentColors: colors,
    addColor: moreColorStuff
  };

  return publicApi;

}]);
