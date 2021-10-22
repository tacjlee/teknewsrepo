import {
	NgModule,
	CUSTOM_ELEMENTS_SCHEMA,
	NO_ERRORS_SCHEMA,
	APP_INITIALIZER,
} from "@angular/core";
import {
	CommonModule,
	LocationStrategy,
	HashLocationStrategy
} from "@angular/common";
import { HttpClientModule,HttpClientJsonpModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@modules/shared.module";

//============================================================
//User's Modules, don't need to declare lazy modules
//============================================================
import { AppRoutingModule } from "./app-routing.module";

//============================================================
//Basic Modules
//============================================================
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//============================================================
//Components
//============================================================
import { AppComponent } from "./app.component";

@NgModule({
	// Declaration is of things you will use in your templates,
	// Components declaration are in local scope
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		CommonModule, 					//*ngFor, *ngIf
		HttpClientModule,
		HttpClientJsonpModule,
		
		FormsModule, 					//For working with form
		ReactiveFormsModule, 			//For working with form

		BrowserAnimationsModule,
		SharedModule,
	],

	// Providers is for services, Angular6 services don't need to be registered in a module any more.
	// Provider: services are in global scope
	providers: [
		{ provide: "BASE_URL", useFactory: getBaseUrl },
		// make sure you use this for Hash Urls rather than HTML 5 routing
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
	return document.getElementsByTagName("base")[0].href;
}
