<template>
  <div class="container">
    <z-card>
      <div style="display:flex">
        <z-button type="primary" @click="showModal">点我</z-button>
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
import zhengUI from '../../../src/components/index'
import zModal from '../../../src/components/z-modal'
Vue.use(VueHighlightJS)
Vue.use(zhengUI)
var jsonOption;
var modal;
Vue.prototype.$modal = (option) => {
  
  if(jsonOption !== JSON.stringify(option)) {
    const Constructor = Vue.extend(zModal)
    modal = new Constructor({propsData:option});
    modal.$mount();
    document.body.appendChild(modal.$el);
  }
  modal.visable = true;
  jsonOption = JSON.stringify(option);
}

export default {
  name: 'Modal',
  components:{
    'z-button': zButton,
    'z-card': zCard
  },
  methods:{
    showModal(){
      this.$modal({
        title: '这是一个title',
        content: '这是content',
        enableContentHtml: true
      });
    }
  },
  data(){
    return {
      code1: `
        <template>
          <div style="display:flex">
            <z-button type="primary" @click="showModal">点我</z-button>
          </div> 
        </template>
        export default{
          methods:{
            showModal(){
              this.$modal({
                title: '这是一个title',
                content: '这是content',
              });
            }
          },
        }
       `,
   
    }
  }
}
</script>
<style>

</style>
