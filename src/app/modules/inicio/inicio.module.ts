import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioPage } from './pages/inicio/inicio.page';
import {InicioMaterialModule} from "./inicio-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";


@NgModule({
  declarations: [
    InicioPage
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    InicioMaterialModule,
    ReactiveFormsModule,
    PerfectScrollbarModule
  ]
})
export class InicioModule { }
