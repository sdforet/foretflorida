(function () {
    $(init);

    function init()
    {

        $("#searchMovie").click(searchMovie);
        var movieTitle = $("#movieTitle"),
            tbody = $("#results"),
            searchResults = $("#searchResults"),
            template = $("#template").clone(),
            apiKey = "99f82ddbb50c77b2a2e5d9301580b46f",
            srchBase = "http://api.themoviedb.org/3/search/movie",
            imgeBase = "http://image.tmdb.org/t/p/w185//",
            imgeBsBg = "http://image.tmdb.org/t/p/w500//",
            notFound = "assets/images/not_found.jpg";

//http://api.themoviedb.org/3/movie/11309?api_key=99f82ddbb50c77b2a2e5d9301580b46f
        function searchMovie()
        {
            var title = movieTitle.val();

            $.ajax({
                url: srchBase+"?query="+title+"&api_key="+apiKey,
                success: renderMoviesWithTemplate
            })
        }

        function renderMoviesWithTemplate(movies)
        {
            console.log(movies.results);
            searchResults.empty();

            for (var m in movies.results) {
                var movie = movies.results[m],
                    tdiv = template.clone(),
                    poster = movie.poster_path,
                    image = (poster != null) ? imgeBase+poster : notFound;

                if (movie.poster_path != null) {
                    tdiv.find(".poster").attr({
                        "src": image,
                        "data": m
                    });
                    searchResults.append(tdiv);
                    searchResults.show("slow");
                }
/*
                var movie = movies.results[m],
                    tr = template.clone(),
                    title = movie.title,
                    plot = movie.overview,
                    poster = movie.poster_path,
                    image = (poster != null) ? imgeBase+poster : notFound,
                    release = movie.release_date;

                    if (movie.overview != '' && movie.release_date != '' && movie.poster_path != null) {
                        tr.find(".title").html(title);
                        tr.find(".plot").html(plot);
                        tr.find(".poster").attr({
                            src: image,
                            data: m
                        });
                        tr.find(".release").html(release);
                        tbody.append(tr);
                    }
*/
            }
            setPopupInformation(movies);
        }

        function setPopupInformation(movies) {


            $(".poster").click(function(){

                movieNum = $(this).attr("data");
                movie = movies.results[movieNum];

                $.ajax({
                    url: "templates/movies/moviePopupTemplate.html",
                    dataType: "html",
                    success: setMoviePopupTemplate
                });

                function setMoviePopupTemplate(html)
                {
                    //var template = $(html);
                    //console.log(template);
                    var template = $("<div>");
                    template.html(html);
                    template.find("#mTitle").html(movie.title);
                    template.find("#mPlot").html(movie.overview);
                    var image = (movie.poster_path != null) ? imgeBsBg+movie.poster_path : notFound;
                    template.find("#mImage").attr("src", image);
                    template.find("#mRelease").html(movie.release_date);

                    //console.log(template);
                    //alert(template.find("#mPlot").html());

                    var message = new PopupMessage();
                    message.init({
                        title: 'TMDB - The Movie Database',
                        message: template.html(),
                        button: 'Dismiss',
                        customCss: 'movieInfo',
                    });
                }
            });
        }
    }
})();

  //Sample usage within your js page's document.ready()