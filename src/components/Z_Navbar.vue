<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Bootstrap Vue</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="table" right>
            <b-dropdown-item href="/table">basic table</b-dropdown-item>
            <b-dropdown-item href="/fulltable">full table</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="/alert">alert</b-nav-item>
          <b-nav-item href="/breadcrumb">breadcrumb</b-nav-item>
          <b-nav-item href="/listgroup">listgroup</b-nav-item>
          <b-nav-item href="/modal">modal</b-nav-item>
          <b-nav-item href="/spinner">spinner</b-nav-item>
          <b-nav-item href="/pagination">pagination</b-nav-item>
          <b-nav-item href="/ajax">ajax</b-nav-item>

          <b-nav-item-dropdown text="form" right>
            <b-dropdown-item href="/form">form</b-dropdown-item>
            <b-dropdown-item href="/formfile">formfile</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'ZNavbar'
  }
</script>

<style>
</style>
