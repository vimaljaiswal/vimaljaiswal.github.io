    function timerCalled(timer) {
        // console.log(timer);
        if (timer >= 485) {
            //alert("open VPM");
            //  console.log("timer called ....  video ")
        }
        else {
            //alert("open mainunit");
            // console.log("timer called ....   img")
        }
    }



    function chkRollover(event) {
        if (event.id == "test") {
            // console.log("tchkRollover .... video  ")
        }
        else {
            //console.log("tchkRollover .... image  " + event.id)
        }
    }

    function chkRollout(event) {
        if (event.id == "test") {
            // console.log("tchkRollout .... video  ")
        }
        else {
            // console.log("tchkRollout .... image  " + event.id)
        }
    }

    function chkClick(event) {
        if (event.id == "test") {
            // console.log("tchkclick .... video  ")
        }
        else {
            // console.log("tchkclick .... image  " + event.id)
        }
    }