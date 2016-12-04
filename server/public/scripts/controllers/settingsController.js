colorBlocks.controller('SettingsController', ['ColorFactory', function(ColorFactory) {
  console.log("settings controller running");

  var self = this;
  self.newColor = "";

  self.addColor = function() {
    console.log('adding color:', self.newColor);
    // ColorFactory.currentColors.push(self.newColor);
    ColorFactory.addColor(self.newColor);
    console.log(ColorFactory);
  }

}]);
