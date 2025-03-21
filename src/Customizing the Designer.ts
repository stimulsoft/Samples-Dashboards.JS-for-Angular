import { Component } from "@angular/core";
import { Designer, Stimulsoft } from "stimulsoft-dashboards-js-angular/designer";

@Component({
    selector: "customizing-the-designer",
    imports: [Designer],
    template: `<sti-designer [(report)]="report"  [options]="designerOptions"></sti-designer>`
})

export class CustomizingTheDesigner {
    report: Stimulsoft.Report.StiReport;
    designerOptions: Stimulsoft.Designer.StiDesignerOptions;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboard.mrt");

        this.designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
        this.designerOptions.appearance.theme = Stimulsoft.Designer.StiDesignerTheme.Office2022LightGrayTeal;
        this.designerOptions.appearance.fullScreenMode = true;
        this.designerOptions.toolbar.showPreviewButton = false;
        this.designerOptions.toolbar.showFileMenu = false;
        this.designerOptions.components.showImage = false;
        this.designerOptions.components.showShape = false;
        this.designerOptions.components.showPanel = false;
        this.designerOptions.components.showCheckBox = false;
        this.designerOptions.components.showSubReport = false;
    }
}