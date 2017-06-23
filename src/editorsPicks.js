convertData = function(data){

var newData = JSON.parse(data);

var articles = '<ul>';

newData['response']['editorsPicks'].forEach(function(article){
  articles  += ("<li><div>"+ article['webTitle'] + "</div></li>")

});

articles += '</ul>'
console.log(articles);
return articles

}
