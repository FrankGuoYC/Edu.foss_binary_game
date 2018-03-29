let fadePeriod = 100;
let delayPeriod = 1506;	// ms
let delayLong = 220;
let isGameEnd = true;

function init(){

	$(".block").hide();	// 隱藏各種block中所有的元件
	$("#confirm").hide();
	$("#start_game").click( function(){
		isSuccess = gameStart();
	});
	// Go to welcome stage
	welcome();
}

function welcome() {
	$("#intro_block").fadeIn( fadePeriod, function(){

	});
}

function gameStart() {
	// if (isGameEnd) {
	// 	gameIntro1();
	// }
	// setTimeout( gameStart, 500 );	// 每500ms檢查一次
	gameIntro1();
}

function gameIntro1() {
	isGameEnd = false;
	$("#game_block").show().children().hide();	// Show the game block only, for the text animation
	$('#stage_circle_container').find('.bg_red').addClass('stage_circle_focused');
	$("#intro_block").fadeOut( fadePeriod, function(){
		$("#game_intro1").html("平常我們所使用的數字都是<span style='color: #00FF00'>十進位數</span>").fadeIn( fadePeriod );
		$('#confirm').attr('value','Next').fadeIn( fadePeriod ).click(function(){
			$('#confirm').hide().off();
			$("#game_intro1").fadeOut( fadePeriod, function(){
				$('#game_img').attr('src','img/switch.jpg').width(250).height(200).fadeIn(fadePeriod);	// display開關圖
				$('#game_intro1').html("不過電腦可不是如此<br><br>你可以將電腦想像成是<br>由非常多、非常小的<span style='color: yellow'>\"開關\"</span>所組成").fadeIn( fadePeriod );
				$('#confirm').fadeIn(fadePeriod).click(function(){
					$('#confirm').hide().off();
					$('#game_intro1').fadeOut( fadePeriod, function(){
						$('#game_intro1').html("而因為開關只有<span style='color: blue'>\"關\"</span>、<span style='color: red'>\"開\"</span>，也就是<span style='color: blue'>\"0\"</span>、<span style='color: red'>\"1\"</span>兩種變化，<br>所以電腦使用的是<span style='color: orange'>二進位數字</span>來進行運算與資料的儲存").fadeIn( fadePeriod );
						$('#confirm').fadeIn(fadePeriod).click(function(){
							$('#confirm').hide().off();
							$('#game_img').attr('src','').fadeOut(fadePeriod);	// fadeOut開關圖
							$('#game_intro1').fadeOut( fadePeriod, function(){
								$('#game_img').attr('src','img/tutor1.png').width(960).height(480).fadeIn(fadePeriod);
								$('#confirm').fadeIn(fadePeriod).click(function(){
									$('#confirm').hide().off();
									$('#game_img').fadeOut(fadePeriod, function(){
										$('#game_img').attr('src','img/tutor2.png').width(640).height(360).fadeIn(fadePeriod);
										$('#confirm').fadeIn(fadePeriod).click(function(){
											$('#confirm').hide().off();
											$('#game_img').fadeOut(fadePeriod, function(){
												$("#game_intro1").html("接下來我們就進行一個小遊戲，<br>試著將平常的數字轉換為<span style='color: yellow'>二進位表示</span><br>(也就是用<span style='color: blue'>0</span>與<span style='color: red'>1</span>表示)").fadeIn( fadePeriod );
												$('#confirm').fadeIn(fadePeriod).click(function(){
													$('#confirm').hide().off();
													$("#game_intro1").fadeOut( fadePeriod, function(){
														$("#game_title").html("第一關").fadeIn(fadePeriod).delay(delayPeriod).fadeOut(fadePeriod, function(){
															$("#game_intro2").html("規則: 將方塊們調整成與題目相同的數值<br>即可過關");
															$("#game_intro3").text("點按方塊即可切換0與1");
															$("#game_intro2, #game_intro3").fadeIn( fadePeriod ).delay( delayPeriod );
															$("#game_intro2").fadeOut( fadePeriod );
															$("#game_intro3").fadeOut( fadePeriod, function(){
																stage(1);
															} );
														});


													} );
												} );
											});
											
										});

									});
									
								});


							} );
						} );
					} );

				} );
			});
			

		} );

		

		// setTimeout(function(){
			
		// }, fadePeriod + delayPeriod + fadePeriod);
		$("#confirm").click(function(){

		});
	});
	return true;
}

function gameIntro2(){

}

function stage(whichSub){	
	let bit_size;
	let target;
	if(whichSub == 1){
		bit_size = 5;
		target = Math.floor(Math.random()*31) + 1;	// Random between 1 and 31
		$('#play_area').fadeIn( fadePeriod );
		$("#game_intro2").html("第1關");
		$('#game_intro3').html("試著用0與1表示<span style='font-size: 50px; color: #CC6600'>" + target + "</span>");
		$('#game_intro4').text("");
		$("#game_intro2, #game_intro3, #game_intro4").fadeIn( fadePeriod );
	} else if (whichSub == 2){		
		bit_size = 8;
		target = Math.floor(Math.random()*255) + 1;	// Random between 1 and 255

		$("#game_title").html("第二關").fadeIn(fadePeriod).delay(delayPeriod).fadeOut(fadePeriod, function(){
			$("#game_intro2").html("既然這麼快就通過了，那來複雜一點的好了");
			$("#game_intro2").fadeIn( fadePeriod ).delay( delayPeriod ).fadeOut( fadePeriod, function(){
				$('#play_area').fadeIn( fadePeriod );
				$("#game_intro2").html("第2關");
				$('#game_intro3').html("試著用0與1表示<span style='font-size: 50px; color: #CC6600'>" + target + "</span>");
				$('#game_intro4').text("");
				$("#game_intro2, #game_intro3, #game_intro4").fadeIn( fadePeriod );
			} );
		});

	} else if (whichSub == 3) {
		bit_size = 11;
		target = Math.floor(Math.random()*2047) + 1;	// Random between 1 and 2047

		$("#game_title").html("第三關").fadeIn(fadePeriod).delay(delayPeriod).fadeOut(fadePeriod, function(){
			$("#game_intro3").html("居然這麼厲害，看來要再更複雜一點");
			$("#game_intro3").fadeIn( fadePeriod ).delay( delayPeriod ).fadeOut( fadePeriod, function(){
				$('#play_area').fadeIn( fadePeriod );
				$("#game_intro2").html("第3關");
				$('#game_intro3').html("試著用0與1表示<span style='font-size: 50px; color: #CC6600'>" + target + "</span>");
				$('#game_intro4').text("");
				$("#game_intro2, #game_intro3, #game_intro4").fadeIn( fadePeriod );
			} );
		});
	} else if (whichSub == 4){
		// Win the game
		$('#game_title').html("<span id='gameWin' style='font-size: 80px; color: #FFCC22'>恭喜通關♛</span>").fadeIn(fadePeriod);
		$('#gameWin').addClass('golden_shining');
		$('#confirm').attr('value','再玩一次').fadeIn(fadePeriod).click(function(){
			isGameEnd = true;
			window.location.reload();	// 重新整理
		});
	}


	for(let i=bit_size-1; i>=0; i--){
		let num = Math.floor(Math.pow(2, i));
		let $smallBox = $("<div>", {id: "small_box_" + num, "class": "small_box"});
		$smallBox.click(function(){
			if($(this).hasClass('small_box_checked')){
				$(this).text("0");
			} else {
				$(this).text("1");
			}
			$(this).toggleClass('small_box_checked');
			// Check if the current number is answer or not
			if ( updateAnswerAndCheck(bit_size, target) ){
				$('.small_box').off();	// Disable click event
				$('#game_intro4').text("答對了!");
				// Fade out all things
				$('.game_intro').delay(2000).fadeOut( fadePeriod );					
				// Remove things in #play_area(像是box那些)
				$('#play_area').delay(2000).fadeOut( fadePeriod, function(){
					$('#play_area').html("");
					stage(whichSub+1);	// Go to next stage
				});
			}
		});
		$smallBox.text("0");
		$("#play_area").append($smallBox);
	}	


	$('#play_area').append("<br>");
	// 為block們加上註解
	for(let i=bit_size-1; i>=0; i--){
		let num = Math.floor(Math.pow(2, i));
		let $smallBoxAnno = $("<div>", {id: "small_box_anno_" + num, "class": "small_box_anno"});
		$smallBoxAnno.text(num);
		$("#play_area").append($smallBoxAnno);	
	}	
	// 加上"=多少"
	let $equalTo = $("<div>", {id: "equalTo"})
	$equalTo.text("= 0");
	$('#play_area').append("<br>");
	$("#play_area").append($equalTo);
	$("#play_area").append("<br>");

}

function updateAnswerAndCheck(bit_size, target){
	value = 0;

	let $block;
	for(let i=0;i<bit_size;i++){
		let num = Math.floor(Math.pow(2, i));
		let $block = $('#play_area').find('#small_box_'+num);
		if( parseInt($block.text()) == 1 ){
			value += num;
		}
	}	

	// And then judge if the value is the correct answer(i.e. equals to target or not)
	if( value == target ){
		// Correct Answer!
		// Update the answer (i.e. Text of #equalTo ) with special decoration
		$('#equalTo').html("<span style='color: yellow'>= " + value + "</span>");
		return true;
	}	
	// Update the answer (i.e. Text of #equalTo )
	$('#equalTo').text("= " + value);
	return false;
}

function stage2() {

	// 用來產生2維block的code，先寄放這邊
	for(let i=0; i<5; i++){
		for(let j=0; j<4; j++){
			let $smallBox = $("<div>", {id: "small_box_" + (i*5+j), "class": "small_box"});
			$smallBox.click(function(){
				$(this).toggleClass('small_box_white');
			});
			$("#play_area").append($smallBox);
		}
		$('#play_area').append('<br>');
	}
}