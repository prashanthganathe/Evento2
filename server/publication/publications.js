//Publication details

Meteor.publish('events', function() {
  return Events.find();
});

Meteor.publish('sessions', function() {
  return Sessions.find();
});

Meteor.publish('questions', function() {
  return Questions.find();
});

Meteor.publish('contents', function() {
  return Contents.find();
});