import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@modules/shared.module';

//Angular Material
import { MatButtonModule } from '@angular/material/button';

import { NewsDetailComponent } from './news-detail.component';
import { NewsDetailRoutingModule } from './news-detail-routing.module';

@NgModule({
	declarations: [
		NewsDetailComponent
	],

	imports: [
		CommonModule,
		FormsModule,          //For working with form
		ReactiveFormsModule,  //For working with form        
		NewsDetailRoutingModule,

		//=======================================
		//Material Modules
		//=======================================
		MatButtonModule,

		//=======================================
		//Shared Module
		//=======================================
		SharedModule,
	]

})
export class NewsDetailModule { }
