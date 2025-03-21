import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "using-dashboard-variables-in-code",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"></sti-viewer>`
})

export class UsingDashboardVariablesInCode {
    report: Stimulsoft.Report.StiReport;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Variables.mrt");

        this.report.setVariable("Name", "Andrew");
        this.report.setVariable("Surname", "Fox");
        this.report.setVariable("Email", "email@dot.com");
        this.report.setVariable("Address", "Address");
        this.report.setVariable("Sex", true);
        this.report.setVariable("BirthDay", Stimulsoft.System.DateTime.fromString("10.10.2010"));
    }
}