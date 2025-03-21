import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "customizing-the-viewer",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"  [options]="viewerOptions"></sti-viewer>`
})

export class CustomizingTheViewer {
    report: Stimulsoft.Report.StiReport;
    viewerOptions: Stimulsoft.Viewer.StiViewerOptions;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboard.mrt");

        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
        this.viewerOptions.appearance.theme = Stimulsoft.Viewer.StiViewerTheme.Office2022LightGrayTeal;
        this.viewerOptions.appearance.fullScreenMode = true;
        this.viewerOptions.toolbar.showOpenButton = false;
        this.viewerOptions.exports.showExportToPdf = false;
    }
}