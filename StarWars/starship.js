


document.getElementById('compare').addEventListener('click',function(){
    runGen(compareStarships).catch(err => {
      alert(err);
    });
});

function *compareStarships(){

      var starship1 = document.getElementById('starship1').value;
      var starship2 = document.getElementById('starship2').value;

      var starship1Array   = yield fetch("http://swapi.co/api/starships/"+starship1+"/");
      var json1            = yield starship1Array.json();

      var starship2Array   = yield fetch("http://swapi.co/api/starships/"+starship2+"/");
      var json2            = yield starship2Array.json();

      document.getElementById('str1').innerHTML =  json1.name;
      document.getElementById('str2').innerHTML =  json2.name;

      var cost1 = json1.cost_in_credits;
      var cost2 = json2.cost_in_credits;

      document.getElementById('str1C').innerHTML = cost1 ;
      document.getElementById('str2C').innerHTML = cost2;

      if(parseInt(cost1) != parseInt(cost2)){
        var element = 'str1C';
        if(parseInt(cost1) < parseInt(cost2)){
          element = 'str2C';
        }
        document.getElementById(element).setAttribute("style", "background-color: red;");
      }


      var s1 =  json1.max_atmosphering_speed;
      var s2 =  json2.max_atmosphering_speed;

      document.getElementById('str1S').innerHTML = s1 ;
      document.getElementById('str2S').innerHTML = s2;

      var cs1 = json1.cargo_capacity;
      var cs2 = json2.cargo_capacity;

      document.getElementById('str1CS').innerHTML = cs1 ;
      document.getElementById('str2CS').innerHTML = cs2;

      var p1  = json1.passengers;
      var p2  = json2.passengers;

      document.getElementById('str1P').innerHTML = p1 ;
      document.getElementById('str2P').innerHTML = p2;

}

function runGen(gen){
    const genFun = gen();

    function iteration(genValue){

      if(genValue.done){
          return Promise.resolve(genValue.value);
      }

      return Promise.resolve(genValue.value)
            .then(x => iteration(genFun.next(x)))
            .catch(x => iteration(genFun.throw(x)));

    }

    try{
       return iteration(genFun.next())
    }catch(ex){
       return Promise.reject(ex);
    }

}
