// define attributes

const attribute = {};

// screen size
attribute.screen = slate.screen().rect();


// define layouts
const layout = {};

// video
layout.video = slate.layout('video', {
    'Google Chrome': {
        operations: [slate.operation('move', {
            x: 'screenOriginX',
            y: 'screenOriginY',
            width: '(screenSizeX * 0.715)',
            height: 'screenSizeY',
        }),],
    },
    'Messages': {
        operations: [slate.operation('move', {
            x: '(screenOriginX + (screenSizeX * 0.715))',
            y: 'screenOriginY',
            width: '(screenSizeX * 0.275)',
            height: 'screenSizeY',
        }),],
    },
});


// define operations
const operation = {};

// video
operation.video = slate.operation('layout', {
    name: layout.video,
});

// fullscreen
operation.fullscreen = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: 'screenSizeX',
    height: 'screenSizeY',
});

// left
operation.left = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: '(screenSizeX / 2)',
    height: 'screenSizeY',
});

// right
operation.right = slate.operation('move', {
    x: '(screenOriginX + (screenSizeX / 2))',
    y: 'screenOriginY',
    width: '(screenSizeX / 2)',
    height: 'screenSizeY',
});

// middle
operation.middle = slate.operation('move', {
    x: () => {
        const width = attribute.screen.width;

        // mbp
        if (width === 1680) return '(screenOriginX + (screenSizeX * 0.1))';
        // imac
        else return '(screenOriginX + (screenSizeX * 0.25))';
    },
    y: 'screenOriginY',
    width: () => {
        const width = attribute.screen.width;

        // mbp
        if (width === 1680) return '(screenSizeX * 0.8)';
        // imac
        else return '(screenSizeX / 2)';
    },
    height: 'screenSizeY',
});

// quad
operation.quad = [];
for (var i = 0; i < 4; i++) {
    const offset = (0.25 * i);

    const quad = slate.operation('move', {
        x: `(screenOriginX + (screenSizeX * ${offset}))`,
        y: 'screenOriginY',
        width: '(screenSizeX / 4)',
        height: 'screenSizeY',
    });

    operation.quad.push(quad);
}


// define keystrokes

// video = cmd + ctrl + v
slate.bind('v:cmd;ctrl', operation.video);

// fullscreen = cmd + ctrl + f
slate.bind('f:cmd;ctrl', operation.fullscreen);

// left = cmd + ctrl + ←
slate.bind('left:cmd;ctrl', operation.left);

// right = cmd + ctrl + →
slate.bind('right:cmd;ctrl', operation.right);

// middle = cmd + ctrl + m
slate.bind('m:cmd;ctrl', operation.middle);

// quad 1 = cmd + ctrl + 1 / cmd + alt + ←
slate.bind('1:cmd;ctrl', operation.quad[0]);
slate.bind('left:cmd;alt', operation.quad[0]);

// quad 2 = cmd + ctrl + 2
slate.bind('2:cmd;ctrl', operation.quad[1]);

// quad 3 = cmd + ctrl + 3
slate.bind('3:cmd;ctrl', operation.quad[2]);

// quad 4 = cmd + ctrl + 4 / cmd + alt + →
slate.bind('4:cmd;ctrl', operation.quad[3]);
slate.bind('right:cmd;alt', operation.quad[3]);
