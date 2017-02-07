(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 329,
	height: 465,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CustomDesign_atlas_.png", id:"CustomDesign_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"CustomDesign_atlas_", frames: [[0,0,329,465],[0,622,212,164],[0,467,252,153],[0,788,191,79]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["CustomDesign_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Car = function() {
	this.spriteSheet = ss["CustomDesign_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.light = function() {
	this.spriteSheet = ss["CustomDesign_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.txt1 = function() {
	this.spriteSheet = ss["CustomDesign_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(1,1,1).p("AimCWIAAkrIFNAAIAAErg");
	this.shape.setTransform(16.8,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AimCVIAAkqIFNAAIAAEqg");
	this.shape_1.setTransform(16.8,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,35.5,32);


(lib.Syeembol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDBEQgdgcAAgoQAAgnAdgcQAcgdAnAAQAoAAAcAdQAdAcAAAnQAAAogdAcQgcAdgoAAQgnAAgcgdg");
	this.shape.setTransform(9.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,19.5);


(lib.Syeembol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbA1Ig2hSIAABSIgOAAIAAhpIAPAAIA2BSIAAhSIAOAAIAABpg");
	this.shape.setTransform(698.1,179.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAwQgMgIgGgMQgGgNAAgOQAAgZAOgPQAPgPAVAAQAOAAAMAHQAMAHAGANQAHANAAAOQAAAQgHANQgGANgNAGQgMAHgNAAQgOAAgMgHgAgYgfQgLAKAAAWQAAAUAKALQALALAOAAQAPAAALgLQAKgMAAgUQAAgLgEgKQgFgKgIgFQgJgGgKAAQgOAAgKALg");
	this.shape_1.setTransform(686,179.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA1IAAhpIANAAIAABpg");
	this.shape_2.setTransform(677.1,179.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFA1IAAhcIgkAAIAAgNIBTAAIAAANIgjAAIAABcg");
	this.shape_3.setTransform(669.4,179.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA1IAAhpIANAAIAABpg");
	this.shape_4.setTransform(661.8,179.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA1IAAhcIgjAAIAAgNIBTAAIAAANIgjAAIAABcg");
	this.shape_5.setTransform(654.1,179.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA1IAAhpIBLAAIAAANIg+AAIAAAgIA6AAIAAALIg6AAIAAAlIBBAAIAAAMg");
	this.shape_6.setTransform(643.7,179.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoA1IAAhpIAoAAIAPABQAIABAGAEQAFAEAEAGQACAHAAAIQAAAOgIAHQgJAKgWAAIgaAAIAAArgAgZgBIAaAAQAOAAAFgFQAGgFAAgKQAAgGgEgFQgDgFgGgBIgNgBIgZAAg");
	this.shape_7.setTransform(632.8,179.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlA1IAAhYIgfBYIgLAAIgfhZIAABZIgOAAIAAhpIAWAAIAZBKIADAQIAGgRIAahJIATAAIAABpg");
	this.shape_8.setTransform(620.3,179.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAwQgMgIgGgMQgGgNAAgOQAAgZAOgPQAPgPAVAAQAOAAAMAHQAMAHAGANQAHANAAAOQAAAQgHANQgGANgNAGQgMAHgNAAQgOAAgMgHgAgYgfQgLAKAAAWQAAAUAKALQALALAOAAQAPAAALgLQAKgMAAgUQAAgLgEgKQgFgKgIgFQgJgGgKAAQgOAAgKALg");
	this.shape_9.setTransform(607.3,179.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAwQgLgHgFgOQgGgNAAgOQAAgQAHgNQAGgMAMgGQAMgHAMAAQAQAAALAIQAKAIAFAPIgOADQgDgMgIgFQgHgFgKAAQgLAAgJAGQgHAGgEAKQgDAKAAAKQAAAMAEALQADAKAJAFQAIAEAIAAQAMAAAJgGQAIgHADgOIAOAEQgEASgMAIQgMAKgQAAQgQAAgLgHg");
	this.shape_10.setTransform(595.1,179.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmA1IAAhpIBLAAIAAANIg+AAIAAAgIA6AAIAAALIg6AAIAAAlIBBAAIAAAMg");
	this.shape_11.setTransform(740.9,161);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbA1IAAgyIg2AAIAAAyIgNAAIAAhpIANAAIAAAsIA2AAIAAgsIAPAAIAABpg");
	this.shape_12.setTransform(729.3,161);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFA1IAAhcIgkAAIAAgNIBTAAIAAANIgkAAIAABcg");
	this.shape_13.setTransform(718.4,161);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFA1IAAhcIgkAAIAAgNIBTAAIAAANIgkAAIAABcg");
	this.shape_14.setTransform(703.7,161);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAyQgKgDgFgJQgGgJAAgKIANgCQABAJAEAFQADAEAIAEQAHADAHAAQAIAAAGgCQAHgCADgFQADgEAAgFQAAgFgDgEQgDgEgHgDIgRgEQgPgEgGgBQgHgFgEgFQgEgGAAgHQAAgIAFgIQAEgHAJgDQAJgEAKAAQALAAAJAEQAJAEAFAHQAFAIAAAJIgNABQgBgKgHgGQgGgEgMAAQgLgBgGAFQgGAFAAAGQAAAGAEAEQAEADAPAEQASAFAGACQAKADAEAGQAEAHAAAIQAAAJgEAIQgFAIgKADQgJAFgLAAQgNAAgKgFg");
	this.shape_15.setTransform(693,161.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAbA1Ig2hSIAABSIgOAAIAAhpIAPAAIA2BSIAAhSIAOAAIAABpg");
	this.shape_16.setTransform(681.6,161);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGA1IAAhpIANAAIAABpg");
	this.shape_17.setTransform(673.2,161);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAAQAJIgLgcIgFgWQgCAKgEALIgMAdIAiAAg");
	this.shape_18.setTransform(665.1,161);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAwQgNgGgHgNQgGgNAAgQQAAgOAGgOQAHgNAMgHQAMgGAOAAQAMAAAKAEQAJAEAFAGQAGAHACALIgMADQgDgIgDgEQgEgFgHgDQgGgDgIAAQgIAAgHADQgHADgFAFQgEAFgDAFQgEALAAAKQAAANAFAKQAFAJAKAGQAJAEAJAAQAJAAAJgDQAJgEAEgEIAAgUIgfAAIAAgLIAtAAIAAAmQgKAJgMADQgLAFgLAAQgOAAgNgHg");
	this.shape_19.setTransform(653.2,161.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAAQAJIgLgcIgFgWQgCAKgEALIgMAdIAiAAg");
	this.shape_20.setTransform(641.5,161);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnA1IAAhpIAnAAIAPABQAIABAGAEQAFAEAEAGQADAHAAAIQAAAOgJAHQgJAKgXAAIgZAAIAAArgAgZgBIAZAAQAPAAAFgFQAGgFAAgKQAAgGgDgFQgEgFgFgBIgOgBIgZAAg");
	this.shape_21.setTransform(626.7,161);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAxQgKgFgDgKQgFgKAAgRIAAg8IAPAAIAAA8QgBAOADAGQACAHAHAEQAGADAJAAQAOAAAHgHQAGgHAAgUIAAg8IAPAAIAAA8QAAAQgEAKQgEAJgJAGQgJAGgQAAQgOAAgJgFg");
	this.shape_22.setTransform(615.1,161.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAcA1IAAgyIg3AAIAAAyIgNAAIAAhpIANAAIAAAsIA3AAIAAgsIANAAIAABpg");
	this.shape_23.setTransform(598.1,161);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgYAwQgLgHgFgNQgGgOAAgOQAAgQAGgNQAHgMALgHQANgGAMAAQAQAAALAIQALAIAEAPIgOADQgEgLgHgGQgHgFgKAAQgLAAgIAGQgJAGgDAKQgDAKAAAKQAAAMADAKQAFAKAIAGQAJAEAIAAQALAAAIgGQAJgHACgOIAPAEQgFARgLAKQgMAJgQAAQgQAAgLgHg");
	this.shape_24.setTransform(586.4,161.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGA1IAAhcIgjAAIAAgNIBTAAIAAANIgjAAIAABcg");
	this.shape_25.setTransform(575.4,161);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAAQAJIgLgcIgFgWQgCAKgEALIgMAdIAiAAg");
	this.shape_26.setTransform(565.9,161);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAlA1IAAhYIgfBYIgLAAIgfhZIAABZIgOAAIAAhpIAWAAIAZBKIADAQIAGgRIAahJIATAAIAABpg");
	this.shape_27.setTransform(553.7,161);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdAuQgLgKgCgSIAVgCQACALAGAEQAGAFAHABQALAAAFgFQAFgFABgFQAAgEgDgDQgCgCgFgCIgQgFQgSgFgGgEQgKgJAAgMQAAgIAEgIQAFgHAJgDQAJgEALAAQATAAALAIQAJAKABAOIgWABQgBgIgEgDQgFgFgIAAQgJAAgFAFQgDACgBAFQABADADADQAEADAOAEQAPAEAIAEQAHAEAFAEQAEAIAAAJQAAAKgFAIQgFAIgJAEQgKAEgOAAQgSAAgLgJg");
	this.shape_28.setTransform(754,142.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgnA1IAAhpIBNAAIAAASIg4AAIAAAYIA0AAIAAAQIg0AAIAAAdIA6AAIAAASg");
	this.shape_29.setTransform(743.2,142.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgkA1IAAhpIAVAAIAABXIA0AAIAAASg");
	this.shape_30.setTransform(732.8,142.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfAoQgOgOAAgZQAAgZAOgQQAOgOAUAAQAUAAAMAMQAHAGAEANIgVAFQgCgIgGgFQgGgFgJAAQgKAAgHAJQgIAJAAASQAAATAIAJQAHAIAKABQAIAAAGgGQAHgGACgMIAVAHQgEASgMAJQgLAIgRAAQgUAAgNgPg");
	this.shape_31.setTransform(721.5,142.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJA1IAAhpIATAAIAABpg");
	this.shape_32.setTransform(713.1,142.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAVA1IAAgvIgpAAIAAAvIgVAAIAAhpIAVAAIAAAqIApAAIAAgqIAVAAIAABpg");
	this.shape_33.setTransform(704.6,142.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgnA1IAAhpIBNAAIAAASIg4AAIAAAYIA0AAIAAAQIg0AAIAAAdIA6AAIAAASg");
	this.shape_34.setTransform(693.3,142.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKA1IgmhpIAXAAIAZBNIAahNIAXAAIgmBpg");
	this.shape_35.setTransform(682.2,142.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdAuQgLgKgCgSIAVgCQACALAGAEQAFAFAJABQAKAAAGgFQAEgFAAgFQAAgEgCgDQgCgCgGgCIgPgFQgSgFgGgEQgKgJAAgMQAAgIAEgIQAFgHAJgDQAJgEALAAQATAAAKAIQALAKAAAOIgWABQgBgIgFgDQgEgFgIAAQgIAAgGAFQgEACABAFQgBADAEADQAEADANAEQAQAEAIAEQAHAEAFAEQAEAIAAAJQAAAKgFAIQgFAIgJAEQgKAEgOAAQgSAAgLgJg");
	this.shape_36.setTransform(665.9,142.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAzQgIgEgEgGQgFgFgBgHQgCgJAAgSIAAg3IAVAAIAAA4QAAAOABAEQABAHAGAEQAFAEAHAAQAJAAAFgEQAFgEABgFIAAgTIAAg5IAWAAIAAA2QAAAUgCAIQgBAIgFAFQgFAGgIADQgIADgMAAQgOAAgIgDg");
	this.shape_37.setTransform(654.6,142.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAXA1IgXglIgXAlIgaAAIAlg2IghgzIAZAAIAUAiIAVgiIAZAAIgiA0IAlA1g");
	this.shape_38.setTransform(643.2,142.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgnA1IAAhpIBNAAIAAASIg4AAIAAAYIA0AAIAAAQIg0AAIAAAdIA6AAIAAASg");
	this.shape_39.setTransform(632.4,142.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgkA1IAAhpIAVAAIAABXIA0AAIAAASg");
	this.shape_40.setTransform(622,142.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAZA1IgWhQIgDgMIgCAMIgWBQIgPAAIgchpIAOAAIAQBEIAFAWIAEgUIAVhGIAPAAIAPA0QAGAUADASIAGgXIAQhDIAOAAIgdBpg");
	this.shape_41.setTransform(603.9,142.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgaAwQgMgIgGgMQgGgNAAgOQAAgZAOgPQAPgPAVAAQAOAAAMAHQAMAHAGANQAHANAAAOQAAAQgHANQgGANgNAGQgMAHgNAAQgOAAgMgHgAgYgfQgLAKAAAWQAAAUAKALQALALAOAAQAPAAALgLQAKgMAAgUQAAgLgEgKQgFgKgIgFQgJgGgKAAQgOAAgKALg");
	this.shape_42.setTransform(590,142.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAbA1IAAgyIg1AAIAAAyIgPAAIAAhpIAPAAIAAAsIA1AAIAAgsIAPAAIAABpg");
	this.shape_43.setTransform(577.7,142.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgmA1IAAhpIBLAAIAAANIg+AAIAAAgIA6AAIAAALIg6AAIAAAlIBBAAIAAAMg");
	this.shape_44.setTransform(561.4,142.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgmA1IAAhpIBLAAIAAANIg+AAIAAAgIA6AAIAAALIg6AAIAAAlIBAAAIAAAMg");
	this.shape_45.setTransform(550.4,142.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAyQgKgDgFgJQgGgJAAgKIANgBQABAIAEAEQADAFAIAEQAHADAHAAQAIAAAGgCQAHgDADgEQADgEAAgFQAAgFgDgEQgDgDgHgDIgRgGQgPgDgGgBQgHgFgEgFQgEgGAAgHQAAgJAFgHQAEgHAJgDQAJgEAKAAQALAAAJAEQAJADAFAIQAFAIAAAJIgNABQgBgKgHgGQgGgEgMAAQgLgBgGAFQgGAFAAAHQAAAFAEAEQAEADAPAEQASAFAGACQAKADAEAGQAEAHAAAIQAAAJgEAIQgFAIgKADQgJAFgLAAQgNAAgKgFg");
	this.shape_46.setTransform(539.1,142.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(532.1,132,230.1,58.4);


(lib.Syeembol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAjIAAhFIAxAAIAAAIIgoAAIAAAWIAmAAIAAAGIgmAAIAAAZIAqAAIAAAIg");
	this.shape.setTransform(25.2,224.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATAjIgKgPIgHgKIgCgEIgFgCIgEgBIgLAAIAAAgIgKAAIAAhFIAeAAQAJAAAFACQAFACADAEQADAFAAAGQAAAIgFAFQgFADgKACIAFADQAFAEADAGIANATgAgUgDIAUAAQAEAAAEgBQADgBADgDQACgDAAgEQAAgFgFgDQgDgDgIAAIgUAAg");
	this.shape_1.setTransform(18,224.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAgQgIgFgEgJQgEgIAAgJQAAgQAKgKQAJgKAOAAQAJAAAIAEQAIAFAEAJQAFAIAAAJQAAAKgFAJQgEAJgIAFQgIADgJAAQgJAAgIgEgAgQgVQgHAHAAAPQAAAMAHAIQAHAHAJAAQAKAAAHgHQAHgIAAgNQAAgHgDgHQgDgGgGgEQgGgDgGAAQgJAAgHAGg");
	this.shape_2.setTransform(9.7,224.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAZAjIAAg6IgVA6IgHAAIgVg7IAAA7IgJAAIAAhFIAPAAIAQAwIACALIAEgMIARgvIANAAIAABFg");
	this.shape_3.setTransform(1.2,224.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASAjIgkg2IAAA2IgJAAIAAhFIAKAAIAkA2IAAg2IAJAAIAABFg");
	this.shape_4.setTransform(-10.4,224.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATAjIgKgPIgGgKIgDgEIgEgCIgGgBIgKAAIAAAgIgKAAIAAhFIAeAAQAJAAAFACQAFACADAEQADAFAAAGQAAAIgFAFQgFADgKACIAGADQAEAEADAGIANATgAgUgDIATAAQAFAAAEgBQAEgBACgDQABgDAAgEQAAgFgDgDQgEgDgIAAIgUAAg");
	this.shape_5.setTransform(-17.7,224.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAjIgIgVIgcAAIgIAVIgKAAIAchFIAIAAIAdBFgAALAGIgHgSIgEgPQgBAHgCAHIgIATIAWAAg");
	this.shape_6.setTransform(-25.4,224.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAjIAAhFIAxAAIAAAIIgoAAIAAAWIAmAAIAAAGIgmAAIAAAZIAqAAIAAAIg");
	this.shape_7.setTransform(-32.5,224.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVAjIAAhFIAKAAIAAA9IAhAAIAAAIg");
	this.shape_8.setTransform(-39,224.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AoxBwIAAjeIRjAAIAADeg");
	this.shape_9.setTransform(-6.7,224.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,213.3,112.5,22.4);


(lib.Syeembol5e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-14,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-17,252,153);


(lib.Syeembol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Car();
	this.instance.parent = this;
	this.instance.setTransform(-60,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-50,212,164);


(lib.Syeembol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-70,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-80,191,79);


(lib.Syeembol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Syeembol11();
	this.instance.parent = this;
	this.instance.setTransform(9.8,9.8,1,1,0,0,0,9.8,9.8);
	this.instance.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance.cache(-2,-2,24,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,59,59);


(lib.Syeembol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Syeembol12();
	this.instance.parent = this;
	this.instance.setTransform(817.4,263.8,0.3,0.3,0,0,0,9.7,9.8);

	this.instance_1 = new lib.Syeembol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(827.9,234.8,0.3,0.3,0,0,0,9.7,9.8);

	this.instance_2 = new lib.Syeembol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(631.9,241.3,0.3,0.3,0,0,0,9.7,9.8);

	this.instance_3 = new lib.Syeembol12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(648.4,211.8,0.3,0.3,0,0,0,9.7,9.8);

	this.instance_4 = new lib.Syeembol12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(628.9,206.8,0.3,0.3,0,0,0,9.7,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(80));

	// Layer 5
	this.instance_5 = new lib.Syeembol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(793.4,299.8,0.5,0.5,0,0,0,9.7,9.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).wait(51));

	// Layer 4
	this.instance_6 = new lib.Syeembol12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(828.4,235.8,0.5,0.5,0,0,0,9.7,9.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).wait(61));

	// Layer 3
	this.instance_7 = new lib.Syeembol12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(759.4,263.8,0.5,0.5,0,0,0,9.7,9.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(70));

	// Layer 2
	this.instance_8 = new lib.Syeembol12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(733.7,273.8,0.5,0.5,0,0,0,9.7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// Layer 7
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(507,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(507,0,335,465);


(lib.lighte = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Syeembol5e();
	this.instance.parent = this;
	this.instance.setTransform(81.4,124.2,1,0.507,0,141.2,-38.8,122.7,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,22.1,244.9,218.4);


(lib.Syeembol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// Layer 6
	this.instance = new lib.Syeembol6();
	this.instance.parent = this;
	this.instance.setTransform(744.8,78.9,1.5,1.5,0,0,0,56.5,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},35).wait(1));

	// Layer 3
	this.instance_1 = new lib.lighte();
	this.instance_1.parent = this;
	this.instance_1.setTransform(623.4,283.5,0.887,0.899,0,-138.1,-135.1,67.7,135.3);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 3)];
	this.instance_1.cache(-51,20,249,222);

	this.instance_2 = new lib.lighte();
	this.instance_2.parent = this;
	this.instance_2.setTransform(684.5,282.5,0.887,0.899,0,138.1,-44.9,67.7,135.3);
	this.instance_2.compositeOperation = "lighter";
	this.instance_2.filters = [new cjs.BlurFilter(10, 10, 3)];
	this.instance_2.cache(-51,20,249,222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},25).to({state:[]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).wait(2));

	// Layer 7
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(508.3,-7,1,1,0,0,0,16.8,15);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36));

	// Layer 9
	this.instance_4 = new lib.Syeembol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(614,319,0.15,0.15,0,0,0,106,82);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({scaleX:1,scaleY:1,x:710.8,y:335.9},14).wait(11));

	// Layer 10
	this.instance_5 = new lib.Syeembol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(913.5,123.5,1,1,0,0,0,95.5,39.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:730.1,y:134.5,alpha:1},7,cjs.Ease.get(1)).wait(18));

	// Layer 11
	this.instance_6 = new lib.Syeembol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(714.5,191.5,1,1,0,0,0,56.5,14.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,x:744.8,y:78.8,alpha:1},7,cjs.Ease.get(1)).wait(18));

	// Layer 2
	this.instance_7 = new lib.Syeembol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(149.2,40,1,1,0,0,0,149.2,13.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({y:3.5,alpha:1},10,cjs.Ease.get(1)).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(491,-22.5,243.3,433.1);


// stage content:



(lib.CustomDesign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.txt1MC = new lib.Syeembol7();
	this.txt1MC.parent = this;
	this.txt1MC.setTransform(-282.2,58,1,1,0,0,0,210.1,26);

	this.timeline.addTween(cjs.Tween.get(this.txt1MC).wait(1));

	// Layer 1
	this.instance = new lib.Syeembol10();
	this.instance.parent = this;
	this.instance.setTransform(-89,235,1,1,0,0,0,418,235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(163.2,232.5,336.3,465);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;