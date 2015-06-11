Meteor.methods({
  addEvent: function(doc) {
      debugger;
            Logger.info('Object before Insert : ');
            Logger.info(JSON.stringify(doc));
          	
            check(doc, Event);
            this.unblock();   
            Events.insert(doc);
  }
});

