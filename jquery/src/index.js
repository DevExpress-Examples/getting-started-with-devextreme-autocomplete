$(function() {
    const dataSource = new DevExpress.data.DataSource({
        store: {
            type: 'array',
            data: employeesTasks,
            key: 'ID',
        },
        group: 'Assignee',
    });
    
    $('#autocomplete').dxAutocomplete({
        dataSource,
        valueExpr: "Subject",
        label: "Search for a task",
        labelMode: "floating",
        grouped: true,
        showClearButton: true,
        groupTemplate ({ key }) {
            return "Assigned to " + key;
        },
        onValueChanged: function(e) {
            console.log(e.value);
            console.log(e.previousValue);
        },
        itemTemplate ({ Subject }, index) {
            return index + 1 + '. ' + Subject;
        },
        wrapItemText: true,
        searchTimeout: 300,
        maxLength: 20
    });
});