document.addEventListener('DOMContentLoaded', function () {
  
    var container = document.getElementById('articles-container');

 
    var articles = container.querySelectorAll('article');

    
    var sortedArticles = Array.from(articles).sort(function (a, b) {
        var dateA = new Date(a.querySelector('time').getAttribute('datetime'));
        var dateB = new Date(b.querySelector('time').getAttribute('datetime'));
        return dateB - dateA;
    });

   
    container.innerHTML = '';

    
    sortedArticles.forEach(function (article) {
        container.appendChild(article);
    });
});