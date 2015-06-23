Questions = new Mongo.Collection('questions');
Question = new SimpleSchema({

 sessionid: {
    type: String,
    label: "SessionId",
    max: 200
  },
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  description: {
    type: String,
    label: "Description",
    max: 200
  },
  speakers: {
    type: String, //TODO list of eventousers
    allowedValues: ['Speaker1','Speaker2','Speaker3'],
    label: "Select Speakers",

  }
});

Questions.attachSchema(Question);

Questions.allow({
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