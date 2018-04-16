import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChildren, QueryList, AfterViewInit, OnDestroy, ComponentRef } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { CheckComponent } from './check/check.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { IItem } from './item.interface';
import { CustomGridsterItem } from './custom-gridster-item.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
	options: GridsterConfig;
	dashboard: Array<CustomGridsterItem>;
	fromRemove = false;
	components: ComponentRef<IItem>[] = [];
	@ViewChildren('host', { read: ViewContainerRef }) hosts: QueryList<ViewContainerRef>;

	static itemChange(item, itemComponent) {
		console.info('itemChanged', item, itemComponent);
	}

	static itemResize(item, itemComponent) {
		console.info('itemResized', item, itemComponent);
	}

	constructor(private componentFactoryResolver: ComponentFactoryResolver) {

	}

	ngOnInit() {
		this.options = {
			itemChangeCallback: AppComponent.itemChange,
			itemResizeCallback: AppComponent.itemResize,
			maxRows: 5,
			maxCols: 5,
			minCols: 5,
			minRows: 5
		};

		this.dashboard = [];
	}

	ngAfterViewInit(): void {
		this.hosts.changes.subscribe(
			() => {
				if (this.fromRemove) {
					this.fromRemove = false;
					return;
				}
				const host = this.hosts.last;
				const item = this.dashboard[this.dashboard.length - 1];
				const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.data.component);
				const component = host.createComponent(componentFactory);
				component.changeDetectorRef.detectChanges();
				this.components.push(component);
			}
		);
	}

	ngOnDestroy(): void {
		this.components.forEach(c => c.changeDetectorRef.detach());
	}

	changedOptions() {
		this.options.api.optionsChanged();
	}

	showInfo() {
		console.log('Items:')
		console.log(this.dashboard);
		console.log('Values');
		console.log(this.components.map(c => c.instance.value).join(', '));
	}

	removeItem(item) {
		this.fromRemove = true;
		const index = this.dashboard.indexOf(item);
		this.dashboard.splice(index, 1);
		this.components.splice(index, 1);
	}

	addCheck() {
		this.dashboard.push({ cols: 1, rows: 1, y: 0, x: 0, dragEnabled: true, resizeEnabled: true, data: { component: CheckComponent } });
	}

	addInput() {
		this.dashboard.push({ cols: 1, rows: 1, y: 0, x: 0, dragEnabled: true, resizeEnabled: true, data: { component: InputComponent } });
	}

	addRadio() {
		this.dashboard.push({ cols: 1, rows: 1, y: 0, x: 0, dragEnabled: true, resizeEnabled: true, data: { component: RadioComponent } });
	}
}
