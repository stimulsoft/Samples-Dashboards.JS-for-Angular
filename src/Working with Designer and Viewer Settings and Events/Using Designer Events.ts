import { Component } from "@angular/core";
import { Designer, Stimulsoft } from "stimulsoft-dashboards-js-angular/designer";

@Component({
    selector: "using-designer-events",
    imports: [Designer],
    template: `<sti-designer [(report)]="report"  [options]="designerOptions" (onSaveReport)="onSaveReport($event)" (onCreateReport)="onCreateReport($event)" (onPreviewReport)="onPreviewReport($event)" (onExit)="onExit($event)"></sti-designer>`
})
export class UsingDesignerEvents {
    report: Stimulsoft.Report.StiReport;
    designerOptions: Stimulsoft.Designer.StiDesignerOptions;

    onSaveReport(args: Stimulsoft.Designer.SaveReportArgs) {
        alert("onSaveReport event");
    }

    onCreateReport(args: Stimulsoft.Designer.CreateReportArgs) {
        var dataSet = new Stimulsoft.System.Data.DataSet("Demo");
        dataSet.readJsonFile("Data/Demo.json");
        args.report.regData("Demo", "Demo", dataSet);
        args.report.dictionary.synchronize();
    }

    onPreviewReport(args: Stimulsoft.Designer.PreviewReportArgs) {
        alert("onPreviewReport event");
    }

    onExit(args: Stimulsoft.Report.EventDataArgs) {
        alert("onExit event");
    }

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboards/Dashboard.mrt");

        this.designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
        this.designerOptions.appearance.fullScreenMode = true;
    }
}
