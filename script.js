$( document ).ready(function() {
  let mtoken = "X-Group-Token: bEdoZZXsDIlm";
  
  $("h1").click(function() {
        $.ajax({
            type: "GET",
            url: "http://18.197.21.42:8080/channels/1",
            //твоё предложение скинуть стринг... сейчас дошло, что может он рассматривает мтокен как объект, мб стоит закастить на стринг
            mtoken,

            /*до этого здесь стояло:
            headers:{
              Authentication : mtoken
            }, */
          
            success: function(data, status) {
                alert(status);
            },
            error: function() {
                alert("error yay")
            }
        });
    });

});
