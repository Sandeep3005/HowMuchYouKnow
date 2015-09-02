Meteor.methods({	
	insertTVShowInfo : function(TVShowInfoData)
	{
			return TVShowInfo.insert({
					
					Name : TVShowInfoData.mlcm_tvshowName,
					CodeWord : TVShowInfoData.mlcm_tvshowCodeWord
			},
			function(error,id)
			{
				if(id) { return id; } else { return error; }
			});
	},
	insertQuizInfo : function(QuizInfoData)
	{
		return QuizInfo.insert({
				Name          : QuizInfoData.mlcm_tvshowName,
				CodeWord      : QuizInfoData.mlcm_tvshowCodeWord,
				Quiz          : QuizInfoData.mlcm_quiz,
				Option1       : QuizInfoData.mlcm_option1,
				Option2       : QuizInfoData.mlcm_option2,
				Option3       : QuizInfoData.mlcm_option3,
				Option4       : QuizInfoData.mlcm_option4,
				OptionCorrect : QuizInfoData.mlcm_optionCorrect

		},
		function(error,id)
		{
			if(id) { return id; } else { return error; }
		});
	}
});