(function(module) {
  var homeController = {
    index: function(ctx, next) {
      console.log('working');
      $('#map-elements').hide();
      $('#map-container').show();
      $('#home-container').show();
      $('.loading').hide();

      next();
    }
  };
  module.homeController = homeController;
})(window);
