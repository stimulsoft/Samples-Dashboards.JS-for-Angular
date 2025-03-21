import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";

@Component({
    selector: "creating-dashboard-at-runtime",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"></sti-viewer>`
})

export class CreatingDashboardAtRuntime {
    report: Stimulsoft.Report.StiReport;

    constructor() {
        this.report = Stimulsoft.Report.StiReport.createNewDashboard();
        var dashboard = this.report.pages.getByIndex(0) as Stimulsoft.Dashboard.Components.StiDashboard;

        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readJsonFile("Data/Demo.json");

        this.report.regData("Demo", "Demo", dataSet);
        this.report.dictionary.synchronize();

        var tableElement = new Stimulsoft.Dashboard.Components.Table.StiTableElement();
        tableElement.left = 0;
        tableElement.top = 0;
        tableElement.width = 700;
        tableElement.height = 500;
        tableElement.backColor = Stimulsoft.System.Drawing.Color.lightGray;
        tableElement.name = "Example";

        var dataBase = new Stimulsoft.Dashboard.Components.Table.StiDimensionColumn();
        dataBase.expression = "Products.ProductID";
        tableElement.columns.add(dataBase);

        var dataBase1 = new Stimulsoft.Dashboard.Components.Table.StiDimensionColumn();
        dataBase1.expression = "Products.ProductName";
        tableElement.columns.add(dataBase1);

        var dataBase2 = new Stimulsoft.Dashboard.Components.Table.StiDimensionColumn();
        dataBase2.expression = "Products.UnitPrice";
        tableElement.columns.add(dataBase2);

        var filter1 = new Stimulsoft.Data.Engine.StiDataFilterRule();
        filter1.condition = Stimulsoft.Data.Engine.StiDataFilterCondition.BeginningWith;
        filter1.path = "Products.ProductID";
        filter1.value = "1";
        tableElement.dataFilters.add(filter1);

        var filter2 = new Stimulsoft.Data.Engine.StiDataFilterRule();
        filter2.condition = Stimulsoft.Data.Engine.StiDataFilterCondition.EndingWith;
        filter2.path = "Products.UnitPrice";
        filter2.value = "1";
        tableElement.dataFilters.add(filter2);

        dashboard.components.add(tableElement);
    }
}