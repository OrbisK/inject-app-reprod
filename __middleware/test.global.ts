import {createApp} from 'vue'
import {All, Display, Provider} from "#components";
export default defineNuxtRouteMiddleware(async () => {
    console.log('This is a global middleware')
    // console.log(inject('test'))
    // const discrete = createDiscreteApi(['message'])
    // discrete.message.success('This is a global middleware')

    const app = createApp(All)

    const hostEl = document.createElement('div')
    document.body.appendChild(hostEl)

    app.mount(hostEl)
})
