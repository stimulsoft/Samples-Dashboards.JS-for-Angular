import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-dashboards-js-angular";

@Component({
    selector: "exporting-dashboard-from-code-with-changing-export-settings",
    template: `
        <div class="container">
            <h4>This example shows how to export a dashboard to a PDF file and adjust the export settings via code:</h4>
            <div class="container-button">
                <button (click)="saveDashboardPdf()" class="button" title="Export Dashboard to PDF File">Export to PDF</button>
            </div>
        </div>
        `,
    styleUrls: ['../styles.css']
})

export class ExportingDashboardFromCodeWithChangingExportSettings {
    async saveDashboardPdf() {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile("Dashboards/Dashboard.mrt");

        await report.renderAsync2();

        var settings = new Stimulsoft.Dashboard.Export.Settings.StiPdfDashboardExportSettings();
        settings.orientation = Stimulsoft.Report.Components.StiPageOrientation.Portrait;
        settings.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.A3;

        var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf, undefined, settings);
        Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
    }
}