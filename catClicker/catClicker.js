

var catNames =['Cat1' , 'Cat2'];
var catURL   =['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXekirS-4xvMqWRC0BYVl-j7X815-hRE8889an4AaVkrtc9Uw9nQ' ,
'https://media4.giphy.com/media/yAqdjThdDEMF2/200_s.gif'];

var catClickCount = [0,0];

document.getElementById('Cats').addEventListener('change', function(){
   var id =  document.getElementById('Cats').value
   displayCatNames(id);
});


function displayCatNames(i){
    var table = document.getElementById('catTable');
    table.innerHTML = "";
        var row = table.insertRow();

        var cell1 = row.insertCell();
        cell1.innerHTML = catNames[i];

        var cell2 = row.insertCell();
        cell2.innerHTML = '<img alt = "' + catNames[i] + '" src = "' + catURL[i] + '"/>' ;

        var cell3 = row.insertCell();
        cell3.innerHTML = catClickCount[i];

        cell2.addEventListener('click', function(element){
          return function(){
            var value = catClickCount[element];
            value = parseInt(value) + 1;
            cell3.innerHTML = value;
            catClickCount[element] = value;
          }
        }(i));

}

function addElementToSelect(){
    var dropDown = document.getElementById('Cats');
    var i = 0;
    catNames.forEach(function(element){
        var option = document.createElement('option');
        option.text = element;
        option.value = i;
        dropDown.add(option);
        i++;
    });
}


addElementToSelect();
