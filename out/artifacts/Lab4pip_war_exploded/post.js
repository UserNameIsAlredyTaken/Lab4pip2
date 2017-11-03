
export default {
    el: "#time",
    data: {
        password: '',
        login: ''
    },
    methods: {
        send: function () {
            this.$http.post('/func',this.login,this.password,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }}).then((response) => {});
        }
    }
}