import { bootstrapApplication } from "@angular/platform-browser";
import { ApplicationConfig, Component } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
import { RouterOutlet } from "@angular/router";

import { LocalizingTheDesigner } from './Localization and Globalization/Localizing the Designer';
import { LocalizingTheViewer } from './Localization and Globalization/Localizing the Viewer';
import { GlobalizingDashboard } from './Localization and Globalization/Globalizing Dashboard';

import { UsingCustomFont } from './Fonts and Resources/Using a Custom Font';
import { AddingFontToTheResource } from './Fonts and Resources/Adding a Font to the Resource';

import { PrintingTheDashboardFromCode } from './Printing and Exporting/Printing the Dashboard from Code';
import { ExportingDashboardToPDF } from './Printing and Exporting/Exporting a Dashboard to PDF';
import { ExportingDashboardToHTML } from './Printing and Exporting/Exporting a Dashboard to HTML';
import { ExportingDashboardFromCodeWithChangingExportSettings } from './Printing and Exporting/Exporting a Dashboard from Code with Changing Export Settings';

import { CreatingNewDataConnectionFromCode } from './Data Connection and Registration/Creating a new Data Connection from code';
import { RegisteringDataFromCode } from './Data Connection and Registration/Registering Data from Code';
import { UsingSqlDataSources } from './Data Connection and Registration/Using SQL Data Sources';
import { UsingParametersInSqlQuery } from './Data Connection and Registration/Using Parameters in SQL Query';
import { UsingCustomDataAdapter } from './Data Connection and Registration/Using a Custom Data Adapter';
import { SupplyCustomHeadersForJsonDatabase } from './Data Connection and Registration/Supply Custom Headers for JSON Database';

import { CustomizingTheDesigner } from './Working with Designer and Viewer Settings and Events/Customizing the Designer';
import { ChangingTheDesignerTheme } from './Working with Designer and Viewer Settings and Events/Changing the Designer Theme';
import { CustomizingTheViewer } from './Working with Designer and Viewer Settings and Events/Customizing the Viewer';
import { ChangingTheViewerTheme } from './Working with Designer and Viewer Settings and Events/Changing the Viewer Theme';
import { UsingDesignerEvents } from './Working with Designer and Viewer Settings and Events/Using Designer Events';
import { UsingViewerEvents } from './Working with Designer and Viewer Settings and Events/Using Viewer Events';
import { WorkingWithOnDesignAndOnExitEvents } from './Working with Designer and Viewer Settings and Events/Working with onDesign and onExit Events';
import { UsingTheTwoViewerInTheOneProject } from './Working with Designer and Viewer Settings and Events/Using the two Viewer in the One Project';
import { GetModifiedDashboardFromTheDesigner } from './Working with Designer and Viewer Settings and Events/Get a modified Dashboard from the Designer';
import { UsingTheRightToLeftModeInTheViewer } from './Working with Designer and Viewer Settings and Events/Using the Right-To-Left Mode in the Viewer';

import { HowToActivateTheProduct } from './Working with Dashboards and Advanced Features/How to Activate the Product';
import { UsingDashboardVariablesInCode } from './Working with Dashboards and Advanced Features/Using Dashboard Variables in Code';
import { CreatingDashboardAtRuntime } from './Working with Dashboards and Advanced Features/Creating Dashboard at Runtime';

import { ListSamples } from './ListSamples'

@Component({
    selector: "app-root",
    imports: [RouterOutlet],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {

}

const appRoutes: Routes = [
    { path: '', component: ListSamples },

    { path: 'Localizing_the_Designer', component: LocalizingTheDesigner },
    { path: 'Localizing_the_Viewer', component: LocalizingTheViewer },
    { path: 'Globalizing_Dashboard', component: GlobalizingDashboard },

    { path: 'Using_Custom_Font', component: UsingCustomFont },
    { path: 'Adding_a_Font_to_the_Resource', component: AddingFontToTheResource },

    { path: 'Printing_the_Dashboard_from_Code', component: PrintingTheDashboardFromCode },
    { path: 'Exporting_a_Dashboard_to_PDF', component: ExportingDashboardToPDF },
    { path: 'Exporting_a_Dashboard_to_HTML', component: ExportingDashboardToHTML },
    { path: 'Exporting_a_Dashboard_from_Code_with_Changing_Export_Settings', component: ExportingDashboardFromCodeWithChangingExportSettings },

    { path: 'Creating_a_new_Data_Connection_from_code', component: CreatingNewDataConnectionFromCode },
    { path: 'Registering_Data_from_Code', component: RegisteringDataFromCode },
    { path: 'Using_SQL_Data_Sources', component: UsingSqlDataSources },
    { path: 'Using_Parameters_in_SQL_Query', component: UsingParametersInSqlQuery },
    { path: 'Using_a_Custom_Data_Adapter', component: UsingCustomDataAdapter },
    { path: 'Supply_Custom_Headers_for_JSON_Database', component: SupplyCustomHeadersForJsonDatabase },

    { path: 'Customizing_the_Designer', component: CustomizingTheDesigner },
    { path: 'Changing_the_Designer_Theme', component: ChangingTheDesignerTheme },
    { path: 'Customizing_the_Viewer', component: CustomizingTheViewer },
    { path: 'Changing_the_Viewer_Theme', component: ChangingTheViewerTheme },
    { path: 'Using_Designer_Events', component: UsingDesignerEvents },
    { path: 'Using_Viewer_Events', component: UsingViewerEvents },
    { path: 'Working_with_onDesign_and_onExit_Events', component: WorkingWithOnDesignAndOnExitEvents },
    { path: 'Using_the_two_Viewer_in_the_One_Project', component: UsingTheTwoViewerInTheOneProject },
    { path: 'Get_a_modified_Dashboard_from_the_Designer', component: GetModifiedDashboardFromTheDesigner },
    { path: 'Using_the_Right-To-Left_Mode_in_the_Viewer', component: UsingTheRightToLeftModeInTheViewer },

    { path: 'How_to_Activate_the_Product', component: HowToActivateTheProduct },
    { path: 'Using_Dashboard_Variables_in_Code', component: UsingDashboardVariablesInCode },
    { path: 'Creating_Dashboard_at_Runtime', component: CreatingDashboardAtRuntime }
];

const appConfig: ApplicationConfig = {
    providers: [provideRouter(appRoutes)]
};

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
