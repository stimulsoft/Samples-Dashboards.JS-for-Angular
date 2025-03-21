import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-dashboards-js-angular";

@Component({
    selector: "exporting-dashboard-from-code-with-changing-export-settings",
    template: `
        <div>
            <button (click)="saveDashboardPdf()">Export and Save PDF dashboard to file</button>
        </div>`
})

export class ExportingDashboardFromCodeWithChangingExportSettings {
    async saveDashboardPdf() {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile("Dashboard.mrt");

        await report.renderAsync2();

        var settings = new Stimulsoft.Dashboard.Export.Settings.StiPdfDashboardExportSettings();
        settings.orientation = Stimulsoft.Report.Components.StiPageOrientation.Portrait;
        settings.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.A3;

        var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf, undefined, settings);
        Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
    }
}