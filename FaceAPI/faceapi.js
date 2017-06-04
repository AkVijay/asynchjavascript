
document.getElementById("buttonURL").addEventListener("click" ,analyseImage)

function analyseImage(){

    var valueURL = document.getElementById("url").value;

    if(valueURL){
      //Parse for an Http URL using REGEX
    }
    //SET FACE IMAGE
    document.getElementById('faceImage').setAttribute('src' , valueURL);

    var myHeader =  new Headers({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key':'023f1661f6244d3e9f81501646ef9a0f'
    });

    var reqURL = {
      url : valueURL
    }

    var initObject = {
        body : JSON.stringify(reqURL),
        method : 'POST',
        headers : myHeader
    }

    var request = new Request('https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=age,gender', initObject);

    fetch(request).then(function(response){
      if(response.ok){
        return response.json();
      }else {
        return Promise.reject(new Error(response.statusText));
      }
    }).then(function(val){
       document.getElementById('imageAttributes').innerHTML = "Age: " + val[0].faceAttributes.age + "</br>"
            + "Gender: " + val[0].faceAttributes.gender;
    }).catch(function(val){
      alert(val);
      document.getElementById('imageAttributes').innerHTML = ""
    });

}
