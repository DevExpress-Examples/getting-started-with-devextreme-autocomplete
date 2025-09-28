import { useCallback } from 'react';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import './App.css';
import DataSource from 'devextreme/data/data_source';
import { Autocomplete } from 'devextreme-react/autocomplete';
import type { AutocompleteTypes } from 'devextreme-react/autocomplete';
import { employeesTasks, type Task } from './data';

interface GroupRenderInfo {
  key: string;
  items?: Task[];
}

function App(): JSX.Element {
  const dataSource = new DataSource({
    store: {
      type: 'array',
      data: employeesTasks,
      key: 'ID',
    },
    group: 'Assignee',
  });

  const onValueChanged = useCallback((e: AutocompleteTypes.ValueChangedEvent) => {
    console.log(e.previousValue); // eslint-disable-line no-console
    console.log(e.value); // eslint-disable-line no-console
  }, []);

  const groupRender = useCallback((data: GroupRenderInfo) => (
    <span>
      Assigned to {data.key}
    </span>
  ), []);

  const itemRender = useCallback((data: Task, index: number) => (
    <span>
      {index + 1}. {data.Subject}
    </span>
  ), []);

  return (
    <div id="container">
      <Autocomplete
        dataSource={dataSource}
        valueExpr="Subject"
        grouped={true}
        label="Search for a task"
        labelMode="floating"
        showClearButton={true}
        groupRender={groupRender}
        onValueChanged={onValueChanged}
        itemRender={itemRender}
        wrapItemText={true}
        searchTimeout={300}
        maxLength={20}
      />
    </div>
  );
}

export default App;
