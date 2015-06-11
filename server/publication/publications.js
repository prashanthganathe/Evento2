//Publication details

Meteor.publish('events', function() {
  return Events.find();
});

Meteor.publish('markers', function() {
  return Markers.find();
});