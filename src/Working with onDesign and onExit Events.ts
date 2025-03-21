import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-dashboards-js-angular/viewer";
import { Designer } from "stimulsoft-dashboards-js-angular/designer";

@Component({
    selector: "working-with-on-design-and-on-exit-events",
    imports: [Designer, Viewer],
    template: `
    @if(isViewer){
        <sti-viewer [report]="report" [options]="viewerOptions" (onDesignReport)="onDesignReport($event)" (onOpenedReport)="onOpenedReport($event)"></sti-viewer>
    }
    @else {
        <sti-designer [(report)]="report" [options]="designerOptions" (onExit)="onExitDesigner()" (onAssignedReport)="onAssignedReport($event)"></sti-designer>
    }
    `
})

export class WorkingWithOnDesignAndOnExitEvents {
    report: Stimulsoft.Report.StiReport;
    viewerOptions: Stimulsoft.Viewer.StiViewerOptions;
    designerOptions: Stimulsoft.Designer.StiDesignerOptions;
    isViewer = true;

    onDesignReport(args: Stimulsoft.Viewer.DesignReportArgs) {
        this.isViewer = false;
    }

    onOpenedReport(args: Stimulsoft.Viewer.OpenedReportArgs) {
        this.report = args.report;
    }

    async onExitDesigner() {
        await this.report.renderAsync2();
        this.isViewer = true;
    }

    onAssignedReport(args: Stimulsoft.Designer.AssignedReportArgs) {
        this.report = args.report;
    }

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();
        this.report.loadFile("Dashboard.mrt");

        this.viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
        this.viewerOptions.appearance.fullScreenMode = true;
        this.viewerOptions.toolbar.displayMode = Stimulsoft.Viewer.StiToolbarDisplayMode.Separated;
        this.viewerOptions.toolbar.showFullScreenButton = false;
        this.viewerOptions.toolbar.showDesignButton = true;

        this.designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
        this.designerOptions.appearance.fullScreenMode = true;
        this.designerOptions.toolbar.showFileMenuExit = true;
    }
}