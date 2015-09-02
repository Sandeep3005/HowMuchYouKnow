Meteor.publish('QuizInfo', function(cw) {
  return QuizInfo.find({CodeWord:cw}); 
});