import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-dashboards-js-angular";

@Component({
    selector: "printing-the-dashboard-from-code",
    template: `
        <div class="container">
            <h4>This sample demonstrates how to print a dashboard:</h4>
            <div class="container-button">
                <button (click)="printPdf_Click()" class="button" title="Print Dashboard as PDF File">Print PDF</button>
                <button (click)="printHtml_Click()" class="button" title="Print Dashboard as HTML File">Print HTML</button>
            </div>
        </div>`
        ,
    styleUrls: ['../styles.css']
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
        this.report.loadFile("Dashboards/Dashboard.mrt");
    }
}