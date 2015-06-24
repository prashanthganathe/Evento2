QAnswers = new Mongo.Collection('qanswers');
QAnswer = new SimpleSchema({
	          questionid: { type: String,     label: "QuestionId",      max: 200  },
			      answer:     { type: String,    label: "Answer",    max: 20000  , autoform: { rows: 2}}
			});

QAnswers.attachSchema(QAnswer);

QAnswers.allow({
  insert: function(userId, doc){
        return doc && doc.userId === userId;
      },
  update: function(userId, doc){
        return doc && doc.userId === userId;
      },
  remove:  function(userId, doc){
        return doc && doc.userId === userId;
      }
});