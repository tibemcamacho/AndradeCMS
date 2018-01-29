import { NgModule } from '@angular/core';
import { EmpresaRoutingModule } from "./empresa-routing.module";
import { EmpresaComponent } from "./empresa.component";
import { EmpresaService } from "./empresa.service";
import { CommonModule } from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { NgbModule }                from '@ng-bootstrap/ng-bootstrap';
import { SharedPipesModule, 
         SortableTableModule }      from '../shared';
import {ReactiveFormsModule} from "@angular/forms";
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    SharedPipesModule,
    SortableTableModule,
    DataTablesModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    EmpresaComponent
  ],
  providers:[
    EmpresaService
]
})
export class EmpresaModule { }
