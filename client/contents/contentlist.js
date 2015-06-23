 Template.contentlist.helpers({
 contentsbysessionid: function(){
 	var sid=Router.current().params.query.SessionId;
 	    return	Contents.find({sessionid:sid});//{eventid:eid}
 }
 
});