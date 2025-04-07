import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "registering-data-from-code",
    imports: [Viewer],
    template: `
        <div class="container">
            <div class="container-button">
                <button (click)="buttonXmlClick()" class="button" title="Using regData() method for registering XML data">Register XML Data</button>
                <button (click)="buttonJsonClick()" class="button" title="Using regData() method for registering JSON data">Register JSON Data</button>
            </div>
            <div>
                <sti-viewer [report]="report"></sti-viewer>
            </div>
        </div>`,
    styleUrls: ['../styles.css']
})

export class RegisteringDataFromCode {
    report = Stimulsoft.Report.StiReport.createNewDashboard();

    updateReport(dataSet: Stimulsoft.System.Data.DataSet) {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboards/Orders.mrt");
        this.report.dictionary.databases.clear();
        this.report.regData("Orders", "Orders", dataSet);
    }

    buttonXmlClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readXmlSchemaFile("Data/Orders.xsd");
        dataSet.readXmlFile("Data/Orders.xml");

        this.updateReport(dataSet);
    }

    buttonJsonClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readJsonFile("Data/Orders.json");

        this.updateReport(dataSet);
    }

    constructor() {
    }
}