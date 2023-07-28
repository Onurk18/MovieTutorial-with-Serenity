﻿import { Decorators } from "@serenity-is/corelib";

export enum MovieKind {
    Film = 1,
    TvSeries = 2,
    MiniSeries = 3
}
Decorators.registerEnumType(MovieKind, 'MovieTutorial.Web.Modules.MovieDB.Movie.MovieKind', 'MovieDB.MovieKind');