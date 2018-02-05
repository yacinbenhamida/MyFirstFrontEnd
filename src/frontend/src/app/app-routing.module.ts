import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './listing/listEmployee.component';
import { AddComponent} from './adding/addEmployee.component';
import { InfoComponent } from './infos/employee-info.component';
const appRoutes: Routes = [
  { path: 'list-employee', component: ListComponent },
  { path: 'add-employee', component: AddComponent },
  { path : 'information/:id',component : InfoComponent}
];

@NgModule({
    imports: [
            RouterModule.forRoot(appRoutes)
        ],    
    exports : [ RouterModule
    ]
})
export class AppRoutingModule{}
export const routingComponents = [ListComponent,AddComponent,InfoComponent]