import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "using-the-right-to-left-mode-in-the-viewer",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"  [options]="viewerOptions"></sti-viewer>`
})

export class UsingTheRightToLeftModeInTheViewer {
    report: Stimulsoft.Report.StiReport;
    viewerOptions: Stimulsoft.Viewer.StiViewerOptions;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboard.mrt");

        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
        this.viewerOptions.appearance.rightToLeft = true;
    }
}