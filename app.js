(function(){
	"use strict";
	var app = {
		compt :150,
		sec :undefined,
		interval:null,
		userInput:null,
		init: function(){
			app.watcher();

		},
		watcher : function(){
			$("#start").on("click",app.start);
			$("#stop_play").on("click",app.stop_play);
			$("#reset").on("click",app.reset);
				
		},
		start : function(){
			
			app.interval = setInterval(app.decrement, 1000);
			console.log(app.compt);
			$("#stop_play").data("value", "play");
			
			
		},

		stop_play : function(){
			$("#stop_play").data("value", "stop");
			console.log($("#stop_play").data("value", "stop"));
			clearInterval(app.interval);
			

		},

		reset : function(){
			console.log("reset");
			app.init();
		},

		decrement : function(){
			app.compt--;
			app.update();

		},

		update : function(){
			app.min =(app.compt*60)/(3600);
			app.sec = app.compt%60;

			console.log(parseInt(app.sec, 10));

			$("#timerMin").html(parseInt(app.min, 10));
			$("#timerSec").html(app.sec);
			// console.log(app.sec);


			if (app.compt === 0) {
				alert("End")
				
			}
		},

		  userInput : function(){
			 $("#userInputMin").val();

		  },


}


app.init();
})();


		// seconde = parseInt(app.compt,10) ;
