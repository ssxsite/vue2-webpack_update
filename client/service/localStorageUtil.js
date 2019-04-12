/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }

  if (typeof localStorage === 'object') {
    try {
      window.localStorage.setItem(name, content);
    } catch (e) {
      Storage.prototype._setItem = Storage.prototype.setItem;
      Storage.prototype.setItem = function() {};
      alert('请点击浏览器右下角关闭无痕模式');
    }
  }
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}
