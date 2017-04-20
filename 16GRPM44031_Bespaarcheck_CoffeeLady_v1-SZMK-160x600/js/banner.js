///////////////////////////////////////////////////
////////////////////// SETUP //////////////////////
///////////////////////////////////////////////////

function bannerInit() {
	////////////////////// GLOBAL SETTINGS //////////////////////
	
	_wrapper			=	_root.mc_Wrapper;
	
	_tl					=	new TimelineLite({
		onStart: function() {
			console.log('start! ETA: ',  _tl.duration() / _tl.timeScale()  )
		},
		onComplete: function() {
			console.log('end!');
			_end = true;
		}
	});

	_nAnimation			=	0;
	_loop				=	0;
	_nFrame				=	0;
	_end				=	false;
	_mouseIn			=	false;

	_border 			=	_stage.addChild( new createjs.Shape());
	_borderColor		=	[ "#666666", "#ff620a" ];

	_hitObjects			=	[	
								_wrapper.mc_CTA
							];
	_Objects			=	[	_wrapper.mc_CTA,
								_wrapper.mc_Txt_0,
								_wrapper.mc_Txt_1,
								_wrapper.mc_Txt_2,
								_wrapper.mc_Photo,
								_wrapper.mc_Orange
							];

	
	////////////////////// SAVE PROPS //////////////////////

	saveAllProps(_Objects, false);

	// saveGuides(_wrapper, "mc_Photo", 1);


	////////////////////// ADD LISTENERS //////////////////////

	_wrapper.btn_Hit.addEventListener( "click",	hitBehavior );

	_canvas.addEventListener( "mouseover",		canvasBehavior );
	_canvas.addEventListener( "mouseout",		canvasBehavior );

	////////////////////// ELEMENT SPECIFIC SETTINGS //////////////////////
	
	drawBorder(1, _borderColor[0]);

	_wrapper.mc_Txt_0.shadow = new createjs.Shadow("rgba(0,0,0,0.15)",0,0,4);


	////////////////////// START BANNER //////////////////////
	
	masterTimeline();	
}

///////////////////////////////////////////////////
////////////////////// INTERACTION ////////////////
///////////////////////////////////////////////////

function onReplay(){
	console.log("onReplay");
	
	TweenLite.killDelayedCallsTo(masterTimeline);

	for(var nObj = 0; nObj<_Objects.length;nObj++){
		TweenLite.killDelayedCallsTo(setVis);
		TweenLite.killTweensOf(_Objects[nObj]);
		
	};

	resetAllProps(_Objects, false);
	
	_wrapper.mc_Curtain.alpha = 1;
	_wrapper.mc_Curtain.visible = true;


	bannerInit();
	_loop ++;
}

///////////////// HIT BEHAVIOR ////////////////

function hitBehavior(evt) {
	console.log("hitBehavior : " + evt.type );
	
	switch(evt.type) {
		case "click":

			//EB.clickthrough();

		break;
	}
};

///////////////// STAGE BEHAVIOR ////////////////

function canvasBehavior(evt) {
	//console.log("canvasBehavior : " + evt.type );
	
	switch(evt.type) {
		case "mouseover":

			_mouseIn = true;
			onCanvasOver();

		break;
		case "mouseout":

			_mouseIn = false;			
			onCanvasOut();

		break;
    }
};

function onCanvasOver() {

	// startHitTestTracker();
	ctaBehavior("mouseover")
	drawBorder(1, _borderColor[1] );

}

function onCanvasOut() {

	// stopHitTestTracker();
	ctaBehavior("mouseout")
	drawBorder(1, _borderColor[0] );

};

///////////////// CTA BEHAVIOR ////////////////

function ctaBehavior(evt) 
{
	// console.log("ctaBehavior : " + evt );

	switch(evt) {
		case "mouseover":
			onCTAOver();
		break;
		case "mouseout":
			onCTAOut();
		break;
	}
};

function onCTAOver() {
	
	var zoom = 1.1;
	TweenLite.to(_wrapper.mc_CTA, .15, { scaleX:_wrapper.mc_CTA.startXS*zoom, scaleY:_wrapper.mc_CTA.startYS*zoom, ease:Power2.easeOut});

};

function onCTAOut() {
	
	TweenLite.to(_wrapper.mc_CTA, .15, { scaleX:_wrapper.mc_CTA.startXS, scaleY:_wrapper.mc_CTA.startYS, ease:Power2.easeIn});

};

///////////////////////////////////////////////////
////////////////////// BANNER SPECIFIC ////////////
///////////////////////////////////////////////////

function drawBorder(weight, color) {
	
	_border.graphics = new createjs.Graphics().setStrokeStyle(weight).beginStroke( color ).drawRect( 0.5, 0.5, _docW-1, _docH-1 );

}


///////////////////////////////////////////////////////
////////////////////// ANIMATION //////////////////////
///////////////////////////////////////////////////////

function masterTimeline() {
	_tl.add(scene_0()); //add the first animation at a time of 0.3 seconds
	_tl.add(scene_1(), "+=1");
	_tl.timeScale(1); // put a 4 in there, I dare you ;)	
}

function scene_0() {
	var tl = new TimelineLite({
		onStart: function() {
			console.log('_loop', _loop)
			setVis(	[
				_wrapper.mc_Photo,
				_wrapper.mc_Txt_0,
				_wrapper.mc_Txt_1,
				_wrapper.mc_Txt_2,
				_wrapper.mc_Orange,
				_wrapper.mc_CTA
			], true );
		}
	});
	
	var d = 0;

	tl.insert(TweenLite.to(_wrapper.mc_Curtain, .25, { alpha:0, ease:Power2.easeOut }), d);	

	// var _g = _wrapper.mc_Photo.guides[0];
	// tl.insert( TweenLite.to(_wrapper.mc_Photo, 5, { x:_g.x, y:_g.y, scaleX:_g.scaleX, scaleY:_g.scaleY, ease:Power1.easeOut }), d);

	d += .25;
	tl.insert(TweenLite.from(_wrapper.mc_Txt_0, .5, { alpha:0, x:"+=8", ease:Power2.easeOut }), d);	

	d += 3.5;
	tl.insert(TweenLite.from(_wrapper.mc_Orange, .5, { alpha:0, ease:Power2.easeOut }), d);	

	d += .25;
	tl.insert(TweenLite.from(_wrapper.mc_Txt_1, .5, { alpha:0, x:"+=8", ease:Power2.easeOut }), d);	

	d += .75;
	tl.insert(TweenLite.from(_wrapper.mc_CTA, .25, { alpha:0, x:"+=8", ease:Power2.easeOut }), d);	

	d += .75;
	tl.insert(TweenLite.from(_wrapper.mc_Txt_2, .25, { alpha:0, x:"+=8", ease:Power2.easeOut }), d);	
	
	return tl;			
}

function scene_1() { // End, CTA pulse
	
	var tl = new TimelineLite();

	tl.insert( function(){ if(!_mouseIn){ onCTAOver(.25) }}, 0);
	tl.insert( function(){ if(!_mouseIn){ onCTAOut(.25) }}, 0.5);

	tl.insert( function(){ if(!_mouseIn){ onCTAOver(.25) }}, 1);
	tl.insert( function(){ if(!_mouseIn){ onCTAOut(.25) }}, 1.5);

	tl.insert( function(){ if(_loop == 0){ onReplay() }}, 2.5); // Loop once!

	return tl;
}


/////////////////////////////////////////////////
////////////////////// END //////////////////////
/////////////////////////////////////////////////