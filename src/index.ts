import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMoreDirective } from './showMore.directive';

export * from './showMore.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
    ShowMoreDirective,
    
  ],
  exports: [
    ShowMoreDirective
  ]
})
export class ShowMoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShowMoreModule,
    };
  }
}
