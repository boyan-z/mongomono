import { NgModule } from '@angular/core';

import { MongomonoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MongomonoSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MongomonoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MongomonoSharedCommonModule {}
