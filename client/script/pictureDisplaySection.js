Template.pictureDisplaySection.rendered =  function()
{
	//Session.clear("displayPictureActive");
	//alert("Inside Pic");
	
	var width = $(window).width(), height = $(window).height();
	
	if ((width <= 1023) && (height >= 768)) 
	{
		//aler('Remove my nav!');
	}
	else 
	{
		//alert('Do nothing');
	}
}
Template.pictureDisplaySection.helpers ({

		'isWindowSmall': function() {	
		
		var width=Session.get("currentWidth");
		console.log("Width",width);
		if(width >= 440)
		{
			return false;			
		}
		else
		{
			return true;
		}
	}

});

