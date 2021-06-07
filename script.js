$( document ).ready(function() {
    let mtoken =  "bEdoZZXsDIlm";
    let chanelList;

    $("h1").click(function() {
        $.ajax({
            type: "GET",
            url: "http://18.197.21.42:8080/channels/",
            headers:{
                "X-Group-Token": mtoken
            },
            contentType: "applicatoin/json",
            success: function(content, status) {
                chanelList=JSON.parse(content);
                alert(chanelList[0].id)    
            },
            error: function() {
                alert("error yay")
            }
        });
    });
});
