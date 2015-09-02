Router.configure({
		layoutTemplate:'mainLayout'
});
Router.route('/pictureDisplaySection',{
		template : 'pictureDisplaySection'
		
});
Router.route('/quizSection/:CodeWord',{
		template : 'quizDisplaySection'	,	
		subscriptions : function()
		{
			return Meteor.subscribe('QuizInfo',this.params.CodeWord);
		}
});
Router.route('/',{
		template : 'homeSection'		
});