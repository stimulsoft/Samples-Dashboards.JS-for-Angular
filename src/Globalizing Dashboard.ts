import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "globalizing-dashboard",
    imports: [Viewer],
    template: `
        <div>
            <label [style]="{fontSize: '14px'}">
                    Select Country
                <select (change)="update($event.target)">
                    <option [value]="'en-US'">United States</option>
                    <option [value]="'de-DE'">Germany</option>
                    <option [value]="'ru-RU'">Russia</option>
                </select>
            </label>
            <sti-viewer [report]="report" [options]="viewerOptions"></sti-viewer>/>
        </div>`
})

export class GlobalizingDashboard {
    report: Stimulsoft.Report.StiReport;
    viewerOptions: Stimulsoft.Viewer.StiViewerOptions;

    update(e: any) {
        var selectedCountry = e.value;
        const locFile = selectedCountry.substring(0, 2) + ".xml";
        Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile(locFile);

        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
        this.viewerOptions.height = "800px";

        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Globalization.mrt");
        this.report.culture = selectedCountry;
    }

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();

        this.update({ value: 'en-US' });
    }
}