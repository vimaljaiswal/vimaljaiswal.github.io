    function timerCalled(timer) {
        // console.log(timer);
        if (timer >= 485) {
			document.getElementById("fiftyBan").style.visibility = "hidden";
			document.getElementById("containerVideo").style.visibility = "visible";
           // alert("open VPM");
            //  console.log("timer called ....  video ")
        }
        else {
           // alert("open mainunit");
            // console.log("timer called ....   img")
        }
    }



    function chkRollover(event) {
        if (event.id == "videoTab") {
					document.getElementById("fiftyBan").style.visibility = "hidden";
			document.getElementById("containerVideo").style.visibility = "visible";
             console.log("tchkRollover .... video  ")
        }
        else {
           // console.log("tchkRollover .... image  " + event.id)
        }
    }

    function chkRollout(event) {
        if (event.id == "videoTab") {
            // console.log("tchkRollout .... video  ")
        }
        else {
             //console.log("tchkRollout .... image  " + event.id)
        }
    }

    function chkClick(event) {
        console.log("tchkclick ....  " + event.id)
        if (event.id == "videoTab") {
             console.log("tchkclick .... video  ")
        }
        else if (event.id == "imageTab")  {
             console.log("tchkclick .... image  " + event.id)
        }
    }