(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"./bg1.jpg?1473950784693", id:"bg1"},
		{src:"./hpe_pri_grn_pos_rgb.png?1473950784693", id:"hpe_pri_grn_pos_rgb"},
		{src:"./ML350_Gen9.png?1473950784693", id:"ML350_Gen9"},
		{src:"./Rectangle2.jpg?1473950784693", id:"Rectangle2"},
		{src:"./xeon_k_rgb_60.png?1473950784693", id:"xeon_k_rgb_60"}
	]
};



// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.hpe_pri_grn_pos_rgb = function() {
	this.initialize(img.hpe_pri_grn_pos_rgb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,50);


(lib.ML350_Gen9 = function() {
	this.initialize(img.ML350_Gen9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,330);


(lib.Rectangle2 = function() {
	this.initialize(img.Rectangle2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.xeon_k_rgb_60 = function() {
	this.initialize(img.xeon_k_rgb_60);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);


(lib.Backgroundcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ML350_Gen9();
	this.instance.setTransform(296.2,65,0.825,0.825);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(296.2,65,215.2,272.1);


(lib.Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Serveur DL380 Gen9 
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA7IAUgoIgEABIgCAAQgLAAgKgFQgIgFgFgJQgEgHgBgMQAAgLAGgJQAFgJAIgGQAKgFAKAAQAMAAAIAFQAJAGAGAJQAFAJAAALQAAAIgDAJQgCAHgHALIgZAqgAgOgiQgHAGAAAKQAAAHADAFQACAFAFABQAGAEAFAAQAGAAAFgEQAFgBADgFQADgFAAgHQAAgKgHgGQgGgHgJAAQgJAAgFAHg");
	this.shape.setTransform(145.1,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQArIAAgyQAAgIgEgFQgEgEgIAAQgEAAgFADQgFAEgBAGIAAA2IgTAAIAAhTIATAAIAAAIQADgEAGgDQAGgCAFgBQAPABAHAIQAIAJAAAOIAAA1g");
	this.shape_1.setTransform(136.2,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAmQgKgFgGgKQgEgJgBgOQABgLAEgKQAFgKAJgGQAJgFAJgBQAMABAIAFQAHAFAEAJQAFAKAAAMIAAAFIg2AAQAAAIAEAFQAEAFAGADQADACAHAAQAHAAAGgBQAFgCAGgEIAAAQQgFAEgHACQgHACgIAAQgKAAgJgGgAATgJQgBgIgFgEQgEgFgHgBQgFAAgGAFQgFAEgCAJIAjAAIAAAAg");
	this.shape_2.setTransform(127.4,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA0QgMgIgHgNQgHgOgBgRQABgRAIgNQAHgOANgHQANgIAPAAQAKAAAJADQAIACAGAFIAAAVQgIgHgIgDQgHgDgKAAQgKAAgIAFQgJAGgEAJQgGAKAAALQABAMAEAKQAFAJAHAGQAJAFAJAAQAHAAAGgCQAFgCAFgDIAAgXIgWAAIAAgOIApAAIAAAsQgKAJgKAFQgLAEgMAAQgPAAgMgIg");
	this.shape_3.setTransform(117.4,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWA0QgJgIgGgNQgFgOgBgRQABgQAFgOQAGgOAJgHQAKgIAMAAQANAAAKAIQAKAHAFAOQAGAOAAAQQAAARgGAOQgFANgKAIQgKAIgNAAQgMAAgKgIgAgNgjQgFAFgDAKQgCAJAAALQAAAMACAJQADAKAFAFQAGAGAHAAQAIAAAGgGQAFgFADgKQACgJAAgMQAAgLgCgJQgDgKgFgFQgGgGgIAAQgHAAgGAGg");
	this.shape_4.setTransform(103.2,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWA4QgHgCgGgFIAAgUQAGAGAHADQAHAEAJAAQAGAAAFgDQAGgCADgFQAEgFAAgHQAAgHgEgEQgDgFgGgDQgFgBgGAAQgIAAgFAAIgMAEIAAg+IA9AAIAAASIgtAAIAAAZIAFgBIAGAAQAKAAAJAFQAKAEAFAHQAGAIAAAMQAAANgGAIQgFAJgKAEQgKAFgKAAQgKAAgHgDg");
	this.shape_5.setTransform(94.2,6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVA4QgHgDgGgEIAAgUQAGAGAIADQAIAEAIAAQAJAAAGgFQAGgFAAgLQAAgIgEgFQgFgFgGgCQgGgBgJAAIAAAAIATgoIgnAAIAAgSIBDAAIAAABIgZAuQAMADAHAIQAHAIAAANQAAALgFAJQgFAIgKAFQgJAFgIAAQgMAAgHgDg");
	this.shape_6.setTransform(86,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkA6IAAhzIATAAIAABhIA2AAIAAASg");
	this.shape_7.setTransform(77.7,6.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkA6IAAhQIgkA3IAAAAIgjg3IAABQIgTAAIAAhzIASAAIAkA7IAlg7IASAAIAABzg");
	this.shape_8.setTransform(66.1,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWArIAAhTIATAAIAAAJQACgFAEgDQAEgCAHgBIAFABIAEABIAAAUIgFgDIgGAAQgHAAgEADQgCADgCAHIAAA1g");
	this.shape_9.setTransform(52.9,7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAiQgIgIAAgPIAAg1IATAAIAAAyQAAAIAEAFQAEAEAHAAQAFAAAFgDQAEgEACgGIAAg2IATAAIAABTIgTAAIAAgIQgDAEgGADQgGADgFAAQgPAAgHgJg");
	this.shape_10.setTransform(44.9,8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAmQgJgFgFgKQgGgJAAgOQAAgLAGgKQAEgKAJgGQAIgFAKgBQAMABAIAFQAHAFAEAJQAEAKAAAMIAAAFIg1AAQABAIADAFQADAFAHADQADACAHAAQAHAAAGgBQAFgCAGgEIAAAQQgGAEgGACQgHACgIAAQgKAAgKgGgAASgJQAAgIgEgEQgEgFgIgBQgFAAgGAFQgFAEgCAJIAiAAIAAAAg");
	this.shape_11.setTransform(36.3,7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAqIgghTIAUAAIAUA8IAWg8IATAAIggBTg");
	this.shape_12.setTransform(28,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWArIAAhTIATAAIAAAJQADgFACgDQAFgCAGgBIAGABIAEABIAAAUIgFgDIgHAAQgFAAgFADQgCADgCAHIAAA1g");
	this.shape_13.setTransform(21,7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAmQgJgFgGgKQgEgJAAgOQAAgLAEgKQAGgKAIgGQAJgFAJgBQAMABAHAFQAIAFAFAJQADAKABAMIAAAFIg2AAQABAIADAFQAEAFAFADQAEACAHAAQAHAAAFgBQAGgCAGgEIAAAQQgGAEgGACQgHACgIAAQgKAAgKgGgAATgJQgBgIgFgEQgDgFgJgBQgEAAgFAFQgGAEgCAJIAjAAIAAAAg");
	this.shape_14.setTransform(13.4,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWA5QgJgDgHgFIAAgUQAIAGAKAEQAKADAKAAQAIAAAGgDQAGgEAAgIQAAgHgEgDQgEgEgIgDIgPgGQgIgDgGgCQgGgEgDgGQgEgHgBgJQABgKAFgHQAGgHAJgEQAIgEAKAAQAJAAAJADQAIACAIAFIAAAUQgIgGgIgDQgIgDgKgBQgIAAgFAEQgGADAAAIQAAAGAEADQAEAEAHACIARAHQAOAFAGAGQAGAIAAANQABAKgGAIQgFAHgKAEQgJAEgKAAQgMAAgKgDg");
	this.shape_15.setTransform(4.8,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 1648€ HT(2) 
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#614767").s().p("AgXAhQAJgDAGgJQAFgHABgOQgBgNgFgHQgGgIgJgEIAAgcQAPADAJAIQALAJAGANQAGANAAAOQAAAQgGANQgGAMgLAJQgJAIgPAEg");
	this.shape_16.setTransform(118.8,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#614767").s().p("AgDAzIAAhDIgXALIAAgeIAegPIAYAAIAABlg");
	this.shape_17.setTransform(112.9,26.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#614767").s().p("AAAAyQgLgJgGgMQgGgNAAgQQAAgOAGgNQAGgNALgJQAJgIAPgDIAAAcQgJAEgGAIQgFAHgBANQABAOAFAHQAGAJAJADIAAAdQgPgEgJgIg");
	this.shape_18.setTransform(107.6,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#614767").s().p("AgYBPIAAhyIgvAAIAAgrICPAAIAAArIgvAAIAAByg");
	this.shape_19.setTransform(97.6,32.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#614767").s().p("AAZBPIAAg7IgxAAIAAA7IgyAAIAAidIAyAAIAAA5IAxAAIAAg5IAyAAIAACdg");
	this.shape_20.setTransform(82,32.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#614767").s().p("AgVBCQgTgPgGgcIgNAAIAAgUIALAAIAAgDIAAgDIgLAAIAAgUIAOAAQAGgbATgQQATgPAaAAQALAAAJACQAJADAGAEIAAAtQgPgKgPAAQgKAAgGAEQgHADgEAHIAfAAIgEAUIgeAAIAAADIAAADIAcAAIgDAUIgWAAQAEAHAGAEQAHAEAKAAQAPAAAPgKIAAAtQgGAEgJADQgJACgLAAQgbAAgTgQg");
	this.shape_21.setTransform(63,32.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#614767").s().p("AgiBMQgMgDgJgGIAAgrQAJAHAMAFQAMAFAMAAQAJAAAEgEQAGgDAAgHQAAgJgGgDQgEgEgLAAIgNABIgNACIgLADIAAhgIBgAAIAAArIg6AAIAAALIAFgBIAGAAQAPAAANAHQANAGAHAMQAIAKAAARQAAARgIALQgJANgOAGQgOAIgQAAQgQAAgNgFg");
	this.shape_22.setTransform(46.6,32.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#614767").s().p("AgfBIQgPgIgIgNQgIgOgBgSQAAgKAEgJQADgIAIgOIAig5IA0AAIgZAsIAAAAQAPACAMAIQALAHAGAMQAGAKABAPQgBASgIAOQgIANgPAIQgOAJgSAAQgRAAgOgJgAgMAGQgFAFAAAIQAAAIAFAFQAGAFAGAAQAIAAAFgFQAFgFAAgIQAAgIgFgFQgFgFgIgBQgGABgGAFg");
	this.shape_23.setTransform(34.1,32.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#614767").s().p("AglBQIAZgsIAAAAQgPgCgMgIQgLgIgGgMQgHgJABgPQgBgSAJgOQAJgNANgIQAPgJARAAQASAAAOAJQAPAIAIANQAJAOAAASQgBAKgDAIQgDAJgIANIgiA6gAgMgfQgFAFAAAIQAAAIAFAFQAFAFAHAAQAHAAAFgFQAFgFABgIQgBgIgFgFQgFgFgHAAQgHAAgFAFg");
	this.shape_24.setTransform(20.9,32.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#614767").s().p("AgFBPIAAhpIglASIAAgvIAygXIAjAAIAACdg");
	this.shape_25.setTransform(4.6,32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// (2) Prix public indicatif– offre valable jusqu’au 31 juillet 20
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLAiQgGgEgDgFQgEgGAAgHIACgKIAFgJIARgdIAHAAIgNAbIAEgCIACAAQAHAAAGADQAFADADAFQADAFAAAHQAAAHgDAGQgDAFgGAEQgFADgHAAQgGAAgFgDgAgHgBQgDABgCADQgDAEAAAFQAAAFADADQACAEADACQAEADADAAQAEAAAEgDQAEgCACgEQACgDAAgFQAAgFgCgEQgCgDgEgBQgEgCgEAAQgDAAgEACg");
	this.shape_26.setTransform(162.2,330.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAEAkIAAg8IgQAJIAAgJIAUgLIAFAAIAABHg");
	this.shape_27.setTransform(157.2,330.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgNAhQgGgFgEgJQgDgIAAgLQAAgKADgIQAEgIAGgGQAGgEAHAAQAIAAAGAEQAGAGAEAIQADAIAAAKQAAALgDAIQgEAJgGAFQgGAFgIgBQgHABgGgFgAgJgYQgEAEgCAGQgCAHAAAHQAAAJACAGQACAHAEAEQAFADAEAAQAFAAAEgDQAEgEADgHQABgGAAgJQAAgHgBgHQgDgGgEgEQgEgEgFAAQgEAAgFAEg");
	this.shape_28.setTransform(152.6,330.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAlIAAAAIAWgcIAIgLQAEgGAAgGQAAgHgDgDQgEgDgFgBQgGAAgFAEQgGADgEAEIAAgKQAEgDAGgDQAFgCAGgBQAJABAGAFQAGAFAAAKQAAAFgCAFQgCAFgEADIgHAKIgLAQIAcAAIAAAIg");
	this.shape_29.setTransform(146.8,330.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgJAYQgGgDgDgGQgDgGgBgJQAAgGADgHQADgGAGgDQAFgEAGAAQAGAAAFADQAFADADAGQADAGgBAIIAAABIgjAAQABAGACAEQADAEADACQAEACADAAIAIgBQAEgBAEgDIAAAJQgDACgFABIgIABQgHAAgFgDgAANgEQABgEgCgDQgCgDgCgCQgDgCgEAAQgEAAgDADQgFAEgBAHIAZAAIAAAAg");
	this.shape_30.setTransform(139.2,331.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAHQACgDABgCQAEgDAEAAIADABIACAAIAAAJIgDgBIgDAAQgEAAgDADQgCACgBAFIAAAig");
	this.shape_31.setTransform(135.2,331.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHAlQgEgCgDgDIAAAGIgJAAIAAhMIAJAAIAAAfQADgDAEgCQAEgCADAAQAHAAAFADQAGAEADAGQADAFAAAIQAAAHgDAGQgDAHgGADQgFAEgHAAQgDAAgEgCgAgHgEQgEACgDACIAAAWQADAEAEADQADACAEAAQAEAAADgCQADgDACgEQACgFABgFQgBgHgCgDQgCgDgDgCQgDgDgEAAQgEAAgDACg");
	this.shape_32.setTransform(130.4,330.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgLAYQgGgEgCgGQgDgGgBgIQABgHADgGQACgGAGgEQAGgDAFAAQAHAAAGADQAFAEADAGQADAGAAAHQAAAIgDAGQgDAGgFAEQgGADgHAAQgFAAgGgDgAgHgQQgDADgCAEQgBAFAAAEQAAAGABAEQACAEADADQAEACADAAQAFAAADgCQADgDACgEQACgEAAgGQAAgEgCgFQgCgEgDgDQgDgCgFAAQgDAAgEACg");
	this.shape_33.setTransform(124.5,331.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEAhIAAgrIgLAAIAAgIIALAAIAAgOIAHAAIAAAOIANAAIAAAIIgNAAIAAArg");
	this.shape_34.setTransform(120.1,331.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGAYQgFgDgEgHQgDgGAAgIQAAgHADgGQAEgGAFgEQAGgDAFAAIAIABQAEABADACIAAAJIgHgEQgDgBgEAAQgFAAgBACQgEADgDAEQgCAEAAAFQAAAGACAEQADAFAEACQABACAFAAQAEAAADgBQAEgBADgDIAAAJQgDACgEABIgIABQgFAAgGgDg");
	this.shape_35.setTransform(115.9,331.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgLAYQgFgEgDgGQgDgGgBgIQABgHADgGQADgGAFgEQAGgDAFAAQAHAAAGADQAFAEADAGQADAGAAAHQAAAIgDAGQgDAGgFAEQgGADgHAAQgFAAgGgDgAgHgQQgDADgCAEQgCAFAAAEQAAAGACAEQACAEADADQAEACADAAQAEAAAEgCQAEgDABgEQACgEAAgGQAAgEgCgFQgBgEgEgDQgEgCgEAAQgDAAgEACg");
	this.shape_36.setTransform(110.8,331.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAEAkIAAg8IgQAJIAAgJIAUgLIAFAAIAABHg");
	this.shape_37.setTransform(103.4,330.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgMAjIgJgEIAAgKQAEAEAFACQAFACAGAAQAFAAAFgEQAEgEAAgIQAAgFgDgEQgDgDgFgBQgDgBgHAAIAPgbIgbAAIAAgIIApAAIgSAeQAFABAFACQAEADACADQADAEAAAGQAAAIgEAFQgDAFgFADQgGADgFAAQgHAAgEgCg");
	this.shape_38.setTransform(99.4,330.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgQAWQgEgGAAgJIAAghIAJAAIAAAgQAAAGADADQADAEAFAAQADAAAEgDQAEgDABgEIAAgjIAJAAIAAA0IgJAAIAAgHIgGAGQgEACgDAAQgJAAgGgFg");
	this.shape_39.setTransform(187,320.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgKAZQgEgCgDgEQgDgDAAgGQAAgFADgEQADgBAEgCQAFgCAFgBIAGACIAGADIAAgHQAAgFgDgDQgEgDgFAAIgHABIgHAEIAAgJQADgCAEgBQAFgBADAAQAJAAAFAFQAGAFAAAIIAAAiIgJAAIAAgEQgCACgDACQgEABgDAAQgFAAgFgCgAgFACQgDABgBACQgCACAAADQAAADACADQABACADABIAFABQAEAAADgCQAEgCABgDIAAgFQgBgDgEgCQgDgCgEAAIgFABg");
	this.shape_40.setTransform(181.4,320.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgGAMIAGgMIgCAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIADgCQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQACACAAADIgBAEIgCACIgEAKg");
	this.shape_41.setTransform(178.4,317.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgPAWQgFgGAAgJIAAghIAJAAIAAAgQAAAGADADQACAEAGAAQAEAAADgDQADgDACgEIAAgjIAJAAIAAA0IgJAAIAAgHIgHAGQgDACgEAAQgIAAgFgFg");
	this.shape_42.setTransform(174.8,320.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAPAlIAAgaQgDADgEABQgEACgEAAQgGAAgFgDQgGgEgCgGQgDgFgBgHQABgHADgHQACgGAGgEQAFgEAGAAQAEAAAEACQAEADADADIAAgHIAJAAIAABIgAgGgZQgEACgBAFQgCAEAAAGQAAAGACACQABAEAEADQAEACADAAQAEAAAEgCQAEgCACgFIAAgTQgCgEgEgDQgEgCgEAAQgDABgEACg");
	this.shape_43.setTransform(168.9,321.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgKAaIgHgEIAAgKQADAEAFACQAEACAFAAQADAAADgCQADgCAAgEQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDgBIgGgDQgGgCgEgBQgDgEAAgGQAAgFACgDQADgEAEgBQAEgCAEAAQAEAAAEABQAEABADADIAAAJIgHgFQgEgBgEAAQgDAAgCABQgDACAAAEQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIAFADIAHADQAGABADADQADADAAAGQAAAFgDADQgCAEgFACQgEABgEAAQgFAAgFgBg");
	this.shape_44.setTransform(163.9,320.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgPAWQgFgGAAgJIAAghIAJAAIAAAgQAAAGADADQADAEAFAAQAEAAADgDQADgDACgEIAAgjIAJAAIAAA0IgJAAIAAgHIgHAGQgEACgDAAQgJAAgEgFg");
	this.shape_45.setTransform(158.8,320.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgHAwIgCgBIAAgHIACAAIACAAQADAAABgCQABgCAAgEIAAg5IAJAAIAAA5QgBAIgEAEQgDAEgGAAIgCAAgAAAglIAAgEIAAgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_46.setTransform(154.4,320.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJAYQgGgDgDgGQgDgGgBgJQAAgGADgHQADgGAGgDQAFgEAGAAQAGAAAFADQAFADADAGQADAGgBAIIAAABIgjAAQABAGACAEQADAEADACQAEACADAAIAIgBQAEgBAEgDIAAAJQgDACgFABIgJABQgGAAgFgDgAANgEQABgEgCgDQgCgDgCgCQgDgCgEAAQgEAAgDADQgFAEgBAHIAZAAIAAAAg");
	this.shape_47.setTransform(148.7,320.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_48.setTransform(144.9,319.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgIAlQgDgCgCgDIAAAGIgJAAIAAhMIAJAAIAAAfQACgDADgCQAFgCADAAQAHAAAGADQAFAEADAGQACAFABAIQgBAHgCAGQgDAHgFADQgGAEgHAAQgDAAgFgCgAgIgEQgDADgCACIAAAVQACAFADACQAEACAEAAQADAAAEgCQAEgDACgEQACgFAAgFQAAgHgCgDQgCgDgEgCQgEgDgDAAQgEAAgEACg");
	this.shape_49.setTransform(141.1,319.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgKAZQgEgCgDgEQgDgDAAgGQAAgFADgEQADgBAEgCQAFgCAFgBIAGACIAGADIAAgHQAAgFgDgDQgEgDgFAAIgHABIgHAEIAAgJQADgCAEgBQAFgBADAAQAJAAAFAFQAGAFAAAIIAAAiIgJAAIAAgEQgCACgDACQgEABgDAAQgFAAgFgCgAgFACQgDABgBACQgCACAAADQAAADACADQABACADABIAFABQAEAAADgCQAEgCABgDIAAgFQgBgDgEgCQgDgCgEAAIgFABg");
	this.shape_50.setTransform(135.2,320.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_51.setTransform(131.6,319.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgKAZQgEgCgDgEQgDgDAAgGQAAgFADgEQADgBAEgCQAFgCAFgBIAGACIAGADIAAgHQAAgFgDgDQgEgDgFAAIgHABIgHAEIAAgJQADgCAEgBQAFgBADAAQAJAAAFAFQAGAFAAAIIAAAiIgJAAIAAgEQgCACgDACQgEABgDAAQgFAAgFgCgAgFACQgDABgBACQgCACAAADQAAADACADQABACADABIAFABQAEAAADgCQAEgCABgDIAAgFQgBgDgEgCQgDgCgEAAIgFABg");
	this.shape_52.setTransform(127.7,320.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAaIgVgzIAKAAIAOAoIAPgoIAKAAIgVAzg");
	this.shape_53.setTransform(122.7,320.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgJAYQgGgDgDgGQgEgGABgJQAAgGACgHQADgGAGgDQAGgEAEAAQAHAAAGADQAEADADAGQACAGABAIIAAABIgjAAQAAAGACAEQACAEAFACQADACAEAAIAIgBQADgBADgDIAAAJQgDACgEABIgIABQgHAAgFgDgAAOgEQgBgEgBgDQgCgDgDgCQgCgCgFAAQgDAAgEADQgEAEgBAHIAaAAIAAAAg");
	this.shape_54.setTransform(115.1,320.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAHQACgDABgCQAEgDAEAAIADABIACAAIAAAJIgDgBIgDAAQgEAAgDADQgCACgBAFIAAAig");
	this.shape_55.setTransform(111,320.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGAnIAAgrIgJAAIAAgIIAJAAIAAgJQABgIAEgFQACgEAIAAIADAAIAEABIAAAJIgDgCIgDAAQgEAAgDACQgCACAAAGIAAAIIAMAAIAAAIIgMAAIAAArg");
	this.shape_56.setTransform(107.5,319.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgFAnIAAgrIgKAAIAAgIIAKAAIAAgJQAAgIAEgFQACgEAIAAIADAAIAEABIAAAJIgDgCIgDAAQgEAAgDACQgCACABAGIAAAIIALAAIAAAIIgLAAIAAArg");
	this.shape_57.setTransform(104.2,319.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgLAYQgFgEgDgGQgDgGgBgIQABgHADgGQADgGAFgEQAGgDAFAAQAHAAAGADQAFAEADAGQADAGAAAHQAAAIgDAGQgDAGgFAEQgGADgHAAQgFAAgGgDgAgHgQQgDADgCAEQgBAFAAAEQAAAGABAEQACAEADADQAEACADAAQAEAAAEgCQADgDACgEQACgEAAgGQAAgEgCgFQgCgEgDgDQgEgCgEAAQgDAAgEACg");
	this.shape_58.setTransform(99.7,320.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgWADIAAgFIAtAAIAAAFg");
	this.shape_59.setTransform(195.8,309);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgGAnIAAgrIgJAAIAAgIIAJAAIAAgJQAAgIAFgEQADgFAGAAIAFAAIADABIAAAIIgDgBIgDAAQgEAAgCACQgDADAAAFIAAAIIANAAIAAAIIgNAAIAAArg");
	this.shape_60.setTransform(189.1,308.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgDAlIAAgzIAHAAIAAAzgAgDgaIgCgFIACgDQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_61.setTransform(186.2,308.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgEAhIAAgrIgLAAIAAgIIALAAIAAgOIAHAAIAAAOIANAAIAAAIIgNAAIAAArg");
	this.shape_62.setTransform(183.3,308.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgKAZQgEgCgDgEQgDgDAAgGQAAgFADgEQADgBAEgCQAFgCAFgBIAGACIAGADIAAgHQAAgFgDgDQgEgDgFAAIgHABIgHAEIAAgJQADgCAEgBQAFgBADAAQAJAAAFAFQAGAFAAAIIAAAiIgJAAIAAgEQgCACgDACQgEABgDAAQgFAAgFgCgAgFACQgDABgBACQgCACAAADQAAADACADQABACADABIAFABQAEAAADgCQAEgCABgDIAAgFQgBgDgEgCQgDgCgEAAIgFABg");
	this.shape_63.setTransform(178.7,309.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgFAYQgGgDgEgHQgDgGAAgIQAAgHADgGQAEgGAGgEQAFgDAFAAIAIABQAEABACACIAAAJIgGgEQgDgBgEAAQgFAAgBACQgEADgDAEQgCAEAAAFQAAAGACAEQADAFAEACQABACAFAAQAEAAADgBQAEgBACgDIAAAJQgCACgEABIgIABQgFAAgFgDg");
	this.shape_64.setTransform(174,309.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgDAlIAAgzIAHAAIAAAzgAgDgaIgBgFIABgDQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_65.setTransform(170.5,308.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAkQgFgFgDgGQgDgGAAgHQAAgJADgEQADgGAFgEQAGgDAGAAQAEgBAEADQAEACACADIAAgfIAKAAIAABMIgKAAIAAgGQgCADgEACQgEACgEAAQgGAAgGgDgAgGgEQgEADgBADQgCADAAAHQAAAFACAEQABAFAEADQAEACADAAQAEAAAEgCQADgCACgFIAAgVQgCgCgDgDQgEgCgEAAQgDAAgEACg");
	this.shape_66.setTransform(166.3,308.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAMAbIAAggQAAgFgDgEQgDgDgGAAQgCAAgEACQgEADgBAFIAAAiIgJAAIAAg0IAJAAIAAAHQACgDAEgCQAEgDAEAAQAJAAAEAGQAFAFAAAJIAAAhg");
	this.shape_67.setTransform(160.8,309.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgDAlIAAgzIAHAAIAAAzgAgDgaIgCgFIACgDQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_68.setTransform(156.8,308.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgFAYQgHgDgDgHQgDgGgBgIQABgHADgGQADgGAHgEQAFgDAFAAIAIABQAEABADACIAAAJIgHgEQgDgBgEAAQgFAAgCACQgEADgCAEQgCAEAAAFQAAAGACAEQACAFAEACQACACAFAAQAEAAADgBQAEgBADgDIAAAJQgDACgEABIgIABQgFAAgFgDg");
	this.shape_69.setTransform(150.8,309.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAlIAAgzIAHAAIAAAzgAgCgaIgCgFIACgDQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_70.setTransform(147.4,308.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_71.setTransform(145.1,308.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgHAlQgEgCgDgDIAAAGIgJAAIAAhMIAJAAIAAAfQADgDAEgCQAEgDADABQAHAAAFADQAGAEADAGQADAFAAAIQAAAHgDAGQgDAGgGAFQgFADgHAAQgDAAgEgCgAgHgEQgEADgDACIAAAVQADAFAEACQADACAEAAQAEAAADgCQADgDACgFQACgEABgFQgBgHgCgDQgCgDgDgDQgDgCgEAAQgEAAgDACg");
	this.shape_72.setTransform(141.2,308.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgPAWQgFgGAAgJIAAghIAJAAIAAAgQAAAGADADQACAEAGAAQAEAAADgDQADgDACgEIAAgjIAJAAIAAA0IgJAAIAAgHIgHAGQgDACgEAAQgIAAgFgFg");
	this.shape_73.setTransform(135.3,309.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgXAlIAAhIIAJAAIAAAGQACgCAFgCQADgDAEAAQAHAAAGAEQAFAEADAGQACAGAAAIQAAAHgCAFQgDAGgFAEQgGADgHAAQgEAAgDgCQgFgCgCgCIAAAagAgHgaQgFADgCAEIAAAUQACAEAFACQADADAEAAQADAAAEgDQADgDACgEQACgDAAgFQAAgGgCgEQgCgFgDgCQgEgCgDgBQgEAAgDACg");
	this.shape_74.setTransform(129.8,310.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAOAaIgOgUIgNAUIgKAAIAUgaIgTgZIAKAAIAMATIAOgTIAJAAIgSAZIATAag");
	this.shape_75.setTransform(121.6,309.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgDAlIAAgzIAHAAIAAAzgAgDgaIgBgFIABgDQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_76.setTransform(117.9,308.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAHQACgDABgCQAEgDAEAAIADABIACAAIAAAJIgDgBIgDAAQgEAAgDADQgCACgBAFIAAAig");
	this.shape_77.setTransform(115.1,309.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgYAkIAAhHIAZAAQAMAAAGAFQAHAGgBALQABAKgHAEQgGAGgMAAIgQAAIAAAdgAgPAAIAQAAQAIAAAEgDQADgEAAgGQAAgHgDgDQgEgEgIAAIgQAAg");
	this.shape_78.setTransform(110.2,308.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgJAWIAIgEQABgDACgFQACgEAAgGQAAgFgCgEQgCgFgBgDQgEgDgEgBIAAgGQAGABADAFQAFADACAHQADAGAAAFQAAAGgDAHQgCAFgFAFQgDAEgGABg");
	this.shape_79.setTransform(102.7,306.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AADAYIAAgnIgLAGIAAgGIANgIIADAAIAAAvg");
	this.shape_80.setTransform(100.2,306);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAAAXQgEgFgCgFQgDgHAAgGQAAgFADgGQACgHAEgDQAEgFAGgBIAAAGQgEABgEADQgCADgBAFQgCAEAAAFQAAAGACAEQABAFACADIAIAEIAAAGQgGgBgEgEg");
	this.shape_81.setTransform(98.1,306.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).wait(1));

	// Layer 1
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgGA3QgDgDAAgEQAAgFADgCQADgDADgBQAEABADADQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDgAgEAVIgDhOIAPAAIgDBOg");
	this.shape_82.setTransform(145.7,76.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgPAmQgJgFgFgKQgGgKAAgNQAAgLAFgKQAFgKAIgGQAJgFAJgBQALAAAIAGQAIAEAEAKQAEAJAAANIAAADIg5AAQABAJAEAHQADAHAHADQAGACAGAAQAHAAAFgBQAGgCAGgEIAAANQgFAEgHACQgGACgIAAQgKgBgJgFgAAWgHQgBgGgCgGQgCgFgFgDQgEgEgHAAQgGAAgHAGQgGAGgCAMIAqAAIAAAAg");
	this.shape_83.setTransform(136,78.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgKAmQgJgGgGgJQgFgKAAgNQAAgNAFgJQAGgKAJgFQAJgFAKgBIAMACQAGABAEAFIAAAOQgEgEgGgCQgFgDgGAAQgIAAgEAEQgGAEgEAHQgEAHAAAIQAAAJAEAHQAEAHAGAEQAEADAIAAQAGAAAFgCQAGgCAEgEIAAAOQgEAEgGACQgGACgGAAQgKgBgJgFg");
	this.shape_84.setTransform(128.2,78.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAUArIAAgzQAAgKgFgFQgFgGgJAAQgFAAgHAFQgFAFgDAGIAAA4IgOAAIAAhTIAOAAIAAAKQAFgFAFgDQAHgDAGgBQAPABAHAIQAIAIAAAOIAAA2g");
	this.shape_85.setTransform(120.1,78.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgRAoQgGgDgEgGQgFgGAAgJQAAgIAFgGQADgDAIgEQAHgDAJAAQAFAAAFACQAHACACADIAAgLQAAgIgFgFQgGgEgIAAQgGAAgGACIgLAFIAAgNQAEgDAIgCQAHgCAFAAQAPAAAJAHQAIAIAAAOIAAA3IgOAAIAAgGQgCACgHADQgFACgFAAQgJAAgIgDgAgIADQgFACgDADQgCADAAAFQAAAFACAEQADADAFACQAFABADAAQAHAAAFgDQAFgCACgFIAAgJQgCgFgFgCQgFgDgHAAQgDAAgFABg");
	this.shape_86.setTransform(111.3,78.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgQApQgIgCgEgEIAAgQQAGAGAHADQAHADAHAAQAGAAAFgDQAFgCAAgHQAAgEgDgDQgDgDgGgCIgJgEQgKgDgGgEQgGgEAAgLQAAgHAEgGQAEgFAHgDQAGgDAHAAQAHAAAGACQAGACAGAEIAAAOQgGgEgGgCQgFgEgIAAQgFAAgFAEQgEACAAAGQAAAFADACQAEADAFACIAMAEQAJADAFAEQAFAGAAAJQAAAIgEAFQgFAFgHADQgHAEgHAAQgIgBgHgCg");
	this.shape_87.setTransform(103.9,78.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgQApQgHgCgFgEIAAgQQAGAGAHADQAHADAHAAQAGAAAFgDQAFgCAAgHQAAgEgDgDQgDgDgGgCIgJgEQgKgDgGgEQgGgEAAgLQAAgHAEgGQAEgFAHgDQAGgDAHAAQAHAAAGACQAGACAGAEIAAAOQgGgEgGgCQgFgEgIAAQgFAAgFAEQgEACAAAGQAAAFADACQAEADAFACIAMAEQAJADAFAEQAFAGAAAJQAAAIgEAFQgEAFgIADQgGAEgIAAQgIgBgHgCg");
	this.shape_88.setTransform(96.8,78.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgGA7IAAhSIANAAIAABSgAgFgqQgCgDgBgEQABgDACgDQADgDACAAQAEAAACADQADADAAADQAAAEgDADQgCACgEABQgCgBgDgCg");
	this.shape_89.setTransform(91.4,76.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgTAlQgIgFgFgKQgFgKAAgMQAAgLAFgLQAFgJAIgGQAJgFAKgBQALABAJAFQAJAGAEAJQAFALAAALQAAAMgFAKQgEAKgJAFQgJAGgLABQgKgBgJgGgAgLgaQgGAEgDAHQgDAHAAAIQAAAJADAHQADAHAGAEQAFADAGAAQAHAAAGgDQAFgEADgHQADgHAAgJQAAgIgDgHQgDgHgFgEQgGgEgHAAQgGAAgFAEg");
	this.shape_90.setTransform(85.2,78.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgUArIAAhTIAOAAIAAALQADgGAEgDQAFgDAHgBIAFABIADABIAAAPIgEgCIgFgBQgHAAgFAEQgEAFgCAHIAAA3g");
	this.shape_91.setTransform(78.4,78.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgKAmQgJgGgGgJQgFgKAAgNQAAgNAFgJQAGgKAJgFQAJgFAKgBIAMACQAGABAEAFIAAAOQgEgEgGgCQgFgDgGAAQgIAAgEAEQgGAEgEAHQgEAHAAAIQAAAJAEAHQAEAHAGAEQAEADAIAAQAGAAAFgCQAGgCAEgEIAAAOQgEAEgGACQgGACgGAAQgKgBgJgFg");
	this.shape_92.setTransform(71.4,78.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgPAmQgJgFgFgKQgGgKAAgNQAAgLAFgKQAFgKAIgGQAJgFAJgBQALAAAIAGQAIAEAEAKQAEAJAAANIAAADIg5AAQABAJAEAHQADAHAHADQAGACAGAAQAHAAAFgBQAGgCAGgEIAAANQgFAEgHACQgGACgIAAQgKgBgJgFgAAWgHQgBgGgCgGQgCgFgFgDQgEgEgHAAQgGAAgHAGQgGAGgCAMIAqAAIAAAAg");
	this.shape_93.setTransform(59.8,78.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AATArIAAgzQABgKgFgFQgFgGgJAAQgGAAgFAFQgGAFgCAGIAAA4IgPAAIAAhTIAPAAIAAAKQADgFAHgDQAGgDAHgBQAOABAIAIQAHAIAAAOIAAA2g");
	this.shape_94.setTransform(51.3,78.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgGA7IAAhSIANAAIAABSgAgFgqQgCgDgBgEQABgDACgDQADgDACAAQAEAAACADQADADAAADQAAAEgDADQgCACgEABQgCgBgDgCg");
	this.shape_95.setTransform(45,76.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgPAmQgJgFgFgKQgGgKAAgNQAAgLAFgKQAFgKAIgGQAJgFAJgBQALAAAIAGQAIAEAEAKQAEAJAAANIAAADIg5AAQABAJAEAHQADAHAHADQAGACAGAAQAHAAAFgBQAGgCAGgEIAAANQgFAEgHACQgGACgIAAQgKgBgJgFgAAWgHQgBgGgCgGQgCgFgFgDQgEgEgHAAQgGAAgHAGQgGAGgCAMIAqAAIAAAAg");
	this.shape_96.setTransform(39.1,78.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_97.setTransform(33.2,76.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AglA7IAAhzIAPAAIAAAKQADgFAGgDQAHgEAGAAQAMAAAIAGQAJAGAEAKQAFAKAAAMQAAAMgFAIQgEAKgJAGQgIAGgMAAQgGAAgHgEQgGgDgDgFIAAArgAgNgpQgGADgDAHIAAAgQADAHAGADQAGAEAGAAQAHAAAFgEQAGgEADgHQADgFAAgJQAAgJgDgHQgDgHgGgEQgFgEgHAAQgGAAgGAEg");
	this.shape_98.setTransform(27.1,79.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAUArIAAgzQAAgKgFgFQgFgGgJAAQgFAAgHAFQgFAFgDAGIAAA4IgOAAIAAhTIAOAAIAAAKQAFgFAFgDQAHgDAGgBQAPABAHAIQAIAIAAAOIAAA2g");
	this.shape_99.setTransform(13.9,78.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgPAmQgJgFgFgKQgGgKAAgNQAAgLAFgKQAFgKAIgGQAJgFAJgBQALAAAIAGQAIAEAEAKQAEAJAAANIAAADIg5AAQABAJAEAHQADAHAHADQAGACAGAAQAHAAAFgBQAGgCAGgEIAAANQgFAEgHACQgGACgIAAQgKgBgJgFgAAWgHQgBgGgCgGQgCgFgFgDQgEgEgHAAQgGAAgHAGQgGAGgCAMIAqAAIAAAAg");
	this.shape_100.setTransform(5.3,78.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgkA6IAAhzIBJAAIAAANIg6AAIAAAlIA0AAIAAALIg0AAIAAAoIA6AAIAAAOg");
	this.shape_101.setTransform(125.5,61.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAoA6IAAhYIgoA+IAAAAIgng+IAABYIgOAAIAAhzIANAAIAoBBIAphBIANAAIAABzg");
	this.shape_102.setTransform(113.9,61.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgoA6IAAhzIAqAAQASAAAKAJQAKAJAAARQAAARgKAHQgKAJgSAAIgaAAIAAAvgAgYAAIAaAAQALAAAHgGQAFgGAAgKQAAgKgFgGQgHgGgLAAIgaAAg");
	this.shape_103.setTransform(102.7,61.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgQApQgIgDgEgDIAAgPQAGAFAHADQAHADAHAAQAGAAAFgCQAFgEAAgFQAAgGgDgCQgDgDgGgCIgJgEQgKgDgGgDQgGgGAAgKQAAgIAEgEQAEgGAHgCQAGgDAHgBQAHABAGACQAGABAGAEIAAAPQgGgFgGgDQgFgCgIAAQgFAAgFACQgEADAAAGQAAAEADADQAEADAFABIAMAFQAJADAFAEQAFAGAAAJQAAAIgEAFQgFAGgHADQgHACgHAAQgIAAgHgCg");
	this.shape_104.setTransform(90,63.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgPAmQgJgFgFgKQgGgJAAgOQAAgLAFgKQAFgKAIgGQAJgGAJAAQALABAIAEQAIAFAEAKQAEAKAAAMIAAADIg5AAQABAJAEAHQADAGAHADQAGAEAGAAQAHgBAFgBQAGgCAGgEIAAANQgFAEgHACQgGABgIAAQgKAAgJgFgAAWgIQgBgFgCgGQgCgFgFgDQgEgEgHABQgGgBgHAGQgGAGgCALIAqAAIAAAAg");
	this.shape_105.setTransform(82.3,63.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_106.setTransform(76.4,61.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgUAqIAAhSIAOAAIAAALQADgFAEgEQAFgEAHAAIAFABIADABIAAAOIgEgCIgFAAQgHAAgFAEQgEAFgCAHIAAA2g");
	this.shape_107.setTransform(68.2,63.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgZAiQgIgIAAgOIAAg2IAPAAIAAAzQAAAJAEAGQAFAFAJAAQAGAAAFgEQAGgEACgHIAAg4IAPAAIAABTIgPAAIAAgLQgDAFgHAEQgGADgGABQgPgBgHgIg");
	this.shape_108.setTransform(60.5,63.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgTAmQgIgGgFgKQgFgJAAgNQAAgLAFgKQAFgLAIgFQAJgGAKAAQALAAAJAGQAJAFAEALQAFAKAAALQAAANgFAJQgEAKgJAGQgJAFgLAAQgKAAgJgFgAgLgaQgGAEgDAHQgDAHAAAIQAAAJADAGQADAIAGADQAFAFAGAAQAHAAAGgFQAFgDADgIQADgGAAgJQAAgIgDgHQgDgHgFgEQgGgEgHAAQgGAAgFAEg");
	this.shape_109.setTransform(51.7,63.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AglA7IAAhzIAPAAIAAAKQADgFAGgDQAHgEAGAAQAMAAAIAGQAJAGAEAKQAFAKAAAMQAAAMgFAIQgEAKgJAGQgIAGgMAAQgGAAgHgEQgGgDgDgFIAAArgAgNgpQgGADgDAHIAAAgQADAHAGADQAGAEAGAAQAHAAAFgEQAGgEADgHQADgFAAgJQAAgJgDgHQgDgHgGgEQgFgEgHAAQgGAAgGAEg");
	this.shape_110.setTransform(43,64.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_111.setTransform(32.5,61.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgQAoQgIgDgDgGQgFgGAAgJQAAgIAFgGQAEgDAHgEQAHgDAJAAQAFAAAFACQAGACADADIAAgLQAAgIgFgFQgGgEgIAAQgGAAgGACIgLAFIAAgNQAFgDAGgCQAHgCAGAAQAPAAAJAHQAIAIAAAOIAAA3IgOAAIAAgGQgDACgGADQgFACgFAAQgKAAgGgDgAgIADQgFACgCADQgDADAAAFQAAAFADAEQACADAFACQAFABADAAQAGAAAGgDQAFgCACgFIAAgJQgCgFgFgCQgGgDgGAAQgDAAgFABg");
	this.shape_112.setTransform(26.4,63.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgPA5QgJgFgFgKQgGgKAAgNQAAgNAFgIQAFgKAIgGQAJgGAJAAQALAAAIAFQAIAFAEAKQAEAHAAAMIAAAGIg5AAQABAJAEAHQADAGAHADQAGADAGAAQAHAAAFgBQAGgCAGgEIAAANQgFAEgHABQgGACgIAAQgKAAgJgFgAAWAJQgBgGgCgDQgCgFgFgDQgEgEgHAAQgGAAgHAGQgGAGgCAJIAqAAIAAAAgAgEgkIAOgZIAOAAIgRAZg");
	this.shape_113.setTransform(18.4,61.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgTA4QgJgGgEgKQgFgKAAgMQAAgMAFgIQAEgKAJgGQAIgGALAAQAHAAAHAEQAGADADAFIAAgxIAPAAIAAB5IgPAAIAAgKQgDAFgGADQgHAEgHAAQgLAAgIgGgAgKgHQgGAEgDAFQgDAHAAAJQAAAJADAHQADAHAGAEQAFAEAHAAQAGAAAGgEQAGgDADgHIAAgiQgDgFgGgDQgGgEgGAAQgHAAgFAEg");
	this.shape_114.setTransform(9.4,61.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgGA6IAAhzIANAAIAABzg");
	this.shape_115.setTransform(3.2,61.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-7.7,305,357.7);


(lib.Text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Serveur DL380 Gen9 :  le serveur le plus vendu(1) au monde à un
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgOAkQgGgCgEgDIAAgOQAEAFAHADQAGADAGAAQAFAAAFgDQAEgCAAgGQAAgEgDgCQgDgDgEgCIgJgDQgIgDgGgCQgEgFAAgJQgBgGAEgGQAEgEAFgDQAHgCAFAAQAGAAAGACQAFACAEADIAAAMQgEgEgFgCQgFgCgHgBQgFAAgDADQgEACgBAFQAAAFADACIAIAEIAKAEQAJACAEAEQAEAFAAAHQAAAIgEAEQgDAFgGACQgHADgGAAQgGAAgHgCg");
	this.shape_116.setTransform(236.8,50.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AARAlIAAgsQAAgIgEgFQgEgFgIAAQgFAAgFAEQgFAEgCAGIAAAwIgNAAIAAhIIANAAIAAAKQADgFAGgDQAGgDAFAAQAMAAAHAHQAHAHAAANIAAAug");
	this.shape_117.setTransform(229.7,50.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgQAhQgIgFgEgIQgEgJAAgLQAAgKAEgJQAEgIAIgFQAHgFAJAAQAKAAAHAFQAIAFAEAIQAEAJAAAKQAAALgEAJQgEAIgIAFQgHAFgKAAQgJAAgHgFgAgKgWQgFADgCAGQgDAHAAAGQAAAHADAHQACAGAFADQAFAEAFAAQAGAAAFgEQAFgDACgGQADgHAAgHQAAgGgDgHQgCgGgFgDQgFgEgGAAQgFAAgFAEg");
	this.shape_118.setTransform(221.9,50.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgFA0IAAhJIAKAAIAABJgAgEglQgCgCAAgEQAAgDACgDQACgCACAAQADAAACACQACADAAADQAAAEgCACQgCACgDABQgCgBgCgCg");
	this.shape_119.setTransform(216.5,48.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgGAuIAAg9IgPAAIAAgLIAPAAIAAgTIALAAIAAATIARAAIAAALIgRAAIAAA9g");
	this.shape_120.setTransform(212.4,49.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgOAjQgHgDgDgFQgDgFgBgIQABgHADgFQADgDAHgDQAHgDAHAAQAEAAAFACIAIAEIAAgKQAAgGgFgEQgEgEgIgBQgFABgFACQgGABgEADIAAgMQAEgDAGgBQAGgCAFAAQANAAAHAHQAIAHAAALIAAAxIgMAAIAAgGQgCADgFABQgGADgFAAQgHAAgGgDgAgHADQgEABgCADQgDADAAAEQAAAFADADQACADAEABQAEACADAAQAFAAAGgDQAEgDACgEIAAgHQgCgEgEgDQgGgCgFAAQgDAAgEABg");
	this.shape_121.setTransform(206.2,50.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgJAhQgIgEgFgJQgEgIAAgMQAAgKAEgJQAFgIAIgFQAIgFAIAAQAGAAAFABQAFACAEADIAAANQgEgEgFgCQgFgCgFAAQgHAAgDAEQgFADgDAGQgEAGAAAHQAAAIAEAGQADAGAFADQADAEAHAAQAFAAAFgCQAFgCAEgDIAAAMQgEADgFACQgFABgGAAQgIAAgIgFg");
	this.shape_122.setTransform(199.5,50.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgFA0IAAhJIALAAIAABJgAgEglQgCgCgBgEQABgDACgDQACgCACAAQADAAACACQADADgBADQABAEgDACQgCACgDABQgCgBgCgCg");
	this.shape_123.setTransform(194.7,48.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_124.setTransform(191.5,48.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AggAzIAAhkIANAAIAAAJQACgFAGgDQAGgCAFAAQAKgBAIAGQAHAGAEAIQAEAJAAAKQAAAKgEAHQgEAJgHAFQgIAGgKgBQgFAAgGgCQgGgEgCgEIAAAlgAgLgkQgFADgDAGIAAAcQADAGAFADQAFADAFAAQAGAAAFgDQAFgEACgGQADgEAAgIQAAgIgDgGQgCgGgFgEQgFgDgGAAQgFAAgFADg");
	this.shape_125.setTransform(186.2,51.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AggAzIAAhkIANAAIAAAJQADgFAFgDQAFgCAGAAQALgBAHAGQAHAGAEAIQAEAJAAAKQAAAKgEAHQgEAJgHAFQgHAGgLgBQgGAAgFgCQgFgEgDgEIAAAlgAgMgkQgEADgDAGIAAAcQADAGAEADQAGADAGAAQAFAAAFgDQAFgEADgGQACgEAAgIQAAgIgCgGQgDgGgFgEQgFgDgFAAQgGAAgGADg");
	this.shape_126.setTransform(178.1,51.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgOAjQgHgDgDgFQgEgFAAgIQAAgHAEgFQADgDAHgDQAGgDAIAAQAEAAAFACIAIAEIAAgKQgBgGgEgEQgFgEgHgBQgFABgFACQgFABgFADIAAgMQAEgDAGgBQAGgCAFAAQAOAAAGAHQAIAHAAALIAAAxIgMAAIAAgGQgDADgEABQgFADgFAAQgIAAgGgDgAgHADQgEABgDADQgCADAAAEQAAAFACADQADADAEABQAEACADAAQAFAAAFgDQAFgDACgEIAAgHQgCgEgFgDQgFgCgFAAQgDAAgEABg");
	this.shape_127.setTransform(170,50.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgOAkQgGgCgEgDIAAgOQAEAFAHADQAGADAGAAQAFAAAEgDQAFgCAAgGQAAgEgDgCQgDgDgEgCIgJgDQgJgDgFgCQgEgFAAgJQAAgGADgGQAEgEAFgDQAGgCAGAAQAGAAAGACQAFACAFADIAAAMQgFgEgFgCQgGgCgGgBQgFAAgDADQgEACAAAFQAAAFACACIAIAEIAKAEQAJACAEAEQAEAFAAAHQAAAIgDAEQgEAFgGACQgHADgGAAQgGAAgHgCg");
	this.shape_128.setTransform(160.2,50.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgQAhQgIgFgEgIQgEgJAAgLQAAgKAEgJQAEgIAIgFQAHgFAJAAQAKAAAHAFQAIAFAEAIQAEAJAAAKQAAALgEAJQgEAIgIAFQgHAFgKAAQgJAAgHgFgAgKgWQgFADgCAGQgDAHAAAGQAAAHADAHQACAGAFADQAFAEAFAAQAGAAAFgEQAFgDACgGQADgHAAgHQAAgGgDgHQgCgGgFgDQgFgEgGAAQgFAAgFAEg");
	this.shape_129.setTransform(153.2,50.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgFAlIgchJIANAAIAUA5IAVg5IANAAIgdBJg");
	this.shape_130.setTransform(145.9,50.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgOAkQgHgCgDgDIAAgOQAFAFAFADQAHADAHAAQAEAAAFgDQAEgCAAgGQAAgEgDgCQgDgDgFgCIgIgDQgIgDgGgCQgEgFAAgJQAAgGADgGQAEgEAFgDQAHgCAFAAQAGAAAFACQAGACAEADIAAAMQgEgEgGgCQgFgCgGgBQgFAAgDADQgEACgBAFQAAAFAEACIAHAEIAKAEQAIACAFAEQAEAFABAHQgBAIgEAEQgDAFgHACQgFADgGAAQgIAAgGgCg");
	this.shape_131.setTransform(135.7,50.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgNAhQgIgEgFgIQgEgJAAgMQAAgKAEgIQAEgJAHgFQAIgFAIAAQAKAAAGAFQAIAEACAIQAEAIAAALIAAADIgxAAQABAIADAGQADAFAFADQAGADAFAAQAGAAAFgCQAFgBAFgEIAAALQgFAEgGACQgFABgGAAQgKAAgHgFgAATgGQgBgFgCgFQgCgFgDgCQgEgDgGgBQgGABgFAFQgFAEgCALIAkAAIAAAAg");
	this.shape_132.setTransform(128.9,50.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgGAuIAAg9IgPAAIAAgLIAPAAIAAgTIALAAIAAATIARAAIAAALIgRAAIAAA9g");
	this.shape_133.setTransform(123,49.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgWAeQgGgHgBgNIAAguIAOAAIAAAsQAAAIADAFQAEAFAIAAQAFAAAFgEQAFgEACgGIAAgwIANAAIAABIIgNAAIAAgKQgEAFgFADQgGADgFAAQgMAAgHgHg");
	this.shape_134.setTransform(116.5,50.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgQAhQgIgFgEgIQgEgJAAgLQAAgKAEgJQAEgIAIgFQAHgFAJAAQAKAAAHAFQAIAFAEAIQAEAJAAAKQAAALgEAJQgEAIgIAFQgHAFgKAAQgJAAgHgFgAgKgWQgFADgCAGQgDAHAAAGQAAAHADAHQACAGAFADQAFAEAFAAQAGAAAFgEQAFgDACgGQADgHAAgHQAAgGgDgHQgCgGgFgDQgFgEgGAAQgFAAgFAEg");
	this.shape_135.setTransform(108.8,50.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgFAuIAAg9IgQAAIAAgLIAQAAIAAgTIAKAAIAAATIARAAIAAALIgRAAIAAA9g");
	this.shape_136.setTransform(102.7,49.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgSAlIAAhIIANAAIAAAKQADgFACgDQAGgDAFAAIAFAAIACABIAAANIgDgCIgFAAQgGAAgEADQgDAEgCAHIAAAvg");
	this.shape_137.setTransform(94.6,50.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgWAeQgGgHgBgNIAAguIAOAAIAAAsQgBAIAEAFQAEAFAIAAQAFAAAFgEQAFgEACgGIAAgwIANAAIAABIIgNAAIAAgKQgEAFgFADQgFADgGAAQgMAAgHgHg");
	this.shape_138.setTransform(87.8,50.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgQAhQgIgFgEgIQgEgJAAgLQAAgKAEgJQAEgIAIgFQAHgFAJAAQAKAAAHAFQAIAFAEAIQAEAJAAAKQAAALgEAJQgEAIgIAFQgHAFgKAAQgJAAgHgFgAgKgWQgFADgCAGQgDAHAAAGQAAAHADAHQACAGAFADQAFAEAFAAQAGAAAFgEQAFgDACgGQADgHAAgHQAAgGgDgHQgCgGgFgDQgFgEgGAAQgFAAgFAEg");
	this.shape_139.setTransform(80.1,50.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AggAzIAAhkIAMAAIAAAJQADgFAGgDQAFgCAGAAQAKgBAIAGQAHAGAEAIQAEAJAAAKQAAAKgEAHQgEAJgHAFQgIAGgKgBQgGAAgFgCQgGgEgDgEIAAAlgAgMgkQgFADgDAGIAAAcQADAGAFADQAFADAGAAQAGAAAFgDQAFgEADgGQACgEAAgIQAAgIgCgGQgDgGgFgEQgFgDgGAAQgGAAgFADg");
	this.shape_140.setTransform(72.5,51.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgGAuIAAg9IgPAAIAAgLIAPAAIAAgTIALAAIAAATIARAAIAAALIgRAAIAAA9g");
	this.shape_141.setTransform(62.3,49.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgNAhQgJgEgDgIQgFgJAAgMQAAgKAEgIQAEgJAIgFQAHgFAIAAQAKAAAHAFQAGAEAEAIQADAIAAALIAAADIgxAAQABAIADAGQADAFAGADQAFADAFAAQAGAAAFgCQAFgBAFgEIAAALQgEAEgHACQgFABgGAAQgKAAgHgFgAATgGQAAgFgDgFQgBgFgEgCQgEgDgGgBQgFABgGAFQgGAEgBALIAkAAIAAAAg");
	this.shape_142.setTransform(56.3,50.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_143.setTransform(51.1,48.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AggAzIAAhkIAMAAIAAAJQADgFAGgDQAGgCAFAAQAKgBAIAGQAHAGAEAIQAEAJAAAKQAAAKgEAHQgEAJgHAFQgIAGgKgBQgFAAgGgCQgGgEgDgEIAAAlgAgLgkQgFADgEAGIAAAcQAEAGAFADQAFADAFAAQAGAAAFgDQAFgEACgGQADgEAAgIQAAgIgDgGQgCgGgFgEQgFgDgGAAQgFAAgFADg");
	this.shape_144.setTransform(45.8,51.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgIgDgEQgEgFgHAAQgGAAgEAEQgEADgCAGIAAAxIgLAAIAAgtQAAgIgDgEQgEgFgHAAQgGAAgEAEQgEADgCAGIAAAxIgNAAIAAhIIANAAIAAAJQADgFAFgCQAFgDAHAAQAHAAAFADQADADADAGQADgGAGgDQAGgDAHAAQAMAAAGAHQAGAHAAAMIAAAvg");
	this.shape_145.setTransform(35.7,50.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgQAhQgIgFgEgIQgEgJAAgLQAAgKAEgJQAEgIAIgFQAHgFAJAAQAKAAAHAFQAIAFAEAIQAEAJAAAKQAAALgEAJQgEAIgIAFQgHAFgKAAQgJAAgHgFgAgKgWQgFADgCAGQgDAHAAAGQAAAHADAHQACAGAFADQAFAEAFAAQAGAAAFgEQAFgDACgGQADgHAAgHQAAgGgDgHQgCgGgFgDQgFgEgGAAQgFAAgFAEg");
	this.shape_146.setTransform(26,50.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgJAhQgIgEgFgJQgEgIAAgMQAAgKAEgJQAFgIAIgFQAIgFAIAAQAGAAAFABQAFACAEADIAAANQgEgEgFgCQgFgCgFAAQgHAAgDAEQgFADgDAGQgEAGAAAHQAAAIAEAGQADAGAFADQADAEAHAAQAFAAAFgCQAFgCAEgDIAAAMQgEADgFACQgFABgGAAQgIAAgIgFg");
	this.shape_147.setTransform(18.9,50.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgGAuIAAg9IgPAAIAAgLIAPAAIAAgTIALAAIAAATIARAAIAAALIgRAAIAAA9g");
	this.shape_148.setTransform(9.8,49.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgNAhQgIgEgFgIQgEgJAAgMQAAgKAEgIQAEgJAHgFQAIgFAIAAQAKAAAGAFQAIAEACAIQAEAIAAALIAAADIgxAAQABAIADAGQADAFAFADQAGADAFAAQAGAAAFgCQAFgBAFgEIAAALQgFAEgFACQgGABgGAAQgKAAgHgFgAATgGQgBgFgCgFQgCgFgDgCQgEgDgGgBQgGABgFAFQgFAEgCALIAkAAIAAAAg");
	this.shape_149.setTransform(3.8,50.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgIA3IAAg+IgNAAIAAgKIANAAIAAgNQAAgLAGgGQAEgGAKAAIAFAAIAFACIAAALIgEgCIgEAAQgGAAgDADQgDADAAAHIAAAMIARAAIAAAKIgRAAIAAA+g");
	this.shape_150.setTransform(175.7,34.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgFA0IAAhIIALAAIAABIgAgEglQgDgDAAgDQAAgDADgCQACgDACAAQADAAACADQADACgBADQABADgDADQgCACgDAAQgCAAgCgCg");
	this.shape_151.setTransform(171.7,34.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgFAuIAAg9IgQAAIAAgLIAQAAIAAgTIAKAAIAAATIARAAIAAALIgRAAIAAA9g");
	this.shape_152.setTransform(167.6,35.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgWAeQgHgHABgNIAAguIAMAAIAAAsQABAIADAFQAEAFAIAAQAFAAAFgEQAFgEACgGIAAgwIAMAAIAABIIgMAAIAAgKQgDAFgGADQgGADgEAAQgNAAgHgHg");
	this.shape_153.setTransform(161.1,36.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_154.setTransform(155.6,34.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgQAhQgIgFgEgIQgEgJAAgLQAAgKAEgIQAEgJAIgFQAHgFAJAAQAKAAAHAFQAIAFAEAJQAEAIAAAKQAAALgEAJQgEAIgIAFQgHAFgKAAQgJAAgHgFgAgKgXQgFAEgCAGQgDAGAAAHQAAAHADAHQACAGAFADQAFAEAFAAQAGAAAFgEQAFgDACgGQADgHAAgHQAAgHgDgGQgCgGgFgEQgFgDgGAAQgFAAgFADg");
	this.shape_155.setTransform(150.2,36.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgFAlIgchIIANAAIAUA3IAVg3IAOAAIgeBIg");
	this.shape_156.setTransform(142.9,36.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgOAyQgHgFgEgIQgFgJAAgMQAAgLAEgHQAEgJAHgFQAIgFAIAAQAKAAAHAFQAGAEADAIQAEAHAAAKIAAAFIgxAAQAAAJAEAFQADAGAFADQAGACAFAAQAGAAAFgBQAFgCAFgEIAAAMQgFADgFACQgGABgHAAQgIAAgJgEgAATAIQAAgFgCgDQgCgFgEgCQgEgDgGAAQgFAAgGAFQgGAFgBAIIAkAAIAAAAgAgDgfIAMgWIAMAAIgOAWg");
	this.shape_157.setTransform(135.8,34.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgSAlIAAhIIANAAIAAAKQACgFADgDQAGgDAGAAIAEAAIACABIAAANIgDgCIgFAAQgFAAgFADQgDAEgCAHIAAAvg");
	this.shape_158.setTransform(126.7,36.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgNIAAguIAOAAIAAAsQgBAIAEAFQAEAFAIAAQAFAAAFgEQAFgEACgGIAAgwIAMAAIAABIIgMAAIAAgKQgDAFgGADQgFADgGAAQgMAAgHgHg");
	this.shape_159.setTransform(119.9,36.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgOAiQgHgFgEgJQgFgIAAgMQAAgKAEgIQAEgJAHgFQAIgFAIAAQAKAAAHAEQAGAFADAIQAEAJAAAKIAAADIgxAAQAAAJAEAFQADAGAFADQAGACAFAAQAGAAAFgBQAFgCAFgEIAAALQgFAEgFACQgGABgHAAQgIAAgJgEgAATgGQAAgFgCgFQgCgFgEgDQgEgCgGAAQgFAAgGAEQgGAGgBAKIAkAAIAAAAg");
	this.shape_160.setTransform(112.4,36.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgOAkQgGgCgEgEIAAgMQAEAEAHADQAGACAGABQAFgBAEgCQAFgCAAgGQAAgEgDgDQgDgCgEgBIgJgEQgJgDgFgDQgEgEAAgJQAAgGADgFQAEgFAGgCQAFgDAGAAQAGAAAGACQAFABAFADIAAAOQgFgEgFgDQgGgCgGAAQgFAAgDACQgEADAAAFQAAAEACACIAIAEIAKADQAJADAEADQAEAGAAAIQAAAGgDAFQgEAFgGADQgHACgGAAQgGAAgHgCg");
	this.shape_161.setTransform(105.7,36.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgOAkQgHgCgEgEIAAgMQAFAEAGADQAHACAHABQAEgBAEgCQAFgCAAgGQAAgEgDgDQgDgCgFgBIgIgEQgJgDgEgDQgGgEAAgJQABgGADgFQADgFAHgCQAFgDAGAAQAGAAAFACQAGABAEADIAAAOQgEgEgGgDQgEgCgHAAQgEAAgEACQgEADgBAFQABAEADACIAIAEIAJADQAJADAEADQAEAGABAIQgBAGgEAFQgDAFgHADQgGACgFAAQgIAAgGgCg");
	this.shape_162.setTransform(99.5,36.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgNAiQgIgFgFgJQgEgIAAgMQAAgKAEgIQAEgJAIgFQAHgFAIAAQAKAAAGAEQAHAFAEAIQADAJAAAKIAAADIgxAAQABAJADAFQADAGAGADQAFACAFAAQAGAAAFgBQAFgCAFgEIAAALQgEAEgHACQgFABgGAAQgKAAgHgEgAATgGQgBgFgCgFQgCgFgDgDQgEgCgGAAQgFAAgGAEQgGAGgBAKIAkAAIAAAAg");
	this.shape_163.setTransform(92.7,36.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgJAiQgIgGgFgIQgEgIAAgMQAAgKAEgJQAFgJAIgEQAIgFAIAAQAGAAAFACQAFABAEADIAAANQgEgEgFgCQgFgCgFAAQgHAAgDADQgFAEgDAGQgEAGAAAHQAAAIAEAGQADAGAFADQADAEAHAAQAFAAAFgCQAFgCAEgDIAAAMQgEADgFACQgFABgGAAQgIAAgIgEg");
	this.shape_164.setTransform(85.8,36.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgQAhQgIgFgEgIQgEgJAAgLQAAgKAEgIQAEgJAIgFQAHgFAJAAQAKAAAHAFQAIAFAEAJQAEAIAAAKQAAALgEAJQgEAIgIAFQgHAFgKAAQgJAAgHgFgAgKgXQgFAEgCAGQgDAGAAAHQAAAHADAHQACAGAFADQAFAEAFAAQAGAAAFgEQAFgDACgGQADgHAAgHQAAgHgDgGQgCgGgFgEQgFgDgGAAQgFAAgFADg");
	this.shape_165.setTransform(78.7,36.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgRAlIAAhIIAMAAIAAAKQADgFACgDQAFgDAGAAIAFAAIACABIAAANIgDgCIgFAAQgGAAgEADQgDAEgCAHIAAAvg");
	this.shape_166.setTransform(72.9,36.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AggA0IAAhlIAMAAIAAAIQAEgDAFgEQAFgDAGAAQAKABAIAFQAHAGAEAIQAEAIAAALQAAALgEAGQgEAJgHAFQgIAGgKAAQgGgBgFgDQgFgCgEgFIAAAmgAgMgkQgEADgEAGIAAAcQAEAGAEADQAGADAFAAQAGAAAFgDQAFgEADgGQACgEAAgIQAAgIgCgGQgDgGgFgDQgFgEgGAAQgFAAgGADg");
	this.shape_167.setTransform(66.3,37.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgFA0IAAhIIALAAIAABIgAgFglQgCgDAAgDQAAgDACgCQADgDACAAQADAAACADQACACABADQgBADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_168.setTransform(60.4,34.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgLAzQgFgDgEgEIAAAJIgMAAIAAhqIAMAAIAAAqQAEgEAFgDQAFgDAGAAQAKAAAIAGQAHAFAEAJQAEAGAAALQAAAKgEAJQgEAJgHAFQgIAFgKAAQgGAAgFgDgAgMgGQgEADgEAEIAAAeQAEAGAEADQAGADAFAAQAGAAAFgEQAFgDADgGQACgGAAgIQAAgIgCgGQgDgEgFgEQgFgDgGAAQgFAAgGADg");
	this.shape_169.setTransform(55.1,34.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgSAlIAAhIIANAAIAAAKQACgFADgDQAGgDAGAAIAEAAIACABIAAANIgDgCIgFAAQgFAAgFADQgDAEgCAHIAAAvg");
	this.shape_170.setTransform(45.2,36.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgNIAAguIAOAAIAAAsQgBAIAEAFQAEAFAIAAQAFAAAFgEQAFgEACgGIAAgwIAMAAIAABIIgMAAIAAgKQgDAFgGADQgFADgGAAQgMAAgHgHg");
	this.shape_171.setTransform(38.4,36.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgOAiQgHgFgEgJQgFgIAAgMQAAgKAEgIQAEgJAHgFQAIgFAIAAQAKAAAHAEQAGAFADAIQAEAJAAAKIAAADIgxAAQAAAJAEAFQADAGAFADQAGACAFAAQAGAAAFgBQAFgCAFgEIAAALQgFAEgFACQgGABgHAAQgIAAgJgEgAATgGQAAgFgCgFQgCgFgEgDQgEgCgGAAQgFAAgGAEQgGAGgBAKIAkAAIAAAAg");
	this.shape_172.setTransform(31,36.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgFAlIgdhIIAOAAIAUA3IAVg3IAOAAIgdBIg");
	this.shape_173.setTransform(23.9,36.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgSAlIAAhIIANAAIAAAKQADgFADgDQAEgDAHAAIAEAAIADABIAAANIgEgCIgEAAQgHAAgEADQgDAEgCAHIAAAvg");
	this.shape_174.setTransform(18.1,36.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgOAiQgHgFgEgJQgFgIAAgMQAAgKAEgIQAEgJAHgFQAIgFAIAAQAKAAAHAEQAGAFADAIQAEAJAAAKIAAADIgxAAQAAAJAEAFQADAGAFADQAGACAFAAQAGAAAFgBQAFgCAFgEIAAALQgFAEgFACQgGABgHAAQgIAAgJgEgAATgGQAAgFgCgFQgCgFgEgDQgEgCgGAAQgFAAgGAEQgFAGgCAKIAkAAIAAAAg");
	this.shape_175.setTransform(11.6,36.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgSAyQgIgDgGgFIAAgOQAHAHAIACQAJAEAIAAQAIAAAHgFQAFgEAAgIQAAgGgEgEQgEgDgIgEIgNgGQgGgBgFgCQgGgEgCgFQgEgFAAgJQAAgIAFgGQAEgGAHgDQAIgDAIAAQAHAAAIACQAHACAGAEIAAAOQgGgFgHgDQgHgDgIAAQgHAAgHAEQgFAEAAAHQAAAHAEADQAEAEAHACIAOAHQAMACAFAHQAGAHAAAKQAAAJgFAGQgEAGgIAEQgHADgJAAQgKAAgIgCg");
	this.shape_176.setTransform(4.1,34.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgOA7IAUgoIgEABIgCAAQgLAAgKgFQgIgFgFgJQgEgHgBgMQAAgLAGgJQAFgJAIgGQAKgFAKAAQAMAAAIAFQAJAGAGAJQAFAJAAALQAAAIgDAJQgCAHgHALIgZAqgAgOgiQgHAGAAAKQAAAHADAFQACAFAFABQAGAEAFAAQAGAAAFgEQAFgBADgFQADgFAAgHQAAgKgHgGQgGgHgJAAQgJAAgFAHg");
	this.shape_177.setTransform(145.1,6.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAQArIAAgyQAAgIgEgFQgEgEgIAAQgEAAgFADQgFAEgBAGIAAA2IgTAAIAAhTIATAAIAAAIQADgEAGgDQAGgCAFgBQAPABAHAIQAIAJAAAOIAAA1g");
	this.shape_178.setTransform(136.2,7.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgPAmQgKgFgGgKQgEgJgBgOQABgLAEgKQAFgKAJgGQAJgFAJgBQAMABAIAFQAHAFAEAJQAFAKAAAMIAAAFIg2AAQAAAIAEAFQAEAFAGADQADACAHAAQAHAAAGgBQAFgCAGgEIAAAQQgFAEgHACQgHACgIAAQgKAAgJgGgAATgJQgBgIgFgEQgEgFgHgBQgFAAgGAFQgFAEgCAJIAjAAIAAAAg");
	this.shape_179.setTransform(127.4,7.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgVA0QgMgIgHgNQgHgOgBgRQABgRAIgNQAHgOANgHQANgIAPAAQAKAAAJADQAIACAGAFIAAAVQgIgHgIgDQgHgDgKAAQgKAAgIAFQgJAGgEAJQgGAKAAALQABAMAEAKQAFAJAHAGQAJAFAJAAQAHAAAGgCQAFgCAFgDIAAgXIgWAAIAAgOIApAAIAAAsQgKAJgKAFQgLAEgMAAQgPAAgMgIg");
	this.shape_180.setTransform(117.4,6.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgWA0QgJgIgGgNQgFgOgBgRQABgQAFgOQAGgOAJgHQAKgIAMAAQANAAAKAIQAKAHAFAOQAGAOAAAQQAAARgGAOQgFANgKAIQgKAIgNAAQgMAAgKgIgAgNgjQgFAFgDAKQgCAJAAALQAAAMACAJQADAKAFAFQAGAGAHAAQAIAAAGgGQAFgFADgKQACgJAAgMQAAgLgCgJQgDgKgFgFQgGgGgIAAQgHAAgGAGg");
	this.shape_181.setTransform(103.2,6.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgWA4QgHgCgGgFIAAgUQAGAGAHADQAHAEAJAAQAGAAAFgDQAGgCADgFQAEgFAAgHQAAgHgEgEQgDgFgGgDQgFgBgGAAQgIAAgFAAIgMAEIAAg+IA9AAIAAASIgtAAIAAAZIAFgBIAGAAQAKAAAJAFQAKAEAFAHQAGAIAAAMQAAANgGAIQgFAJgKAEQgKAFgKAAQgKAAgHgDg");
	this.shape_182.setTransform(94.2,6.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgVA4QgHgDgGgEIAAgUQAGAGAIADQAIAEAIAAQAJAAAGgFQAGgFAAgLQAAgIgEgFQgFgFgGgCQgGgBgJAAIAAAAIATgoIgnAAIAAgSIBDAAIAAABIgZAuQAMADAHAIQAHAIAAANQAAALgFAJQgFAIgKAFQgJAFgIAAQgMAAgHgDg");
	this.shape_183.setTransform(86,6.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgkA6IAAhzIATAAIAABhIA2AAIAAASg");
	this.shape_184.setTransform(77.7,6.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AAkA6IAAhQIgkA3IAAAAIgjg3IAABQIgTAAIAAhzIASAAIAkA7IAlg7IASAAIAABzg");
	this.shape_185.setTransform(66.1,6.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgWArIAAhTIATAAIAAAJQACgFAEgDQAEgCAHgBIAFABIAEABIAAAUIgFgDIgGAAQgHAAgEADQgCADgCAHIAAA1g");
	this.shape_186.setTransform(52.9,7.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgaAiQgIgIAAgPIAAg1IATAAIAAAyQAAAIAEAFQAEAEAHAAQAFAAAFgDQAEgEACgGIAAg2IATAAIAABTIgTAAIAAgIQgDAEgGADQgGADgFAAQgPAAgHgJg");
	this.shape_187.setTransform(44.9,8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgQAmQgJgFgFgKQgGgJAAgOQAAgLAGgKQAEgKAJgGQAIgFAKgBQAMABAIAFQAHAFAEAJQAEAKAAAMIAAAFIg1AAQABAIADAFQADAFAHADQADACAHAAQAHAAAGgBQAFgCAGgEIAAAQQgGAEgGACQgHACgIAAQgKAAgKgGgAASgJQAAgIgEgEQgEgFgIgBQgFAAgGAFQgFAEgCAJIAiAAIAAAAg");
	this.shape_188.setTransform(36.3,7.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgIAqIgghTIAUAAIAUA8IAWg8IATAAIggBTg");
	this.shape_189.setTransform(28,7.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgWArIAAhTIATAAIAAAJQADgFACgDQAFgCAGgBIAGABIAEABIAAAUIgFgDIgHAAQgFAAgFADQgCADgCAHIAAA1g");
	this.shape_190.setTransform(21,7.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgQAmQgJgFgGgKQgEgJAAgOQAAgLAEgKQAGgKAIgGQAJgFAJgBQAMABAHAFQAIAFAFAJQADAKABAMIAAAFIg2AAQABAIADAFQAEAFAFADQAEACAHAAQAHAAAFgBQAGgCAGgEIAAAQQgGAEgGACQgHACgIAAQgKAAgKgGgAATgJQgBgIgFgEQgDgFgJgBQgEAAgFAFQgGAEgCAJIAjAAIAAAAg");
	this.shape_191.setTransform(13.4,7.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgWA5QgJgDgHgFIAAgUQAIAGAKAEQAKADAKAAQAIAAAGgDQAGgEAAgIQAAgHgEgDQgEgEgIgDIgPgGQgIgDgGgCQgGgEgDgGQgEgHgBgJQABgKAFgHQAGgHAJgEQAIgEAKAAQAJAAAJADQAIACAIAFIAAAUQgIgGgIgDQgIgDgKgBQgIAAgFAEQgGADAAAIQAAAGAEADQAEAEAHACIARAHQAOAFAGAGQAGAIAAANQABAKgGAIQgFAHgKAEQgJAEgKAAQgMAAgKgDg");
	this.shape_192.setTransform(4.8,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-7.7,251,183.8);


(lib.xeon_k_rgb_60_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xeon_k_rgb_60();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);


(lib.hpe_pri_grn_pos_rgb_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hpe_pri_grn_pos_rgb();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,50);


(lib.Text_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Serveur HPE ProLiant DL380 Gen9  Aussi généreux sur son prix qu
	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgRArQgHgCgGgEIAAgQQAHAGAHADQAIADAIAAQAFAAAGgDQAFgDAAgHQAAgEgDgDQgEgEgGgBIgKgFQgKgDgGgDQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAHAAQAIAAAGACQAHACAFAEIAAAQQgFgFgGgDQgHgDgIAAQgFAAgFADQgFADAAAGQAAAFAEACQADADAGACIAMAFQAKADAFAEQAGAGAAAKQAAAIgFAGQgEAGgHADQgIADgHAAQgJAAgIgDg");
	this.shape_193.setTransform(124.6,129.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgQAoQgKgFgFgLQgGgKABgOQAAgMAEgKQAGgLAJgGQAIgGAKAAQAMAAAIAGQAIAFAFAKQADAJAAAOIAAADIg7AAQAAAKAFAHQADAHAIADQAGADAGAAQAIAAAFgCQAHgBAFgFIAAAOQgFAEgHACQgHACgIAAQgKAAgKgGgAAXgIQAAgGgDgGQgCgFgFgEQgEgDgIAAQgHAAgGAGQgHAGgCAMIAsAAIAAAAg");
	this.shape_194.setTransform(116.5,129.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgLAoQgJgGgGgKQgGgKAAgOQAAgNAGgKQAGgLAJgFQAKgGAKAAQAHAAAGACQAGACAFAEIAAAPQgFgFgGgCQgFgCgHAAQgIAAgEAEQgHADgEAIQgDAHAAAJQAAAKADAHQAEAHAHAEQAEAEAIAAQAHAAAFgCQAGgCAFgFIAAAPQgFAEgGACQgGACgHAAQgKAAgKgGg");
	this.shape_195.setTransform(108.3,129.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAUAtIAAg2QAAgKgEgFQgFgGgKAAQgGAAgGAFQgGAEgDAHIAAA7IgPAAIAAhXIAPAAIAAALQAEgFAHgEQAHgEAGAAQAQAAAIAJQAHAJABAPIAAA4g");
	this.shape_196.setTransform(99.8,129.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgSAqQgHgDgEgGQgFgHAAgJQAAgIAFgHQAEgDAIgEQAHgDAKAAQAFgBAGADQAGACADADIAAgMQAAgIgGgFQgFgFgJAAQgGAAgHADQgGACgFADIAAgOQAEgEAIgCQAHgBAGAAQAQgBAJAJQAJAHAAAPIAAA6IgPAAIAAgHQgDADgGADQgGADgGgBQgJAAgIgDgAgJADQgFACgDAEQgDADAAAFQAAAGADADQADADAFADQAFABAEAAQAHAAAFgDQAGgDACgFIAAgJQgCgFgGgDQgFgDgHAAQgEAAgFABg");
	this.shape_197.setTransform(90.5,129.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AArAtIAAg3QAAgJgEgGQgEgFgJAAQgHAAgFAEQgFAEgCAIIAAA7IgNAAIAAg3QgBgJgEgGQgDgFgJAAQgHAAgFAEQgGAEgBAIIAAA7IgPAAIAAhXIAPAAIAAAKQADgFAGgDQAGgEAIAAQAJAAAGAEQAEAEAEAGQAEgGAGgEQAHgEAKAAQANAAAHAJQAHAIABAPIAAA5g");
	this.shape_198.setTransform(79.6,129.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgVAtIAAhXIAPAAIAAAMQADgGADgEQAGgEAIAAIAFABIADABIAAAPIgEgCIgGgBQgHABgFAEQgEAEgCAIIAAA6g");
	this.shape_199.setTransform(70,129.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgUAoQgJgGgFgLQgFgKAAgNQAAgMAFgLQAFgKAJgGQAJgGALAAQAMAAAJAGQAJAGAFAKQAFALAAAMQAAANgFAKQgFALgJAGQgJAGgMAAQgLAAgJgGgAgMgbQgGAEgDAHQgDAIAAAIQAAAJADAIQADAHAGAEQAFAEAHAAQAIAAAFgEQAGgEADgHQADgIAAgJQAAgIgDgIQgDgHgGgEQgFgFgIAAQgHAAgFAFg");
	this.shape_200.setTransform(62,129.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgLBBIAAhKIgOAAIAAgMIAOAAIAAgPQABgNAHgIQAGgHALAAIAHAAIAGABIAAAPIgGgDIgEAAQgHAAgEAEQgEAEAAAIIAAAOIAUAAIAAAMIgUAAIAABKg");
	this.shape_201.setTransform(55.1,127.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgVAtIAAhXIAPAAIAAAMQADgGADgEQAGgEAIAAIAFABIADABIAAAPIgEgCIgGgBQgHABgFAEQgEAEgCAIIAAA6g");
	this.shape_202.setTransform(49.6,129.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgRAoQgJgFgFgLQgGgKABgOQAAgMAEgKQAGgLAJgGQAIgGAKAAQAMAAAIAGQAIAFAFAKQADAJAAAOIAAADIg7AAQABAKAEAHQAEAHAGADQAHADAGAAQAIAAAFgCQAHgBAGgFIAAAOQgGAEgHACQgHACgHAAQgLAAgLgGgAAXgIQgBgGgCgGQgCgFgFgEQgEgDgIAAQgGAAgHAGQgGAGgDAMIAsAAIAAAAg");
	this.shape_203.setTransform(41.9,129.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgnA+IAAh5IAQAAIAAAKQADgFAGgDQAHgEAHAAQAMAAAJAHQAKAGAEAKQAEALAAAMQAAANgEAIQgEALgKAGQgJAGgMABQgHgBgHgDQgGgEgDgFIAAAtgAgOgrQgGADgDAHIAAAiQADAHAGAEQAGAEAHAAQAHAAAGgEQAGgEADgIQADgFAAgKQAAgJgDgHQgDgIgGgEQgGgEgHAAQgHAAgGAEg");
	this.shape_204.setTransform(33,131.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgRArQgHgCgGgEIAAgQQAHAGAHADQAIADAIAAQAFAAAGgDQAFgDAAgHQAAgEgDgDQgEgEgGgBIgKgFQgKgDgGgDQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAHAAQAIAAAGACQAHACAFAEIAAAQQgFgFgGgDQgHgDgIAAQgFAAgFADQgFADAAAGQAAAFAEACQADADAGACIAMAFQAKADAFAEQAGAGAAAKQAAAIgFAGQgEAGgHADQgIADgHAAQgJAAgIgDg");
	this.shape_205.setTransform(20.1,129.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgRAoQgJgFgFgLQgFgKgBgOQAAgMAGgKQAFgLAIgGQAJgGAKAAQAMAAAIAGQAJAFADAKQAEAJABAOIAAADIg7AAQAAAKADAHQAFAHAGADQAHADAGAAQAHAAAHgCQAFgBAHgFIAAAOQgGAEgHACQgHACgHAAQgLAAgLgGgAAXgIQgBgGgCgGQgCgFgFgEQgFgDgGAAQgHAAgHAGQgGAGgDAMIAsAAIAAAAg");
	this.shape_206.setTransform(12,129.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgRArQgHgCgGgEIAAgQQAHAGAHADQAIADAIAAQAFAAAGgDQAFgDAAgHQAAgEgDgDQgEgEgGgBIgKgFQgKgDgGgDQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAHAAQAIAAAGACQAHACAFAEIAAAQQgFgFgGgDQgHgDgIAAQgFAAgFADQgFADAAAGQAAAFAEACQADADAGACIAMAFQAKADAFAEQAGAGAAAKQAAAIgFAGQgEAGgHADQgIADgHAAQgJAAgIgDg");
	this.shape_207.setTransform(4,129.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgVAtIAAhXIAPAAIAAAMQADgGADgEQAGgEAIAAIAFABIADABIAAAPIgEgCIgGgBQgHABgFAEQgEAEgCAIIAAA6g");
	this.shape_208.setTransform(140.9,112.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgaAkQgIgJgBgOIAAg5IAQAAIAAA2QAAAJAEAGQAGAGAJAAQAGAAAGgFQAGgEACgIIAAg6IAPAAIAABXIgPAAIAAgLQgEAFgGAEQgHAEgHAAQgPAAgHgJg");
	this.shape_209.setTransform(132.8,112.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgRArQgHgCgGgEIAAgQQAHAGAHADQAIADAIAAQAFAAAGgDQAFgDAAgHQAAgEgDgDQgEgEgGgBIgKgFQgKgDgGgDQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAHAAQAIAAAGACQAHACAFAEIAAAQQgFgFgGgDQgHgDgIAAQgFAAgFADQgFADAAAGQAAAFAEACQADADAGACIAMAFQAKADAFAEQAGAGAAAKQAAAIgFAGQgEAGgHADQgIADgHAAQgJAAgIgDg");
	this.shape_210.setTransform(124.4,112.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgQAoQgKgFgFgLQgGgKABgOQAAgMAEgKQAGgLAJgGQAIgGAKAAQAMAAAIAGQAIAFAFAKQADAJAAAOIAAADIg7AAQAAAKAFAHQADAHAHADQAHADAGAAQAIAAAFgCQAHgBAFgFIAAAOQgFAEgHACQgHACgIAAQgLAAgJgGgAAXgIQAAgGgDgGQgCgFgFgEQgEgDgIAAQgHAAgGAGQgHAGgCAMIAsAAIAAAAg");
	this.shape_211.setTransform(112.4,112.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgbAkQgHgJgBgOIAAg5IAQAAIAAA2QAAAJAFAGQAEAGAKAAQAGAAAGgFQAGgEADgIIAAg6IAOAAIAABXIgOAAIAAgLQgFAFgGAEQgHAEgGAAQgPAAgJgJg");
	this.shape_212.setTransform(103.4,112.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAZA+IAAgtQgEAFgGAEQgHADgIABQgMgBgIgGQgKgGgEgLQgFgIABgNQgBgMAFgLQAEgKAKgGQAIgHAMAAQAIAAAHAEQAGADAEAFIAAgKIAOAAIAAB5gAgLgrQgGAEgDAIQgDAHAAAJQAAAKADAFQADAIAGAEQAGAEAGAAQAIAAAGgEQAGgEAEgHIAAgiQgEgHgGgDQgGgEgIAAQgGAAgGAEg");
	this.shape_213.setTransform(93.6,114.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAYAsIgYgjIgXAjIgRAAIAhgsIgfgrIARAAIAVAgIAXggIAQAAIgfArIAhAsg");
	this.shape_214.setTransform(80.8,112.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgGA+IAAhXIANAAIAABXgAgFgtQgDgDAAgEQAAgDADgDQADgDACAAQAEAAACADQADADAAADQAAAEgDADQgCADgEAAQgCAAgDgDg");
	this.shape_215.setTransform(74.6,110.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgVAtIAAhXIAPAAIAAAMQADgGADgEQAGgEAIAAIAFABIADABIAAAPIgEgCIgGgBQgHABgFAEQgEAEgCAIIAAA6g");
	this.shape_216.setTransform(70.1,112.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgmA+IAAh5IAOAAIAAAKQAEgFAGgDQAHgEAHAAQAMAAAKAHQAIAGAFAKQAFALAAAMQAAANgFAIQgFALgIAGQgKAGgMABQgHgBgHgDQgGgEgEgFIAAAtgAgOgrQgGADgEAHIAAAiQAEAHAGAEQAGAEAHAAQAHAAAGgEQAGgEADgIQADgFAAgKQAAgJgDgHQgDgIgGgEQgGgEgHAAQgHAAgGAEg");
	this.shape_217.setTransform(62.2,114.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAUAtIAAg2QAAgKgEgFQgFgGgKAAQgGAAgGAFQgGAEgDAHIAAA7IgPAAIAAhXIAPAAIAAALQAEgFAHgEQAHgEAGAAQAQAAAIAJQAHAJABAPIAAA4g");
	this.shape_218.setTransform(48.4,112.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgUAoQgJgGgFgLQgFgKAAgNQAAgMAFgLQAFgKAJgGQAJgGALAAQAMAAAJAGQAJAGAFAKQAFALAAAMQAAANgFAKQgFALgJAGQgJAGgMAAQgLAAgJgGgAgMgbQgGAEgDAHQgDAIAAAIQAAAJADAIQADAHAGAEQAFAEAHAAQAIAAAFgEQAGgEADgHQADgIAAgJQAAgIgDgIQgDgHgGgEQgFgFgIAAQgHAAgFAFg");
	this.shape_219.setTransform(39.1,112.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgRArQgHgCgGgEIAAgQQAHAGAHADQAIADAIAAQAFAAAGgDQAFgDAAgHQAAgEgDgDQgEgEgGgBIgKgFQgKgDgGgDQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAHAAQAIAAAGACQAHACAFAEIAAAQQgFgFgGgDQgHgDgIAAQgFAAgFADQgFADAAAGQAAAFAEACQADADAGACIAMAFQAKADAFAEQAGAGAAAKQAAAIgFAGQgEAGgHADQgIADgHAAQgJAAgIgDg");
	this.shape_220.setTransform(30.8,112.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgVAtIAAhXIAPAAIAAAMQADgGADgEQAGgEAIAAIAFABIADABIAAAPIgEgCIgGgBQgHABgFAEQgEAEgCAIIAAA6g");
	this.shape_221.setTransform(20.5,112.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgaAkQgIgJAAgOIAAg5IAPAAIAAA2QAAAJAFAGQAEAGAKAAQAGAAAGgFQAGgEACgIIAAg6IAQAAIAABXIgQAAIAAgLQgDAFgHAEQgGAEgIAAQgPAAgHgJg");
	this.shape_222.setTransform(12.3,112.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgRArQgHgCgGgEIAAgQQAHAGAHADQAIADAIAAQAFAAAGgDQAFgDAAgHQAAgEgDgDQgEgEgGgBIgKgFQgKgDgGgDQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAHAAQAIAAAGACQAHACAFAEIAAAQQgFgFgGgDQgHgDgIAAQgFAAgFADQgFADAAAGQAAAFAEACQADADAGACIAMAFQAKADAFAEQAGAGAAAKQAAAIgFAGQgEAGgHADQgIADgHAAQgJAAgIgDg");
	this.shape_223.setTransform(4,112.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAYAsIgYgiIgXAiIgRAAIAhgsIgfgrIARAAIAVAgIAXggIAQAAIgfArIAhAsg");
	this.shape_224.setTransform(107.8,95.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgbAkQgHgJgBgPIAAg4IAQAAIAAA2QAAAJAEAGQAFAGAKAAQAGAAAGgEQAGgFADgIIAAg6IAOAAIAABXIgOAAIAAgLQgFAFgGAEQgHADgGABQgPAAgJgJg");
	this.shape_225.setTransform(98.8,95.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgRAoQgJgFgFgLQgFgKgBgOQAAgMAGgKQAFgLAIgGQAJgGAKAAQAMAAAIAGQAJAFADAKQAEAJABAOIAAADIg7AAQAAAKADAHQAFAHAGADQAHADAGAAQAHAAAHgCQAFgBAHgFIAAAOQgGAEgHACQgHACgHAAQgLAAgLgGgAAXgIQgBgGgCgGQgCgFgFgEQgFgDgGAAQgHAAgHAGQgGAGgDAMIAsAAIAAAAg");
	this.shape_226.setTransform(89.9,95.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgVAtIAAhXIAPAAIAAAMQADgGADgEQAGgEAIAAIAFABIADABIAAAPIgEgCIgGgBQgHABgFAEQgEAEgCAIIAAA6g");
	this.shape_227.setTransform(83.2,95.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgQA8QgKgFgFgLQgGgKABgOQAAgOAEgJQAGgKAJgGQAIgGAKAAQAMAAAIAFQAIAFAFAKQADAIAAAOIAAAEIg7AAQAAALAFAHQADAHAHADQAHADAGAAQAIAAAFgCQAHgBAFgFIAAANQgFAFgHACQgHABgIAAQgLAAgJgFgAAXAKQAAgGgDgEQgCgGgFgDQgEgDgIgBQgHAAgGAHQgHAGgCAKIAsAAIAAAAgAgEgmIAOgbIAQAAIgSAbg");
	this.shape_228.setTransform(75.5,93.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AAUAtIAAg2QAAgKgEgFQgFgGgKAAQgGAAgGAFQgGAEgDAHIAAA7IgPAAIAAhXIAPAAIAAALQAEgFAHgEQAHgEAGAAQAQAAAIAJQAHAJABAPIAAA4g");
	this.shape_229.setTransform(66.6,95.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgQA8QgKgFgFgLQgGgKABgOQAAgOAEgJQAGgKAJgGQAIgGAKAAQAMAAAIAFQAIAFAFAKQADAIAAAOIAAAEIg7AAQAAALAFAHQADAHAIADQAGADAGAAQAIAAAFgCQAHgBAFgFIAAANQgFAFgHACQgHABgIAAQgKAAgKgFgAAXAKQAAgGgDgEQgCgGgFgDQgEgDgIgBQgHAAgGAHQgHAGgCAKIAsAAIAAAAgAgEgmIAOgbIAQAAIgSAbg");
	this.shape_230.setTransform(57.5,93.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgSA9QgHgDgGgDIAAgRQAHAGAHADQAHACAIAAQAGAAAGgDQAHgDADgGQAEgHAAgJIAAgGQgDAFgHADQgGAEgIAAQgMAAgIgHQgJgGgFgKQgEgJAAgMQAAgMAEgKQAFgKAJgGQAIgHAMAAQAIAAAGAEQAHADADAFIAAgKIAPAAIAABQQAAAPgGAKQgHAJgJAEQgKAFgJAAQgJAAgHgCgAgLgsQgGAEgDAHQgDAHAAAJQAAAKADAHQADAFAGAEQAGAEAHAAQAHAAAGgEQAGgDADgGIAAgjQgDgGgGgEQgGgDgHAAQgHAAgGAEg");
	this.shape_231.setTransform(48.1,97.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgGA+IAAhXIANAAIAABXgAgFgtQgDgCAAgEQAAgFADgCQADgDACAAQAEAAACADQADACAAAFQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_232.setTransform(37.7,94);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgRArQgHgCgGgEIAAgQQAHAGAHADQAIADAIAAQAFAAAGgDQAFgDAAgHQAAgEgDgDQgEgEgGgBIgKgFQgKgDgGgDQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAHAAQAIAAAGACQAHACAFAEIAAAQQgFgFgGgDQgHgDgIAAQgFAAgFADQgFADAAAGQAAAFAEACQADADAGACIAMAFQAKADAFAEQAGAGAAAKQAAAIgFAGQgEAGgHADQgIADgHAAQgJAAgIgDg");
	this.shape_233.setTransform(32.1,95.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgRArQgHgCgGgEIAAgQQAHAGAHADQAIADAIAAQAFAAAGgDQAFgDAAgHQAAgEgDgDQgEgEgGgBIgKgFQgKgDgGgDQgGgGAAgLQAAgIAEgFQAEgGAHgDQAHgDAHAAQAIAAAGACQAHACAFAEIAAAQQgFgFgGgDQgHgDgIAAQgFAAgFADQgFADAAAGQAAAFAEACQADADAGACIAMAFQAKADAFAEQAGAGAAAKQAAAIgFAGQgEAGgHADQgIADgHAAQgJAAgIgDg");
	this.shape_234.setTransform(24.6,95.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgbAkQgHgJgBgPIAAg4IAQAAIAAA2QAAAJAFAGQAFAGAJAAQAGAAAGgEQAGgFADgIIAAg6IAOAAIAABXIgOAAIAAgLQgFAFgGAEQgGADgHABQgPAAgJgJg");
	this.shape_235.setTransform(16.2,95.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AAnA9IgOglIgxAAIgOAlIgQAAIAwh5IANAAIAwB5gAAUAKIgUgyIgTAyIAnAAg");
	this.shape_236.setTransform(6,94.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgTBLIAbgzIgEABIgFABQgOAAgLgGQgLgIgGgKQgGgKAAgOQAAgPAGgLQAHgMALgGQAMgHANgBQAOABAMAHQALAGAHAMQAGALAAAPQAAAJgDALQgDAKgJAOIgeA1gAgTgsQgIAJAAANQABAIADAGQADAHAHACQAGAEAHAAQAIAAAHgEQAFgCAEgHQAEgGAAgIQAAgNgIgJQgIgHgMgBQgMABgHAHg");
	this.shape_237.setTransform(109.7,55.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAVA2IAAg/QAAgLgFgFQgFgGgLAAQgFAAgHAEQgGAFgCAIIAABEIgYAAIAAhpIAYAAIAAAKQAFgFAHgDQAHgEAIAAQASABAKAKQAJALABARIAABEg");
	this.shape_238.setTransform(98.3,57.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgVAxQgLgHgHgMQgHgNABgRQAAgOAFgNQAHgNALgHQALgHAMAAQAPAAAKAGQAKAHAFAMQAFALAAAQIAAAHIhFAAQACAKAEAHQAFAGAHAEQAFADAJAAQAIAAAIgDQAGgCAIgFIAAAVQgHAFgIACQgJACgKAAQgNAAgNgGgAAXgLQAAgKgFgHQgGgGgLAAQgGAAgHAFQgGAFgDANIAsAAIAAAAg");
	this.shape_239.setTransform(87.1,57.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgbBCQgQgKgJgRQgIgRAAgWQAAgVAJgRQAKgRAQgKQARgJATgBQANABALADQAKADAIAGIAAAaQgJgIgKgEQgLgEgMAAQgMAAgLAHQgLAGgGANQgGAMAAAOQAAAPAFANQAGAMAKAHQAKAHANAAQAIAAAIgDQAHgCAGgFIAAgcIgcAAIAAgTIAzAAIAAA5QgLALgOAGQgNAFgPAAQgTAAgQgKg");
	this.shape_240.setTransform(74.3,55.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgcBCQgMgKgHgRQgHgRAAgWQAAgVAHgRQAHgRAMgKQANgJAPgBQAQABANAJQAMAKAHARQAHARAAAVQAAAWgHARQgHARgMAKQgNAJgQABQgPgBgNgJgAgQgtQgHAHgEAMQgDAMAAAOQAAAPADAMQAEAMAHAHQAHAHAJAAQAKAAAHgHQAHgHADgMQAEgMAAgPQAAgOgEgMQgDgMgHgHQgHgHgKAAQgJAAgHAHg");
	this.shape_241.setTransform(56.1,55.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgdBHQgJgDgHgGIAAgaQAIAIAJAFQAJAEALAAQAIAAAGgDQAIgDAEgGQAEgGAAgJQAAgJgEgGQgEgGgIgDQgGgCgJAAQgJAAgHAAIgPAGIAAhPIBOAAIAAAVIg6AAIAAAhIAHgBIAHAAQANAAAMAFQAMAGAHAJQAHAKABAQQgBAPgHAMQgHAKgMAGQgNAFgNAAQgMAAgKgDg");
	this.shape_242.setTransform(44.6,55.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgbBHQgKgEgGgFIAAgaQAHAIAKAFQALAEAKAAQALAAAIgHQAIgGgBgNQABgKgGgGQgFgGgKgEQgHgBgMAAIAAAAIAag0IgzAAIAAgVIBWAAIAAABIggA6QAPAEAKAKQAIAKABAQQgBAQgHAKQgGAKgMAHQgLAFgLAAQgOAAgKgDg");
	this.shape_243.setTransform(34.1,55.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AguBJIAAiRIAZAAIAAB7IBEAAIAAAWg");
	this.shape_244.setTransform(23.5,55.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAtBJIAAhlIgtBGIAAAAIgshGIAABlIgZAAIAAiRIAXAAIAuBLIAwhLIAWAAIAACRg");
	this.shape_245.setTransform(8.7,55.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgMBDIAAhUIgVAAIAAgUIAVAAIAAgdIAWAAIAAAdIAYAAIAAAUIgYAAIAABUg");
	this.shape_246.setTransform(75,32.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AAVA2IAAhAQAAgKgFgFQgFgGgLAAQgFAAgHAEQgGAFgCAIIAABEIgYAAIAAhoIAYAAIAAAKQAFgFAHgEQAHgEAIAAQASAAAKALQAJAKABATIAABDg");
	this.shape_247.setTransform(65.3,33.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgXAzQgJgFgGgHQgFgIAAgLQAAgKAFgHQAGgHAJgEQAKgEALgBQAGABAGACQAHACAEACIAAgHQAAgJgHgGQgGgEgKAAQgIAAgHACQgIADgGAEIAAgWQAFgDAKgDQAIgDAJAAQAVABALAKQALAKAAASIAABEIgXAAIAAgGQgDADgHACQgHADgHAAQgMAAgIgEgAgJAGQgFACgDAEQgEADAAAFQAAAGAEADQADAEAFABQAFACAEAAQAHgBAFgDQAHgCACgFIAAgKQgCgFgHgCQgFgDgHAAQgEAAgFABg");
	this.shape_248.setTransform(53.8,33.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgKBMIAAhoIAWAAIAABogAgJgyQgEgEAAgGQAAgHAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAHQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_249.setTransform(46.1,31.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AguBJIAAiRIAZAAIAAB7IBEAAIAAAWg");
	this.shape_250.setTransform(38.1,31.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgZAwQgLgHgHgNQgGgMAAgQQAAgPAGgNQAHgMALgHQALgHAOAAQAOAAAMAHQALAHAHAMQAGANAAAPQAAAQgGAMQgHANgLAHQgMAHgOAAQgOAAgLgHgAgNgdQgGAFgDAHQgDAIAAAJQAAAKADAIQADAHAGAFQAGAEAHABQAIgBAGgEQAGgFADgHQADgIAAgKQAAgJgDgIQgDgHgGgFQgGgEgIgBQgHABgGAEg");
	this.shape_251.setTransform(26.2,33.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgcA2IAAhoIAYAAIAAALQADgGAEgEQAGgEAIAAIAIAAIAEACIAAAYIgGgCIgIgBQgIAAgFAEQgEAFgCAIIAABDg");
	this.shape_252.setTransform(17.3,33.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("Ag0BJIAAiRIA3AAQAXAAAOAMQANALAAAXQAAAXgNAJQgOAMgXAAIgeAAIAAA3gAgbgBIAeAAQAMgBAHgGQAHgHAAgLQAAgLgHgHQgHgGgMAAIgeAAg");
	this.shape_253.setTransform(7.1,31.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgvBJIAAiRIBfAAIAAAWIhGAAIAAAnIA/AAIAAAUIg/AAIAAAqIBGAAIAAAWg");
	this.shape_254.setTransform(110.7,7.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("Ag0BJIAAiRIA3AAQAXAAAOAMQANALAAAXQAAAXgNAJQgOAMgXAAIgeAAIAAA3gAgbgBIAeAAQAMgBAHgGQAHgHAAgLQAAgLgHgHQgHgGgMAAIgeAAg");
	this.shape_255.setTransform(98.4,7.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAkBJIAAhAIhIAAIAABAIgZAAIAAiRIAZAAIAAA9IBIAAIAAg9IAZAAIAACRg");
	this.shape_256.setTransform(83.9,7.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgcA2IAAhoIAYAAIAAAKQADgFAEgEQAGgEAIAAIAIABIAEABIAAAZIgGgDIgIgBQgIAAgFAFQgEADgCAJIAABDg");
	this.shape_257.setTransform(67.7,9.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgiArQgJgKAAgTIAAhDIAYAAIAABAQAAAKAEAFQAFAGAKAAQAGAAAGgEQAHgFABgIIAAhEIAZAAIAABoIgZAAIAAgKQgEAFgHAEQgIAEgHAAQgTAAgJgLg");
	this.shape_258.setTransform(57.5,10);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgVAxQgLgHgHgMQgHgNAAgRQABgOAFgNQAHgNALgHQALgHANAAQAOAAAKAGQAKAHAFAMQAFALABAQIAAAHIhGAAQACAKAEAHQAEAGAIAEQAFADAJAAQAIAAAHgDQAIgCAHgFIAAAVQgHAFgIACQgIACgLAAQgNAAgNgGgAAXgLQAAgKgFgHQgGgGgKAAQgGAAgIAFQgGAFgDANIAsAAIAAAAg");
	this.shape_259.setTransform(46.5,9.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgLA1IgohpIAZAAIAaBMIAbhMIAZAAIgoBpg");
	this.shape_260.setTransform(35.9,9.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgcA2IAAhoIAYAAIAAAKQADgFAEgEQAGgEAIAAIAIABIAEABIAAAZIgGgDIgIgBQgIAAgFAFQgEADgCAJIAABDg");
	this.shape_261.setTransform(26.8,9.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgUAxQgMgHgHgMQgGgNAAgRQgBgOAHgNQAGgNALgHQALgHAMAAQAPAAAKAGQAKAHAFAMQAGALgBAQIAAAHIhFAAQACAKAEAHQAEAGAIAEQAFADAIAAQAJAAAIgDQAGgCAIgFIAAAVQgHAFgIACQgIACgLAAQgNAAgMgGgAAYgLQgBgKgGgHQgFgGgLAAQgFAAgHAFQgHAFgDANIAtAAIAAAAg");
	this.shape_262.setTransform(17.2,9.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgcBIQgMgEgIgFIAAgaQALAIAMAEQALAFANAAQALAAAIgFQAHgFABgKQgBgIgFgFQgFgEgKgEIgTgHQgKgEgIgDQgHgFgFgIQgFgIAAgMQABgNAGgJQAGgJAMgFQALgFANAAQALAAALAEQALADAJAFIAAAaQgJgHgLgEQgKgFgMAAQgKAAgHAFQgHAEAAAJQAAAIAEAEQAGAFAJADIAWAIQARAGAHAJQAJAKAAAQQAAANgHAKQgHAJgMAFQgMAFgNAAQgOAAgNgEg");
	this.shape_263.setTransform(6,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]}).wait(1));

	// Serveurs HPE ProLiant Gen9 dotés des processeurs Intel® Xeon® I
	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_264.setTransform(86.9,371.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgMAgQgIgFgFgHQgEgJAAgLQAAgJAEgIQAEgJAHgFQAHgEAIAAQAJgBAHAFQAGAEADAIQAEAIAAAKIAAADIgvAAQAAAIAEAFQADAFAFADQAFADAFAAQAGAAAEgCQAFgBAFgEIAAALQgFAEgFABQgGABgFABQgJgBgHgEgAASgGQAAgFgCgEQgCgFgDgDQgFgCgFAAQgGAAgFAEQgFAGgCAJIAjAAIAAAAg");
	this.shape_265.setTransform(82.2,368.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgFAzIAAhlIAKAAIAABlg");
	this.shape_266.setTransform(77.2,367.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgFAzIAAhlIALAAIAABlg");
	this.shape_267.setTransform(74.2,367.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgNAgQgHgFgFgHQgEgJAAgLQAAgJAEgIQAEgJAHgFQAHgEAIAAQAJgBAHAFQAHAEADAIQADAIAAAKIAAADIgvAAQAAAIADAFQADAFAGADQAFADAFAAQAFAAAGgCQAEgBAFgEIAAALQgEAEgGABQgFABgHABQgIgBgIgEgAASgGQAAgFgCgEQgCgFgEgDQgDgCgGAAQgGAAgEAEQgGAGgBAJIAiAAIAAAAg");
	this.shape_268.setTransform(69.2,368.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAQAkIAAgrQAAgIgDgEQgEgFgIAAQgEAAgGAEQgEAEgCAGIAAAuIgNAAIAAhFIANAAIAAAJQADgFAGgDQAFgDAFAAQAMAAAGAHQAGAHABAMIAAAtg");
	this.shape_269.setTransform(62.1,368.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AARAkIAAgrQgBgIgDgEQgEgFgIAAQgFAAgFAEQgEAEgDAGIAAAuIgLAAIAAhFIALAAIAAAJQAEgFAFgDQAGgDAFAAQAMAAAHAHQAFAHAAAMIAAAtg");
	this.shape_270.setTransform(54.6,368.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgQAfQgHgEgEgIQgEgJAAgKQAAgJAEgJQAEgIAHgFQAIgEAIAAQAJAAAIAEQAHAFAEAIQAEAJAAAJQAAAKgEAJQgEAIgHAEQgIAGgJAAQgIAAgIgGgAgJgWQgFAEgDAFQgCAHAAAGQAAAHACAGQADAGAFADQAEAEAFAAQAGAAAEgEQAFgDADgGQACgGAAgHQAAgGgCgHQgDgFgFgEQgEgDgGAAQgFAAgEADg");
	this.shape_271.setTransform(47.1,368.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgFAxIAAhFIAKAAIAABFgAgEgkQgCgBAAgEQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAEgCABQgCADgDAAQgCAAgCgDg");
	this.shape_272.setTransform(41.9,367.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgFAsIAAg7IgPAAIAAgKIAPAAIAAgTIAKAAIAAATIAQAAIAAAKIgQAAIAAA7g");
	this.shape_273.setTransform(37.9,367.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgfAxIAAhgIAMAAIAAAJQADgEAGgDQAFgDAFAAQAKAAAHAFQAHAFAEAIQAEAJAAAKQAAAKgEAGQgEAIgHAGQgHAFgKAAQgFAAgFgDQgGgDgDgEIAAAjgAgLgiQgFADgDAFIAAAbQADAGAFADQAFADAGAAQAFAAAEgEQAFgDADgGQACgEAAgHQAAgIgCgGQgDgGgFgDQgEgDgFAAQgGAAgFADg");
	this.shape_274.setTransform(32,370);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgNAgQgHgFgEgHQgFgJAAgLQAAgJAEgIQAEgJAHgFQAHgEAIAAQAKgBAGAFQAGAEAEAIQADAIAAAKIAAADIgvAAQAAAIADAFQADAFAGADQAFADAFAAQAFAAAFgCQAFgBAFgEIAAALQgEAEgGABQgGABgGABQgIgBgIgEgAASgGQAAgFgCgEQgCgFgDgDQgEgCgGAAQgFAAgGAEQgEAGgCAJIAiAAIAAAAg");
	this.shape_275.setTransform(24.5,368.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgIAgQgIgFgFgIQgEgIAAgLQAAgKAEgIQAFgJAIgEQAHgFAIABIAKABQAFABAEADIAAANQgEgEgEgCQgFgCgFAAQgGAAgEADQgFAEgDAFQgDAHAAAGQAAAHADAGQADAHAFACQAEAEAGAAQAFAAAFgCQAEgBAEgEIAAALQgEAEgFABIgKACQgIgBgHgEg");
	this.shape_276.setTransform(17.9,368.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AATAjIgTgbIgSAbIgOAAIAbgjIgZgiIAOAAIAQAaIASgaIANAAIgZAiIAaAjg");
	this.shape_277.setTransform(11.5,368.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgNAgQgHgFgEgHQgFgJAAgLQAAgJAEgIQAEgJAHgFQAHgEAIAAQAKgBAGAFQAHAEADAIQADAIAAAKIAAADIgvAAQAAAIADAFQADAFAGADQAFADAFAAQAFAAAGgCQAEgBAFgEIAAALQgFAEgFABQgFABgHABQgIgBgIgEgAASgGQAAgFgCgEQgCgFgEgDQgDgCgGAAQgFAAgFAEQgGAGgBAJIAiAAIAAAAg");
	this.shape_278.setTransform(4.8,368.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgNAwQgIgFgDgIQgFgIAAgLQAAgLAEgHQAEgIAHgFQAHgFAIAAQAKAAAGAFQAGAEAEAIQADAGAAAKIAAAEIgvAAQAAAJAEAFQADAFAFADQAFADAFAAQAFAAAFgCQAFgBAFgEIAAALQgEADgGACQgGABgGAAQgIAAgIgEgAASAIQAAgFgCgDQgCgEgDgDQgFgCgFgBQgFAAgGAFQgEAFgCAIIAiAAIAAAAgAgDgeIALgVIANAAIgPAVg");
	this.shape_279.setTransform(199.9,353);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgFAtIAAg8IgPAAIAAgKIAPAAIAAgSIAKAAIAAASIAQAAIAAAKIgQAAIAAA8g");
	this.shape_280.setTransform(194.1,353.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgFAyIAAhGIAKAAIAABGgAgEgkQgCgCAAgDQAAgDACgDQACgBACAAQADAAACABQACADAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_281.setTransform(190.2,353.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgFAjIgbhFIANAAIATA2IAUg2IANAAIgcBFg");
	this.shape_282.setTransform(185.2,354.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgFAyIAAhGIAKAAIAABGgAgEgkQgCgCAAgDQAAgDACgDQACgBACAAQADAAACABQACADAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_283.setTransform(180.2,353.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgFAtIAAg8IgPAAIAAgKIAPAAIAAgSIAKAAIAAASIAQAAIAAAKIgQAAIAAA8g");
	this.shape_284.setTransform(176.2,353.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgIAgQgIgFgFgIQgEgIAAgLQAAgKAEgIQAFgIAIgFQAHgFAIAAIAKACQAFABAEADIAAAMQgEgEgEgBQgFgCgFAAQgGAAgEAEQgFACgDAHQgDAFAAAHQAAAIADAFQADAGAFAEQAEADAGAAQAFAAAFgCQAEgBAEgEIAAAMQgEADgFABIgKACQgIAAgHgFg");
	this.shape_285.setTransform(170.7,354.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgVAdQgGgHAAgMIAAgtIAMAAIAAArQAAAIADAEQAEAFAIAAQAFAAAEgEQAFgEACgGIAAguIAMAAIAABFIgMAAIAAgJQgDAFgFADQgGADgFAAQgMAAgGgHg");
	this.shape_286.setTransform(163.8,354.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgQAvQgHgFgEgIQgEgJAAgKQAAgKAEgGQAEgJAHgFQAHgFAJAAQAGAAAFADQAGADACAEIAAgpIANAAIAABmIgNAAIAAgJQgCAEgGADQgFADgGAAQgJAAgHgFgAgJgFQgEADgDAEQgCAGAAAHQAAAIACAGQADAGAEADQAFADAFAAQAGAAAFgDQAFgDACgFIAAgdQgCgEgFgDQgFgDgGAAQgFAAgFAEg");
	this.shape_287.setTransform(156,353);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgQAfQgHgEgEgIQgEgJAAgKQAAgJAEgJQAEgIAHgEQAIgFAIgBQAJABAIAFQAHAEAEAIQAEAJAAAJQAAAKgEAJQgEAIgHAEQgIAFgJABQgIgBgIgFgAgJgVQgFADgDAGQgCAFAAAHQAAAIACAFQADAGAFAEQAEADAFAAQAGAAAEgDQAFgEADgGQACgFAAgIQAAgHgCgFQgDgGgFgDQgEgEgGAAQgFAAgEAEg");
	this.shape_288.setTransform(148.6,354.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgRAkIAAhFIAMAAIAAAJQADgFACgDQAFgDAGAAIAEABIADAAIAAANIgEgCIgEAAQgGAAgEADQgDAEgCAGIAAAug");
	this.shape_289.setTransform(143,354.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgfAxIAAhgIAMAAIAAAJQADgEAGgDQAFgDAFAAQAKAAAHAFQAHAFAEAIQAEAJAAAKQAAAKgEAGQgEAIgHAGQgHAFgKAAQgFAAgFgDQgGgDgDgEIAAAjgAgLgiQgFADgDAFIAAAbQADAGAFADQAFADAGAAQAFAAAEgEQAFgDADgGQACgEAAgHQAAgIgCgGQgDgGgFgDQgEgDgFAAQgGAAgFADg");
	this.shape_290.setTransform(136.7,355.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgMAgQgIgFgFgHQgEgJAAgLQAAgJAEgJQAEgIAHgEQAHgFAIgBQAJAAAHAFQAGAEADAIQAEAIAAAKIAAADIgvAAQAAAIAEAFQADAFAFADQAFADAFAAQAGAAAEgCQAFgBAFgEIAAALQgFAEgFABQgGACgFAAQgJAAgHgFgAASgGQAAgFgCgEQgCgFgDgCQgFgDgFgBQgGABgFAFQgFAEgCAKIAjAAIAAAAg");
	this.shape_291.setTransform(125.9,354.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AARAkIAAgrQAAgIgFgEQgDgFgIAAQgFAAgEAEQgFAEgCAGIAAAuIgMAAIAAhFIAMAAIAAAJQADgFAGgDQAFgDAEAAQANAAAGAHQAHAHgBAMIAAAtg");
	this.shape_292.setTransform(118.7,354.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgVAdQgGgHAAgMIAAgtIAMAAIAAArQAAAIADAEQAEAFAIAAQAFAAAEgEQAFgEACgGIAAguIAMAAIAABFIgMAAIAAgJQgDAFgFADQgGADgFAAQgMAAgGgHg");
	this.shape_293.setTransform(111.1,354.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgRAkIAAhFIAMAAIAAAJQADgFACgDQAFgDAGAAIAEABIADAAIAAANIgEgCIgEAAQgGAAgEADQgDAEgCAGIAAAug");
	this.shape_294.setTransform(102,354.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgVAdQgGgHAAgMIAAgtIAMAAIAAArQAAAIADAEQAEAFAIAAQAFAAAEgEQAFgEACgGIAAguIAMAAIAABFIgMAAIAAgJQgDAFgFADQgGADgFAAQgMAAgGgHg");
	this.shape_295.setTransform(95.5,354.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgQAfQgHgEgEgIQgEgJAAgKQAAgJAEgJQAEgIAHgEQAIgFAIgBQAJABAIAFQAHAEAEAIQAEAJAAAJQAAAKgEAJQgEAIgHAEQgIAFgJABQgIgBgIgFgAgJgVQgFADgDAGQgCAFAAAHQAAAIACAFQADAGAFAEQAEADAFAAQAGAAAEgDQAFgEADgGQACgFAAgIQAAgHgCgFQgDgGgFgDQgEgEgGAAQgFAAgEAEg");
	this.shape_296.setTransform(88.1,354.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AghAxIAAhhIAiAAQAPAAAJAIQAJAHAAAPQAAAOgJAGQgJAHgPAAIgVAAIAAAogAgUAAIAVAAQAKAAAFgFQAGgFAAgIQAAgJgGgEQgFgGgKAAIgVAAg");
	this.shape_297.setTransform(80.9,353.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_298.setTransform(72,357.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgNAZQgGgEgFgGQgDgHAAgIQAAgHADgHQAFgGAGgEQAHgEAGAAQAIAAAGAEQAHAEAEAGQADAHAAAHQAAAIgDAHQgEAGgHAEQgGAEgIAAQgGAAgHgEgAgKgUQgGADgDAGQgDAFgBAGQABAHADAFQADAGAGADQAFADAFAAQAGAAAFgDQAGgDADgGQADgFABgHQgBgGgDgFQgDgGgGgDQgFgDgGAAQgFAAgFADgAAGAOIgGgKIgDAAIAAAKIgHAAIAAgcIALAAQAGAAACACQADADABAFQgBADgCABQgBACgDABIAIALgAgDAAIAEAAIAEgBIABgDIgBgDQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgEAAg");
	this.shape_299.setTransform(67.6,351.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgNAgQgHgFgEgHQgFgJAAgLQAAgJAEgJQAEgIAHgEQAHgFAIgBQAKAAAGAFQAHAEADAIQADAIAAAKIAAADIgvAAQAAAIADAFQADAFAGADQAFADAFAAQAFAAAGgCQAEgBAFgEIAAALQgFAEgFABQgFACgHAAQgIAAgIgFgAASgGQAAgFgCgEQgCgFgEgCQgDgDgGgBQgFABgFAFQgGAEgBAKIAiAAIAAAAg");
	this.shape_300.setTransform(61,354.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgQAvQgHgFgEgIQgEgJAAgKQAAgKAEgGQAEgJAHgFQAHgFAJAAQAGAAAFADQAGADACAEIAAgpIANAAIAABmIgNAAIAAgJQgCAEgGADQgFADgGAAQgJAAgHgFgAgJgFQgEADgDAEQgCAGAAAHQAAAIACAGQADAGAEADQAFADAFAAQAGAAAFgDQAFgDACgFIAAgdQgCgEgFgDQgFgDgGAAQgFAAgFAEg");
	this.shape_301.setTransform(53.4,353);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgFAyIAAhGIAKAAIAABGgAgEgkQgCgCAAgDQAAgDACgDQACgBACAAQADAAACABQACADAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_302.setTransform(48.3,353.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgOAiQgFgCgFgCIAAgOQAGAFAGADQAGACAGAAQAEAAAEgCQAFgDAAgFQAAgEgDgCQgDgCgFgCIgIgDQgHgDgFgDQgFgEgBgIQABgHADgEQADgEAGgDQAGgDAFAAQAGAAAFACQAFABAFAEIAAAMQgEgEgGgCQgFgCgGgBQgEAAgEADQgDADAAAEQAAAEACACIAIAEIAJAEQAIACAEAEQAEAEABAIQgBAGgDAFQgDAEgHADQgFADgGAAQgHgBgHgCg");
	this.shape_303.setTransform(43.8,354.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AARAkIAAgrQgBgIgEgEQgDgFgIAAQgEAAgFAEQgFAEgCAGIAAAuIgNAAIAAhFIANAAIAAAJQADgFAGgDQAFgDAEAAQANAAAGAHQAHAHAAAMIAAAtg");
	this.shape_304.setTransform(37.1,354.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_305.setTransform(31.6,353.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgEA0IAAhnIAJAAIAABng");
	this.shape_306.setTransform(25.2,352.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgMAgQgJgFgDgHQgFgJAAgLQAAgJAEgJQAEgIAHgEQAHgFAIgBQAJAAAHAFQAGAEADAIQAEAIAAAKIAAADIgvAAQAAAIAEAFQADAFAFADQAFADAFAAQAGAAAEgCQAFgBAFgEIAAALQgFAEgFABQgGACgFAAQgJAAgHgFgAASgGQAAgFgCgEQgCgFgDgCQgEgDgGgBQgFABgGAFQgEAEgDAKIAjAAIAAAAg");
	this.shape_307.setTransform(20.2,354.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgFAtIAAg8IgPAAIAAgKIAPAAIAAgSIAKAAIAAASIAQAAIAAAKIgQAAIAAA8g");
	this.shape_308.setTransform(14.5,353.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AAQAkIAAgrQAAgIgDgEQgEgFgIAAQgEAAgGAEQgEAEgDAGIAAAuIgMAAIAAhFIAMAAIAAAJQAEgFAFgDQAGgDAFAAQAMAAAHAHQAFAHABAMIAAAtg");
	this.shape_309.setTransform(8.4,354.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_310.setTransform(3,353.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_311.setTransform(207.2,343.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgNAZQgGgEgEgGQgFgHAAgIQAAgHAFgHQAEgGAGgEQAHgEAGAAQAIAAAGAEQAHAEADAGQAEAHABAHQgBAIgEAHQgDAGgHAEQgGAEgIAAQgGAAgHgEgAgLgUQgFADgEAGQgCAFAAAGQAAAHACAFQAEAGAFADQAGADAFAAQAGAAAGgDQAFgDADgGQADgFAAgHQAAgGgDgFQgDgGgFgDQgGgDgGAAQgFAAgGADgAAGAOIgGgKIgDAAIAAAKIgHAAIAAgcIAMAAQAEAAADACQAEADAAAFQAAADgCABQgCACgEABIAJALgAgDAAIAEAAIAEgBIABgDIgBgDQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgEAAg");
	this.shape_312.setTransform(202.8,336.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AAQAkIAAgrQAAgIgDgEQgEgFgIAAQgFAAgFAEQgEAEgDAGIAAAuIgLAAIAAhFIALAAIAAAJQAEgFAFgDQAGgDAFAAQAMAAAHAHQAFAHAAAMIAAAtg");
	this.shape_313.setTransform(196,340.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgJAAgKQAAgKAEgIQAEgIAHgEQAIgGAIAAQAJAAAIAGQAHAEAEAIQAEAIAAAKQAAAKgEAJQgEAIgHAFQgIAEgJAAQgIAAgIgEgAgJgVQgFADgDAGQgCAGAAAGQAAAHACAHQADAFAFAEQAEADAFAAQAGAAAEgDQAFgEADgFQACgHAAgHQAAgGgCgGQgDgGgFgDQgEgEgGAAQgFAAgEAEg");
	this.shape_314.setTransform(188.5,340.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgNAgQgIgEgEgJQgEgHAAgMQAAgJAEgJQAEgIAHgEQAHgGAIAAQAJABAHAEQAHAEADAIQADAIAAAKIAAACIgvAAQAAAJADAFQAEAGAFADQAFACAFAAQAGAAAFgCQAEgBAFgEIAAALQgEADgGACQgFABgHAAQgIABgIgFgAASgGQAAgFgCgFQgCgEgEgCQgEgDgFgBQgGAAgEAGQgGAEgBAKIAiAAIAAAAg");
	this.shape_315.setTransform(181.4,340.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAbAxIgbgpIgbApIgNAAIAjgxIgigvIAPAAIAYAlIAaglIAOAAIgiAvIAjAxg");
	this.shape_316.setTransform(173.8,339.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgNAZQgHgEgDgGQgEgHgBgIQABgHAEgHQADgGAHgEQAGgEAHAAQAHAAAHAEQAGAEAEAGQAFAHAAAHQAAAIgFAHQgEAGgGAEQgHAEgHAAQgHAAgGgEgAgLgUQgFADgEAGQgDAFAAAGQAAAHADAFQAEAGAFADQAGADAFAAQAGAAAFgDQAGgDADgGQAEgFgBgHQABgGgEgFQgDgGgGgDQgFgDgGAAQgFAAgGADgAAGAOIgGgKIgDAAIAAAKIgHAAIAAgcIAMAAQAFAAADACQACADAAAFQAAADgBABQgCACgEABIAIALgAgDAAIAEAAIAEgBIABgDIgBgDQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgEAAg");
	this.shape_317.setTransform(163.1,336.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgEA0IAAhnIAJAAIAABng");
	this.shape_318.setTransform(158.4,338.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgMAgQgJgEgDgJQgFgHAAgMQAAgJAEgJQAEgIAHgEQAHgGAIAAQAJABAHAEQAGAEADAIQAEAIAAAKIAAACIgvAAQAAAJAEAFQADAGAFADQAFACAFAAQAGAAAEgCQAFgBAFgEIAAALQgFADgFACQgGABgFAAQgJABgHgFgAASgGQAAgFgCgFQgCgEgDgCQgEgDgGgBQgFAAgGAGQgEAEgDAKIAjAAIAAAAg");
	this.shape_319.setTransform(153.4,340.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgFAtIAAg7IgPAAIAAgKIAPAAIAAgTIAKAAIAAATIAQAAIAAAKIgQAAIAAA7g");
	this.shape_320.setTransform(147.7,339.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAQAkIAAgrQAAgIgDgEQgEgFgIAAQgEAAgGAEQgEAEgDAGIAAAuIgMAAIAAhFIAMAAIAAAJQAEgFAFgDQAGgDAFAAQAMAAAHAHQAFAHABAMIAAAtg");
	this.shape_321.setTransform(141.6,340.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgFAxIAAhgIALAAIAABgg");
	this.shape_322.setTransform(136.2,339.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgOAiQgFgBgFgDIAAgOQAGAFAFADQAHADAGgBQAEABAEgDQAFgDgBgFQAAgDgCgDQgDgCgFgCIgIgDQgHgDgFgCQgFgFgBgJQABgFADgFQADgFAGgCQAGgCAFgBQAGABAFABQAGACAEADIAAAMQgEgEgGgCQgFgCgGgBQgEABgEACQgDACAAAFQAAAEACACIAIAEIAJAEQAIACAEAEQAEAEABAIQgBAGgDAFQgDAEgHADQgFACgGAAQgHAAgHgCg");
	this.shape_323.setTransform(128.3,340.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgRAkIAAhFIAMAAIAAAJQADgFACgDQAFgDAGAAIAEABIADAAIAAANIgEgCIgEAAQgGAAgEADQgDAEgCAGIAAAug");
	this.shape_324.setTransform(123.2,340.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgVAdQgGgHAAgMIAAgtIAMAAIAAArQAAAIADAEQAEAFAIAAQAFAAAEgEQAFgEACgGIAAguIAMAAIAABFIgMAAIAAgJQgDAFgFADQgGADgFAAQgMAAgGgHg");
	this.shape_325.setTransform(116.7,340.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgNAgQgHgEgEgJQgFgHAAgMQAAgJAEgJQAEgIAHgEQAHgGAIAAQAKABAGAEQAGAEAEAIQADAIAAAKIAAACIgvAAQAAAJADAFQADAGAGADQAFACAFAAQAFAAAFgCQAFgBAFgEIAAALQgFADgFACQgGABgGAAQgIABgIgFgAASgGQAAgFgCgFQgCgEgDgCQgEgDgGgBQgFAAgGAGQgEAEgCAKIAiAAIAAAAg");
	this.shape_326.setTransform(109.5,340.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgOAiQgFgBgFgDIAAgOQAGAFAFADQAHADAGgBQAEABAEgDQAFgDgBgFQAAgDgCgDQgDgCgFgCIgIgDQgHgDgFgCQgFgFgBgJQABgFADgFQADgFAGgCQAGgCAFgBQAGABAFABQAGACAEADIAAAMQgEgEgGgCQgFgCgGgBQgEABgDACQgEACAAAFQAAAEACACIAIAEIAJAEQAIACAEAEQAEAEABAIQgBAGgDAFQgDAEgHADQgFACgGAAQgHAAgHgCg");
	this.shape_327.setTransform(103.1,340.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgNAiQgHgBgDgDIAAgOQAEAFAHADQAFADAHgBQAEABAEgDQAEgDABgFQgBgDgCgDQgDgCgEgCIgIgDQgJgDgFgCQgEgFAAgJQAAgFADgFQAEgFAFgCQAGgCAFgBQAGABAFABQAGACAEADIAAAMQgEgEgFgCQgGgCgGgBQgEABgEACQgDACAAAFQgBAEADACIAIAEIAJAEQAIACAEAEQAEAEAAAIQAAAGgDAFQgEAEgFADQgHACgFAAQgHAAgGgCg");
	this.shape_328.setTransform(97.1,340.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgMAgQgIgEgFgJQgEgHAAgMQAAgJAEgJQAEgIAHgEQAHgGAIAAQAJABAHAEQAGAEADAIQAEAIAAAKIAAACIgvAAQAAAJADAFQADAGAGADQAFACAFAAQAGAAAFgCQAEgBAFgEIAAALQgEADgGACQgFABgGAAQgJABgHgFgAASgGQAAgFgCgFQgCgEgEgCQgEgDgFgBQgGAAgEAGQgFAEgDAKIAjAAIAAAAg");
	this.shape_329.setTransform(90.6,340.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgIAgQgIgFgFgIQgEgIAAgLQAAgKAEgIQAFgJAIgEQAHgEAIgBIAKACQAFABAEAEIAAALQgEgDgEgCQgFgCgFAAQgGAAgEAEQgFACgDAHQgDAGAAAGQAAAHADAHQADAGAFADQAEADAGAAQAFAAAFgCQAEgBAEgFIAAANQgEADgFABIgKABQgIABgHgFg");
	this.shape_330.setTransform(84,340.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgJAAgKQAAgKAEgIQAEgIAHgEQAIgGAIAAQAJAAAIAGQAHAEAEAIQAEAIAAAKQAAAKgEAJQgEAIgHAFQgIAEgJAAQgIAAgIgEgAgJgVQgFADgDAGQgCAGAAAGQAAAHACAHQADAFAFAEQAEADAFAAQAGAAAEgDQAFgEADgFQACgHAAgHQAAgGgCgGQgDgGgFgDQgEgEgGAAQgFAAgEAEg");
	this.shape_331.setTransform(77.2,340.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgRAkIAAhFIAMAAIAAAJQADgFACgDQAFgDAGAAIAEABIADAAIAAANIgEgCIgEAAQgGAAgEADQgDAEgCAGIAAAug");
	this.shape_332.setTransform(71.6,340.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgfAxIAAhgIAMAAIAAAJQADgEAGgDQAFgDAFAAQAKAAAHAFQAHAFAEAIQAEAJAAAKQAAAKgEAGQgEAIgHAGQgHAFgKAAQgFAAgFgDQgGgDgDgEIAAAjgAgLgiQgFADgDAFIAAAbQADAGAFADQAFADAGAAQAFAAAEgEQAFgDADgGQACgEAAgHQAAgIgCgGQgDgGgFgDQgEgDgFAAQgGAAgFADg");
	this.shape_333.setTransform(65.2,341.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgNAiQgHgBgDgDIAAgOQAEAFAHADQAFADAHgBQAEABAEgDQAEgDABgFQgBgDgCgDQgDgCgEgCIgIgDQgIgDgGgCQgEgFAAgJQAAgFADgFQADgFAGgCQAGgCAFgBQAGABAFABQAGACAEADIAAAMQgFgEgEgCQgGgCgGgBQgEABgEACQgDACgBAFQABAEACACIAIAEIAJAEQAIACAEAEQAFAEgBAIQABAGgEAFQgEAEgFADQgHACgFAAQgHAAgGgCg");
	this.shape_334.setTransform(54.9,340.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgMAgQgIgEgFgJQgEgHAAgMQAAgJAEgJQAEgIAHgEQAHgGAIAAQAKABAGAEQAGAEADAIQAEAIAAAKIAAACIgvAAQAAAJAEAFQADAGAFADQAFACAFAAQAGAAAFgCQAEgBAFgEIAAALQgFADgFACQgGABgFAAQgJABgHgFgAASgGQAAgFgCgFQgCgEgEgCQgEgDgFgBQgGAAgEAGQgFAEgDAKIAjAAIAAAAg");
	this.shape_335.setTransform(48.4,340.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgQAvQgHgFgEgIQgEgJAAgKQAAgKAEgGQAEgJAHgFQAHgFAJAAQAGAAAFADQAGADACAEIAAgpIANAAIAABmIgNAAIAAgJQgCAEgGADQgFADgGAAQgJAAgHgFgAgJgFQgEADgDAEQgCAGAAAHQAAAIACAGQADAGAEADQAFADAFAAQAGAAAFgDQAFgDACgFIAAgdQgCgEgFgDQgFgDgGAAQgFAAgFAEg");
	this.shape_336.setTransform(40.8,338.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgNAiQgHgBgDgDIAAgOQAEAFAHADQAFADAHgBQAEABAEgDQAEgDABgFQgBgDgCgDQgDgCgEgCIgIgDQgJgDgFgCQgEgFAAgJQAAgFADgFQAEgFAFgCQAGgCAFgBQAGABAFABQAGACAEADIAAAMQgEgEgFgCQgGgCgGgBQgEABgEACQgDACAAAFQgBAEADACIAIAEIAJAEQAIACAEAEQAEAEAAAIQAAAGgDAFQgEAEgFADQgHACgFAAQgHAAgGgCg");
	this.shape_337.setTransform(30.9,340.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgMAwQgIgFgFgIQgEgIAAgLQAAgLAEgHQAEgIAHgFQAHgFAIAAQAJAAAHAFQAGAEADAIQAEAGAAAKIAAAEIgvAAQAAAJADAFQADAFAGADQAFADAFAAQAGAAAFgCQAEgBAFgEIAAALQgEADgGACQgFABgGAAQgJAAgHgEgAASAIQAAgFgCgDQgCgEgEgDQgEgCgFgBQgGAAgEAFQgFAFgDAIIAjAAIAAAAgAgDgeIALgVIAMAAIgOAVg");
	this.shape_338.setTransform(24.4,338.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgFAtIAAg7IgPAAIAAgKIAPAAIAAgTIAKAAIAAATIAQAAIAAAKIgQAAIAAA7g");
	this.shape_339.setTransform(18.7,339.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgJAAgKQAAgKAEgIQAEgIAHgEQAIgGAIAAQAJAAAIAGQAHAEAEAIQAEAIAAAKQAAAKgEAJQgEAIgHAFQgIAEgJAAQgIAAgIgEgAgJgVQgFADgDAGQgCAGAAAGQAAAHACAHQADAFAFAEQAEADAFAAQAGAAAEgDQAFgEADgFQACgHAAgHQAAgGgCgGQgDgGgFgDQgEgEgGAAQgFAAgEAEg");
	this.shape_340.setTransform(12.7,340.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgQAvQgHgFgEgIQgEgJAAgKQAAgKAEgGQAEgJAHgFQAHgFAJAAQAGAAAFADQAGADACAEIAAgpIANAAIAABmIgNAAIAAgJQgCAEgGADQgFADgGAAQgJAAgHgFgAgJgFQgEADgDAEQgCAGAAAHQAAAIACAGQADAGAEADQAFADAFAAQAGAAAFgDQAFgDACgFIAAgdQgCgEgFgDQgFgDgGAAQgFAAgFAEg");
	this.shape_341.setTransform(4.9,338.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgJAxIASgkIgFACIgEABQgJAAgHgEQgIgEgEgIQgEgFAAgKQAAgKAEgHQAFgIAHgEQAIgEAIAAQAJAAAHAEQAIAEAEAIQAEAHABAKQAAAGgCAGQgCAFgFAIIgWAngAgKgjQgFADgDAFQgCAGAAAGQAAAGACAFQADAEAFADQAFADAFAAQAGAAAFgDQAEgDADgEQADgFAAgGQAAgGgDgGQgDgFgEgDQgFgCgGgBQgFABgFACg");
	this.shape_342.setTransform(166.3,324.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AARAkIAAgrQAAgIgFgEQgDgFgIAAQgFAAgEAEQgFAEgDAGIAAAuIgLAAIAAhFIALAAIAAAJQAEgFAFgDQAGgDAEAAQANAAAHAHQAFAHAAAMIAAAtg");
	this.shape_343.setTransform(158.9,326.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgMAgQgJgEgDgJQgFgIAAgLQAAgJAEgIQAEgJAHgFQAHgEAIAAQAJAAAHAEQAGAEADAIQAEAIAAALIAAABIgvAAQAAAJAEAFQADAFAFAEQAFACAFAAQAGAAAEgBQAFgCAFgEIAAALQgFADgFACQgGACgFgBQgJAAgHgEgAASgGQAAgFgCgFQgCgEgDgDQgEgCgGgBQgFAAgGAGQgEAEgDAKIAjAAIAAAAg");
	this.shape_344.setTransform(151.6,326.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgRAsQgKgHgGgLQgGgLAAgPQAAgOAGgMQAHgLAKgGQALgGAMAAQAIAAAHACQAIACAFAEIAAAOQgGgFgHgDQgHgDgIAAQgJAAgIAFQgHAFgFAJQgEAIAAALQAAALAEAJQAEAJAIAFQAHAFAIAAQAHAAAGgCQAFgCAFgDIAAgYIgWAAIAAgIIAiAAIAAAkQgIAHgJAEQgJADgJAAQgMAAgKgGg");
	this.shape_345.setTransform(143.3,324.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgFAsIAAg6IgPAAIAAgKIAPAAIAAgUIAKAAIAAAUIAQAAIAAAKIgQAAIAAA6g");
	this.shape_346.setTransform(133.1,325.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AARAkIAAgrQgBgIgEgEQgDgFgIAAQgEAAgFAEQgFAEgCAGIAAAuIgNAAIAAhFIANAAIAAAJQADgFAGgDQAFgDAEAAQANAAAGAHQAHAHAAAMIAAAtg");
	this.shape_347.setTransform(127.1,326.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgOAiQgGgDgDgFQgEgGAAgGQAAgHAEgFQADgDAHgDQAGgCAHgBQAEABAFABIAHAEIAAgJQAAgHgFgDQgEgFgHAAQgFABgFABIgJAFIAAgLIAJgFQAGgCAFABQANAAAHAGQAHAHAAALIAAAuIgMAAIAAgFIgHAEQgFACgEAAQgIAAgGgCgAgHACQgEACgCADQgCACAAAFQAAAEACACQACAEAEABQAEABADAAQAFAAAFgCQAEgDACgEIAAgHQgCgEgEgDQgFgCgFAAIgHABg");
	this.shape_348.setTransform(119.6,326.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgFAxIAAhEIAKAAIAABEgAgEgjQgCgCAAgEQAAgEACgBQACgDACAAQADAAACADQACABAAAEQAAAEgCACQgCABgDAAQgCAAgCgBg");
	this.shape_349.setTransform(114.9,324.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgeAwIAAhfIANAAIAABUIAwAAIAAALg");
	this.shape_350.setTransform(109.8,324.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgKAEgIQAEgIAHgFQAIgEAIAAQAJAAAIAEQAHAFAEAIQAEAIAAAKQAAALgEAIQgEAIgHAFQgIAEgJAAQgIAAgIgEgAgJgWQgFAEgDAFQgCAGAAAHQAAAIACAGQADAFAFAEQAEADAFAAQAGAAAEgDQAFgEADgFQACgGAAgIQAAgHgCgGQgDgFgFgEQgEgDgGAAQgFAAgEADg");
	this.shape_351.setTransform(101.9,326.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgRAkIAAhFIAMAAIAAAJQADgFACgDQAFgDAGAAIAEABIADAAIAAANIgEgCIgEAAQgGAAgEADQgDAEgCAGIAAAug");
	this.shape_352.setTransform(96.3,326.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AghAwIAAhfIAiAAQAPAAAJAGQAJAIAAAPQAAAOgJAFQgJAIgPAAIgVAAIAAAngAgUAAIAVAAQAKAAAFgFQAGgFAAgIQAAgJgGgFQgFgEgKAAIgVAAg");
	this.shape_353.setTransform(89.8,324.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgeAwIAAhfIA9AAIAAALIgwAAIAAAeIArAAIAAAJIgrAAIAAAiIAwAAIAAALg");
	this.shape_354.setTransform(78.3,324.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AghAwIAAhfIAiAAQAPAAAJAGQAJAIAAAPQAAAOgJAFQgJAIgPAAIgVAAIAAAngAgUAAIAVAAQAKAAAFgFQAGgFAAgIQAAgJgGgFQgFgEgKAAIgVAAg");
	this.shape_355.setTransform(70.3,324.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AAcAwIAAgtIg2AAIAAAtIgNAAIAAhfIANAAIAAApIA2AAIAAgpIAMAAIAABfg");
	this.shape_356.setTransform(60.8,324.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgOAjQgFgCgFgEIAAgMQAGAEAFADQAHACAGAAQAEAAAEgCQAFgDgBgEQAAgEgCgDQgDgDgFgBIgIgEQgHgCgFgCQgFgFgBgJQABgFADgFQADgEAGgDQAGgDAFABQAGgBAFACQAGACAEADIAAAMQgEgDgGgDQgFgCgGgBQgEABgEACQgDACAAAFQAAAFACACIAIADIAJAEQAIACAEADQAEAGABAHQgBAGgDAFQgDAEgHADQgFADgGgBQgHAAgHgBg");
	this.shape_357.setTransform(49.5,326.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgRAkIAAhFIAMAAIAAAJQADgFACgDQAFgDAGAAIAEABIADAAIAAANIgEgCIgEAAQgGAAgEADQgDAEgCAGIAAAug");
	this.shape_358.setTransform(44.4,326.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgVAdQgGgHAAgMIAAgtIAMAAIAAArQAAAIADAEQAEAFAIAAQAFAAAEgEQAFgEACgGIAAguIAMAAIAABFIgMAAIAAgJQgDAFgFADQgGADgFAAQgMAAgGgHg");
	this.shape_359.setTransform(37.9,326.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgNAgQgHgEgEgJQgFgIAAgLQAAgJAEgIQAEgJAHgFQAHgEAIAAQAKAAAGAEQAGAEAEAIQADAIAAALIAAABIgvAAQAAAJADAFQADAFAGAEQAFACAFAAQAFAAAFgBQAFgCAFgEIAAALQgFADgFACQgGACgGgBQgIAAgIgEgAASgGQAAgFgCgFQgCgEgDgDQgEgCgGgBQgFAAgGAGQgEAEgCAKIAiAAIAAAAg");
	this.shape_360.setTransform(30.8,326.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgFAjIgbhFIANAAIATA2IAUg2IANAAIgbBFg");
	this.shape_361.setTransform(24,326.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgRAkIAAhFIAMAAIAAAJQADgFACgDQAFgDAGAAIAEABIADAAIAAANIgEgCIgEAAQgGAAgEADQgDAEgCAGIAAAug");
	this.shape_362.setTransform(18.3,326.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgNAgQgIgEgEgJQgEgIAAgLQAAgJAEgIQAEgJAHgFQAHgEAIAAQAJAAAHAEQAHAEACAIQAEAIAAALIAAABIgvAAQAAAJADAFQAEAFAFAEQAFACAFAAQAGAAAFgBQAEgCAFgEIAAALQgEADgGACQgFACgHgBQgIAAgIgEgAASgGQAAgFgCgFQgCgEgEgDQgEgCgFgBQgGAAgEAGQgGAEgCAKIAjAAIAAAAg");
	this.shape_363.setTransform(12.2,326.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgSAvQgIgCgFgEIAAgOQAIAGAHADQAIADAIAAQAIAAAFgEQAHgEAAgHQAAgHgFgDQgDgEgIgDIgNgGIgLgDQgEgDgEgFQgDgGAAgIQAAgIAEgFQAFgHAHgCQAHgDAIAAQAHAAAHACQAHACAGAEIAAANQgGgEgHgDQgGgDgIAAQgIAAgFADQgFAEgBAHQAAAHAFADQADADAHADIAOAGQALACAGAHQAEAGAAAKQAAAJgEAFQgEAGgIAEQgHADgIAAQgJAAgJgDg");
	this.shape_364.setTransform(5,324.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-8.3,226.9,385.8);


(lib.Layer3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgYHAvpMAAAhfRMAwPAAAMAAABfRg");
	this.shape.setTransform(152.5,302);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-3,309,610);


(lib.Rectangle2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqRCdIAAk5IUjAAIAAE5g");
	mask.setTransform(65.8,15.2);

	// Layer 1
	this.instance = new lib.Rectangle2();
	this.instance.setTransform(-18,-316);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,131.7,31.5);


(lib.clickBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Product = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Background copy 2
	this.instance = new lib.Backgroundcopy2();
	this.instance.setTransform(92,24.5,1,1,0,0,0,92,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(296.2,65,215.2,272.1);


(lib._3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.instance = new lib.Text();
	this.instance.setTransform(78.2,191.7,1,1,0,0,0,78.2,97.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Product
	this.instance_1 = new lib.Product();
	this.instance_1.setTransform(66.6,306.2,0.611,0.611,0,0,0,296,201.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,86.3,305,357.7);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// xeon_k_rgb_60
	this.instance = new lib.xeon_k_rgb_60_1();
	this.instance.setTransform(31.5,531.5,1,1,0,0,0,31.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hpe_pri_grn_pos_rgb
	this.instance_1 = new lib.hpe_pri_grn_pos_rgb_1();
	this.instance_1.setTransform(60,25,1,1,0,0,0,60,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,563);


(lib._2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.instance = new lib.Text_1();
	this.instance.setTransform(80.7,169.7,1,1,0,0,0,80.7,84.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Product
	this.instance_1 = new lib.Product();
	this.instance_1.setTransform(143.2,280.9,0.614,0.614,0,0,0,419.2,174.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,77.3,251,303.6);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Contactez-nous
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAfQgGgBgDgDIAAgMQAEAEAGADQAFACAGAAQADAAAEgCQAEgCAAgFQAAgEgCgCQgDgCgEgCIgHgDQgHgCgFgCQgEgEAAgIQAAgGADgEQADgEAFgCQAFgCAFAAQAFAAAFABQAFACAEADIAAALQgEgEgFgCQgEgCgGAAQgDAAgEACQgDACgBAFQAAADADACQACACAFACIAIADQAHACAEADQAEAEAAAHQAAAGgDAFQgDAEgGACQgFACgFAAQgGAAgGgCg");
	this.shape.setTransform(81.9,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAaQgGgGABgLIAAgoIAKAAIAAAmQABAHADAEQADAEAHAAQAEAAAFgDQADgEACgEIAAgqIAMAAIAAA+IgMAAIAAgIQgCAEgFADQgFACgEAAQgLAAgGgGg");
	this.shape_1.setTransform(75.8,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAvIAAhdIAJAAIAABdg");
	this.shape_2.setTransform(71,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAtIAAhXIALAAIAAAHQADgDAFgDQAEgCAFgBQAJABAHAEQAGAFADAHQAEAIAAAJQAAAJgEAGQgDAHgGAFQgHAEgJABQgFgBgEgCQgFgDgDgDIAAAggAgKgfQgEADgDAFIAAAYQADAFAEADQAFADAFAAQAEAAAFgDQAEgDACgGQADgDAAgHQAAgHgDgFQgCgGgEgDQgFgDgEAAQgFAAgFADg");
	this.shape_3.setTransform(66.4,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAhIAAg/IALAAIAAAIQACgEACgCQAEgEAGAAIAEABIACAAIAAAMIgDgCIgEAAQgFAAgEAEQgCADgCAFIAAAqg");
	this.shape_4.setTransform(57.8,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQACAAACACQACACABADQgBADgCACQgCACgCAAQgCAAgCgCg");
	this.shape_5.setTransform(54,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAdQgHgEgDgIQgEgIAAgJQAAgIAEgIQADgIAHgEQAHgEAHAAQAIAAAHAEQAHAEADAIQAEAIAAAIQAAAJgEAIQgDAIgHAEQgHAEgIAAQgHAAgHgEgAgIgTQgFADgCAFQgCAFAAAGQAAAHACAFQACAFAFADQAEADAEABQAFgBAEgDQAFgDACgFQACgFAAgHQAAgGgCgFQgCgFgFgDQgEgDgFgBQgEABgEADg");
	this.shape_6.setTransform(49.3,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAgIgZg/IAMAAIARAxIASgxIAMAAIgZA/g");
	this.shape_7.setTransform(43,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAfQgGgDgDgFQgDgEAAgGQAAgGADgFQADgCAGgDQAFgCAHAAQADAAAFABQAEABACACIAAgIQAAgGgEgEQgEgDgGAAQgEAAgFABQgEACgEADIAAgLQADgCAFgBQAGgCAEAAQALAAAHAGQAGAGAAAKIAAAqIgLAAIAAgFQgCACgEACQgFACgDAAQgHAAgFgCgAgGADIgGADQgCADAAAEQAAADACADQACACAEACIAGABQAFAAAEgCQAEgDABgDIAAgGQgBgFgEgBQgEgCgFAAIgGABg");
	this.shape_8.setTransform(36.6,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMAfQgGgBgDgDIAAgMQAEAEAGADQAFACAGAAQADAAAEgCQAEgCAAgFQAAgEgCgCQgDgCgEgCIgHgDQgHgCgFgCQgEgEAAgIQAAgGADgEQADgEAFgCQAFgCAFAAQAFAAAFABQAFACAEADIAAALQgEgEgFgCQgEgCgGAAQgDAAgEACQgDACgBAFQAAADADACQACACAFACIAIADQAHACAEADQAEAEAAAHQAAAGgDAFQgDAEgGACQgFACgFAAQgGAAgGgCg");
	this.shape_9.setTransform(31,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPAhIAAgnQAAgHgDgEQgEgFgHAAQgEAAgFAEQgEADgCAGIAAAqIgLAAIAAg/IALAAIAAAIQADgEAFgCQAFgDAEgBQALABAGAGQAGAHAAAKIAAApg");
	this.shape_10.setTransform(22,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIA3AAIAAAKIgsAAIAAAcIAnAAIAAAJIgnAAIAAAeIAsAAIAAAKg");
	this.shape_11.setTransform(15.2,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Rectangle 2
	this.instance = new lib.Rectangle2_1();
	this.instance.setTransform(0,15.2,0.728,1,0,0,0,-0.1,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-316,218.5,600);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.instance = new lib.Text_2();
	this.instance.setTransform(128.5,305.3,1,1,0,0,0,111.5,181.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Layer3();
	this.instance_1.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-3,309,610);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var clickBtn = this.clickBtn;
		
		var f1 = this.f1;
		//var bar1 = f1.bar1
		//var txt1 = f1.txt1;
		
		var f2 = this.f2;
		//var bar2 = f1.bar2
		//var txt2 = f1.txt2;
		
		var f3 = this.f3
		//var bar3 = f1.bar3
		//var txt3 = f1.txt3;
		
		//var lastframe = this.lastframe;
		//var txt4 = this.txt4;
		//var logohp = this.logohp;
		//var logohpalt = this.logohpalt;
		var cta = this.cta;
		
		//var detailsBtn = this.detailsBtn;
		//var detailsMc = this.detailsMc;
		
		
		var itemsOnStage = [f1, f2, f3, cta, clickBtn];
		
		
		init();
		
		 function init(){
				 
			for (var i = 0; i < itemsOnStage.length; i++) {
				itemsOnStage[i].alpha = 0;
			}
			
			addListeners();
			startAnimation();
		}
		
		function addListeners() {
		//	detailsBtn.hit.addEventListener("click", onDetailsClick);
		//	detailsMc.hit.addEventListener("click", onDetailsClick);
		}
		
		function onDetailsClick() {
			if (detailsMc.y == -600) {
				TweenLite.to(detailsMc, .3, {y:0});
			} else {
				TweenLite.to(detailsMc, .3, {y:-600});
			}
		}
		
		function startAnimation() {
			step1();
		}
		
		
		function step1() {
			//f1.alpha = 1;
			//logohpalt.alpha = 1;
			TweenLite.to(f1, 0.5, {alpha:1, ease:Quad.easeOut, delay: .25});
			//TweenLite.to(f1.txt1, 0.5, {alpha:1, ease:Quad.easeOut, delay: 1.5});
			TweenLite.delayedCall(4.5, step2);
		
		}
		
		function step2() {
			TweenLite.to(f2, 1, {alpha:1, ease:Quad.easeIn, delay:.25});
			TweenLite.to(f1, 1, {alpha:0, delay:.25});
			//TweenLite.to(f2.bar2, 0.5, {alpha:1, ease:Quad.easeOut, delay: 1});
			//TweenLite.to(f2.txt2, 0.5, {alpha:1, ease:Quad.easeOut, delay: 1.5});
			TweenLite.delayedCall(4.5, step3);
		
		}
		
		function step3() {
			TweenLite.to(f3, 1, {alpha:1, ease:Quad.easeIn, delay:.25});
			TweenLite.to(f2, 1, {alpha:0, delay:.25});
			TweenLite.to(cta, 0.5, {alpha:1, ease:Quad.easeOut, delay: 1});
			//TweenLite.to(f2.txt2, 1, {alpha:0, delay:.25});
			//TweenLite.to(f3.bar3, 0.5, {alpha:1, ease:Quad.easeOut, delay: 1});
			//TweenLite.to(f3.txt3, 0.5, {alpha:1, ease:Quad.easeOut, delay: 1.5});
			//TweenLite.delayedCall(4.5, step4);
		
		}
		
		function step4() {
			TweenLite.to(f3.bar3, 1, {alpha:0, delay:.25});
			TweenLite.to(f3.txt3, 1, {alpha:0, delay:.25});
			//TweenLite.to(logohp, 1, {alpha:0, delay:.25});
			TweenLite.to(lastframe, 0.5, {alpha:1, ease:Quad.easeIn, delay: .5});
			//TweenLite.to(logohpalt, 0.5, {alpha:1, ease:Quad.easeIn, delay: .5});
			TweenLite.to(txt4, 0.5, {alpha:1, ease:Quad.easeOut, delay: 1});
			TweenLite.to(cta, 0.5, {alpha:1, ease:Quad.easeOut, delay: 1});
			TweenLite.to(detailsBtn, 0.5, {alpha:1, ease:Quad.easeOut, delay: 1});
			TweenLite.to(txt4, 0.5, {alpha:1, ease:Quad.easeOut, delay: 1});
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logos
	this.instance = new lib.Logo();
	this.instance.setTransform(77,299.5,1,1,0,0,0,60,281.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// cta
	this.cta = new lib.CTA();
	this.cta.setTransform(149,285,1,1,0,0,0,132,-16);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// clickBtn
	this.clickBtn = new lib.clickBtn();
	this.clickBtn.setTransform(683.5,1370.4,1,2.4,0,0,0,683.5,571);
	new cjs.ButtonHelper(this.clickBtn, 0, 1, 2, false, new lib.clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickBtn).wait(1));

	// f3
	this.f3 = new lib._1();
	this.f3.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.f3).wait(1));

	// f2
	this.f2 = new lib._3();
	this.f2.setTransform(135,297.5,1,1,0,0,0,116,281.5);

	this.timeline.addTween(cjs.Tween.get(this.f2).wait(1));

	// f1
	this.f1 = new lib._2();
	this.f1.setTransform(133.9,306.5,1,1,0,0,0,116,281.5);

	this.timeline.addTween(cjs.Tween.get(this.f1).wait(1));

	// Layer 1
	this.instance_1 = new lib.bg1();
	this.instance_1.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148,285,324,622);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;