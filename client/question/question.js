Template.questionlist.helpers({ 	
  getquestioncountbysessionid: function(){
 	var sid=Router.current().params.query.SessionId;
 	    return	Questions.find({sessionid:sid});//{eventid:eid}
 }
});


Template.questionlist.events = {
 'click #questionbadge': function(){
    Router.go('addquestions',{},{query:{SessionId: this._id}});
}
}


