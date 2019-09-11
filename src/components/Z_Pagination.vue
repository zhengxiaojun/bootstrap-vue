<template>
  <div id="zpagination">
    <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small></b-table>

    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
    <p class="mt-3">当前页码： {{ currentPage }} , 总条数： {{ rows }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    name: 'ZPagination'
  }
</script>

<style>
  #zpagination {
    margin-top: 10px;
  }
</style>
