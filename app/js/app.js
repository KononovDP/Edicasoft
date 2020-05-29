var app = new Vue({
  el: '#form',
  data: {
    name: '',
    errorName: false,
    errorNameMessage: '',

    email: '',
    errorEmail:  false,
    errorEmailMessage: '',
    emailReg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    
    phone: '',
    errorPhone:  null,
    errorPhoneMessage: '',
    phoneReg: /^\d{10}$/
  },
  methods: {
    isNameValid() {
      if(!this.name) {
        this.errorName = true
        this.errorNameMessage = 'This filed is required'
      }else{
        this.errorName = false
        this.errorNameMessage = ''
      }
    },
    isEmailValid() {
      if(!this.email) {
        this.errorEmail = true
        this.errorEmailMessage = 'This filed is required'
      }else if(!this.emailReg.test(this.email)){
        this.errorEmail = true
        this.errorEmailMessage = 'Please Enter Correct Email'
      }else{
        this.errorEmail = false
        this.errorEmailMessage = ''
      }
    },
    isPhoneValid() {
      if(!this.phone) {
        this.errorPhone = true
        this.errorPhoneMessage = 'This filed is required'
      }else if(!this.phoneReg.test(this.phone)){
        this.errorPhone = true
        this.errorPhoneMessage = 'Please Enter Correct Phone Number'
      }else{
        this.errorPhone = false
        this.errorPhoneMessage = ''
      }
    },
    handleSubmit() {
      this.isNameValid()
      this.isEmailValid()
      this.isPhoneValid()

      if(!this.errorName && !this.errorEmail && !this.errorPhone) {
        console.log(`name - ${this.name}`)
        console.log(`email - ${this.email}`)
        console.log(`phone - ${this.phone}`)
        this.resetForm()
      }
    },
    resetForm() {
      this.name = this.email = this.phone = ''
      this.errorName = this.errorEmail = this.errorPhone = false
      this.errorNameMessage = this.errorEmailMessage = this.errorPhoneMessage = ''
    }
  }
})