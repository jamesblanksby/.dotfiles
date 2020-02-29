/* Define window positions */

const full = S.op('move', {
	x: 'screenOriginX',
	y: 'screenOriginY',
	width: 'screenSizeX',
	height: 'screenSizeY'
});

const left = S.op('move', {
	x: 'screenOriginX',
	y: 'screenOriginY',
	width: '(screenSizeX/2)',
	height: 'screenSizeY'
});

const right = S.op('move', {
	x: '(screenOriginX+(screenSizeX/2))',
	y: 'screenOriginY',
	width: '(screenSizeX/2)',
	height: 'screenSizeY'
});

const middle = () => {
	if (S.screen().rect().width == 1680) middle_80.run();
	else middle_50.run();
};

const middle_50 = S.op('move', {
	x: '(screenOriginX+(screenSizeX*0.25))',
	y: 'screenOriginY',
	width: '(screenSizeX/2)',
	height: 'screenSizeY'
});

const middle_80 = S.op('move', {
	x: '(screenOriginX+(screenSizeX*0.1))',
	y: 'screenOriginY',
	width: '(screenSizeX*0.8)',
	height: 'screenSizeY'
});

const quad_0 = S.op('move', {
	x: 'screenOriginX',
	y: 'screenOriginY',
	width: '(screenSizeX/4)',
	height: 'screenSizeY'
});

const quad_1 = S.op('move', {
	x: '(screenOriginX+(screenSizeX*0.25))',
	y: 'screenOriginY',
	width: '(screenSizeX/4)',
	height: 'screenSizeY'
});

const quad_2 = S.op('move', {
	x: '(screenOriginX+(screenSizeX*0.5))',
	y: 'screenOriginY',
	width: '(screenSizeX/4)',
	height: 'screenSizeY'
});

const quad_3 = S.op('move', {
	x: '(screenOriginX+(screenSizeX*0.75))',
	y: 'screenOriginY',
	width: '(screenSizeX/4)',
	height: 'screenSizeY'
});


/* Bind keyboard shortcuts */

S.bnda({
	'f:cmd;ctrl': full,
	'left:cmd;ctrl': left,
	'right:cmd;ctrl': right,
	'm:cmd;ctrl': middle,
	'1:cmd;ctrl': quad_0,
	'2:cmd;ctrl': quad_1,
	'3:cmd;ctrl': quad_2,
	'4:cmd;ctrl': quad_3,
	'left:cmd;alt': quad_0,
	'right:cmd;alt': quad_3
});
