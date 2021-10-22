import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AlertService {
	timeout = 3800;
	constructor(private toastr: ToastrService) { }

	showSuccess(message) {
		this.toastr.success(message, 'Success', {
			timeOut: this.timeout,
			positionClass: 'toast-bottom-right'
		});
	}

	showError(message) {
		this.toastr.error(message, 'Error', {
			timeOut: this.timeout,
			positionClass: 'toast-bottom-right'
		});
	}

	showWarning(message) {
		this.toastr.warning(message, 'Warning', {
			timeOut: this.timeout,
			positionClass: 'toast-bottom-right'
		});
	}

	showInfo(message) {
		this.toastr.info(message, 'Info', {
			timeOut: this.timeout,
			positionClass: 'toast-bottom-right'
		});
	}
	
}
