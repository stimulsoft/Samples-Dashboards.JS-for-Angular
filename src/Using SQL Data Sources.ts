import { Component } from '@angular/core';
import { Viewer, Stimulsoft } from 'stimulsoft-dashboards-js-angular/viewer';

@Component({
    selector: 'using-sql-datasources',
    imports: [Viewer],
    template: `<sti-viewer [report]="report"></sti-viewer>`,
})
export class UsingSqlDataSources {
    report: Stimulsoft.Report.StiReport;

    constructor() {
        Stimulsoft.StiOptions.WebServer.url = 'http://localhost:9615/';

        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile('Dashboards/SalesOfProducts.mrt');

        this.report.onBeginProcessData = function (args) {
            // In this event, it is possible to handle the data request, and replace the connection parameters
            // You can change the connection string
            // This example uses the 'Northwind' SQL database, it is located in the 'Data' folder
            // You need to import it and correct the connection string to your database

            if (args.connection === 'MySQL')
                args.connectionString = 'Server=localhost; Database=northwind; UserId=root; Pwd=;';

            // You can change the SQL query
            if (args.dataSource === 'products')
                args.queryString = 'SELECT * FROM MyTable';
        };
    }
}
