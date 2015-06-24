Template.questionlist.helpers({ 	
  getquestioncountbysessionid: function(){
 	var sid=Router.current().params.query.SessionId;
 	    return	Questions.find({sessionid:sid});//{eventid:eid}
 },
 questionsbysessionid: function(){
 	var sid=Router.current().params.query.SessionId;
 	    return	Questions.find();//{eventid:eid}
 },
 questiontitlebyquestionid:function(qid){ 	
 	    return	Questions.find({_id:qid});//{eventid:eid}
 }
});




Template.addquestion.helpers({ 	
  getspeakerbysessionid: function(){ 	
  	var sid=Router.current().params.query.SessionId;
 	 return	Sessions.findOne({_id:sid}).speakers;//{eventid:eid}
 }
});


Template.questionItem.helpers({ 	
  getanswersbyquestionid: function(qid){ 	
 	    return	QAnswers.find({questionid:qid}).count();//{eventid:eid}
 }

});

Template.questionItem.events = {
 'click #questionbadge': function(){
    Router.go('questionanswers',{},{query:{Questionid: this._id}});
}
}

Template.questionanswers.helpers({ 
 answersbyquestionid: function(){
 	var qid=Router.current().params.query.Questionid;
 	    return	QAnswers.find({questionid:qid});//{eventid:eid}
 },

});

