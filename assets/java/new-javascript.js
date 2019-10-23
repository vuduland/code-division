//===========================================================================================//


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=computers+coding+javascript&api-key=iXxrB5IFdP1u6aNOnFTRt1J9L3jYnjBJ";

function loadArticle() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (results) {
    var article = results.response.docs;
    console.log(results);
    var headlineArr = [];
    var randomNum = [];
    var headlineDiv = $("#articles");
    for (var i = 0; i < 3; i++) {
      // console.log(i);
      // console.log(article);
      //tried my best to make sure of no duplicates, although it's still possible.

      randomNum[i] = Math.round(Math.random() * 10);

      for (var j = 3; j > 0; j--) {
        if (randomNum[i] === randomNum[j]) {
          console.log("inside if statment " + i + " times");
        }
      }

      headlineArr[i] = article[randomNum[i]].headline.main;
      // if (headlineArr[j] === headlineArr[i]) {
      //   j++;
      //   headlineArr[i] = headlineArr[j];
      // } 

      // if (randomNum[i] !== randomNum[++i] === randomNum[i] !== randomNum[--i]) {

      // } else if (randomNum[i] === randomNum[--i] || randomNum[i] === randomNum[++i]) {
      //   randomNum[i] = Math.round((Math.random * 10) % 2);
      //   headlineArr[i] = article[randomNum[i]];
      // }
      //generating the divs
      //document.createElement('article');

      console.log(randomNum);
      console.log(headlineArr[i] + " = headline");

      headlineDiv.append("<h3>" + headlineArr[i] + "</h3>");

    }
  });
}

loadArticle();
// loadArticle();
// $(document).ready();

//===========================================================================================//

const myInitCallback = function () {
  if (document.readyState == 'complete') {
    // Document is ready when CSE element is initialized.
    // Render an element with both search box and search results in div with id 'test'.
    google.search.cse.element.render({
      div: "customSearch",
      tag: 'search'
    });
  } else {
    // Document is not ready yet, when CSE element is initialized.
    google.setOnLoadCallback(function () {
      // Render an element with both search box and search results in div with id 'test'.
      google.search.cse.element.render({
        div: "customSearch",
        tag: 'search'
      });
    }, true);
  }
};

// Insert it before the CSE code snippet so the global properties like parsetags and callback
// are available when cse.js runs.

// initializes Google Custom Search Call Back
window.__gcse = {
  parsetags: 'explicit',
  initializationCallback: myInitCallback
};


//===========================================================================================//



// on page load, search for & display a random gif matching your search term using the Giphy API.
// usage: 
document.addEventListener('DOMContentLoaded', function () {
  q = "computer"; // search query

  request = new XMLHttpRequest();
  request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + q + '&rid=250w', true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      data1 = JSON.parse(request.responseText).data.image_url;
      console.log(data1);
      document.getElementById("gifComputer").innerHTML = '<center><img src = "' + data1 + '"  title="GIF via Giphy" style= "width: 100%"  ></center>';


    } else {
      console.log('reached giphy, but API returned an error');
    }
  };

  request.onerror = function () {
    console.log('connection error');
  };

  request.send();
});