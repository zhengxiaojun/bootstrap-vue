<template>
  <div id="zbreadcrumb">
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    },
    name: 'ZBreadCrumb'
  }
</script>

<style>
  #zbreadcrumb {
    margin-top: 10px;
  }
</style>
