(function(){
//VDXTracker={event:"click",callbacks:[cb1,cb2]}
  
  var designerAPI = {

      cb1:function(){
	      // designer code
	      console.log("cb1");
         var tabs = document.querySelectorAll("div[data-title*='VDXTracker']");
         $(tabs[0]).trigger('click');
      },
      cb2:function(){
      // designer code
      console.log("cb2");

      },
      
      cb3:function(){
      // designer code
      console.log("cb3");
      },
      
      cb4:function(){
      // designer code
      console.log("cb4");

      }
   

	}

   this.designerAPI =  designerAPI;

})();










