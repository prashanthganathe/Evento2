Router.configure({
  loadingTemplate: 'loadingTemplate',
  layoutTemplate: 'layout'
  // notFoundTemplate: 'notFound',
  // waitOn: function() { return Meteor.subscribe('events'); }
});

Router.map(function() {
	this.route('addevent'); 
	this.route('eventlist'); 


	this.route('addsession');
  this.route('sessionlist');

  this.route('addquestion');
   
    // this.route('addsessionevent', 
    // {
    //     template: 'addsession',
    //     path: '/addsession/:EventId'    
       
    // });
  Router.route('/addsessionevent/', function () {
   // var item = Sessions.findOne({EventId: this.params.EventId});
    this.render('addsession');
    },  {
    name: 'addsessionevent'
  });
  Router.route('/addcontentsession/', function () {
   // var item = Sessions.findOne({EventId: this.params.EventId});
    this.render('addcontent');
    },  {
    name: 'addcontentsession'
  });

this.route('contentlist');





  Router.route('/addquestionsession/', function () {
   // var item = Sessions.findOne({EventId: this.params.EventId});
    this.render('addquestion');
    },  {
    name: 'addquestionsession'
  });



	this.route('hello'); 
    this.route('home', { path: 'home' });
    this.route('map', { path: 'map' });


});


