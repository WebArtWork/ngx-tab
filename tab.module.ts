import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { TabComponent } from './tab.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		TabComponent
	],
	exports: [
		TabComponent
	],
	providers: []

})

export class TabModule { }
