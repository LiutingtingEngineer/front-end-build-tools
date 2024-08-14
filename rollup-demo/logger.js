export const log = msg => {
    console.log('--------INFO--------');
    console.log(msg);
    console.log('--------');
}

export const err = err => {
    console.log('--------ERROR--------');
    console.log(err);
    console.log('--------');
}

exports.log = log;
exports.err = err;