Vue.component('v-custom-button', {
	template: `
		<v-btn :color="this.color" @click="$emit('push')" ><slot></slot></v-btn>
	`,
	props: ['color'],
	data() {
		return {
		
		}
	}
})

let template = `
<div>
	<div class="container-calc">
		<v-text-field
              style="width: 100%"
              v-model="digitsInput"
              :counter="100"
              :disabled="true"
        ></v-text-field>
        <div class="key-buttons">
        	<div class="key-digits">
                <v-custom-button :color="colorBtn" @push="reset">СЕ</v-custom-button>
	            <v-custom-button :color="colorBtn" @push="countInterest">%</v-custom-button>
	            <v-custom-button :color="colorBtn" @push="back"><-</v-custom-button>
	            <v-custom-button :color="colorBtn" @push="doAction('/')">/</v-custom-button>
			</div>
        	<div class="key-digits">
	            <v-btn color="primary" @click="addDigits(1)">1</v-btn>
	            <v-btn color="primary" @click="addDigits(2)">2</v-btn>
	            <v-btn color="primary" @click="addDigits(3)">3</v-btn>
	            <v-custom-button :color="colorBtn" @push="doAction('*')">*</v-custom-button>
			</div>
			<div class="key-digits">
	            <v-btn color="primary" @click="addDigits(4)">4</v-btn>
	            <v-btn color="primary" @click="addDigits(5)">5</v-btn>
	            <v-btn color="primary" @click="addDigits(6)">6</v-btn>
	            <v-custom-button :color="colorBtn" @push="doAction('+')">+</v-custom-button>
			</div>
			<div class="key-digits">
	            <v-btn color="primary" @click="addDigits(7)">7</v-btn>
	            <v-btn color="primary" @click="addDigits(8)">8</v-btn>
	            <v-btn color="primary" @click="addDigits(9)">9</v-btn>
	            <v-custom-button :color="colorBtn" @push="doAction('-')">-</v-custom-button>
			</div>
			<v-btn color="green" style="width: 100%" @click="countResult">=</v-btn>
		</div>
	</div>
</div>

`;

export let vCalc = {
	name: 'v-calc',
	template,
	data() {
		return {
			digitsInput: '',
			one: '',
			action: '',
			isReset: false,
			colorBtn: '#07a325'
		}
	},
	methods: {
		addDigits(digit) {
			if (this.isReset) {
				this.digitsInput = '';
				this.digitsInput += digit;
				this.isReset = false;
			} else {
				this.digitsInput += digit
			}
		},
		reset() {
			this.digitsInput = "";
		},
		countInterest() {
			this.digitsInput = this.digitsInput / 100
		},
		back() {
			this.digitsInput = this.digitsInput.substring(0, this.digitsInput.length-1)
		},
		doAction(act) {
			this.one = this.digitsInput;
			this.action = act
			this.reset();
		},
		countResult() {
			let res = eval(this.one + this.action + this.digitsInput)
			this.digitsInput = res;
			this.one = ''
			this.isReset = true
		}
	}
}
