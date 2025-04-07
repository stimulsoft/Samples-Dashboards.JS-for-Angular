import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "globalizing-dashboard",
    imports: [Viewer],
    template: `
        <div class="container">
            <div class="container-control">
                <label class="label-globalization">Select Language</label>
                <select (change)="update($event.target)" class="select-globalization">
                        <option [value]="'en-US'">English</option>
                        <option [value]="'de-DE'">Deutsch</option>
                        <option [value]="'ru-RU'">Russian</option>
                </select>
            </div>
            <div>
                <sti-viewer [report]="report" [options]="viewerOptions"></sti-viewer>
            </div>
        </div>`,
        styleUrls: ['../styles.css']
})

export class GlobalizingDashboard {
    report: Stimulsoft.Report.StiReport;
    viewerOptions: Stimulsoft.Viewer.StiViewerOptions;

    update(e: any) {
        var selectedCountry = e.value;
        const locFile = `Localizations/` + selectedCountry.substring(0, 2) + ".xml";
        Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile(locFile);

        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
        this.viewerOptions.height = "800px";

        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboards/Globalization.mrt");
        this.report.culture = selectedCountry;
    }

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();

        this.update({ value: 'en-US' });
    }
}