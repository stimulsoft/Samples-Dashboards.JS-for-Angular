import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "how-to-activate-the-product",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"></sti-viewer>`
})

export class HowToActivateTheProduct {
    report: Stimulsoft.Report.StiReport;

    constructor() {
        // Using one of the functions below to register your license from the JavaScript code

        // Stimulsoft.Base.StiLicense.key = '6vJhGtLLLz2GNviWmUTrhSqnO...';
        // Stimulsoft.Base.StiLicense.loadFromFile('license.key')

        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboards/Dashboard.mrt");
    }
}