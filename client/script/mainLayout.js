Template.mainLayout.events({
	"click #clickMe":function(evt,tmp)
	{
		var mlcm_tvshowInfo = {
			mlcm_tvshowName : "The Fosters",
			mlcm_tvshowCodeWord : "TF"
		};
		
		Meteor.call("insertTVShowInfo",mlcm_tvshowInfo,
		function(error,result)
		{
			alert(result);
		});
		alert("Insertion is Done");
	},
	"click .clickMeToInsert":function(evt,tmp)
	{
		
		var mlcm_quizInfo = {
			mlcm_tvshowName : "The Fosters",
			mlcm_tvshowCodeWord : "TF",
			mlcm_quiz           : "Why can't Callie be adopted with Jude ?",
			mlcm_option1        : "She doesn't want to be",
			mlcm_option2        : "Jude doesn't want her to be",
			mlcm_option3        : "They don't have the same father",
			mlcm_option4        : "They don't want to adopt her",
			mlcm_optionCorrect  : "They don't have the same father"
		};		alert("Inside")
		Meteor.call("insertQuizInfo",mlcm_quizInfo,
		function(error,result)
		{
			alert(result);
		});
		alert("Insertion is Done");
	}
});

Template.mainLayout.rendered = function()
{
	//Session.clear("displayPictureActive");
	//Meteor.call("display");
}

Template.mainLayout.helpers({

});

Meteor.methods({

	display : function()
	{
		alert("Golmaal");
	}
});

