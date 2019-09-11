<template>
  <div id="zform">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label-for="city">
        <b-input-group prepend="城市" class="mt-3">
          <b-form-input id="city" v-model="form.city" required placeholder="Enter city"></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="name">
        <b-input-group prepend="姓名" class="mt-3">
          <b-form-input id="name" v-model="form.user.name" required placeholder="Enter name"></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="age">
        <b-input-group prepend="年龄" class="mt-3">
          <b-form-input id="age" v-model="form.user.age" required placeholder="Enter age"></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group id="input-group-4" label="课程" label-for="subjects">
        <b-form-checkbox-group id="subjects" v-model="form.user.subjects" :options="options1" name="flavour-1"></b-form-checkbox-group>
      </b-form-group>

      <b-form-group label="学生">
        <b-form-radio-group v-model="form.user.isStudent" :options="options2" name="radio-inline"></b-form-radio-group>
      </b-form-group>

      <b-button variant="outline-primary" @click="get_data();">初始化</b-button>
      <b-button type="submit" variant="primary">提交</b-button>
      <b-button type="reset" variant="danger">重置</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          city: '',
          user: {
            name: '',
            age: '',
            subjects: [],
            isStudent: false
          }
        },
        options1: [{
            text: '语文',
            value: '语文'
          },
          {
            text: '数学',
            value: '数学'
          },
          {
            text: '英语',
            value: '英语'
          }
        ],
        options2: [{
            text: '是',
            value: true
          },
          {
            text: '否',
            value: false
          }
        ]
      }
    },
    methods: {
      get_data() {
        this.$http.jsonp('http://0.0.0.0:8081/api/v2/user/jsonp', {
          jsonpCallback: 'callback'
        }).then(function(resp) {
          var data = resp.body
          this.form.city = data.city
          this.form.user.age = data.user.age
          this.form.user.name = data.user.name
          this.form.user.subjects = data.user.subjects
          this.form.user.isStudent = data.user.isStudent
        })
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.city = ''
        this.form.user.name = ''
        this.form.user.age = ''
        this.form.user.subjects = []
        this.form.user.isStudent = false
      }
    },
    name: 'ZAjax'
  }
</script>

<style>
  #zajax {
    margin-top: 10px;
  }
</style>
