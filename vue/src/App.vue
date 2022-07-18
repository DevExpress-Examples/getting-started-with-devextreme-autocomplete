<template>
  <div id="container">
    <DxAutocomplete
        :data-source="dataSource"
        value-expr="Subject"
        :grouped="true"
        label="Search for a task"
        label-mode="floating"
        :show-clear-button="true"
        @value-changed="onValueChanged"
        :wrap-item-text="true"
        :search-timeout="300"
        :max-length="20"
        group-template="group"
        item-template="item"
      >
      <template #group="{data}">
        {{ "Assigned to " + data.key }}
      </template>
      <template #item="{data, index}">
        {{ index + 1 + ". " + data.Subject }}
      </template>
    </DxAutocomplete>
  </div>
</template>

<script>
import { DxAutocomplete } from 'devextreme-vue/autocomplete'
import DataSource from 'devextreme/data/data_source';
import { employeesTasks } from './data.js';

export default {
  components: {
    DxAutocomplete
  },
  data() {
    return {
      dataSource: new DataSource({
        store: {
          type: 'array',
          data: employeesTasks,
          key: 'ID',
        },
        group: 'Assignee',
      }),
    };
  },
  methods: {
    onValueChanged(e) {
      console.log(e.previousValue);
      console.log(e.value);
    }
  }
};
</script>

<style>
#container {
    width: 400px;
}
</style>
