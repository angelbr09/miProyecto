import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterBotComponent} from "./footer/footer/footer-bot/footer-bot.component";
import {HeaderTopComponent} from "./header/header-top/header-top.component";



@NgModule({
  declarations: [
    FooterBotComponent,
    HeaderTopComponent
  ],
  exports: [
    FooterBotComponent,
    HeaderTopComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
