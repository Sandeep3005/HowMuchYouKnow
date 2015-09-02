Template.quizDisplaySection.rendered =  function()
{
	//alert(data);
	Session.setPersistent("displayPictureActive", true);
	
	
}
Template.question.events({

	"click .btn-option": function(evt,tmp)
	{			
		var q_currentOption="";
		var q_correctOption="";
		var q_score="";
		var q_scoreWidth="";
	 	q_currentOption= $(evt.currentTarget).text();
		//alert("Current Option  = "+q_currentOption);  

    	var q_correctOption = tmp.$(".btn-correctOption").text();
    	//alert("Qds Current Option  = "+q_correctOption);  

    	tmp.$(".btn-option").prop('disabled', true);

    	if(q_currentOption.trim() == q_correctOption.trim())
    	{
    		q_score = Session.get("playerScore");    			
    		q_score = q_score + 1;    		
	    	Session.set("playerScore",q_score);
    	}

    	$(evt.currentTarget).addClass("pickedOption");
    	$(evt.currentTarget).removeClass("btn-option");
    	//alert("Score = "+Session.get("playerScore"));
    	
    	q_score = Session.get("playerScore");    			
    	q_scoreWidth = q_score * 10;
    	q_scoreWidth = q_scoreWidth +"%";
    	//alert(q_scoreWidth);
    	
    	

	}


});
