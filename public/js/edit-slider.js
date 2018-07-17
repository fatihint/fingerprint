jQuery(document).ready(function($) {    
    // If page contains slides class, site uses Post-Slider
    if ($(".slides").length > 0) {  

        // Get the url data of slides.
        var slidesUrlData = getSlidesUrlData();
        $.post("http://localhost/kafein/post.php",
            {
                slidesUrlData: slidesUrlData
            },
            function(data, status) {
                console.log("Data: " + data + "\nStatus: " + status);
            }
        );

        // Child count of ul
        var childElementCount =  $(".slides")[0].childElementCount;
        
        // CHANGE ORDER with Service Parameters
        
        // If slider has slides
        if (childElementCount > 0) {
            // parentNode is ul, child Nodes are li 
            var parentNode = $(".slides")[0],
                lastChildNode = $(".slides li").eq(2)[0],
                firstChildNode = $(".slides li").eq(0)[0];
            // Change the order.
            var insertedNode = parentNode.insertBefore(lastChildNode, firstChildNode);
        } else {
            console.log("Slides not found !");
        }
    } else {
        console.log("Class not found !");
        
    }
})

// Returns slides url data
function getSlidesUrlData() {

    var anchorNodes = document.querySelectorAll(".slides a[aria-label]");
    var data = [];

    anchorNodes.forEach(function(current, index) {
        data.push(current.href);
    })

    console.log(data);
    return data;
    
}