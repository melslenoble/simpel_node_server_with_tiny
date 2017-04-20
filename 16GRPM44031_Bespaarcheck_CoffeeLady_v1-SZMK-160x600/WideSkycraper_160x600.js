(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg_160x600 = function() {
	this.initialize(img.bg_160x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mc_Txt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// source
	this.text = new cjs.Text("Ik wil meer weten", "bold 18px 'ING Me'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.lineWidth = 240;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArOAAIWdAA");
	this.shape.setTransform(75.2,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_Txt_2, new cjs.Rectangle(0,0,244,187), null);


(lib.mc_Txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// source
	this.text = new cjs.Text("Bereken \neenvoudig \nuw maandlasten", "bold 18px 'ING Me'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.lineWidth = 240;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_Txt_1, new cjs.Rectangle(0,0,244,187), null);


(lib.mc_Txt_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// source
	this.text = new cjs.Text("Wat is \nde impact \nvan een lening?", "bold 18px 'ING Me'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.lineWidth = 240;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60524B").s().p("Al2F3IAArtILtAAIAALtg");
	this.shape.setTransform(-62.5,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_Txt_0, new cjs.Rectangle(-100,0,344,187), null);


(lib.mc_Square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_Square, new cjs.Rectangle(0,0,100,100), null);


(lib.btn_Hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mc_CTA_Txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// source
	this.text = new cjs.Text("Bereken nu", "bold 16px 'ING Me'", "#FFFFFF");
	this.text.lineHeight = 19;
	this.text.lineWidth = 130;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_CTA_Txt, new cjs.Rectangle(0,0,134,29), null);


(lib.mc_CTA_Bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CTA_BG.png
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60A6DA").s().p("ApcCuQgWgBgPgPIgCgBQgPgQgBgYIAAjqQABgXAPgQQAQgQAXgBIS6AAQAWABAPAQQAQAQABAXIAADqQgBAXgQARQgQAQgVABg");
	this.shape.setTransform(0,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_CTA_Bg, new cjs.Rectangle(-66,-28,132,34.8), null);


(lib.mc_CTA_Arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBOIgLgNQgEgGAFgEIArgxQAFgEgFgEIgrgxQgFgEAEgGIAMgQQADgFAFAFIA/BLQAFAEgFAEIg/BIQgDACgCAAQgCAAgCgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_CTA_Arrow, new cjs.Rectangle(-4.4,-8,8.8,16), null);


(lib.mc_Photo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bg_160x600();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_Photo, new cjs.Rectangle(0,0,395,600), null);


(lib.mc_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE6734").s().p("ABoDYIACgOQAAgDADgEQAEgEACAAIAHAOQAFgFAAgGQAAgDgEgFIgEgEIAGgHIAEAEQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAQAJAAAAgEQAAgBgDgDIgFgFQgHgFgEAAQgGAAgIAMQgIAMgBAJIgBAUIgNAAIAAgOQAAgIABgFQAAgBAHAEIADgFQACgDgCgCIgGgHIADgKQANAFgDgCIgBgDQgBgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQACgBAEACQABAAAAAAQABABABAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgJgDgIAAQgGAAgCABIgCAFQgSADgHAAIgNASQAAAQACAHIAGALIiFAAIAIgOIABADIACABIAJAAQAHAAADgEIgRgIIAAgNQAAgHgEgDQgEgDgFAAQgJAAgFAHQgIgHgFAAIAAgGIABgHQAJgEAOAHIAGAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgKgOgWAEQgDABgDAFQAAABgBAAQAAABgBAAQAAAAAAgBQgBAAAAgBQgDAAgFACIgGACIgIACQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAABQgGAHgGANIgBAMQAAAHACAEQAEAFACAGIivAAQgHgLAAgQQAAgKAHgHQAAgGACgDQABgFAHgHQAEgDAGgBQAGgBAFADQAGgJAMgCQAOAAAHAHQANgyAOgXQgOgigHgjIABgDIAEgDIAGgNQgDAAgCABIgBABQgGACAAAEIgBgFIgCgOQAAgDADgDQACgDAEAAIAAgPIgLAJIAAgTQAFgCABgFQAAgoAHgXQACgGAIgIIAAgSQADgBADgDQAEgEACAAQgBgCgGAAQAEgLANgMQAGgGADgBIABABQAFAAAGACIALACQgFgHgFAAIAAgCQAKgGAHAAQABADADAFQAEAEAAADIAFACIAAgKQAAgGgFgDQAIAAASAKIAMgFIgCAKIgCALIAEgFIAEgEIACgHIACgIQAMgBAJABQgGACAAAJIABAAIANgFQAIAAAFAFIgLAGIATAAIADgCQAKAGAHANIAKAYIgHgDQAAAJAEABQADAAACACIAFAEIALALQAHAGABAHQAGAMACALIAFASQgCgCgEgBQgEgBgCgDQAAAHAGAHQAEACAFAAQAEAFACAHIABANQgDgEgEgBQgDAEAFAFQAEAEAEABIAAASQAUAQAXAAQAWAAAOgKQgBgFACgGQADgGAEgDQAFgGANAAQASAAAYAXQAUAVANAlQANAlAAAlQAAAcgGAVQAHAHAMAAQAcAAAXgdQAcgjAAg7QAAgugZgoQgZgqgogTQgIgCgNACQgOACgHgBQgRgFgLgOIABgBQACAFANAAQABgCgDgEQAGgDANAAQgDgGgGAAQgJAAgBgBQgEgEgDAEIACAHIgIgDIgHAAIgIgNQgFgJgHgCIAAgDIAbgIQAQgEALACQAFAAABACIgEAFQAJAHAHAAIABAAIgDgLQAHAEAJAJQAGAMALAMQAHAJAQALQASANAHAIQAcAcAPAlQAPAkAAAnQAAAhgMAfQgLAggVAUQgdAegrAAIgOAAQgLAHgMAAgAkkCoQgEAKAAANQAAANACAFQAHgEAEgDQgDgKAAgFQAAgFAEgHQAIAAACAKQAEgFAAgIQAAgFgIgDQAAgJAFAAIgMAAQgGAJgDAEgAk7C1IAAASQAAAEADADQADADACAAIABgHIgCgLQAAgFACgEQADAAAFADQAEgKgLgHgAj6CfQgEACgEAEQgIAKAAAeIABABQABgEAEgGIAHgLQACgGACgCQAFAAAFAFIgCAKIgCAKQAPgNAAgKQAAgHgLgHIAEgHIgGgBIgJACgAgbCuIAAALIAHgDQABgHgCgEQgBgDgDgCIgGgEQACgEgCgDIgEgFIAKABQAFAEABAHQAGAAADAGIAEALIAFgOQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgEgBQAAgJgHgDIgNgGQgIgCgGAAIgJABIgHABQgEAAgDACIgFAKQADgCAGAAQAGAAADgCQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIACADIAFAHQAEAFAEgCQAFACABAHgAhBCkIAFAEQAFADADAAQADABABAFIADAIIADgDQACgCgDgJQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgBgDIgDgDIgFAAgAjpCPIAMAGQAJAEAFAFIAIAVIADgLIgBgKIgLgDQgDgEAAgDQAAgEgEgDIgHgEIgHgDIgHAAQgDADAAAGQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAgBIADAAIABAAgACgCXQACAFAFAHQAEAFAAADIAEgHIgBgCIgBgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgCQAAgGgIgGgAAKCiIgBgbQABgEgFgFIgGgJIAAAEIAEAQQACAKgCAIQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIADAFIABAAIAAAAgAB4CSQACAEAAAEQAJAAAHAEIACgDQAAgFgHgCQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgFgBIACgHQgEAAgEgDQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAIgKALQACAAADgDQADgCADAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABgAjbB6IAPAMIAHACQAIADAAACQAAAAABAAQAAABgBAAQAAABAAABQAAAAgBABQACACAAAFIACAGIAIgIIgCgIQgBgEgEAAQgEgBAAgGIgOgKQgFgGgFAAQgCgEgIAAQgFAAgCAEIgDAHIAAACIANgCIABAAgACvCDIgCAGIAGALQAEgGAAgKIgFgJIgDAIgACMCCIADAGQACAFAFABIACgMIgFgJIgHgDQgEgCgEABQgCgBgDAAIgFABIgBAFQgBADABAEIAKgCIACAAQAEAAADADgAgNCNIgBgKQgGgHgLgBIgUgBIAAgBIgLABQgGACgFAAIgFAOQAEgEAGgCIAKgDIACABIABABQAKAAAFgBQAJAAAEABQACAEAFACIAHAEgAA1BXQgFAEAAAEIACAEQACACAAADIgBALQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIAFABQABAAAAAHQAAAGgBAFQAJgMAAgGQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQACgDgBgGIgBgGIgBgPQgBABgFAEgAjKBnQAEAAABABQABAEAHAHQAKAAAFAQIABgRIgJgEIAAgEQgCgCgLgHQgBgEgHgBIgMgBIgIAKIAAADQAEgDALAAQACACAEAAgAAeBRIgEAFQgDAEAAACQAAAFAHAEQACADgDACQAGAHAAALIADgKQACgGAAgEQAAgBgEgCQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQACgCAAgFQAAgFgDgDIgCgCIAAABgACUBtQAEAIADAAIAAgSQgCAAgIgDIgGgEQgDgCgFAAQgGADAAAGIgBAJQACgBAEgDQADgDACAAQAJAAAEAIgAgPB1IgFgJQgEgFgFgCQgGAAgDgCQgEgEgGAFQgHAFgDgBQgHADAAAHIAAABQAHgBAGgGQADgBAHADQAFADAEgDQAAgBAAAAQABAAAAAAQABAAABABQAAAAABABQAEAGAKAAIAAAAgAiKByQAJABAFgEIgEgHIgRAAgAhdBuIgGgNIgJAAIABAHIAGAEIAFACIADAAgAAyAtQADADABADIAHAPIAGANQAEANABAHQAAAHAEAAIABgXIgDgEIgFgDIAHgIQgDgCgDgIQgCgGgFAAQgEgEAAgDQgFgEgLAAIAHAEgABcBfQgBgDABgEIABgGIgDgKIgGgBIgBADIAJAVIAAAAgAChBbQAAgHgDgEQgEgFAAgBQAAgEgQAAQgKAAgGAEQABAEAEAFQALgEAEAAQAIAAAAAGQAAADALADIAAAAgAiLBGQgBAEgHAJIgEAEQgBABAAAAQgBABAAAAQgBABAAAAQAAABAAAAIARgHIAHgJQADgEAAgFQgHAAgFAEgAAlA6QgCAFABADQABAGAGAGIACgBQABgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQACgCgBgDQgCgDgCgCQAAgHgBgBIgEgCgAhgBOQAJAAAFgEQgKgMgEgDIgSgDQANASAFAEgAimBCIgLAIIAJABIAHgBQAHgDAHgOIgKAAgAi3A2QgLARgKADIALAAQAGAAAEgDIAFgRIgDgBIgBAAIgBABgAhOA4QALAIAEACQAKAEAIgEIADAAIgMgHIgEgHQgLAAgJAEgACrBBIgBgHIgCgGIgFgDQgDgDgEAAQAAAAgBAAQAAAAgBABQgBAAAAAAQAAAAgBABIgEABQgGgDgFAAIgHADQgFACgJAAIAAAMQADABAEAAQAKAAAAgIQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABAAIAGABIAFgEQAEAAABADIABAEQACAGAPAAIAAAAgAjMApIgBAIIgCAKIAEgDQAIgIAAgJIgBAAIgIACgAAXAuQAAADAFAGIADgDIABgEQAAgEgIgIIgBAKgAgWA2QgFgDgFgGIgHgJQgIABgFAEQAGAFAHAEQAEAEANAAIAAAAgABGAmQAGAIAHAEIAAgJIgHgHQgDgBgFgFQgFgFgFAAIAMAPgAiEAgIACAMQAJgEAAgSQgEAFgHAFgACHAWIgMABQgCAAgDADQgDADgDABIACALQADgEAIgEQAIgDAEAAQAPAAAQAJQgBgGgDgFQgEgFgEAAQgEACgEAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgEADgDAAgAhgApQgEgIgBgOIgEAEIgEAGQgCAEAGADIAJAFIAAAAgAiRApIgCgSQgEgCgHAAQAAAGANAOIAAAAgAhTAiQACAGANgEIgGgFQgEgDAAgDIgFgUQgHARAHAMgAjeAWIgDAGQADADAAAGQABgEAEgEIAJgHIgLgDIgDADgAgYAcQAKAIAOAAIAFgCQgKgDgJgJQgGAGgEAAgAi2AZQgBgGgEgGIgIgKIAAgBQgCgFgHAAQAAAGAEAHQAHALALAEIAAAAgAiqAWIADgQIgLgGQABAIAHAOgAhGANIAIAFQAEADAEAAQgIgIAAgDQABgHgFgDIgJgDQACADADANgABxAKQgCAHACAEQAFgJALAAIANABQAAgEgFgEQgEgDgGAAQgHAAgHAIgAgBAPQAEAEAGAAQAFAAADgDQgHgDgDgDgAgtADQACAEAGAAIAKgBIgLgJIgHAGgAiEgNQAAAIABACIAAADQAEABAHgCIADgMIABgDQAEAIAAADQAHgFAEgSIgHgCQgMgFgOgBQgRAAgMAHQAAAOAFAFIAGgGQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAIAAALQAFADAGAAIADgIQAAgFADgBgACPgDQgBgFgEgGIgIgBQgFgBAAgEQgEgCgFACQgEACgCAGQgDAGACADQABgCAGgCIAHgCQAHAAANAGIAAAAgAgUgSIgHACQAAACADAEIAKAAIAEACQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQgDAAgFgHIgEgBIgBAAgAgzgNIAAgKQgLgKgbgOQABgBAAgHQAXACAXANIAAgIQgYgNgXAAIAAgCQAMgCAEgQQAIgIAAgIIAAgIQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgDABQAHgRgFgLQADAAADgCIAHgHQAEgCABgHIACgLQgGgNgEgFQgCgDgGgBIgJgDQgHgCgLAJIgDABIgBgBQgBAGgDAIQgQgCgNAIQgBgCgFgCIgJgCQgGAAgDgBIgEgJQgCgEgFAAQgCgCAAgEQgIgDgFAAQgEgDgEACQgFAEgDAAQgBAEgGAAIgJAQIAGARQAEAIAMAGQgDAEAAALQABAJACAGIgFADQAAAKAOAOQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIABAEIAAAFQgUgDgYANIABAJQAMgKAQgCIAHgBQAEAAADABIAAAIIgSAJQgLAGgGAFIAAAIIAOgKQAPgKAJgDQAFAHADACIAPgHQAKgDAIAAIACgMQgKgFACgJIgHACIgEgDQAAgGABAAQAFgEAOAAQAWAAAAAHQAAAGgEAAIgEAAQgEAJgIADIACAGQACAHACAAQAMACAOALQABgDADgDIADgEQAQAEAXAXgAgPgkQAAgDgEgIIgBgDQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAABIgFgKQgBAEABAEIAAAGQAGALAIAAIAAAAgAjfhsQgDAEgDALIAGATIACgPQACgJgBgGIAGgHgAgzhOIAJgDIADgMIgGgLgADNhyIgBgHQgGgIgCgGQgEAAgEACIgGACQAEAAAIAKQAHAAAEAHgAjfiDIgCAGIAJgDIAAgOIgHALgACqiKQgCgDgEgDIgGgEIgIAEQgEACgEAAQAEAEAEAAIAEgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIAMAAIAAAAgABDDYQgIgQAAgKQAAgIADAAIAFAJQAEgEAAgFQAAgHgEgDIALgBIgCAIQgCAFAAAEIADAcgAhbDYIACgfQAAgBAEgDIAEgCQAIAAAAAGQAAAGgKAZgAhsDYQgGgRAAgPIACgFQACgEACAAIAKAJIgBAggAiDDYIgGgNQgEgJACgGIAFgDQAEgCABgEIgDgEIgGACQAAgDAEgGIANgDQgDAGAAAOQAAATAHAMgAhsg3IABgBIALAAIAAAGgAiqg6QACABAGgBQAEgBABADQgFAAgFAFQgDgDAAgEgAhphNQAAgJgJgCQAAgVgCgJIACAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIAFgDIAZADQABAAAAABQABAAAAAAQAAAAgBAAQAAAAgBAAQgBADgEAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgBABAAABIgCAEQgDACgLAAQgDgDAAgCIgBABIABATIAHADQAAAGAFACQAIADACACQgDAHgCABIgOgHgAishOIACgGIAIgEQAFgCAAgFQACgGAAgKQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgEACgEgCIgDgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgHAAAAgHIAcAAQAGADAAAEIgCAQIgCAPQgIAFAAAFQgHADgEADQgCgCAAgFgAhtiHQgDAAgBgFQgBgEgDAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAIADABQADgBACADQADAFADAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABgAifiHQAAgGAIgCIAHgDQAFgBABACQgHAHgBADgAhHiKQgIgPgMgFQAAgKAHgDIAIgFIAIAGQAEADACADQAHAJgFANQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABgAjBiUQgFgBgCgGQACgRAKgEIAFAAIALAGQAIAEABAIQgHACgPAMQgCgDgGgBg");
	this.shape.setTransform(54.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B2D70").s().p("AC+B7Qg0gtAAhGQAAhIA3g0QA3g1BPAAQAiAAAhAMIATAHQAKADAFAAQAJAAACgWIAMAAIAKBwIgNAAQgKgigVgTQggghg2AAQg2AAgfAnQgfAnAABBQAAA/AjApQAiAoA1AAQAdAAAhgPIAAhVQAAgWgHgIQgJgIgcAAIAAgMICTAAIAAAMQgaAAgGAKQgEAHAAAdIAABTQhFAjhBAAQhZAAg1gvgAArCkIj3kAIABAUIAACbQAAApAGAKQAIAPAeAAIAAAMIh1AAIAAgMQAfAAAIgQQAFgLAAgnIAAixQAAgbgFgKQgKgSgfAAIAAgNIBuAAIDLDRIgBgRIAAhxQAAgogFgLQgHgPgeAAIAAgNIB0AAIAAANQgeAAgJAPQgGAMAAAnIAAD3gAn1ChIAAgMQAZAAAJgGQAOgJAAgcIAAjVQAAgcgMgJQgIgFgcAAIAAgNICkAAIAAANQgcAAgIAFQgLAIAAAdIAADVQAAAcAMAJQAJAGAaAAIAAAMg");
	this.shape_1.setTransform(-36.8,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlADYQgHgLAAgQQAAgKAHgHQAAgGACgDQABgFAHgHQAEgDAGgBQAGgBAFADQAGgJAMgCQAOAAAHAHQANgyAOgXQgOgigHgjIABgDIAEgDIAGgNQgDAAgCABIgBABQgGACAAAEIgBgFIgBgOQAAgDACgDQACgDAEAAIAAgPIgLAJIAAgTQAFgBABgGQAAgoAHgXQABgEAJgLIAAgRQADgBADgDQAEgEACAAQgBgCgGAAQAEgLANgMQAGgGADgBIABABQAFAAAGACIALACQgFgHgFAAIAAgCQAKgGAHAAQABADADAFQAEAEAAADIAFACIAAgKQAAgGgFgDQAIAAASAKIAMgFIgCAKIgCALIAEgFIAEgEIACgHIACgIQAMgBAJABQgGACAAAJIABAAIANgFQAIAAAFAFIgLAGIATAAIADgCQAKAGAHANIAKAYIgHgDQAAAJAEABQADAAACACIAFAEIALALQAHAGABAHQAGAMACALIAFASQgCgCgEgBQgEgBgCgDQAAAHAGAHQAEACAFAAQAEAFACAHIABANQgDgEgEgBQgDAEAFAFQAEAEAEABIAAASQAUAQAXAAQAWAAAOgKQgBgFACgGQADgGAEgDQAFgGANAAQASAAAYAXQAUAVANAlQANAlAAAlQAAAcgGAVQAHAHAMAAQAcAAAXgdQAcgjAAg7QAAgugZgoQgZgqgogTQgIgCgNACQgOACgHgBQgRgFgLgOIgGgIIgIgNQgGgJgGgDIAAgCIAbgIQAQgEALACIAGABQAFAAAFADQAIAEAIAIQAGAMALAMQAHAJAQALQASANAHAIQAcAcAPAlQAPAkAAAnQAAAhgMAfQgLAggVAUQgdAegrAAIgOAAQgLAHgMAAg");
	this.shape_2.setTransform(54.2,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_logo, new cjs.Rectangle(-86.9,-21.8,174,43.8), null);


(lib.mc_Curtain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mc_Square();
	this.instance.parent = this;
	this.instance.setTransform(80,300,1.6,6,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_Curtain, new cjs.Rectangle(0,0,160,600), null);


(lib.mc_CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_CTA_Txt
	this.txt = new lib.mc_CTA_Txt();
	this.txt.parent = this;
	this.txt.setTransform(-55.8,-22.2,1,1,0,0,0,-0.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// mc_CTA_Arrow
	this.arrow = new lib.mc_CTA_Arrow();
	this.arrow.parent = this;
	this.arrow.setTransform(52.1,-8.4,0.75,0.75,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// mc_CTA_Bg
	this.bg = new lib.mc_CTA_Bg();
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_CTA, new cjs.Rectangle(-66,-28,144.6,35), null);


(lib.mc_LetOp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAFIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAABAAIAAgCIgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQADgMALAAQAKAAABAFQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAIgDgCIgEgBQgFAAgBAGIAJAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgJAAIgBABIAAABIAIAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgHAAQACAGAEAAQADAAAEgDQABAAABAAQAAABABAAQAAAAAAABQABABAAAAQgBAGgKAAQgLAAgDgMg");
	this.shape.setTransform(124.1,36.4,1.135,1.137);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB212E").s().p("AgZAaIAAgzIAzAAIAAAzg");
	this.shape_1.setTransform(124.3,36.5,1.135,1.137);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B181C").s().p("AgOBWQgFgDAAgGIgEAAIgBABIgDACIgHAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIgBgCIgCAAIgDACQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgGgDIgDgDIAAgCIAAgBIgCABQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgGgDQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAAAIgBAAIgBABQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgHAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgBIgCAAIAAABQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBgBIgBgBIAAgBIABgFQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIABACIABAAIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAIAHAAQABAAAAABQABAAAAAAQABAAAAAAQAAABAAAAIABACIACAAIADgDQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAGADIADADIAAADIAAAAIACgBQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAIAGADQAAAAABAAQAAABAAAAQAAABABAAQAAAAAAABIABAAIABgCQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIAHAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABIABACIAEAAIABAAIAdhDQgGgGADgKIAJgbIgKADIgEAbQgBAHgHAAQgDgBgCgCQgCgDABgDIAEgfIACgEIAEgDIAdgKIABAAQAGgCAGACQAFABAEAFIAAAAIABABIALAcIAaAKQACAAACADIABADIgBADQgBADgDAAQgDABgCgBIgBAAIgcgJIgDgCIgCgDIgBgEIgLAaIAPAUIAEAIIAEAoQABAKgJABQgEAAgDgCQgDgCAAgEIgFgoIgNgQIgZA6QgCAEgEABIgDABIgEgBgAgjBJQABAAAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAgBAAIABAAIAHAAIAAAAIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABAAIAAgBIgHAAgAgzBKIAGADIABAAIgBgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABAAIAAgBIgGgDIgBAAIAAABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAAAQAAAAAAgBgAhBBDIAGADIABgBIgBAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIADgBIABABIgBgBIgGgDIgBAAIABACQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAIgBAAgAhRBCIAHAAIABAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIgBgBIgHAAIAAABIACAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgCAAgAArg+QgEgFAAgFQAAgGAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAGQAAAFgEAFQgEAEgFAAQgGAAgEgEg");
	this.shape_2.setTransform(137.5,29.7,1.135,1.137);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgSAcQgFgHAAgMQAAgMAFgHQAHgGAJAAQAIAAAGAHIAAgZIAMAAIAABEIgLAAIAAgHQgEAEgEACQgFACgDAAQgHAAgIgHgAgGgCQgEACAAAIQAAAHADAEQACAGAGAAQAEAAADgEQADgEABgIQAAgIgEgDQgEgEgDAAQgFAAgCAEg");
	this.shape_3.setTransform(112.7,35.5,1.135,1.137);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgGAjIAAhFIANAAIAABFg");
	this.shape_4.setTransform(108,35.4,1.135,1.137);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgRASQgGgHAAgLQABgMAGgGQAGgHAKAAQAKAAAHAHQAHAHgBAPIggAAQAAAGADADQADADAEAAQADAAACgCQACgBACgEIAMACQgBAHgHAEQgFAEgIAAQgNAAgFgIgAgGgMQgDAEAAAFIATAAQAAgGgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_5.setTransform(103.3,36.6,1.135,1.137);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgRAgQgFgFAAgHIAAgBIAPACQAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAQACACADAAQAFAAADgCIACgDIABgOQgGAIgIAAQgKAAgGgIQgEgHgBgJQAAgMAHgHQAFgHAKAAQAIAAAGAIIAAgHIANAAIAAAsQAAAJgCAFIgEAHQgEADgDAAQgFACgHAAQgLAAgGgEgAgHgVQgDAEAAAHQAAAJADACQAEAEADAAQAFAAADgEQAEgDgBgHQABgIgEgEQgDgEgFAAQgDAAgEAEg");
	this.shape_6.setTransform(96.8,37.6,1.135,1.137);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgBAhQgDAAgBgDQgCgBAAgEIAAgeIgHAAIAAgLIAHAAIAAgKIAMgIIAAASIAJAAIAAALIgJAAIAAAaIABACIACABIAGgCIABALQgGACgEAAQgEAAgCgCg");
	this.shape_7.setTransform(88.7,35.6,1.135,1.137);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgPAWQgFgEgDgHIAOgCQABAEACABQADADADAAQAEAAAEgCQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgCIgEgCQgPgEgFgDQgFgCAAgIQAAgHAEgEQAGgEAKAAQAKAAAFADQAFADACAHIgNACQAAgDgCgBQgCgCgFAAQgEAAgDACQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIABADIAMADQAKADAEADQAFADAAAGQAAAHgGAFQgHAFgLAAQgJAAgGgEg");
	this.shape_8.setTransform(83.6,36.6,1.135,1.137);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgMAXQgGgDgEgGQgDgGAAgIQAAgHADgGQAEgFAFgEQAHgDAGAAQAKAAAJAHQAHAHAAALQAAALgHAIQgIAHgLAAQgHAAgFgDgAgIgLQgDAGAAAFQAAAHADAEQAEAEAEAAQAGAAADgEQADgDAAgIQAAgHgDgEQgDgEgGAAQgEAAgEAEg");
	this.shape_9.setTransform(77.4,36.6,1.135,1.137);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAJAjIgMgXIgGAGIAAARIgNAAIAAhFIANAAIAAAkIAPgRIAQAAIgRASIASAgg");
	this.shape_10.setTransform(71.2,35.4,1.135,1.137);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AAJAaIAAgkQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAgBAAQgCAAgCACQgEADgBACIgBAiIgNAAIAAgyIAMAAIAAAIQAIgJAIAAQAFAAADACQAEABABADIAEAFIAAAog");
	this.shape_11.setTransform(62.4,36.6,1.135,1.137);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgRASQgFgHgBgLQAAgLAHgHQAHgHAJAAQALAAAGAHQAHAHAAAPIghAAQAAAFADAEQADADAEAAQAEAAACgBIACgGIANACQgCAHgFAFQgGADgIAAQgNAAgFgIgAgGgMQgDAEABAFIASAAQAAgGgDgDQgCgDgFAAQgCAAgEADg");
	this.shape_12.setTransform(55.9,36.7,1.135,1.137);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAKAaIAAgaQAAgIgBgCIgDgDQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgGACIgDAFQgBACAAAJIAAAXIgOAAIAAgyIANAAIAAAIQAGgJAJAAQAFAAADACQAEABACADIACAFIABAJIAAAfg");
	this.shape_13.setTransform(49.6,36.6,1.135,1.137);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgSASQgEgHAAgLQAAgLAGgHQAGgHAKAAQALAAAGAHQAGAHABAPIghAAQAAAGADADQADADAEAAQADAAACgBIADgGIAOACQgDAHgFAFQgFADgKAAQgMAAgGgIgAgGgMQgDADAAAGIATAAQAAgGgDgDQgDgDgEAAQgCAAgEADg");
	this.shape_14.setTransform(43.1,36.7,1.135,1.137);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgGAjIAAhFIANAAIAABFg");
	this.shape_15.setTransform(38.6,35.6,1.135,1.137);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgRAcQgGgGAAgNQAAgMAFgHQAHgGAJAAQAHAAAHAHIAAgZIAMAAIAABEIgLAAIAAgHQgDAEgFACQgEACgEAAQgIAAgGgHgAgGgCQgEADAAAHQAAAIADAEQACAFAGAAQAEAAADgEQADgEABgIQAAgIgEgDQgEgEgDAAQgFAAgCAEg");
	this.shape_16.setTransform(30.4,35.6,1.135,1.137);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgGAjIAAhFIANAAIAABFg");
	this.shape_17.setTransform(25.7,35.6,1.135,1.137);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgRASQgGgHAAgLQABgLAGgHQAGgHAKAAQALAAAGAHQAHAHgBAPIggAAQAAAGADADQADADAEAAQADAAACgBIAEgGIAMACQgBAHgHAFQgEADgJAAQgNAAgFgIgAgGgMQgDADAAAGIATAAQAAgGgDgDQgDgDgEAAQgCAAgEADg");
	this.shape_18.setTransform(21.1,36.7,1.135,1.137);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgPAfQgIgEgFgJQgEgJAAgJQABgKAEgJQAEgIAJgEQAHgEAJAAQANAAAHAFQAHAGACAJIgNADQgCgFgEgDQgEgDgGAAQgIAAgGAGQgFAFAAAMQAAAMAFAGQAGAGAIAAIAJgCIAHgEIAAgJIgQAAIAAgLIAeAAIAAAbQgEAEgIAEQgIADgJAAQgKAAgIgFg");
	this.shape_19.setTransform(13.7,35.6,1.135,1.137);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgGAjIAAgNIANAAIAAANgAgDARIgDgiIAAgRIANAAIAAARIgDAig");
	this.shape_20.setTransform(44,23.6,1.135,1.137);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgYAjIAAhEIANAAIAAAHQADgEADgCQAFgCAEAAQAIAAAGAHQAHAGAAANQAAALgHAHQgFAHgKAAIgGgBIgHgGIAAAZgAgHgUQgDAEAAAHQAAAJADADQADAEAEAAQAFAAADgEQADgDAAgIQAAgHgDgFQgDgEgFAAQgDAAgEAEg");
	this.shape_21.setTransform(39,25.7,1.135,1.137);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgMAXQgGgDgEgGQgDgGAAgIQAAgGADgGQAFgHAFgDQAFgDAHAAQALAAAIAHQAHAHAAALQAAAMgHAHQgIAHgLAAQgFAAgHgDgAgIgKQgDADAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEAAgIQAAgHgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_22.setTransform(32.1,24.7,1.135,1.137);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgBAhIgFgCIgCgGIAAgeIgGAAIAAgKIAGAAIAAgKIANgIIAAASIAJAAIAAAKIgJAAIAAAbIABABIADAAIAFgBIABAKQgEACgGAAQgFAAgBgBg");
	this.shape_23.setTransform(23.9,23.7,1.135,1.137);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgRASQgGgHAAgKQABgMAGgHQAGgHAKAAQALAAAGAHQAHAHgBAPIggAAQAAAGADADQAFAEACAAIAFgCQACgBACgFIAMADQgCAHgGAEQgFADgIAAQgNAAgFgIgAgGgMQgDADAAAGIATAAQAAgGgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_24.setTransform(18.9,24.7,1.135,1.137);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgYAiIAAhDIAPAAIAAA4IAhAAIAAALg");
	this.shape_25.setTransform(12.8,23.6,1.135,1.137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2 copy
	this.instance = new lib.mc_Square();
	this.instance.parent = this;
	this.instance.setTransform(80,31.9,1.6,0.59,0,0,0,50,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.mc_Square();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,14,1.6,0.28,0,0,0,50,50);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_1.cache(-2,-2,104,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_LetOp, new cjs.Rectangle(0,0,160,59.8), null);


(lib.mc_Footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNhxQACA/AtAuQAtAsA/ABIibBJg");
	this.shape.setTransform(7.8,-4);

	this.instance = new lib.mc_Square();
	this.instance.parent = this;
	this.instance.setTransform(80.2,53.5,1.6,1.04,0,0,0,50.1,51.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_Footer, new cjs.Rectangle(0,-15.5,160,119.5), null);


(lib.mc_Wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_Curtain
	this.mc_Curtain = new lib.mc_Curtain();
	this.mc_Curtain.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_Curtain).wait(1));

	// btn_Hit
	this.btn_Hit = new lib.btn_Hit();
	this.btn_Hit.parent = this;
	this.btn_Hit.setTransform(80,300,1.6,6,0,0,0,50,50);
	new cjs.ButtonHelper(this.btn_Hit, 0, 1, 2, false, new lib.btn_Hit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Hit).wait(1));

	// mc_logo
	this.mc_logo = new lib.mc_logo();
	this.mc_logo.parent = this;
	this.mc_logo.setTransform(106.8,520.9,0.477,0.475,0,0,0,9,8.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_logo).wait(1));

	// mc_LetOp
	this.mc_LetOp = new lib.mc_LetOp();
	this.mc_LetOp.parent = this;
	this.mc_LetOp.setTransform(116.3,549.9,1,1,0,0,0,116.3,9.9);

	this.timeline.addTween(cjs.Tween.get(this.mc_LetOp).wait(1));

	// mc_Footer
	this.mc_Footer = new lib.mc_Footer();
	this.mc_Footer.parent = this;
	this.mc_Footer.setTransform(168,542.7,1,1,0,0,0,168,46.7);

	this.timeline.addTween(cjs.Tween.get(this.mc_Footer).wait(1));

	// mc_Txt_1
	this.mc_Txt_1 = new lib.mc_Txt_1();
	this.mc_Txt_1.parent = this;
	this.mc_Txt_1.setTransform(113.3,42.7,1,1,0,0,0,101.3,28.7);

	this.timeline.addTween(cjs.Tween.get(this.mc_Txt_1).wait(1));

	// mc_CTA
	this.mc_CTA = new lib.mc_CTA();
	this.mc_CTA.parent = this;
	this.mc_CTA.setTransform(80,455);

	this.timeline.addTween(cjs.Tween.get(this.mc_CTA).wait(1));

	// Layer 2
	this.mc_Txt_2 = new lib.mc_Txt_2();
	this.mc_Txt_2.parent = this;
	this.mc_Txt_2.setTransform(131.2,521.6,0.55,0.55,0,0,0,122.2,93.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_Txt_2).wait(1));

	// mc_Orange
	this.mc_Orange = new lib.mc_Square();
	this.mc_Orange.parent = this;
	this.mc_Orange.setTransform(80,300,1.6,6,0,0,0,50,50);
	this.mc_Orange.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 98, 10, 0)];
	this.mc_Orange.cache(-2,-2,104,104);

	this.timeline.addTween(cjs.Tween.get(this.mc_Orange).wait(1));

	// mc_Txt_0
	this.mc_Txt_0 = new lib.mc_Txt_0();
	this.mc_Txt_0.parent = this;
	this.mc_Txt_0.setTransform(109.5,426.3,1,1,0,0,0,97.5,41.3);

	this.timeline.addTween(cjs.Tween.get(this.mc_Txt_0).wait(1));

	// mc_Photo
	this.mc_Photo = new lib.mc_Photo();
	this.mc_Photo.parent = this;
	this.mc_Photo.setTransform(0,-0.1,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.mc_Photo).wait(1));

	// mc_Background
	this.mc_Background = new lib.mc_Square();
	this.mc_Background.parent = this;
	this.mc_Background.setTransform(80,300,1.6,6,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.mc_Background).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_Wrapper, new cjs.Rectangle(-133,-2,389,602), null);


// stage content:
(lib.WideSkycraper_160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_Wrapper
	this.mc_Wrapper = new lib.mc_Wrapper();
	this.mc_Wrapper.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_Wrapper).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,300,344,600);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bg_160x600.jpg?1490690972244", id:"bg_160x600"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;