/**
 * 判断元素可见
 */
function isVisible(el){
  let windowHeight = window.innerHeight
  let position = el.getBoundingClientRect()
  // 当元素的top偏移量小于页面大小并且大于高度的负数
  if(position.top<windowHeight && position.top>-position.height){
    return true
  }
  return false
}

/**
 * 对图片进行懒加载
 */
function lazyLoad(img, src){
  if(img && src && isVisible(img)){ // 元素存在，元素未被加载，元素可见
    img.setAttribute('src', src)
  }
}

export default {
  install(Vue, options){
    Vue.directive('lazy', {
      bind: function(el, binding, vnode){
        el.setAttribute('src', options.loading)
        window.addEventListener('scroll', function(){
          lazyLoad(el, binding.value)
        })
      },
      inserted: function(el, binding, vnode){
        lazyLoad(el)
      }
    })
  }
}
