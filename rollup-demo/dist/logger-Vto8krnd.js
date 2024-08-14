define(['exports'], (function (exports) { 'use strict';

    const err = err => {
        console.log('--------ERROR--------');
        console.log(err);
        console.log('--------');
    };

    exports.err = err;

}));
