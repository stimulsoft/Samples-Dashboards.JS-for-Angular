import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-dashboards-js-angular";

@Component({
    selector: "exporting-dashboard-to-pdf",
    template: `
        <div>
            <button (click)="saveDashboardPdf()">Export and Save PDF dashboard to file</button>
        </div>`
})

export class ExportingDashboardToPDF {
    async saveDashboardPdf() {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile("Dashboard.mrt");

        await report.renderAsync2();

        var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
        Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
    }
}