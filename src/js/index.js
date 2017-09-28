const app = {
	config: {
		container: document.querySelector(`.targetClassOrId`), // "targetClassOrId" is the class (or id) of the "app" we are working on
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

};

window.onload = app.init;
