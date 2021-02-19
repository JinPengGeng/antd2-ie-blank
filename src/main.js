import { createApp } from 'vue'
import App from './App.vue';
import { Button, message } from 'ant-design-vue';

const app = createApp();
app.config.productionTip = false;

/* Automatically register components under Button, such as Button.Group */
app.use(Button);

app.config.globalProperties.$message = message;
createApp(App).mount('#app')
