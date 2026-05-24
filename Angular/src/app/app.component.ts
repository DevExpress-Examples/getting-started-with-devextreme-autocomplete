import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { DxAutocompleteTypes } from 'devextreme-angular/ui/autocomplete';
import { Service, Task } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [Service],
    standalone: false
})

export class AppComponent {
  title = '';

  employeesTasks: Task[];

  dataSource: DataSource<Task>;

  constructor(service: Service) {
    this.employeesTasks = service.getTasks();
    this.dataSource = new DataSource({
      store: new ArrayStore({
        data: this.employeesTasks,
        key: 'ID',
      }),
      group: 'Assignee',
    });
  }

  onValueChanged(e: DxAutocompleteTypes.ValueChangedEvent): void {
    console.log(e.previousValue); // eslint-disable-line no-console
    console.log(e.value); // eslint-disable-line no-console
  }
}
