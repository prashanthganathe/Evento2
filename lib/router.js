Router.configure({
  loadingTemplate: 'loadingTemplate',
  layoutTemplate: 'layout'
  // notFoundTemplate: 'notFound',
  // waitOn: function() { return Meteor.subscribe('events'); }
});

Router.map(function() {
	this.route('addevent'); 
	this.route('hello'); 
    this.route('home', { path: 'home' });
    this.route('map', { path: 'map' });
});


