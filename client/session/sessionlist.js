 Template.sessionlist.helpers({
 sessionsbyeventid: function(){
 	var eid=Router.current().params.query.EventId;
 	    return	Sessions.find({eventid:eid});//{eventid:eid}
 }
 
});