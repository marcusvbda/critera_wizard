const initalState = () => ({
	api_url: "/api.json",
	step_section: 0,
	step_question: 0,
	finished: false,
	sections: [],
	form: {},
	visible: false,
	showing_confirm: false,
	details: {}
})
// const initalState = () => ({
// 	api_url: "/api.json",
// 	step_section: 4,
// 	step_question: 23,
// 	sections: [],
// 	finished: false,
// 	form: {
// 		nick_name: "Joao",
// 		full_name: "Joao da Silva",
// 		doc_number: "111.111.111-19",
// 		birthdate: "08/04/1992",
// 		gender: "Masculino",
// 		marital_status: "Namorando",
// 		has_children: "Sim",
// 		level_of_education: "Superior completo",
// 		height: 1.74,
// 		weight: 84,
// 		level_of_mental_health: 7,
// 		cardiovascular: ['Nenhuma das opções'],
// 		breathing: ["Nenhuma das opções"],
// 		gastrointestinal: ['Nenhuma das opções'],
// 		nervous_system: ['Nenhuma das opções'],
// 		osteomuscular_rheumatological: ['Nenhuma das opções'],
// 		endocrinology: ['Nenhuma das opções'],
// 		ophthalmology: ['Nenhuma das opções'],
// 		otorhinolaryngology: ['Nenhuma das opções'],
// 		urology: ['Nenhuma das opções'],
// 		skin: ['Nenhuma das opções'],
// 		allergies: ['Nenhuma das opções'],
// 		smoker: "Sim",
// 		first_cigarette: "Após 60 minutos",
// 		difficulty_breathing: "Sim",
// 		harder_cigarette: "O primeiro da manhã",
// 		cigarette_per_day: "Mais de 30 cigarros",
// 		cigarette_frequency: "Sim",
// 		sic_smoker: "Sim",
// 		drink_frequency: "Uma vez por mês ou menos",
// 		qty_drinks_per_day: "Uma ou duas",
// 		six_drink_frequency: "Nunca",
// 		difficulty_drink_stop_12_months: "Pelo menos uma vez por mês",
// 		difficulty_to_do_tasks_drunk: "Nunca",
// 		medicine_to_hangover_frequency: "Pelo menos uma vez por mês",
// 		alcoholic_amnesia_frequency: "Nunca",
// 		hurt_by_drinking: "Sim, aconteceu nos últimos 12 meses",
// 		sleeping_time_last_month: "22:00h",
// 		time_to_sleep_in_minutes: "30 minutos",
// 		wakeup_time_last_month: "10:00h",
// 		difficulty_to_wakeup_time_to_sleep: "Nenhuma no último mês",
// 		difficulty_to_wakeup_interrupted_sleep: "Nenhuma no último mês",
// 		difficulty_to_wakeup_bathroom: "Nenhuma no último mês",
// 		difficulty_to_wakeup_breathing_hard: "Nenhuma no último mês",
// 		difficulty_to_wakeup_snore: "Nenhuma no último mês",
// 		difficulty_to_wakeup_interrupted_cold: "Nenhuma no último mês",
// 		difficulty_to_wakeup_hot: "Nenhuma no último mês",
// 		difficulty_to_wakeup_pain: "Nenhuma no último mês",
// 		sleep_quality: "Ruim",
// 		difficulty_staying_awake_driving: "3 ou mais vezes na semana",
// 		enthusiasm: "Nenhuma dificuldade",
// 		have_a_partner: "Parceiro na mesma cama",
// 		partner_snore: "Nenhuma no último mês",
// 		partner_apnea: "Nenhuma no último mês",
// 		partner_spasms: "Nenhuma no último mês",
// 		partner_disorientation: "Nenhuma no último mês",
// 		physical_activity_vigorous_frequency: "Nenhum dia por semana",
// 		physical_activity_moderate_frequency: "Nenhum dia por semana",
// 		walking_frequency: "Nenhum dia por semana",
// 		sitting_time: "Nenhum tempo",
// 		mental_health_level: "Muito ruim",
// 		difficulty_to_calm_down: "Não aconteceu comigo nessa semana",
// 		dry_mouth: "Não aconteceu comigo nessa semana",
// 		cant_have_positive_feelings: "Não aconteceu comigo nessa semana",
// 		difficulty_breathing_mental_health: "Não aconteceu comigo nessa semana",
// 		initiative_to_do_something: "Não aconteceu comigo nessa semana",
// 		exaggerated_reactions: "Não aconteceu comigo nessa semana",
// 		tremors: "Não aconteceu comigo nessa semana",
// 		nervous: "Não aconteceu comigo nessa semana",
// 		panic: "Não aconteceu comigo nessa semana",
// 		positive_expectations: "Não aconteceu comigo nessa semana",
// 		hectic: "Não aconteceu comigo nessa semana",
// 		relax: "Não aconteceu comigo nessa semana",
// 		sad: "Não aconteceu comigo nessa semana",
// 		patience: "Não aconteceu comigo nessa semana",
// 		about_to_panic: "Não aconteceu comigo nessa semana",
// 		dont_get_excited: "Não aconteceu comigo nessa semana",
// 		value_as_a_person: "Não aconteceu comigo nessa semana",
// 		irritated: "Não aconteceu comigo nessa semana",
// 		accelerated_heart: "Não aconteceu comigo nessa semana",
// 		scared: "Não aconteceu comigo nessa semana",
// 		not_sense_life: "Não aconteceu comigo nessa semana",
// 	},
// 	visible: false,
// 	showing_confirm: false,
// 	details: {},
// })

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
		step_question() {
			this.showing_confirm = false
		},
		details: {
			handler(val) {
				console.log(val)
			},
			deep: true
		}
	},
	computed: {
		computed_sections() {
			let original_sections = Object.assign([], this.sections)
			let computed = original_sections.map(section => {
				section.computed_questions = section.questions.map(question => {
					if (!question?.condition) {
						return question
					} else {
						if (question.condition_type == '=') {
							let conditional_questions = question[this.form[question.condition]]
							if (conditional_questions) {
								return conditional_questions
							}
						} else {
							let condition_key = Object.keys(question).find(x => !['condition', 'condition_type'].includes(x))
							if (this.form[question.condition] != condition_key) {
								return question[condition_key]
							}
						}
					}
				}).filter(x => x)
				return section
			})
			return computed
		},
		show_level_crud() {
			let has_show = this.current_section?.show_level_crud ? true : false
			let has_input = false
			if (Array.isArray(this.form[this.input.field])) {
				has_input = this.form[this.input.field].filter(x => !['Nenhuma das opções', 'Outras'].includes(x)).length > 0
			}
			return has_show && has_input
		},
		global_index() {
			return `${this.step_section}_${this.step_question}`
		},
		current_section() {
			return this.getCurrentSection()
		},
		current_question() {
			return this.getCurrentQuestion()
		},
		input() {
			let current_question = this.getCurrentQuestion()
			return current_question?.input ?? false
		},
		has_more_question() {
			return this.current_section?.computed_questions.length > (this.step_question + 1)
		},
		has_more_sections() {
			return this.sections.length > (this.step_section + 1)
		},
		others_selected() {
			if (!Array.isArray(this.form[this.input.field])) {
				return false
			}
			return this.form[this.input.field].includes("Outras")
		},
		can_go_back() {
			return this.global_index != '0_0'
		},
		show_progress() {
			return this.current_section?.title ? true : false
		},
		progress_sections() {
			let steps = this.computed_sections.map((x, i) => ({
				number: x.number,
				title: x.title,
				progress_color: x.progress_color,
				index: i,
				total_questions: x.computed_questions.length
			}))
			return steps
		},
		can_next() {
			if (!this.input) {
				return true
			}
			let input_success = this.form[this.input.field] != undefined && this.testRegex(this.input.validation_rule, this.form[this.input.field])
			let passed_others = true
			if (this.others_selected) {
				passed_others = this.form[`${this.input.field}_others`] ? true : false
			}
			return input_success && passed_others
		},
		can_next_details() {
			let details = this.details[this.current_section.title][this.input.field]
			let passed = Object.keys(details).map(x => details[x]).filter(x => !x).length == 0
			return passed
		},
		adicional_steps() {
			let details = this.details[this.current_section.title] ?? {}
			let keys = Object.keys(details)
			let qty = Object.keys(keys).length ?? 0
			return qty
		}
	},
	methods: {
		goBackDetails() {
			let current_details = Object.assign({}, this.details[this.current_section.title])
			delete current_details[this.input.field]
			this.$set(this.details, this.current_section.title, current_details)
			this.showing_confirm = false
		},
		changeOption(none = false) {
			if (none) {
				this.form[this.input.field] = this.form[this.input.field].filter(x => x == "Nenhuma das opções")
			} else {
				this.form[this.input.field] = this.form[this.input.field].filter(x => x != "Nenhuma das opções")
			}
		},
		getCurrentSection() {
			return this.computed_sections[this.step_section]
		},
		getCurrentQuestion() {
			let section = this.getCurrentSection()
			let question = section?.computed_questions[this.step_question]
			if (question?.condition) {
				question = question[this.form[question.condition]]
			}
			this.defineDefaultValues(question)
			return question
		},
		defineDefaultValues(question) {
			if (question?.input) {
				if (this.form[question.input.field] == undefined) {
					this.$set(this.form, question.input.field, question.input.default ?? null)
				}
			}
		},
		testRegex(rule, value) {
			let regex = new RegExp(rule ?? '$')
			return regex.test(value ?? "")
		},
		getProgressSectionPercentage(step) {
			if (step.index > this.step_section) return "0%"
			if (step.index < this.step_section) return "100%"
			let total = this.computed_sections[step.index].computed_questions.length
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
		nextQuestion(confirmed = false) {
			if (this.show_level_crud && !confirmed) {
				if (!this.details[this.current_section.title]) {
					this.$set(this.details, this.current_section.title, {})
				}
				this.$set(this.details[this.current_section.title], this.input.field, {})
				this.form[this.input.field].forEach(x => {
					this.$set(this.details[this.current_section.title][this.input.field], x, null)
				})
				this.showing_confirm = true
				return this.$forceUpdate()
			}
			if (this.has_more_question) {
				this.step_question++
				return this.$forceUpdate()
			}
			if (this.has_more_sections) {
				this.step_question = 0
				this.step_section++
				return this.$forceUpdate()
			}
			this.finishWizard()
			this.$forceUpdate()
		},
		previousQuestion() {
			if (this.step_question > 0) {
				return this.step_question--
			}
			if (this.step_question == 0) {
				this.step_section--
				return this.step_question = this.current_section.computed_questions.length - 1
			}
		},
		finishWizard() {
			this.finished = true
			console.log(this.form)
		}
	}
})