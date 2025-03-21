import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "using-the-two-viewer-in-the-one-project",
    imports: [Viewer],
    template: `
        <div>
            <div [style]="{ width: '50%', display: 'inline-block'}">
                <sti-viewer [report]="report1"></sti-viewer>
            </div>
            <div [style]="{ width: '50%', display: 'inline-block'}">
                <sti-viewer [report]="report2"></sti-viewer>
            </div>
        </div>
    `
})

export class UsingTheTwoViewerInTheOneProject {
    report1: Stimulsoft.Report.StiReport;
    report2: Stimulsoft.Report.StiReport;

    constructor() {
        this.report1 = new Stimulsoft.Report.StiReport();
        this.report1.loadFile("Dashboard.mrt");

        this.report2 = new Stimulsoft.Report.StiReport();
        this.report2.loadFile("Orders.mrt");
    }
}