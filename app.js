(function(){
	"use strict";
	
	var app = {
		compt :10,
		defaultTimer:10,
		sec :undefined,
		interval:null,
		userInput:null,
		
		init: function(){
			this.watcher();
			// app.userInput();
		},

		watcher : function(){
			var that = this ;
			
			$("#start").on("click",this.start.bind(this));
			$("#stop_play").on("click",this.stop_play.bind(this));
			$("#reset").on("click",this.reset.bind(this));

		},
		start : function(){
			
			// app.userInput();

			$("#stop_play").data("value", "play");
			
			// console.log($("#stop_play").data("value"));
			
			this.interval = setInterval(this.decrement.bind(this), 1000);
			// console.log(this.compt);
			
			
		},

		stop_play : function(){
			$("#stop_play").data("value", "stop");
			clearInterval(this.interval);

		},

		reset : function(){

			this.compt = this.defaultTimer; 
			this.update();


			
		},

		decrement : function(){
			this.compt--;
			this.update();

		},

		update : function(){
			//console.log($("#stop_play").data("value"));
			this.min =(app.compt*60)/(3600);
			this.sec = app.compt%60;

			//console.log(parseInt(this.sec, 10));

			$("#timerMin").html(parseInt(this.min, 10));
			$("#timerSec").html(this.sec);
			// console.log(app.sec);


			if (this.compt === 0) {
				clearInterval(this.interval);

			}
		},

		userInput : function(){
			$("#userInputMin").val();
			$("#userInputMin").val();
		},
	}
	app.init();
})();


		// seconde = parseInt(app.compt,10) ;
