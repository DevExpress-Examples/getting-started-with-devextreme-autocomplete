import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import { employeesTasks } from './data';
import DataSource from 'devextreme/data/data_source';
import { Autocomplete } from 'devextreme-react';

const onValueChanged = useCallback((e) => {
  console.log(e.previousValue);
  console.log(e.value);
}, []);

const groupRender = (e) => {
  return "Assigned to " + e.key;
}

const itemRender = (e, index) => {
  return index + 1 + '. ' + e.Subject;
}

function App() {
  const dataSource = new DataSource({
    store: {
      type: 'array',
      data: employeesTasks,
      key: 'ID',
    },
    group: 'Assignee',
  });

  return (
    <div>
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
      >
      </Autocomplete>
    </div>
  );
}

export default App;
