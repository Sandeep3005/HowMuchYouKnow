Template.quizDisplaySection.rendered =  function()
{
	//alert(data);
	Session.setPersistent("displayPictureActive", true);
	Session.set("playerScore", 0);
}

Template.quizDisplaySection.helpers({

	questions :function(evt,tmp)
	{
		return  QuizInfo.find({});			     
	},
	getScore :function(evt,tmp)
	{
		var q_score = Session.get("playerScore");
		return q_score;
	}

});

Template.quizDisplaySection.events({

	"click .btn-submit": function(evt,tmp)
	{
		var qds_width="";
		tmp.$(".btn-option").addClass("hide");		
		tmp.$(".btn-correctOption").removeClass("hide");
		tmp.$(".btn-correctOption").addClass("btn-success");
		tmp.$(".div-progress").removeClass("hide");
		tmp.$(".specify-output-div").removeClass("hide");		
		tmp.$(".result").removeClass("hide");		

		 $(window).scrollTop(0);		
	}
});


