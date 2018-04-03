import { Routes, RouterModule } from "@angular/router";
import { DataEntryHeadComponent } from "./data-entry-head/data-entry-head.component";
import { DataEntrySelectionComponent } from "./data-entry-selection/data-entry-selection.component";
import { ModuleWithProviders } from "@angular/core";




export const routes: Routes = [
    {path: '', component: DataEntryHeadComponent, pathMatch: 'full'},
    {path: 'selection', component: DataEntrySelectionComponent, pathMatch: 'full'}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);