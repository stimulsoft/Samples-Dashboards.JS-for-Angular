import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "supply-custom-headers-for-json-database",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"  [options]="viewerOptions"></sti-viewer>`
})

export class SupplyCustomHeadersForJsonDatabase {
    report: Stimulsoft.Report.StiReport;
    viewerOptions: Stimulsoft.Viewer.StiViewerOptions;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("OrdersUrl.mrt");

        this.report.onBeginProcessData = function (args) {
            if (args.database === "JSON" && args.command === "GetData") {
                // Add custom header to pass through backend server protection
                args.headers.push({ key: "X-Auth-Token", value: "*YOUR TOKEN*" });
            }
        };

        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
        this.viewerOptions.appearance.fullScreenMode = true;
    }
}