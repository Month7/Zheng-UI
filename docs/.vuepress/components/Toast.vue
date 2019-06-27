<template>
  <div class="container">
    <z-card>
      <div style="display:flex">
        <z-button type="success" @click="showModalSuccess">成功</z-button>
        <z-button type="warn" @click="showModalWarn">警告</z-button>
        <z-button type="info" @click="showModalInfo">消息</z-button>
        <z-button type="danger" @click="showModalError">错误</z-button>
      </div> 
      <template v-slot:code>
        <highlight-code>
          {{code1}}
		    </highlight-code>
      </template>
    </z-card>
  </div>
</template>
<script>
import zButton from '../../../src/components/z-button'
import zCard from '../../../src/components/z-card'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
import zToast from '../../../src/components/z-toast'
Vue.use(VueHighlightJS)
var jsonOption;
var toast;
Vue.prototype.$toast = (option) => {
  var Constructor = Vue.extend(zToast);
  if(toast) toast.close();
  toast = new Constructor({propsData:option});
  jsonOption = JSON.stringify(option);
  toast.$mount();
  document.body.appendChild(toast.$el)
}

export default {
  name: 'Toast',
  components:{
    'z-button': zButton,
    'z-card': zCard
  },
  methods:{
    showModalInfo(){
      this.$toast({
        content: '这是一个toast',
        showClose: true,
        type:'info',
        onClose: function(){
          console.log('onClose');
        }
      });
    },
    showModalSuccess(){
      this.$toast({
        content: '这是一个toast',
        showClose: true,
        type:'success',
        delay: 0,
        onClose: function(){
          console.log('onClose');
        }
      });
    },
    showModalError(){
      this.$toast({
        content: '这是一个toast',
        showClose: true,
        type:'danger',
        onClose: function(){
          console.log('onClose');
        }
      });
    },
    showModalWarn(){
      this.$toast({
        content: '这是一个toast',
        showClose: true,
        type:'warn',
        onClose: function(){
          console.log('onClose');
        }
      });
    },
  },
  data(){
    return {
      code1: `
        <template>
          <div style="display:flex">
            <z-button type="success" @click="showModalSuccess">成功</z-button>
            <z-button type="warn" @click="showModalWarn">警告</z-button>
            <z-button type="info" @click="showModalInfo">消息</z-button>
            <z-button type="danger" @click="showModalError">错误</z-button>
          </div> 
        </template>
        export default{
          methods:{
            showModalInfo(){
              this.$toast({
                content: '这是一个toast',
                showClose: true,
                type:'info',
                onClose: function(){
                  console.log('onClose');
                }
              });
            },
            showModalSuccess(){
              this.$toast({
                content: '这是一个toast',
                showClose: true,
                type:'success',
                onClose: function(){
                  console.log('onClose');
                }
              });
            },
            showModalError(){
              this.$toast({
                content: '这是一个toast',
                showClose: true,
                type:'danger',
                onClose: function(){
                  console.log('onClose');
                }
              });
            },
            showModalWarn(){
              this.$toast({
                content: '这是一个toast',
                showClose: true,
                type:'warn',
                onClose: function(){
                  console.log('onClose');
                }
              });
            },
          },
        }
       `,
   
    }
  }
}
</script>
<style>

</style>
