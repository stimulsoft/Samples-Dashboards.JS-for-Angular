import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "using-parameters-in-sql-query",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"></sti-viewer>`
})

export class UsingParametersInSqlQuery {
    report: Stimulsoft.Report.StiReport;

    constructor() {
        Stimulsoft.StiOptions.WebServer.url = "http://localhost:9615/";

        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("SimpleListSQL.mrt");

        this.report.onBeginProcessData = function (args) {
            // You can change the SQL query parameters with the required values
            // For example: SELECT * FROM @Parameter1 WHERE Id = @Parameter2 AND Date > @Parameter3
            if (args.dataSource === 'customers') {
                args.parameters[0].value = 'Germany';
            }
        }
    }
}