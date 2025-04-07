import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-dashboards-js-angular";

@Component({
    selector: "exporting-dashboard-to-html",
    template: `
        <div class="container">
            <h4>This sample demonstrates how to export a dashboard to an HTML file and save it:</h4>
            <div class="container-button">
                <button (click)="saveDashboardHtml()" class="button" title="Export Dashboard to HTML File">Export to HTML</button>
            </div>
        </div>
        `,
    styleUrls: ['../styles.css']
})

export class ExportingDashboardToHTML {
    async saveDashboardHtml() {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile("Dashboards/Dashboard.mrt");

        await report.renderAsync2();

        var htmlData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Html);
        Stimulsoft.System.StiObject.saveAs(htmlData, report.reportAlias + ".html", "text/html;charset=utf-8");
    }
}