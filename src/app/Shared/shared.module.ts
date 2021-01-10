import { ErrorDialogService } from './Services/error-dialog.service';
import { ErrorDialogComponent } from './Components/error-dialog/error-dialog.component';

import { MaterialModule } from './../material.module';

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoadingDialogComponent } from './Components/loading-dialog/loading-dialog.component';

const sharedComponents = [ErrorDialogComponent];

@NgModule({
  declarations: [...sharedComponents, LoadingDialogComponent],
  imports: [CommonModule, RouterModule,MaterialModule],
  exports: [...sharedComponents],
  providers: [
    ErrorDialogService
  ],
  entryComponents: [...sharedComponents]
})

export class SharedModule {}