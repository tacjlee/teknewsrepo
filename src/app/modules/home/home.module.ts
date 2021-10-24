import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@modules/shared.module';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from "@angular/material/icon";
import { ProgressBarModule} from 'primeng/progressbar';

@NgModule({
	declarations: [
		HomeComponent,
	],

	imports: [
		CommonModule,
		FormsModule,          //For working with form
		ReactiveFormsModule,  //For working with form        
		HomeRoutingModule,

		MatIconModule,
		//=======================================
		//Material Modules
		//=======================================
		MatButtonModule,
		MatToolbarModule,
		ProgressBarModule,
		//=======================================
		//Shared Module
		//=======================================
		SharedModule,
	]

})
export class HomeModule { }
