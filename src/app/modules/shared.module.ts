import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,

		MatTooltipModule,		//Prevent bug: No provider for InjectionToken mat-tooltip-scroll-strategy!
		MatSelectModule,		//Prevent bug: No provider for InjectionToken mat-select-scroll-strategy!
		MatDialogModule, 		//For showing ConfirmDialogComponent in AlertService
		ToastrModule.forRoot(), //For showing message in AlertService
	],
	exports: [
		ToastrModule,
		FlexLayoutModule,
	],
	entryComponents: []
})
export class SharedModule { }
