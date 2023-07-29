using Serenity.Navigation;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationMenu(2000, "Movie Database", icon: "fa-film")]
[assembly: NavigationLink(2100, "Movie Database/Movies", typeof(MovieTutorial.MovieDB.Pages.MoviePage), icon: "fa-video-camera")]
[assembly: NavigationLink(2200, "Movie Database/Genres", typeof(MovieTutorial.MovieDB.Pages.GenrePage), icon: "fa-thumb-tack")]
[assembly: NavigationLink(2300, "Movie Database/Person",typeof(MovieTutorial.MovieDB.Pages.PersonPage), icon: "fa-users")]