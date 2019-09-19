import Vue from 'vue'
import { MessageBox } from 'element-ui'

const v = new Vue()
const h = v.$createElement
Vue.prototype.$msg = (params = {}) => {
  // eslint-disable-next-line prefer-const
  let { title, type, message, showCancelButton, confirmButtonText, cancelButtonText, callBack, confirmButtonTextLoading, msg } = params
  if (!title) {
    title = '确认删除'
  }
  if (!type) {
    type = 'warning'
  }
  if (!message) {
    message = h('p', null, [
      h('span', null, msg),
    ])
  }
  if (!showCancelButton) {
    showCancelButton = true
  }
  if (!confirmButtonText) {
    confirmButtonText = '确定'
  }
  if (!cancelButtonText) {
    cancelButtonText = '取消'
  }
  return MessageBox({
    title,
    message,
    type,
    showCancelButton,
    confirmButtonText,
    cancelButtonText,
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        if (!confirmButtonTextLoading) {
          instance.confirmButtonText = '执行中...'
        } else {
          instance.confirmButtonText = confirmButtonTextLoading
        }
        callBack().then(() => {
          done()
        }).finally(() => {
          instance.confirmButtonText = confirmButtonText
          instance.confirmButtonLoading = false
        })
      } else {
        done()
      }
    }
  }).then(res => Promise.resolve(res)).catch(err => Promise.reject(err))
}
