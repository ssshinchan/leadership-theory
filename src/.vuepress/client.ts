import { defineClientConfig } from 'vuepress/client';
import RubbishOpenAIChat from './components/RubbishOpenAIChat.vue';

export default defineClientConfig({
  enhance({ app }) {
    app.component('RubbishOpenAIChat', RubbishOpenAIChat);
  },
});
