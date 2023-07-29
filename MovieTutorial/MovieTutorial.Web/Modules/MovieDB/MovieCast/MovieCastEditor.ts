import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { MovieCastRow, PersonRow } from "../../ServerTypes/MovieDB";
import { MovieCastEditDialog } from "./MovieCastEditDialog";

@Decorators.registerEditor("MovieTutorial.MovieDB.MovieCastEditor")
export class MovieCastEditor extends GridEditorBase<MovieCastRow> {
    protected getColumnsKey() { return "MovieDB.MovieCast"; }
    protected getLocalTextPrefix() { return MovieCastRow.localTextPrefix; }
    protected getDialogType() { return MovieCastEditDialog; }

    protected validateEntity(row: MovieCastRow, id: number) {
        if (!super.validateEntity(row, id))
            return false;
            
        row.PersonFullname = PersonRow.getLookup()
            .itemById[row.PersonId].Fullname;

        return true;
    }
    constructor(container: JQuery) {
        super(container);
    }
    protected getAddButtonCaption() {
        return "Add";
    }
}