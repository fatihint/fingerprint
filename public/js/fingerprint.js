jQuery(document).ready(function($) {    
    // Sets delay to get data more accurate
    setTimeout(function(){

        var id,
        url = window.location.href,
        eventID = 1;

        // create new Fingerprint object
        // get hash data
        new Fingerprint2().get(function(result) {
            id = result;
            data = {
                id: id,
                url:url,
                eventID: eventID
            }
            data = JSON.stringify(data);
            console.log("DATAA");
            
            console.log(data);
            
            // postFingerprint(id, url, eventID);
            postFingerprint(data);
        });
    }, 1000)

})

// jquery ajax post function
// posts hash and page url data
function postFingerprint(data) {

    jQuery.ajax({
        // url: "http://192.168.36.20:8080/main/sendInfo",
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: data,
        success: function(response) {
            if(response.success === true){
                console.log("SUCCESS");
                console.log(response);
            }
        },
        error:function(error) {
            console.log("ERROR");
            console.log(error);
        }
    });

    // jQuery.post("http://192.168.36.20/main/sendInfo", {
    //     id: id,
    //     url: url,
    //     eventID: eventID
    // }, function(data, status) {
    //     console.log("Data: " + data + "\nStatus: " + status);
    // })
}