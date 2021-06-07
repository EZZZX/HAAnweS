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
                chanelList = content._embedded.channelList;
                for (var key in chanelList){
                    var tagChannel = document.createElement("tchannel"); // <p></p>
                   
                    var tagName = document.createElement("tname");
                    var tagId = document.createElement("tid");
                    var tagTopic = document.createElement("ttopic");
                    
                    tagId.appendChild(document.createTextNode(chanelList[key].id + "; "));
                    tagName.appendChild(document.createTextNode(chanelList[key].name + "; "));
                    tagTopic.appendChild(document.createTextNode(chanelList[key].topic));



                    tagChannel.appendChild(tagId);
                    tagChannel.appendChild(tagName);
                    tagChannel.appendChild(tagTopic);
                   tagChannel.append(document.createElement("br"));
                   tagChannel.append(document.createElement("br"));
                   tagChannel.append(document.createElement("br"));

                    
                   // var text = document.createTextNode("TEST TEXT"); 
                    //tag.appendChild(text); // <p>TEST TEXT</p>
                    var element = document.getElementsByTagName("channels")[0];
                    element.appendChild(tagChannel); // <body> <p>TEST TEXT</p> </body>
                }
                
                // chanelList = JSON.parse(content);
                console.log(content._embedded.channelList[1]["name"])    
            },
            error: function() {
                alert("error yay")
            }
        });
    });
});
