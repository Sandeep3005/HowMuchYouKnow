Meteor.startup(function()
{

	$(window).resize(function() {
	
		var width = $(window).width();
		var height = $(window).height();
		console.log("Width",width);
		Session.setPersistent("currentWidth",width);
	});
	
});