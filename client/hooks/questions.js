
var questionHooks = {
  before: {
    insert: function(doc) {     
        doc.sessionid = Router.current().params.query.SessionId;          
      return doc;
    }
  }
}
 
AutoForm.addHooks('questionForm', questionHooks);