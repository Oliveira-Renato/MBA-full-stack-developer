function getCountry(country) {
    
    return fetch("https://restcountries.eu/rest/v2/name/" + country)
    .then(function (response) {
        return response.json();
    }).catch(function (err) {
        console.log("Falha ao buscar os dados", err);
    });

    /* return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();

    request.open("GET", "https://restcountries.eu/rest/v2/name/" + country);
    request.onload = function () {
      if (request.status == 200) {
        resolve(request.response); // we get the data here, so resolve the Promise
      } else {
        reject(Error(request.statusText)); // if status is not 200 OK, reject.
      }
    };

    request.onerror = function () {
      reject(Error("Error fetching data.")); // error occurred, so reject the Promise
    };

    request.send(); // send the request
  }); */
}

function fetchCountries() {
  var countries = document.getElementById("countries").value.split(",");

  for (var country in countries) {

    getCountry(countries[country])
      .then(function (data) {
        var img = data[0].flag;

        document.getElementById("flags").innerHTML =
          document.getElementById("flags").innerHTML +
          '<img width="70" height="50" src="' +
          img +
          '"/><br>';
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
function clearCountries() {
  document.getElementById("flags").innerHTML = "";
}
//
function fetchCountriesAll() {
  var titles = document.getElementById("titles").value.split(",");
  var promises = [];

  for (var i in titles) {
    promises.push(getMovie(titles[i])); // push the Promises to our array
  }

  Promise.all(promises)
    .then(function (dataArr) {
      dataArr.forEach(function (data) {
        var img = JSON.parse(data)[0].poster.imdb;

        document.getElementById("flags").innerHTML =
          document.getElementById("flags").innerHTML +
          '<img src="' +
          img +
          '"/>';
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}
