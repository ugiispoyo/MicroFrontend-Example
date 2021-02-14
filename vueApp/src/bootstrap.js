import { createApp } from 'vue';
import Test from './components/Test.vue';

const mount = (el) => {
  const app = createApp(Test);
  app.mount(el);
};


if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#vueApp');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };