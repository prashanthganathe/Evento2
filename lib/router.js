Router.configure({
  loadingTemplate: 'loadingTemplate',
  layoutTemplate: 'layout'
  // notFoundTemplate: 'notFound',
  // waitOn: function() { return Meteor.subscribe('events'); }
});

Router.map(function() {
  this.route('layout', {
    path: 'layout'  //overrides the default '/home'
  });
});


