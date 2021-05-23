const initalState = () => ({
	api_url: "/api.json",
	step_section: 1,
	step_question: 0,
	sections: [],
	form: {
		nickname: "Vinicius"
	},
	visible: false
})
new Vue({
	el: '#app',
	data() {
		return initalState()
	},
	created() {
		this.loadSections()
	},
	computed: {
		global_index() {
			return `${this.step_section}_${this.step_question}`
		},
		current_section() {
			return this.sections[this.step_section]
		},
		current_question() {
			return this.current_section?.questions[this.step_question]
		},
		inputs() {
			return this.current_question?.inputs ?? []
		},
		has_more_question() {
			return this.current_section?.questions.length > (this.step_question + 1)
		},
		has_more_sections() {
			return this.sections.length > (this.step_section + 1)
		},
		can_go_back() {
			return this.global_index != '0_0'
		}
	},
	methods: {
		loadSections() {
			fetch(this.api_url).then(resp => {
				resp.json().then(data => {
					this.sections = data.sections
					this.visible = true
				})
			})
		},
		nextQuestion() {
			if (this.has_more_question) {
				this.step_question++
				return this.$forceUpdate()
			}
			if (this.has_more_sections) {
				this.step_question = 0
				return this.step_section++
			}
			this.finishWizard()
		},
		previousQuestion() {
			if (this.step_question > 0) {
				return this.step_question--
			}
			if (this.step_question == 0) {
				this.step_section--
				return this.step_question = this.current_section.questions.length - 1
			}
		},
		finishWizard() {
			alert("Finalizado !!")
			console.log(this.form)
		}
	}
})