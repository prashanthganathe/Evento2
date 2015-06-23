 Template.eventlist.helpers({ 	
 	events: function () {
 		    return Events.find();
  		  }
});


 Template.eventlist.events = {
'click #eventsessions': function(){
    Router.go('addsessionevent',{},{query:{EventId: this._id}});
}
}




 Template.eventItem.helpers({
 	 getsessioncountbyeventid: function (id) {
  	   return Sessions.find({eventid:id}).count();  
   }
 });

