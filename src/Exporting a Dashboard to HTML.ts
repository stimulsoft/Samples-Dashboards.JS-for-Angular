import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-dashboards-js-angular";

@Component({
    selector: "exporting-dashboard-to-html",
    template: `
        <div>
            <button (click)="saveDashboardHtml()">Export and Save HTML Dashboard to file</button>
        </div>`
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