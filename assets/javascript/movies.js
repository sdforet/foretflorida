(function () {
    $(init);

    function init()
    {
        $( ".search-form" ).submit(function( event ) {
            event.preventDefault();
            searchMovie();
        });

        var movieTitle = $("#movieTitle"),
            searchResults = $("#searchResults"),
            template = $("#template").clone(),
            apiKey = "99f82ddbb50c77b2a2e5d9301580b46f",
            srchBase = "http://api.themoviedb.org/3/search/movie",
            imgeBase = "http://image.tmdb.org/t/p/w185//",
            imgeBsBg = "http://image.tmdb.org/t/p/w500//",
            notFound = "assets/images/not_found.jpg";

        function searchMovie()
        {
            $(".search-results").hide('fast');
            $(".not-found").hide('fast');
            var title = movieTitle.val();
            movieTitle.val('');
            if (title != '') {
                $.ajax({
                    url: srchBase+"?query="+title+"&api_key="+apiKey,
                    success: renderMoviesWithTemplate
                });
            } else {
                $("#bodyRow").animate({"margin-top": "40px"});
            }
        }

        function renderMoviesWithTemplate(movies)
        {
            //console.log(movies.results);
            searchResults.empty();
            if ($.isEmptyObject(movies.results)) {
                $(".not-found").show("slow",function() {
                    $("#bodyRow").animate({"margin-top": "75px"});
                });
            } else {
                for (var m in movies.results) {
                    var movie = movies.results[m],
                        tplt = template.clone(),
                        title = movie.title,
                        poster = movie.poster_path,
                        image = (poster != null) ? imgeBase+poster : notFound;

                    if (movie.poster_path != null) {
                        tplt.find(".poster").attr({
                            "src": image,
                            "title": title,
                            "data": m
                        });
                        searchResults.append(tplt);
                    }
                }
                setPopupInformation(movies);
                $(".search-results").show('slow', function() {
                    $(".search-results").jScrollPane();
                    $("#bodyRow").animate({"margin-top": "345px"});
                });
            }
        }

        function setPopupInformation(movies)
        {
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
                    var template = $("<div>"),
                        image = (movie.poster_path != null) ? imgeBsBg+movie.poster_path : notFound,
                        moviePop = new PopupMessage();

                    template.html(html);
                    template.find("#mTitle").html(movie.title);
                    template.find("#mPlot").html(movie.overview);
                    template.find("#mImage").attr("src", image);
                    template.find("#mRelease").html(movie.release_date);
                    template.find("#mScore").html(movie.vote_average);

                    moviePop.init({
                        title: 'TMDB - The Movie Database',
                        message: template.html(),
                        button: 'Dismiss',
                        customCss: 'movieInfo',
                    });
                }
            });
        }

        /* isotope grid */
        $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'packery',
            percentPosition: true
        });

        /* re-initialize the scroll-pane when resizing the window*/
        $(window).bind('resize', function() {
            $(".search-results").jScrollPane();
        });

    } //end of init()
})();
