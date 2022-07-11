import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';
import { FooterBotComponent } from './components/footer/footer-bot/footer-bot.component';




@NgModule({
    declarations: [
        HeaderTopComponent,
        FooterBotComponent
    ],
  exports: [
    HeaderTopComponent,
    FooterBotComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
