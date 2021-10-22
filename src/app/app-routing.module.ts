import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";

import { AlertService } from "@services/alert.service";

const appRoutes: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{
		path: "home",
		loadChildren: () =>
			import("./modules/home/home.module").then(m => m.HomeModule)
	},
	{
		path: "newsdetail/:id",
		loadChildren: () =>
			import("./modules/news-detail/news-detail.module").then(m => m.NewsDetailModule)
	},
	//Put your code here
	
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes
		//{ enableTracing: true } // <-- debugging purposes only
		,{ relativeLinkResolution: 'legacy' })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
	constructor(private router: Router, private alertService: AlertService) {
		this.router.errorHandler = (error: any) => {
			console.log(error.message);
			//Should not call router.navigate here, bz we need redirect from interceptor.response.
		};
	}
}
