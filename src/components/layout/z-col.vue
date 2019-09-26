<template>
  <div :class="[colClass, colClasses, offsetClass]" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
const checkTab = () => {
      
}
export default {
  props: {
    span: {
      type: [ String, Number ],
      default: 12
    },
    gutter: {
      type: [String, Number],
      default: 0
    },
    offset: {
      type: [String, Number],
      default: 0
    },
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {}
  },
  data() {
    return {
      padding: this.gutter
    }
  },
  computed: {
    colClass () {
      return `col-${this.span}`
    },
    offsetClass () {
      return `offset-${this.offset}`
    },
    colClasses () {
      let { xs, sm, md, lg, xl} = this
      return [
        ...this.createClass ('xs-', xs),
        ...this.createClass ('sm-', sm),
        ...this.createClass ('md-', md),
        ...this.createClass ('lg-', lg),
        ...this.createClass ('xl-', xl)
      ]
    },
    colStyle() {
      if(Number.isNaN(this.gutter/2)) return ''
      return `padding: 0 ${this.gutter/2}px;`
    }
  },
  methods: {
    createClass (deviceType, obj) {
      let arr = []
      if(!obj) return []
      let { span, offset } = obj
      if(span) arr.push(`col-${deviceType}${span}`)
      if(offset) arr.push(`offset-${deviceType}${span}`)
      return arr
    },
  }
}
</script>
<style lang="scss">
@for $i from 1 through 12 {
  .col-#{$i} {
    width: (1/12 * $i * 100%)
  }
  .offset-#{$i} {
    margin-left: (1/12 * $i * 100%)
  }
}
@media (max-width: 576px) {
  @for $i from 1 through 12 {
    .col-xs-#{$i} {
      width: (1/12 * $i * 100%)
    }
    .offset-xs-#{$i} {
    margin-left: (1/12 * $i * 100%)
    }
  }
} 
@media (min-width: 576px) and (max-width: 768px) {
  @for $i from 1 through 12 {
    .col-sm-#{$i} {
      width: (1/12 * $i * 100%)
    }
    .offset-sm-#{$i} {
    margin-left: (1/12 * $i * 100%)
    }
  }
} 
@media (min-width: 768px) and (max-width: 992px) {
  @for $i from 1 through 12 {
    .col-md-#{$i} {
      width: (1/12 * $i * 100%)
    }
    .offset-md-#{$i} {
    margin-left: (1/12 * $i * 100%)
    }
  }
} 
@media (min-width: 992px) and (max-width: 1200px) {
  @for $i from 1 through 12 {
    .col-lg-#{$i} {
      width: (1/12 * $i * 100%)
    }
    .offset-lg-#{$i} {
    margin-left: (1/12 * $i * 100%)
    }
  }
} 
@media (min-width: 1200px) {
  @for $i from 1 through 12 {
    .col-xl-#{$i} {
      width: (1/12 * $i * 100%)
    }
    .offset-xl-#{$i} {
    margin-left: (1/12 * $i * 100%)
    }
  }
} 
</style>