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
  Router.route('/addcontentsession/', 
    function () { 
    this.render('addcontent');    },  {
    name: 'addcontentsession'
  });


  this.route('addquestion');  
  Router.route('/addsessionevent/', function () {  
    this.render('addsession');
    },  {
    name: 'addsessionevent'
  });

  

 Router.route('/questionanswers/', function () {
     this.render('questionanswers');
    },  {
    name: 'questionanswers'
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


