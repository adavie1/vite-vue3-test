<template>
  <div>
    <vue-good-table
    :columns="columns"
    :rows="row"
    :search-options="{
      enabled: true,
      trigger: 'enter'
      }"
      :pagination-options="{
        enabled: true,
        mode: 'records',
        perPage: 10,
        position: 'top',
        dropdownAllowAll: false,
  }"
      />
    </div>

  </template>

  <script>

import rows from "./data/sites.json"

  export default {
    name: 'good-table',
/*    
    props: {
       
    rows: {
     type: Array
     }
    
    },
*/    
    data() {

      return {

        columns: [
          {
            label: 'Status',
            field: 'status',
          },
          {
            label: 'Site Name',
            field: 'siteName',
          },
          {
            label: 'Site Date',
            field: 'siteDate',
          },
          {
            label: 'Years Active',
            field: 'yearsActive',
            type: 'number',
          },
          {
            label: 'Structure',
            field: 'structureType',
          },
          {
            label: 'Height',
            field: 'structureHeight',
            type: 'number',
          },
          {
            label: 'Sharers',
            field: 'sharers',
            type: 'number',
          },
        ],

        row: this.rows,
      }

    }
  };
  </script>
