import { Component } from '@angular/core';
import { Service, Task } from './app.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})

export class AppComponent {
  title = ''
  employeesTasks: Task[];
  dataSource: any;

  constructor(service: Service) {
    this.employeesTasks = service.getTasks();
    this.dataSource = new DataSource({
      store: new ArrayStore({
        data: this.employeesTasks,
        key: "ID"
      }),
      group: "Assignee"
    });
    
  }
  onValueChanged(e: any) {
    console.log(e.previousValue);
    console.log(e.value);
  }
}
