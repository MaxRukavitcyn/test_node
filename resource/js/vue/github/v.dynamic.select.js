let template = `
	<div>
		<div tabindex="0" @focusin="hasFocus=true" class="vue-dynamic-select">
			<div v-if="showPlaceholder" class="placeholder" v-text="placeholder"></div>
			<div class="selected-option" v-text="selectedOption[optionText]" v-if="selectedOption && !hasFocus" />
			<input @focus="hasFocus=true" autocomplete="off" class="search" ref="search" v-model="search" @keyup="moveToResults" @keydown="removeOption" />
			<i class="dropdown" />
			<div v-if="showResultList" ref="resultList" class="result-list">
				<div tabindex="0" ref="result" class="result" v-for="result in results" :key="result[optionValue]" v-html="highlight(result[optionText])" @click="selectOption(result)" @keyup.prevent="navigateResults(result, $event)" />
			</div>
		</div>
	</div>
`;
export let vDynamicSelect =  {
	name: 'v-dynamic-select',
	template,
	props: {
		placeholder: {
			type: String,
			default: 'search',
			required: false
		},
		options: {
			type: Array,
			default: function() {
				return []
			},
			required: true
		},
		optionValue: {
			type: String,
			default: 'id',
			required: true
		},
		optionText: {
			type: String,
			default: 'name',
			required: true
		},
		value: {
			type: Object,
			default: function() {
				return null
			},
			required: false
		}
	},
	data: function() {
		return {
			hasFocus: false,
			search: null,
			selectedOption: this.value,
			selectedResult: 0
		};
	},
	mounted() {
		// Add onclick method to body to hide result list when component loses focus
		window.addEventListener("click", this.loseFocus)
	},
	destroyed() {
		window.removeEventListener("click", this.loseFocus)
	},
	computed: {
		results: function() {
			// Filter items on search text (if not empty, case insensitive) and when item isn't already selected (else return all items not selected)
			return this.search ? this.options.filter(i => String(i[this.optionText]).toLowerCase().indexOf(this.search.toLowerCase()) > -1) : this.options;
		},
		showResultList: function() {
			return this.hasFocus && this.results.length > 0;
		},
		showPlaceholder: function() {
			return !this.hasFocus && !this.selectedOption;
		}
	},
	watch: {
		hasFocus: function(hasFocus) {
			// Clear the search box when component loses focus
			window.removeEventListener("keydown", this.stopScroll);
			if(hasFocus) {
				window.addEventListener("keydown", this.stopScroll);
				this.$refs.search.focus();
			} else {
				this.search = null;
				this.selectedResult = 0;
				this.$refs.search.blur();
			}
		},
		value: function() {
			// Load selected option on prop value change
			this.selectedOption = this.options.find( option => {
				return this.value && option[this.optionValue] == this.value[this.optionValue];
			})
		},
		selectedOption: function() {
			// Provide selected item to parent
			this.$emit('input', this.selectedOption);
		},
		search: function() {
			// Provide search text to parent (for ajax fetching, etc)
			this.$emit('search', this.search);
		}
	},
	methods: {
		selectOption: function(option) {
			this.selectedOption = option;
			this.hasFocus = false;
		},
		removeOption: function(event) {
			// Remove selected option if user hits backspace on empty search field
			if(event.keyCode === 8 && (this.search == null || this.search == '')) {
				this.selectedOption = null;
				this.hasFocus = false;
				event.preventDefault();
			}
		},
		moveToResults: function(event) {
			// Move down to first result if user presses down arrow (from search field)
			if(event.keyCode === 40) {
				if(this.$refs.result.length > 0) {
					this.$refs.resultList.children.item(0).focus();
				}
			}
		},
		navigateResults: function(option, event) {
			// Add option to selected items on enter key
			if(event.keyCode === 13) {
				this.selectOption(option);
				// Move up or down items in result list with up or down arrow keys
			} else if(event.keyCode === 40 || event.keyCode === 38) {
				if(event.keyCode === 40) {
					this.selectedResult++;
				} else if(event.keyCode === 38) {
					this.selectedResult--;
				}
				let next = this.$refs.resultList.children.item(this.selectedResult);
				if(next) {
					next.focus();
				} else {
					this.selectedResult = 0;
					this.$refs.search.focus();
				}
			}
		},
		highlight: function(value) {
			// Highlights the part of each result that matches the search text
			if(this.search) {
				let matchPos = String(value).toLowerCase().indexOf(this.search.toLowerCase());
				if(matchPos > -1) {
					let matchStr = String(value).substr(matchPos, this.search.length);
					value = String(value).replace(matchStr, '<span style="font-weight: bold; background-color: #efefef;">'+matchStr+'</span>');
				}
			}
			return value;
		},
		stopScroll: function(event) {
			if(event.keyCode === 40 || event.keyCode === 38) {
				event.preventDefault();
			}
		},
		loseFocus: function(event) {
			if(!this.$el.contains(event.target)) {
				this.hasFocus = false;
			}
		}
	}
};
