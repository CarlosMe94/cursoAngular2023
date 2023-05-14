import { NgModule } from '@angular/core';
// import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    TableModule,
    ToolbarModule,
  ],
})
export class PrimeNgModule {}
