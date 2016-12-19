(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 400,
	height: 75,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



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



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAnIAhhBIgmAAIAAgNIA0AAIAAAMIggBCg");
	this.shape.setTransform(301.5,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADAnIAAg9IgKANIgJgJIAUgVIANAAIAABOg");
	this.shape_1.setTransform(293.6,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAnIgHgCIgFgDIgDgEQgDgFgBgGIAAgOIAAgFIAAgOQABgHACgGIADgFIAFgEIAHgDIAIgBIAJABIAHADIAFAEIADAFQADAGAAAHIAAAOQABAVgEAIIgDAFIgFADQgDACgEAAIgJABIgHgBgAgIgZQgCABgBAEIgBAUIABAVQABADACACQADACAFAAQAGAAADgCQACgCABgDQACgHAAgOQAAgMgCgIQgBgEgCgBQgDgCgGAAQgFAAgDACg");
	this.shape_2.setTransform(286.8,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAoIAAgUQAAgUAegDIAHgEQACgDAAgFIAAgFIgCgEIgFgCIgGgBQgGABgDABQgCACAAAFIgOAAQAAgGACgFQACgDAEgDQADgCAFgBIAJgBQAGAAAGACQAFABADACQADADACAEQABAFAAAHQAAAHgCAFQgCADgDACQgEACgFACIgKADQgIADgCACQgBACAAAHIAAAFIAlAAIAAAMg");
	this.shape_3.setTransform(278.9,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAGIAAgLIAvAAIAAALg");
	this.shape_4.setTransform(271.2,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAnIAAhOIAeAAIAIABIAIACIAGADQADACACAEQADAEACAHIABAQIgBASQgCAGgDAFIgEAFIgHADIgIACIgIAAgAgRAbIAPAAIAIAAQAFgBACgDQACgDABgFIABgPIgBgOQgBgGgCgCQgCgDgFAAIgIgBIgPAAg");
	this.shape_5.setTransform(262.7,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAnIAAhOIANAAIAABOg");
	this.shape_6.setTransform(255.8,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAbAnIAAg8IgVA8IgLAAIgVg8IAAA8IgNAAIAAhOIATAAIAUA+IAVg+IATAAIAABOg");
	this.shape_7.setTransform(248.1,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAnIgIgCIgFgDIgFgFQgBgEgCgJIgBgQIABgOIABgIIACgFIAFgGIAFgDIAJgDIAJgBIAMABQAGACAEADQAFACACAFQACAEAAAHIgOAAIgBgFIgDgDIgGgCIgIAAIgIABQgDABgCADQgCADgBAFIgBANIABANQABAGACADQACADADACIAIABIAKgBQAEgBACgDQACgDABgNIgTAAIAAgLIAgAAIAAAOIgBALQAAAHgDADIgFAEIgGADIgHACIgKAAIgJgBg");
	this.shape_8.setTransform(234,10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAQAnIgfg3IAAA3IgOAAIAAhOIAOAAIAgA4IAAg4IANAAIAABOg");
	this.shape_9.setTransform(224.8,10.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAnIAAhOIANAAIAABOg");
	this.shape_10.setTransform(218.1,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAnIgehOIAPAAIAVA8IAVg8IAQAAIgfBOg");
	this.shape_11.setTransform(211.6,10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAnIAAhOIANAAIAABOg");
	this.shape_12.setTransform(205,10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAQAnIgOgUIgGgKQgCgBgHAAIgEAAIAAAfIgOAAIAAhOIAcAAIALABQAGABAEACIAEACIADAEIACAGIABAIIgBAIIgCAHIgGADQgEACgFACIAWAggAgRgEIARAAIAGAAIAEgBIADgDIABgGIgBgHQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIgFgCIgGAAIgQAAg");
	this.shape_13.setTransform(198.5,10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAQAnIgOgUIgGgKQgCgBgHAAIgEAAIAAAfIgOAAIAAhOIAcAAIALABQAGABAEACIAEACIADAEIACAGIABAIIgBAIIgCAHIgGADQgEACgFACIAWAggAgRgEIARAAIAGAAIAEgBIADgDIABgGIgBgHQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIgFgCIgGAAIgQAAg");
	this.shape_14.setTransform(189.5,10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAWAnIgHgUIgeAAIgHAUIgPAAIAfhOIANAAIAeBOgAAKAHIgKgeIgKAeIAUAAg");
	this.shape_15.setTransform(180.2,10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFAnIAAgiIgegsIAQAAIATAhIAUghIAQAAIgeAsIAAAig");
	this.shape_16.setTransform(167.6,10.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAQAnIgOgUIgGgKQgCgBgHAAIgEAAIAAAfIgOAAIAAhOIAcAAIALABQAGABAEACIAEACIADAEIACAGIABAIIgBAIIgCAHIgGADQgEACgFACIAWAggAgRgEIARAAIAGAAIAEgBIADgDIABgGIgBgHQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIgFgCIgGAAIgQAAg");
	this.shape_17.setTransform(159,10.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaAnIAAhOIA1AAIAAANIgnAAIAAAUIAmAAIAAALIgmAAIAAAWIAnAAIAAAMg");
	this.shape_18.setTransform(150.2,10.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAnIgdhOIAOAAIAVA8IAVg8IAPAAIgeBOg");
	this.shape_19.setTransform(141.7,10.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAnIgIgCIgGgDIgEgFQgCgEgCgJIgBgQIABgPIABgHIADgGIAEgFIAGgDIAIgDIAJgBIAKABIAJADIAGADIADAFIACAGIACAHIABAPIgBARQgCAJgCADIgEAFIgGADIgIACIgKABIgJgBgAgIgZQgEABgCADQgCADAAAFIgBANIABANQAAAGACADQACADAEACIAIABIAJgBQAEgCACgDQACgDABgGIABgNIgBgNQgBgFgCgDQgCgDgEgBIgJgBIgIABg");
	this.shape_20.setTransform(132.7,10.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIAnIgIgCIgGgDIgEgFQgCgEgCgJIAAgQIAAgOIACgIIACgFIAEgGIAGgDIAIgDIAJgBIANABQAGACAEADQADACADAFQACAFAAAGIgPAAIAAgFIgDgDIgFgCIgJAAIgIABQgDABgCADQgCADgBAFIAAANIAAANQABAGACADQACADADACIAIABIAJgBIAFgBIADgEIAAgFIAPAAQAAAHgCAFQgDAEgDADQgEACgGABIgNABIgJgBg");
	this.shape_21.setTransform(123.5,10.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAnQgGAAgEgDQgFgDgCgEQgCgFAAgHIAOAAIABAFQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAFABIAIABIAJgBQADgBACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIABgGQAAgFgDgCQgCgCgFAAQgnADAAgYQAAgHACgEQACgFAEgDQAEgDAGgBQAGgBAHgBIAMABQAGACAEADQAFACACAFQACAEAAAHIgOAAIgBgGQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgGgBIgHAAIgJAAIgFACQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIgBAGQAAAFACACIAHACQAogEAAAYQAAAIgCAEQgCAFgEADQgEAEgHABQgGABgHAAIgMgBg");
	this.shape_22.setTransform(114.4,10.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAnIAAhOIANAAIAABOg");
	this.shape_23.setTransform(107.7,10.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgfAnIAAhOIAeAAIAIABIAIACIAGADQADACACAEQADAEACAHIABAQIgBASQgCAGgDAFIgEAFIgHADIgIACIgIAAgAgRAbIAPAAIAIAAQAFgBACgDQACgDABgFIABgPIgBgOQgBgGgCgCQgCgDgFAAIgIgBIgPAAg");
	this.shape_24.setTransform(100.9,10.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAPAnIgPg+IgPA+IgPAAIgShOIANAAIAOA7IAPg7IANAAIAQA7IAMg7IAOAAIgSBOg");
	this.shape_25.setTransform(86.4,10.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaAnIAAhOIA1AAIAAANIgnAAIAAAUIAmAAIAAALIgmAAIAAAWIAnAAIAAAMg");
	this.shape_26.setTransform(76.3,10.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAQAnIggg3IAAA3IgNAAIAAhOIAOAAIAgA4IAAg4IANAAIAABOg");
	this.shape_27.setTransform(67.5,10.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXAGIAAgLIAvAAIAAALg");
	this.shape_28.setTransform(59.2,11.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAnIAAhOIAPAAIAABCIAlAAIAAAMg");
	this.shape_29.setTransform(52,10.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaAnIAAhOIAPAAIAABCIAlAAIAAAMg");
	this.shape_30.setTransform(44.4,10.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAWAnIgIgUIgcAAIgIAUIgPAAIAghOIAMAAIAfBOgAALAHIgLgeIgKAeIAVAAg");
	this.shape_31.setTransform(35.7,10.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAnIAAhOIA1AAIAAANIgnAAIAAAUIAmAAIAAALIgmAAIAAAWIAnAAIAAAMg");
	this.shape_32.setTransform(23.3,10.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAnIAAgiIgeAAIAAAiIgPAAIAAhOIAPAAIAAAhIAeAAIAAghIAOAAIAABOg");
	this.shape_33.setTransform(14.5,10.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGAnIAAhBIgYAAIAAgNIA9AAIAAANIgYAAIAABBg");
	this.shape_34.setTransform(6,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,307.2,20.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIA4IAAhdIgjAAIAAgSIBXAAIAAASIgiAAIAABdg");
	this.shape.setTransform(362.6,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmA4IAAhvIBMAAIAAASIg4AAIAAAcIA3AAIAAAQIg3AAIAAAfIA4AAIAAASg");
	this.shape_1.setTransform(351.3,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA4IAAgxIgqg+IAXAAIAbAuIAcguIAXAAIgqA+IAAAxg");
	this.shape_2.setTransform(339.2,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWA4IgTgdQgGgMgDgCQgDgCgKAAIgGAAIAAAtIgUAAIAAhvIAoAAIAQABQAJABAGACIAGAEIAEAGIADAIIABALIgBALIgEAKQgDADgFADQgFADgIABIAgAvgAgZgFIAZAAIAIgBQAFAAACgBQADgCABgDIABgJIgBgJQgCgEgDgBQgCgCgFAAIgJAAIgXAAg");
	this.shape_3.setTransform(321.6,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglA4IAAhvIBLAAIAAASIg4AAIAAAcIA3AAIAAAQIg3AAIAAAfIA4AAIAAASg");
	this.shape_4.setTransform(309.1,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIA4IgrhvIAWAAIAdBWIAfhWIAVAAIgrBvg");
	this.shape_5.setTransform(296.9,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNA4IgMgDQgFgCgEgEQgDgCgCgFQgDgFgDgNIAAgWIAAgWIACgKQABgEADgEQACgEADgDIAIgFQAFgCAHgCIAOgBIAPABQAGACAFACIAIAFIAGAGQACAEABAFIACAKIABAWIgBAXQgCANgDAFQgCAFgEACQgEADgFADIgKACIgPABQgHABgGgCgAgMglQgGACgCAEQgDAFgBAIIgBASIABATQABAJADADQACAFAGACQAFABAHAAQAIAAAGgBQAEgCAEgFQACgEABgIIABgTIgBgSQgBgJgCgEQgEgEgEgCQgGgCgIAAQgHAAgFACg");
	this.shape_6.setTransform(284.2,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWA4IgTgdQgGgMgDgCQgDgCgKAAIgGAAIAAAtIgUAAIAAhvIAoAAIAQABQAJABAGACIAGAEIAEAGIADAIIABALIgBALIgEAKQgDADgFADQgFADgIABIAgAvgAgZgFIAZAAIAIgBQAFAAACgBQADgCABgDIABgJIgBgJQgCgEgDgBQgCgCgFAAIgJAAIgXAAg");
	this.shape_7.setTransform(271.5,14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsA4IAAhvIAqAAIAMABQAGAAAGACQAEACAFADQADADAEAEQAEAHABAJQACAJAAAPQAAARgCAIQgBAKgEAGQgEAEgDADIgJAFIgLADIgNAAgAgZAmIAWAAIAMgBQAHgBACgDQAEgEABgIQACgHAAgOQAAgMgCgIQgBgIgEgEQgDgDgGgBIgMgBIgWAAg");
	this.shape_8.setTransform(252.8,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWA4IgthPIAABPIgTAAIAAhvIAVAAIAtBPIAAhPIASAAIAABvg");
	this.shape_9.setTransform(239.6,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAgA4IgLgdIgrAAIgKAdIgVAAIAshvIATAAIArBvgAAPAKIgPgrIgPArIAeAAg");
	this.shape_10.setTransform(226.8,14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglA4IAAhvIAUAAIAABdIA3AAIAAASg");
	this.shape_11.setTransform(215.7,14.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglA4IAAhvIBLAAIAAASIg4AAIAAAcIA3AAIAAAQIg3AAIAAAfIA4AAIAAASg");
	this.shape_12.setTransform(198.5,14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglA4IAAhvIAUAAIAABdIA3AAIAAASg");
	this.shape_13.setTransform(187.7,14.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJA4IAAhvIATAAIAABvg");
	this.shape_14.setTransform(178.6,14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJA4IAAhdIgiAAIAAgSIBXAAIAAASIgjAAIAABdg");
	this.shape_15.setTransform(169.9,14.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAfA4IgKgdIgqAAIgKAdIgWAAIAshvIATAAIArBvgAAOAKIgOgrIgPArIAdAAg");
	this.shape_16.setTransform(157.9,14.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSA4QgIgCgGgEQgGgDgDgHQgEgGAAgJIAUAAQAAAEACACQABAEADABQACACAGAAIALABIANgBIAIgDQACgCABgEIABgIQAAgHgDgDQgDgCgHAAQg5AEAAgjQAAgKADgHQADgGAGgEQAFgEAJgCQAIgCALAAQAJAAAIACQAJABAGAEQAGAEADAGQADAHAAAJIgTAAQAAgEgCgEQgCgDgDgBIgIgCIgKgBIgNABQgFABgDACQgCACgBADIgBAHQAAAIAEACQACACAHABQA6gFAAAjQgBAKgDAHQgCAHgGAEQgGAFgJACQgJADgKgBQgKABgIgCg");
	this.shape_17.setTransform(145.1,14.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWA4IgTgdQgGgMgDgCQgDgCgKAAIgGAAIAAAtIgUAAIAAhvIAoAAIAQABQAJABAGACIAGAEIAEAGIADAIIABALIgBALIgEAKQgDADgFADQgFADgIABIAgAvgAgZgFIAZAAIAIgBQAFAAACgBQADgCABgDIABgJIgBgJQgCgEgDgBQgCgCgFAAIgJAAIgXAAg");
	this.shape_18.setTransform(132.6,14.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmA4IAAhvIBNAAIAAASIg5AAIAAAcIA3AAIAAAQIg3AAIAAAfIA5AAIAAASg");
	this.shape_19.setTransform(120.1,14.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIA4IgrhvIAWAAIAdBWIAfhWIAVAAIgrBvg");
	this.shape_20.setTransform(107.9,14.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIA4IAAhdIgjAAIAAgSIBXAAIAAASIgiAAIAABdg");
	this.shape_21.setTransform(90.7,14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSA4QgIgCgGgEQgGgDgDgHQgEgGAAgJIAUAAQAAAEACACQABAEADABQACACAGAAIALABIANgBIAIgDQACgCABgEIABgIQAAgHgDgDQgDgCgHAAQg5AEAAgjQAAgKADgHQADgGAGgEQAFgEAJgCQAIgCALAAQAJAAAIACQAJABAGAEQAGAEADAGQADAHAAAJIgTAAQAAgEgCgEQgCgDgDgBIgIgCIgKgBIgNABQgFABgDACQgCACgBADIgBAHQAAAIAEACQACACAHABQA6gFAAAjQgBAKgDAHQgCAHgGAEQgGAFgJACQgJADgKgBQgKABgIgCg");
	this.shape_22.setTransform(78.7,14.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOA4IgLgDQgFgCgEgEQgDgCgCgFQgDgFgCgNIgBgWIABgWIABgKQACgEACgEQACgEADgDIAJgFQAEgCAHgCIAOgBIAPABQAGACAGACIAIAFIAFAGQACAEACAFIABAKIABAWIgBAXQgDANgDAFQgBAFgEACQgEADgEADIgLACIgPABQgHABgHgCgAgNglQgFACgCAEQgDAFgBAIIgBASIABATQABAJADADQACAFAFACQAGABAHAAQAIAAAGgBQAEgCADgFQADgEABgIIABgTIgBgSQgBgJgDgEQgDgEgEgCQgGgCgIAAQgHAAgGACg");
	this.shape_23.setTransform(65.7,14.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAmA4IAAhWIgdBWIgSAAIgchWIAABWIgTAAIAAhvIAbAAIAdBYIAfhYIAaAAIAABvg");
	this.shape_24.setTransform(51.3,14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AglA4IAAhvIBMAAIAAASIg5AAIAAAcIA3AAIAAAQIg3AAIAAAfIA5AAIAAASg");
	this.shape_25.setTransform(32.2,14.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAXA4IAAgxIgsAAIAAAxIgUAAIAAhvIAUAAIAAAuIAsAAIAAguIATAAIAABvg");
	this.shape_26.setTransform(19.7,14.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgJA4IAAhdIgiAAIAAgSIBXAAIAAASIgiAAIAABdg");
	this.shape_27.setTransform(7.6,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,370.4,27);


// stage content:
(lib.slogan_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(187.2,25.5,1,1,0,0,0,185.2,13.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:197.2,alpha:1},14,cjs.Ease.get(1)).wait(21));

	// Symbol 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.6,50.1,1,1,0,0,0,153.6,10.1);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({x:165.6,alpha:1},14,cjs.Ease.get(1)).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(202,49.5,370.4,27);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;