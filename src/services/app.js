// const initalState = () => ({
// 	api_url: "/api.json",
// 	step_section: 0,
// 	step_question: 0,
// 	sections: [],
// 	form: {},
// 	visible: false
// })
const initalState = () => ({
	api_url: "/api.json",
	step_section: 1,
	step_question: 8,
	sections: [],
	form: {
		nick_name: "Vinicius",
		full_name: "Vinicius Bassalobre",
		doc_number: "406.145.898-19",
		birthdate: "08/04/1992",
		gender: "male",
		marital_status: "stable union",
		has_children: false,
		level_of_education: "complete university",
		height: 1.74
	},
	visible: false
})

Vue.directive('mask', VueMask.VueMaskDirective)
new Vue({
	el: '#app',
	data() {
		return initalState()
	},
	created() {
		this.loadSections()
	},
	watch: {
		form: {
			handler(val) {
				console.log(val)
			},
			deep: true
		}
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
		},
		show_progress() {
			return this.current_section?.title ? true : false
		},
		progress_sections() {
			let steps = this.sections.map((x, i) => ({
				title: x.title,
				progress_color: x.progress_color,
				index: i,
				total_questions: x.questions.length
			}))
			return steps
		},
		can_next() {
			let qty_success = this.current_question.inputs.map(x => this.form[x.field] && this.testRegex(x.validation_rule, this.form[x.field])).filter(x => x).length
			let qty_questions = this.current_question.inputs.length
			return qty_success == qty_questions
		}
	},
	methods: {
		testRegex(rule, value) {
			let regex = new RegExp(rule ?? '$')
			return regex.test(value ?? "")
		},
		getProgressSectionPercentage(step) {
			if (step.index > this.step_section) return "0%"
			if (step.index < this.step_section) return "100%"
			let total = this.sections[step.index].questions.length
			let current = this.step_question + 1
			let percentage = Math.round(current * 100 / total)
			return `${percentage}%`
		},
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
		cleanForm() {
			this.current_question.inputs.forEach(x => {
				this.$set(this.form, x.field, undefined)
			})
		},
		previousQuestion() {
			this.cleanForm()
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