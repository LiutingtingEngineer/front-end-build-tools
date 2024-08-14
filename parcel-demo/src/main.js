import foo from './foo';
import $ from 'jquery';

foo.bar();

$('body').html('<h1>hello world</h1>');

if(module.hot) {
    module.hot.accept(() => {
        console.log('hmr~');
    });
}