require(['view/appView'], function(AppView) {
  const appView = new AppView().render().$el;
  $('body').append(appView);
});
