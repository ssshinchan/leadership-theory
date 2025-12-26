<template>
  <div class="openai-chat-container">
    <!--    <h2>OpenAI Chat</h2>-->

    <!-- 模式切换 -->
    <div class="mode-selector">
      <label class="mode-option">
        <input 
          type="radio" 
          v-model="inputMode" 
          value="text"
          :disabled="loading"
        />
        <span>{{ props.textModeLabel }}</span>
      </label>
      <label class="mode-option">
        <input 
          type="radio" 
          v-model="inputMode" 
          value="image"
          :disabled="loading"
        />
        <span>{{ props.imageModeLabel }}</span>
      </label>
    </div>

    <!-- 文本输入模式 -->
    <div v-if="inputMode === 'text'" class="input-section">
      <div class="input-group">
        <label class="input-label" v-text="regionLabel"></label>
        <input
            v-model="regionInput"
            class="input"
            :disabled="loading"
        />
      </div>
      <div class="input-group">
        <label class="input-label" v-text="rubbishLabel"></label>
        <input
            v-model="rubbishInput"
            class="input"
            :disabled="loading"
        />
      </div>
      <button
          @click="submitQuery"
          :disabled="loading || !rubbishInput.trim()"
          class="submit-button"
      >
        {{ loading ? props.loadingText : props.submitButtonText }}
      </button>
    </div>

    <!-- 图片输入模式 -->
    <div v-else class="input-section">
      <div class="input-group">
        <label class="input-label" v-text="regionLabel"></label>
        <input
            v-model="regionInput"
            class="input"
            :disabled="loading"
        />
      </div>
      
      <div class="image-upload-section">
        <div class="upload-options">
          <label class="upload-button">
            <input 
              type="file" 
              accept="image/*" 
              @change="handleFileUpload"
              :disabled="loading"
              ref="fileInput"
              style="display: none;"
            />
            <span>📁 {{ props.uploadButtonText }}</span>
          </label>
          
          <button 
            @click="openCamera" 
            :disabled="loading"
            class="camera-button"
          >
            📷 {{ props.cameraButtonText }}
          </button>
        </div>

        <!-- 摄像头预览 -->
        <div v-if="showCamera" class="camera-preview">
          <video ref="videoElement" autoplay playsinline></video>
          <div class="camera-controls">
            <button @click="capturePhoto" class="capture-button">
              {{ props.captureButtonText }}
            </button>
            <button @click="closeCamera" class="close-camera-button">
              {{ props.closeCameraButtonText }}
            </button>
          </div>
        </div>

        <!-- 图片预览 -->
        <div v-if="imagePreview" class="image-preview">
          <img :src="imagePreview" alt="Preview" />
          <button @click="clearImage" class="clear-button">✕</button>
        </div>
      </div>

      <button
          @click="submitQuery"
          :disabled="loading || !imageBase64"
          class="submit-button"
      >
        {{ loading ? props.loadingText : props.submitButtonText }}
      </button>
    </div>

    <div v-if="error" class="error-message">
      <strong>{{ props.errorLabel }}</strong> {{ error }}
    </div>

    <div v-if="response" class="response-block">
      <h3>{{ props.resultTitle }}</h3>
      <div class="response-content markdown-body" v-html="renderedResponse"></div>
    </div>

    <div v-if="loading" class="loading-indicator">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, onUnmounted} from 'vue';
import MarkdownIt from 'markdown-it';

const props = withDefaults(defineProps<{
  rubbishLabel?: string,
  regionLabel?: string,
  submitButtonText?: string,
  loadingText?: string,
  errorLabel?: string,
  resultTitle?: string,
  textModeLabel?: string,
  imageModeLabel?: string,
  uploadButtonText?: string,
  cameraButtonText?: string,
  captureButtonText?: string,
  closeCameraButtonText?: string,
}>(), {
  rubbishLabel: 'ゴミの名前',
  regionLabel: '地域',
  submitButtonText: 'AIに聞く',
  loadingText: '処理中...',
  errorLabel: 'エラー:',
  resultTitle: '結果:',
  textModeLabel: 'テキスト入力',
  imageModeLabel: '画像アップロード',
  uploadButtonText: '画像を選択',
  cameraButtonText: 'カメラで撮影',
  captureButtonText: '撮影',
  closeCameraButtonText: '閉じる',
});

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
});

// 模式选择
const inputMode = ref<'text' | 'image'>('text');

// 文本模式变量
const rubbishInput = ref('');
const regionInput = ref('');

// 图片模式变量
const imageBase64 = ref('');
const imagePreview = ref('');
const showCamera = ref(false);
const videoElement = ref<HTMLVideoElement | null>(null);
const mediaStream = ref<MediaStream | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

// 通用变量
const response = ref('');
const error = ref('');
const loading = ref(false);

const renderedResponse = computed(() => {
  if (!response.value) return '';
  return md.render(response.value);
});

// 文件上传处理
const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      imageBase64.value = result;
      imagePreview.value = result;
    };
    reader.readAsDataURL(file);
  }
};

// 打开摄像头
const openCamera = async () => {
  try {
    showCamera.value = true;
    const stream = await navigator.mediaDevices.getUserMedia({ 
      video: { facingMode: 'environment' }
    });
    mediaStream.value = stream;
    
    // 等待 DOM 更新
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (videoElement.value) {
      videoElement.value.srcObject = stream;
    }
  } catch (err) {
    error.value = 'カメラへのアクセスに失敗しました';
    showCamera.value = false;
  }
};

// 拍照
const capturePhoto = () => {
  if (!videoElement.value) return;
  
  const canvas = document.createElement('canvas');
  canvas.width = videoElement.value.videoWidth;
  canvas.height = videoElement.value.videoHeight;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.drawImage(videoElement.value, 0, 0);
    imageBase64.value = canvas.toDataURL('image/jpeg');
    imagePreview.value = imageBase64.value;
  }
  
  closeCamera();
};

// 关闭摄像头
const closeCamera = () => {
  if (mediaStream.value) {
    mediaStream.value.getTracks().forEach(track => track.stop());
    mediaStream.value = null;
  }
  showCamera.value = false;
};

// 清除图片
const clearImage = () => {
  imageBase64.value = '';
  imagePreview.value = '';
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

// 组件卸载时清理
onUnmounted(() => {
  closeCamera();
});

// 统一提交函数（支持文本和图片模式）
const submitQuery = async () => {
  // 验证输入
  if (inputMode.value === 'text' && !rubbishInput.value.trim()) return;
  if (inputMode.value === 'image' && !imageBase64.value) return;

  loading.value = true;
  error.value = '';
  response.value = '';

  try {
    let language;
    if(window.location.href.indexOf("/en/") >= 0){
      language = "英文";
    } else if(window.location.href.indexOf("/zh/") >= 0){
      language = "中文";
    } else {
      language = "日文";
    }
    const apiKey = 'sk-tlmIQC96RAuvzK6MOLRolEwthqASHWauUAAIaFe3MovKlvvJ';
    
    // 根据模式构建不同的prompt和消息内容
    let messageContent;
    
    if (inputMode.value === 'text') {
      const prompt = `
# 角色
你是一位精通日本全国各市、区、町、村垃圾分类规则的专家级AI助手。

# 任务
我的任务是根据用户提供的"城市"、"垃圾名称"和"语言"，提供清晰、准确、详细的垃圾分类指示。日本的规则因地区而异，你必须严格依据我指定的城市来回答。

# 输入变量
* **语言:** ${language}
* **城市:** ${regionInput.value}
* **垃圾名:** ${rubbishInput.value}

# 输出要求
请根据以上信息，提供一个包含以下所有要点的完整回答：
1.  **垃圾类别:** 首先，最直接地告诉我它属于哪一类垃圾（例如：可燃ごみ、資源ごみ、小型金属類、スプレー缶 等）。
2.  **处理方法:** 详细说明丢弃前需要如何处理（例如：需要冲洗干净、需要拆分瓶盖和标签、需要用完内容物、需要钻孔、需要装入指定的垃圾袋等）。
3.  **回收日期:** 说明该类别垃圾的通常回收日（例如：每周二、每月的第一个和第三个周四）。
4.  **注意事项:** 提供任何当地的特殊规定或安全提示（例如：尖锐物品需要用报纸包裹并写上"キケン"或"危险"字样、电池需要取下等）。
5.  **信息来源 (可选):** 如果可能，请提供查询到的信息来源，例如该城市的官方网站垃圾分类指南链接，以供我核实。。`;
      messageContent = prompt;
    } else {
      const prompt = `
# 角色
你是一位精通日本全国各市、区、町、村垃圾分类规则的专家级AI助手。

# 任务
我的任务是根据用户提供的"城市"和"垃圾图片"以及"语言"，识别图片中的垃圾，并提供清晰、准确、详细的垃圾分类指示。日本的规则因地区而异，你必须严格依据我指定的城市来回答。

# 输入变量
* **语言:** ${language}
* **城市:** ${regionInput.value}
* **垃圾图片:** (用户上传的图片)

# 输出要求
请根据以上信息，提供一个包含以下所有要点的完整回答：
0.  **垃圾识别:** 首先识别图片中的物品是什么。
1.  **垃圾类别:** 告诉我它属于哪一类垃圾（例如：可燃ごみ、資源ごみ、小型金属類、スプレー缶 等）。
2.  **处理方法:** 详细说明丢弃前需要如何处理（例如：需要冲洗干净、需要拆分瓶盖和标签、需要用完内容物、需要钻孔、需要装入指定的垃圾袋等）。
3.  **回收日期:** 说明该类别垃圾的通常回收日（例如：每周二、每月的第一个和第三个周四）。
4.  **注意事项:** 提供任何当地的特殊规定或安全提示（例如：尖锐物品需要用报纸包裹并写上"キケン"或"危险"字样、电池需要取下等）。
5.  **信息来源 (可选):** 如果可能，请提供查询到的信息来源，例如该城市的官方网站垃圾分类指南链接，以供我核实。`;
      messageContent = [
        {
          type: 'text',
          text: prompt,
        },
        {
          type: 'image_url',
          image_url: {
            url: imageBase64.value,
          },
        },
      ];
    }

    const res = await fetch('https://api.bltcy.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'text/event-stream',
      },
      body: JSON.stringify({
        model: 'gpt-4.1',
        messages: [
          {
            role: 'user',
            content: messageContent,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
        stream: true,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.error?.message || `Failed to fetch response: ${res.status} ${res.statusText}`);
    }

    const reader = res.body?.getReader();
    if (!reader) {
      throw new Error('Readable stream not supported by this response.');
    }

    const decoder = new TextDecoder();
    let done = false;
    let buffer = '';

    while (!done) {
      const {value, done: readerDone} = await reader.read();
      done = !!readerDone;

      if (value) {
        buffer += decoder.decode(value, {stream: true});

        const parts = buffer.split(/\r?\n\r?\n/);
        buffer = parts.pop() || '';

        for (const part of parts) {
          const trimmed = part.trim();
          if (!trimmed) continue;

          const lines = trimmed.split(/\r?\n/);
          for (const line of lines) {
            const contentLine = line.startsWith('data:') ? line.replace(/^data:\s*/, '') : line;

            if (contentLine === '[DONE]') {
              done = true;
              break;
            }

            try {
              const parsed = JSON.parse(contentLine);
              const delta = parsed.choices?.[0]?.delta?.content
                  || parsed.choices?.[0]?.text
                  || parsed.content
                  || '';
              if (delta) {
                response.value += delta;
              }
            } catch {
              response.value += contentLine;
            }
          }

          if (done) break;
        }
      }
    }

    if (buffer.trim()) {
      try {
        const parsed = JSON.parse(buffer);
        const finalText = parsed.choices?.[0]?.message?.content || parsed.choices?.[0]?.text || parsed.content || '';
        response.value += finalText;
      } catch {
        response.value += buffer;
      }
    }
  } catch (err: any) {
    if (err.name === 'AbortError') {
      error.value = 'Request aborted.';
    } else {
      error.value = err.message || 'An unexpected error occurred';
      console.error('OpenAI stream error:', err);
    }
  } finally {
    loading.value = false;
  }
};

</script>

<style scoped>
.openai-chat-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.openai-chat-container h2 {
  margin-top: 0;
  color: #333;
}

/* 模式选择器 */
.mode-selector {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 6px;
}

.mode-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
}

.mode-option input[type="radio"] {
  cursor: pointer;
  width: 18px;
  height: 18px;
}

.mode-option:hover {
  color: #409eff;
}

.input-section {
  margin-bottom: 1.5rem;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.input-label {
  min-width: 80px;
  font-weight: 500;
  color: #333;
  margin-right: 0.75rem;
}

.input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: #409eff;
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
}

.input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

/* 图片上传部分 */
.image-upload-section {
  margin: 1rem 0;
}

.upload-options {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.upload-button,
.camera-button {
  padding: 0.75rem 1.5rem;
  background-color: #67c23a;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.upload-button:hover:not(:disabled),
.camera-button:hover:not(:disabled) {
  background-color: #85ce61;
}

.upload-button:disabled,
.camera-button:disabled {
  background-color: #a0cfff;
  cursor: not-allowed;
}

/* 摄像头预览 */
.camera-preview {
  margin: 1rem 0;
  border: 2px solid #409eff;
  border-radius: 8px;
  overflow: hidden;
  background-color: #000;
}

.camera-preview video {
  width: 100%;
  display: block;
  max-height: 400px;
  object-fit: contain;
}

.camera-controls {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #2c3e50;
  justify-content: center;
}

.capture-button,
.close-camera-button {
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.capture-button {
  background-color: #409eff;
  color: white;
}

.capture-button:hover {
  background-color: #66b1ff;
}

.close-camera-button {
  background-color: #f56c6c;
  color: white;
}

.close-camera-button:hover {
  background-color: #f78989;
}

/* 图片预览 */
.image-preview {
  position: relative;
  margin: 1rem 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
}

.image-preview img {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  display: block;
}

.clear-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(245, 108, 108, 0.9);
  color: white;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.clear-button:hover {
  background-color: rgba(245, 108, 108, 1);
}

.submit-button {
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover:not(:disabled) {
  background-color: #66b1ff;
}

.submit-button:disabled {
  background-color: #a0cfff;
  cursor: not-allowed;
}

.error-message {
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fef0f0;
  border: 1px solid #fde2e2;
  border-radius: 4px;
  color: #f56c6c;
}

.response-block {
  padding: 1.5rem;
  background-color: #f5f7fa;
  border-radius: 4px;
  border: 1px solid #e4e7ed;
}

.response-block h3 {
  margin-top: 0;
  color: #333;
}

.response-content {
  line-height: 1.6;
  color: #606266;
}

/* Markdown styling */
.markdown-body {
  font-size: 16px;
}

.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3),
.markdown-body :deep(h4),
.markdown-body :deep(h5),
.markdown-body :deep(h6) {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-weight: 600;
  line-height: 1.25;
  color: #333;
}

.markdown-body :deep(h1) {
  font-size: 2em;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}

.markdown-body :deep(h2) {
  font-size: 1.5em;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}

.markdown-body :deep(h3) {
  font-size: 1.25em;
}

.markdown-body :deep(p) {
  margin-top: 0;
  margin-bottom: 1em;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  padding-left: 2em;
  margin-top: 0;
  margin-bottom: 1em;
}

.markdown-body :deep(li) {
  margin-bottom: 0.25em;
}

.markdown-body :deep(code) {
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  color: #e83e8c;
}

.markdown-body :deep(pre) {
  background-color: #f6f8fa;
  border-radius: 6px;
  padding: 16px;
  overflow: auto;
  line-height: 1.45;
  margin-bottom: 1em;
}

.markdown-body :deep(pre code) {
  background-color: transparent;
  padding: 0;
  margin: 0;
  font-size: 100%;
  color: #24292e;
}

.markdown-body :deep(blockquote) {
  border-left: 4px solid #dfe2e5;
  color: #6a737d;
  padding-left: 1em;
  margin-left: 0;
  margin-bottom: 1em;
}

.markdown-body :deep(a) {
  color: #0366d6;
  text-decoration: none;
}

.markdown-body :deep(a:hover) {
  text-decoration: underline;
}

.markdown-body :deep(table) {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1em;
}

.markdown-body :deep(table th),
.markdown-body :deep(table td) {
  border: 1px solid #dfe2e5;
  padding: 6px 13px;
}

.markdown-body :deep(table th) {
  font-weight: 600;
  background-color: #f6f8fa;
}

.markdown-body :deep(hr) {
  border: 0;
  border-top: 1px solid #eaecef;
  margin: 1.5em 0;
}

.markdown-body :deep(img) {
  max-width: 100%;
  height: auto;
}

.markdown-body :deep(strong) {
  font-weight: 600;
}

.markdown-body :deep(em) {
  font-style: italic;
}

.loading-indicator {
  text-align: center;
  padding: 2rem;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #409eff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Dark mode support */
html.dark .openai-chat-container {
  background-color: #1e1e1e;
  border-color: #3a3a3a;
  color: #e0e0e0;
}

html.dark .openai-chat-container h2,
html.dark .response-block h3 {
  color: #e0e0e0;
}

html.dark .mode-selector {
  background-color: #2a2a2a;
}

html.dark .mode-option {
  color: #e0e0e0;
}

html.dark .mode-option:hover {
  color: #66b1ff;
}

html.dark .input {
  background-color: #2a2a2a;
  border-color: #3a3a3a;
  color: #e0e0e0;
}

html.dark .input-label {
  color: #e0e0e0;
}

html.dark .input:disabled {
  background-color: #1a1a1a;
}

html.dark .image-preview {
  border-color: #3a3a3a;
}

html.dark .response-block {
  background-color: #2a2a2a;
  border-color: #3a3a3a;
}

html.dark .response-content {
  color: #b0b0b0;
}

/* Dark mode markdown styling */
html.dark .markdown-body :deep(h1),
html.dark .markdown-body :deep(h2),
html.dark .markdown-body :deep(h3),
html.dark .markdown-body :deep(h4),
html.dark .markdown-body :deep(h5),
html.dark .markdown-body :deep(h6) {
  color: #e0e0e0;
}

html.dark .markdown-body :deep(h1),
html.dark .markdown-body :deep(h2) {
  border-bottom-color: #3a3a3a;
}

html.dark .markdown-body :deep(code) {
  background-color: rgba(240, 246, 252, 0.15);
  color: #ff7b72;
}

html.dark .markdown-body :deep(pre) {
  background-color: #2a2a2a;
}

html.dark .markdown-body :deep(pre code) {
  color: #c9d1d9;
}

html.dark .markdown-body :deep(blockquote) {
  border-left-color: #3a3a3a;
  color: #8b949e;
}

html.dark .markdown-body :deep(a) {
  color: #58a6ff;
}

html.dark .markdown-body :deep(table th),
html.dark .markdown-body :deep(table td) {
  border-color: #3a3a3a;
}

html.dark .markdown-body :deep(table th) {
  background-color: #2a2a2a;
}

html.dark .markdown-body :deep(hr) {
  border-top-color: #3a3a3a;
}
</style>
