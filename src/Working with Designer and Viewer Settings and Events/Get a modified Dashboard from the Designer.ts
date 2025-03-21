import { Component } from "@angular/core";
import { Designer, Stimulsoft } from "stimulsoft-dashboards-js-angular/designer";

@Component({
    selector: "get-modified-dashboard-from-the-designer",
    imports: [Designer],
    template: `<sti-designer [(report)]="report"  [options]="designerOptions" (onAssignedReport)="onAssignedReport($event)"></sti-designer>`
})

export class GetModifiedDashboardFromTheDesigner {
    report: Stimulsoft.Report.StiReport;
    designerOptions: Stimulsoft.Designer.StiDesignerOptions;

    onAssignedReport(args: Stimulsoft.Designer.AssignedReportArgs) {
        alert("The link to the dashboard has been changed");
        this.report = args.report;
    }

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboards/Dashboard.mrt");

        this.designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
        this.designerOptions.appearance.fullScreenMode = true;
    }
}