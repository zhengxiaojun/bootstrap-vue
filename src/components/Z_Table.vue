<template>
  <div class="overflow-auto" id="ztable">
    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="基本">
          <b-card-text>
            <b-table striped hover :items="items"></b-table>
          </b-card-text>
        </b-tab>
        <b-tab title="表头及排序">
          <b-card-text>
            <b-table striped hover :items="items" :fields="fields"></b-table>
          </b-card-text>
        </b-tab>
        <b-tab title="表样式">
          <b-card-text>
            <b-form-group label="Table Options" label-cols-lg="2">
              <b-form-checkbox v-model="striped" inline>Striped</b-form-checkbox>
              <b-form-checkbox v-model="bordered" inline>Bordered</b-form-checkbox>
              <b-form-checkbox v-model="borderless" inline>Borderless</b-form-checkbox>
              <b-form-checkbox v-model="outlined" inline>Outlined</b-form-checkbox>
              <b-form-checkbox v-model="small" inline>Small</b-form-checkbox>
              <b-form-checkbox v-model="hover" inline>Hover</b-form-checkbox>
              <b-form-checkbox v-model="dark" inline>Dark</b-form-checkbox>
              <b-form-checkbox v-model="fixed" inline>Fixed</b-form-checkbox>
              <b-form-checkbox v-model="footClone" inline>Foot Clone</b-form-checkbox>
              <b-form-checkbox v-model="noCollapse" inline>No border collapse</b-form-checkbox>
            </b-form-group>
            <b-form-group label="Head Variant" label-cols-lg="2">
              <b-form-radio-group v-model="headVariant" class="mt-lg-2">
                <b-form-radio :value="null" inline>None</b-form-radio>
                <b-form-radio value="light" inline>Light</b-form-radio>
                <b-form-radio value="dark" inline>Dark</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
            <b-form-group label="Table Variant" label-for="table-style-variant" label-cols-lg="2">
              <b-form-select v-model="tableVariant" :options="tableVariants" id="table-style-variant">
                <template v-slot:first>
                  <option value="">-- None --</option>
                </template>
              </b-form-select>
            </b-form-group>

            <b-table :striped="striped" :bordered="bordered" :borderless="borderless" :outlined="outlined" :small="small"
              :hover="hover" :dark="dark" :fixed="fixed" :foot-clone="footClone" :no-border-collapse="noCollapse"
              :items="items" :fields="fields" :head-variant="headVariant" :table-variant="tableVariant"></b-table>
          </b-card-text>
        </b-tab>
        <b-tab title="行样式">
          <b-card-text>
            <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass"></b-table>
          </b-card-text>
        </b-tab>
        <b-tab title="响应式">
          <b-card-text>
            <b-table responsive :items="items"></b-table>
          </b-card-text>
        </b-tab>
        <b-tab title="堆叠式">
          <b-card-text>
            <b-table stacked :items="items"></b-table>
          </b-card-text>
        </b-tab>
        <b-tab title="表标题">
          <b-card-text>
            <b-table :items="items" :fields="fields" caption-top>
              <template v-slot:table-caption>这是表的标题。</template>
            </b-table>
          </b-card-text>
        </b-tab>
        <b-tab title="选择行">
          <b-card-text>
            <b-form-group label="Selection mode:" label-cols-md="4">
              <b-form-select v-model="selectMode" :options="modes" class="mb-3"></b-form-select>
            </b-form-group>

            <b-table ref="selectableTable" selectable :select-mode="selectMode" selected-variant="success" :items="items"
              :fields="fields" @row-selected="onRowSelected" responsive="sm">
              <!-- Example scoped slot for select state illustrative purposes -->
              <template v-slot:cell(selected)="{ rowSelected }">
                <template v-if="rowSelected">
                  <span aria-hidden="true">&check;</span>
                  <span class="sr-only">Selected</span>
                </template>
                <template v-else>
                  <span aria-hidden="true">&nbsp;</span>
                  <span class="sr-only">Not selected</span>
                </template>
              </template>
            </b-table>
            <p>
              <b-button size="sm" @click="selectAllRows">Select all</b-button>
              <b-button size="sm" @click="clearSelected">Clear selected</b-button>
              <b-button size="sm" @click="selectThirdRow">Select 3rd row</b-button>
              <b-button size="sm" @click="unselectThirdRow">Unselect 3rd row</b-button>
            </p>
            <p>
              Selected Rows:<br>
              {{ selected }}
            </p>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        modes: ['multi', 'single', 'range'],
        fields: [{
            key: 'selected'
          },
          {
            key: 'first_name',
            sortable: false
          },
          {
            key: 'last_name',
            sortable: false
          },
          {
            key: 'age',
            sortable: true,
            variant: 'success'
          }
        ],
        perPage: 5,
        currentPage: 1,
        items: [{
            id: 1,
            first_name: 'Fred',
            last_name: 'Flintstone',
            age: 30
          },
          {
            id: 2,
            first_name: 'Wilma',
            last_name: 'Flintstone',
            age: 21
          },
          {
            id: 3,
            first_name: 'Barney',
            last_name: 'Rubble',
            _rowVariant: 'danger',
            age: 26
          },
          {
            id: 4,
            first_name: 'Betty',
            last_name: 'Rubble',
            _cellVariants: {
              last_name: 'info',
              first_name: 'warning'
            },
            age: 29
          },
          {
            id: 5,
            first_name: 'Pebbles',
            last_name: 'Flintstone',
            age: 18
          },
          {
            id: 6,
            first_name: 'Bamm Bamm',
            last_name: 'Rubble',
            age: 16
          },
          {
            id: 7,
            first_name: 'The Great',
            last_name: 'Gazzoo',
            age: 32
          },
          {
            id: 8,
            first_name: 'Rockhead',
            last_name: 'Slate',
            age: 45
          },
          {
            id: 9,
            first_name: 'Pearl',
            last_name: 'Slaghoople',
            age: 67
          }
        ],
        tableVariants: [
          'primary',
          'secondary',
          'info',
          'danger',
          'warning',
          'success',
          'light',
          'dark'
        ],
        striped: false,
        bordered: false,
        borderless: false,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: false,
        footClone: false,
        headVariant: null,
        tableVariant: '',
        noCollapse: false,
        selectMode: 'multi',
        selected: []
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    methods: {
      rowClass(item, type) {
        if (!item) return
        if (item.first_name === 'Betty') return 'table-success'
      },
      onRowSelected(items) {
        this.selected = items
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      },
      selectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.selectRow(2)
      },
      unselectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.unselectRow(2)
      }
    },
    name: 'ZTable'
  }
</script>
<style>
  #ztable {
    margin-top: 10px;
  }
</style>
