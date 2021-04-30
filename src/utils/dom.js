/**
 * 样式的值转数字类型
 *
 * @export
 * @param {*} value
 * @returns
 */
export function styleValueToInt(value) {
  if (value == null) throw new TypeError(`styleValueToInt value：值为空`)
  const resetNumber = value.match(/^[0-9]+/)
  if (!resetNumber || !resetNumber[0])
    throw new TypeError(`styleValueToInt value：类型不符合；当前的值:${value}`)
  return parseInt(value.match(/^[0-9]+/)[0])
}

/**
 * 定义图标类型名
 *
 * @export
 * @param icon
 * @returns {string|*}
 */
export function iconClassName(icon) {
  if (icon) {
    if (icon.indexOf('el-icon-') === 0) return icon
    else if (icon.indexOf('icon-') === 0) return `iconfont ${icon}`
    else return icon
  }
  return ''
}
