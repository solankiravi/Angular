import { ErrorDialogService } from './../../Shared/Services/error-dialog.service';
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorDialogService: ErrorDialogService) {}

  handleError(error: Error) {
    this.errorDialogService.openDialog(
      error.message || "Undefined client error"
    );
    console.error("Error from global error handler", error);
  }
}
