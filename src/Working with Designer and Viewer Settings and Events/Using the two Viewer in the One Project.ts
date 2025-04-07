import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "using-the-two-viewer-in-the-one-project",
    imports: [Viewer],
    template: `
        <div class="container">
            <h4>This sample demonstrates how to add two viewers to one page:</h4>
            <div class="container-viewer">
                <sti-viewer [report]="report1"></sti-viewer>
                <sti-viewer [report]="report2"></sti-viewer>
            </div>
        </div>
    `,
    styleUrls: ['../styles.css']
})

export class UsingTheTwoViewerInTheOneProject {
    report1: Stimulsoft.Report.StiReport;
    report2: Stimulsoft.Report.StiReport;

    constructor() {
        this.report1 = new Stimulsoft.Report.StiReport();
        this.report1.loadFile("Dashboards/Dashboard.mrt");

        this.report2 = new Stimulsoft.Report.StiReport();
        this.report2.loadFile("Dashboards/Orders.mrt");
    }
}