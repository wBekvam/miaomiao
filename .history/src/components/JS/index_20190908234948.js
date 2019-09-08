import Vue from 'vue'
import MessageBox from './MessageBox'

export const MessageBox =  (function(){
    const defaults = {
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    };
    return function ( opts ){
        for(const attr in opts){
            defaults[attr] = opts[arrt]
        }
        const MyComponent = Vue.extend(MessageBox)
        const vm = new MyComponent({
            el : document.createElement('div'),
            data: {
                title: defaults.title,
                content:defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.bind(this)
                }
                handleOk(){
                    defaults.handleOk && defaults.handleOk.bind(this)
                }
            }
        })
    }
})