import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-dashboards-js-angular";

@Component({
    selector: "exporting-dashboard-to-pdf",
    template: `
        <div class="container">
            <h4>This sample demonstrates how to export a dashboard to a PDF file and save it:</h4>
            <div class="container-button">
                <button (click)="saveDashboardPdf()" class="button" title="Export Dashboard to PDF File">Export to PDF</button>
            </div>
        </div>
        `,
    styleUrls: ['../styles.css']
})

export class ExportingDashboardToPDF {
    async saveDashboardPdf() {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile("Dashboards/Dashboard.mrt");

        await report.renderAsync2();

        var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
        Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
    }
}