function motion(event)
{
	var left_right = event.accelerationIncludingGravity.x;
	var top_bottom = event.accelerationIncludingGravity.y;
	
	var pre_move_y = Math.floor(top_bottom);
	var pre_move_x = Math.floor(left_right);
	
	var key_x = localStorage.getItem('presetx');
	var key_y = localStorage.getItem('presety');
	if(!key_x && !key_y)
	{
		var y_preset = parseInt(pre_move_y);
		var x_preset = parseInt(pre_move_x);
		localStorage.setItem('presety', y_preset);
		localStorage.setItem('presetx', x_preset);
		return false;
		// next motion event will get executed (I guess we could potentially execute this one aswell...
	}
	else
	{
		if(pre_move_y < 0)
		{
			var move_y = parseInt(pre_move_y) + Math.abs(parseInt(key_y));	
		}
		else
		{
			var move_y = (pre_move_y) - (key_y);	
		}
		if(pre_move_x < 0)
		{
			var move_x = parseInt(pre_move_x) + Math.abs(parseInt(key_x));	
		}
		else
		{
			var move_x = (pre_move_x) - (key_x);	
		}
	}
	
	if(move_y < 0)
	{
		var y_sign = '-';
		var move_y = Math.abs(move_y);
	}
	else
	{
		var y_sign = '+';
	}
	
	if(move_x < 0)
	{
		var x_sign = '+';
		var move_x = Math.abs(move_x);
	}
	else
	{
		var x_sign = '-';
	}
	
	/*
	*
	*	Comment or Remove the 4 lines bellow in production use.
	*
	*/
	$('#xaxis').html('Moving-x:' + x_sign + '' + move_x);
	$('#xaxis').append('<br/>Defaulting-x:' + key_x + '<br/>Current-x:' + pre_move_x);
	$('#yaxis').html('Moving-y:' + y_sign + '' + move_y);
	$('#yaxis').append('<br/>Defaulting-y:' + key_y + '<br/>Current-y:' + pre_move_y);
	
	var y_pos = $('#picture').position().top;  
	var x_pos = $('#picture').position().left; 
	if(y_pos < -350 && y_sign == '-' || y_pos > -20 && y_sign == '+')
	{
		// return false;
	}
	else
	{
		$('#picture').animate(
		{
			'top' : y_sign + '=' + move_y
		},
		0
		);
	}
	if(x_pos < -350 && x_sign == '-' || x_pos > -20 && x_sign == '+')
	{
		// return false;
	}
	else
	{
		$('#picture').animate(
		{
			'left' : x_sign + '=' + move_x
		},
		0
		);
	}
}

$(document).ready(function()
{
	localStorage.clear();
	
	if(window.DeviceMotionEvent)
	{
		window.addEventListener("devicemotion", motion, false);
	}
	else
	{
		alert('Tilt is not supported on your current device. Try this page on your mobile device?');
	}
});