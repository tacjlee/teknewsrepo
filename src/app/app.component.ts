import { Component, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	//encapsulation: ViewEncapsulation.None //Apply this css for global
})
export class AppComponent {
	title = "app";
}
