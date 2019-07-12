import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MongomonoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MongomonoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MongomonoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MongomonoSharedModule {
  static forRoot() {
    return {
      ngModule: MongomonoSharedModule
    };
  }
}
