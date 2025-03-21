import { Component } from "@angular/core";
import { Designer, Stimulsoft } from "stimulsoft-dashboards-js-angular/designer";

@Component({
    selector: "adding-font-to-the-resource",
    imports: [Designer],
    template: `<sti-designer [(report)]="report"  [options]="designerOptions"></sti-designer>`
})

export class AddingFontToTheResource {
    report: Stimulsoft.Report.StiReport;
    designerOptions: Stimulsoft.Designer.StiDesignerOptions;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboards/CusomFontDashboard.mrt");

        var fileContent = Stimulsoft.System.IO.File.getFile("Fonts/LongCang-Regular.ttf", true);
        var resource = new Stimulsoft.Report.Dictionary.StiResource("LongCang", "LongCang", false, Stimulsoft.Report.Dictionary.StiResourceType.FontTtf, fileContent);
        this.report.dictionary.resources.add(resource);

        this.designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
        this.designerOptions.appearance.fullScreenMode = true;
    }
}