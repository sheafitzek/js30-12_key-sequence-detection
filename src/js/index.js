const app = {
	config: {
		keyDivs: [...document.querySelectorAll(`main.div`)],
		subContainer: document.querySelector(`.targetClassOrId`), // a child of "container"
		secretCode: [`ArrowUp`, `ArrowUp`, `ArrowDown`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `ArrowLeft`, `ArrowRight`, `b`, `a`, `Enter`],
		pressed: [],
	},

	init(config) {
		app.bindUiActions();
	},

	bindUiActions() {
		window.addEventListener(`keyup`, (e)=> {
			app.parseKeyCode(e);
		});
	},

	parseKeyCode(e) {
		const pressed = app.config.pressed;
		const code = app.config.secretCode;

		app.config.pressed.push(e.key);
		pressed.splice(-code.length - 1, pressed.length - code.length);
		console.log(e.key);
		console.log(pressed);
		[...pressed].join(` `) === [...code].join(` `)
			&& console.log(`you did it!`);
	},

	revealCode(pressed, code) {
		const keys = app.config.keyDivs;

		keys.forEadh((key, index)=> {
			// hide divs until the correct key(sequence) is pressed
		});
	}

};

window.onload = app.init;
