let fadePeriod = 1000;

function init(){
	$(".block").hide();	// 隱藏所有的元件
	$("#start_game").click(function() {
		gameStart();
	});
	// Go to welcome stage
	welcome();
}

function welcome() {
	$("#intro_block").fadeIn( fadePeriod, function() {
    	console.log("I am here!")
    	// Animation complete
	});
}

function gameStart() {
	$("#intro_block").fadeOut( fadePeriod, function(){
		$("#game_block").fadeIn( fadePeriod );
	});

}