import { Component, ChangeDetectionStrategy } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { DxAutocompleteTypes } from 'devextreme-angular/ui/autocomplete';
import { Service, Task } from './app.service';

import { DxAutocompleteModule } from 'devextreme-angular';

@Component({
    selector: 'app-root',
    imports: [DxAutocompleteModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    providers: [Service],
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
    console.log(e.previousValue);
    console.log(e.value);
  }
}
