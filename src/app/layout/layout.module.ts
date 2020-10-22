import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ErrorComponent,
  ],
  imports: [SharedModule],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class LayoutModule {}
