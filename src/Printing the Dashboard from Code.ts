import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-dashboards-js-angular";

@Component({
    selector: "printing-the-dashboard-from-code",
    template: `
        <div>
            <button (click)="printPdf_Click()">Print Dashboard as PDF</button>
            <button (click)="printHtml_Click()">Print Dashboard as HTML</button>
        </div>`
})

export class PrintingTheDashboardFromCode {
    report: Stimulsoft.Report.StiReport;

    printPdf_Click() {
        this.report.printToPdf();
    }

    printHtml_Click() {
        this.report.print();
    }

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboard.mrt");
    }
}