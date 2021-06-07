$( document ).ready(function() {
  let mtoken = "bEdoZZXsDIlm";
  
  $("h1").click(function() {
        $.ajax({
            type: "GET",
            url: "http://18.197.21.42:8080/channels/1",
            headers:{
                "X-Group-Token": mtoken
            },
            contentType: "applicatoin/json",
            success: function(data, status) {alert(status);},
            error: function() {
                alert("error yay")
            }
        });
    });

});
