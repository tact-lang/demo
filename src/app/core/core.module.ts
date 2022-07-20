import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AssetsService } from '@core/services/assets.service';
import { BlogResolver } from '@core/guards/blog.resolver';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedModule, HttpClientModule, InlineSVGModule.forRoot(), RouterModule],
  providers: [AssetsService, BlogResolver]
})
export class CoreModule {}
