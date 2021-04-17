$(document).ready(function(){
	$("#password").keyup(function(){
		checkPassword($("#password").val());
	});

});

function checkPassword(password)
{
	var strength = 0;
	if (password.length >= 5)
	{
		strength++;

		if (password.match(/([a-z])/) && password.match(/([A-Z])/)) 
		{
			strength++;
		}
		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) 
		{
			strength++;
		}
		if (password.match(/([!, @, #, $, %, ^, &, *, _, ~, ?])/)) 
		{
			strength++;
		}
		// check for more than one special chracters in the string
		if (password.match(/(.*[!, @, #, $, %, ^, &, *, _, ~, ?].*[!, @, #, $, %, ^, &, *, _, ~, ?])/)) 
		{
			strength++;
		}

	}
	alert(strength);
}