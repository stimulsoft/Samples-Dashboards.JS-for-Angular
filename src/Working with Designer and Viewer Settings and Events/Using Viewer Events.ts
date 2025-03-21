import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "using-viewer-events",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"  [options]="viewerOptions" (onBeginExportReport)="onBeginExportReport($event)"></sti-viewer>`
})

export class UsingViewerEvents {
    report: Stimulsoft.Report.StiReport;
    viewerOptions: Stimulsoft.Viewer.StiViewerOptions;

    onBeginExportReport(args: Stimulsoft.Viewer.BeginExportReportArgs) {
        alert(`onBeginExportReport`);
    }

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboards/Dashboard.mrt");

        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
        this.viewerOptions.toolbar.showSendEmailButton = true;
    }

}