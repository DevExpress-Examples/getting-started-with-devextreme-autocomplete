<script setup lang="ts">
import { DxAutocomplete } from 'devextreme-vue/autocomplete';
import DataSource from 'devextreme/data/data_source';
import type { ValueChangedEvent } from 'devextreme/ui/autocomplete';
import { employeesTasks, type Task } from '../data';

const dataSource = new DataSource<Task>({
  store: {
    type: 'array',
    data: employeesTasks,
    key: 'ID',
  },
  group: 'Assignee',
});

function onValueChanged(e: ValueChangedEvent): void {
  console.log('Previous value:', e.previousValue);
  console.log('Current value:', e.value);
}
</script>

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

<style scoped>
#container {
    width: 400px;
}
</style>
