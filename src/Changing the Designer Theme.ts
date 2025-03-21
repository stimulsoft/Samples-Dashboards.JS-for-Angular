import { Component } from "@angular/core";
import { Designer, Stimulsoft } from "stimulsoft-dashboards-js-angular/designer";

@Component({
    selector: "changing-the-designer-theme",
    imports: [Designer],
    template: `<sti-designer [(report)]="report"  [options]="designerOptions"></sti-designer>`
})

export class ChangingTheDesignerTheme {
    report: Stimulsoft.Report.StiReport;
    designerOptions: Stimulsoft.Designer.StiDesignerOptions;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboards/Dashboard.mrt");

        this.designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
        this.designerOptions.appearance.theme = Stimulsoft.Designer.StiDesignerTheme.Office2022WhiteViolet;
        this.designerOptions.appearance.fullScreenMode = true;
    }
}