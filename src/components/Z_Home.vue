<template>
  <div id="zhome">
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="介绍" active>
          <b-card-text>
            <b-jumbotron>
              <template v-slot:header>BootstrapVue</template>

              <template v-slot:lead>
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                featured content or information.
              </template>

              <hr class="my-4">

              <p>
                It uses utility classes for typography and spacing to space content out within the larger
                container.
              </p>

              <b-button variant="primary" href="#">Do Something</b-button>
              <b-button variant="success" href="#">Do Something Else</b-button>
            </b-jumbotron>
          </b-card-text>
        </b-tab>
        <b-tab title="图片">
          <b-card-text>
            <b-img src="https://picsum.photos/1024/400/?image=41" id='img' fluid alt="Responsive image"></b-img>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'ZHome'
  }
</script>

<style>
  #img {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 10px;
  }

  #zhome {
    margin-top: 10px;
  }
</style>
