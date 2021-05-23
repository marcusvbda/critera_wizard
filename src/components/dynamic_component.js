
Vue.component('dynamic-component', {
	props: {
		templateHtml: {
			templateHtml: true,
			type: String
		},
		context: {
			type: Object,
			default: (() => { })
		}
	},
	created() {
		this.$options.template = `<div>${this.templateHtml}</div>`
	}
})