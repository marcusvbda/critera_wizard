
new Vue({
	el: '#app',
	data() {
		return {
			api_url: "/questions.json",
			step: 0
		}
	},
	created() {
		this.loadQuestions()
	},
	methods: {
		loadQuestions() {
			fetch(this.api_url).then(resp => {
				resp.json().then(data => {
					console.log(data)
				})
			})
		}
	}
})