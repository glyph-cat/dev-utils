export const IS_DEBUG_ENV = process.env.NODE_ENV

if (IS_DEBUG_ENV) {
  // eslint-disable-next-line no-var
  var onlyOnceCache = {
    log: {},
    info: {},
    warn: {},
    error: {},
  }
}

export type DevPrintType = 'log' | 'info' | 'warn' | 'error'

/**
 * @description A wrapper around `console.log`, `console.info`, `console.warn`
 * and `console.error`.
 */
export function devPrint(type: DevPrintType, message: string): void {
  if (IS_DEBUG_ENV) {
    console[type](`[Dev info] ${message}`)
  }
}

/**
 * @description A wrapper around console methods.
 * Subsequent calls with used keys will be ignored.
 */
export function devPrintOnce(
  type: DevPrintType,
  key: string,
  message: string
): void {
  if (IS_DEBUG_ENV) {
    if (!onlyOnceCache[type][key]) {
      onlyOnceCache[type][key] = true
      devPrint(type, message)
    }
  }
}

/**
 * @description Shows a deprecation warning (only once).
 */
export function deprecationWarn(key: string, message: string): void {
  devPrintOnce('warn', key, `Deprecation warning: ${message}`)
}

/**
 * @example ['foo', 42, true] -> ['foo', '42', 'true']
 */
export function displayStringArray(array: Array<unknown>): string {
  if (array.length <= 0) {
    return '[]'
  } else {
    // eslint-disable-next-line quotes
    return `['${array.join("', '")}']`
  }
}

/**
 * @example ['foo', 42, true] -> ['foo', 42, true]
 */
export function displayMixedArray(array: Array<unknown>): string {
  const strStack = []
  for (const a of array) {
    strStack.push(typeof a === 'string' ? `'${a}'` : a)
  }
  return `[${strStack.join(', ')}]`
}

/**
 * @example ['user', 'address', 'street', '1'] -> user.address.street[1]
 * @note Each item in the pathStack MUST be strings.
 */
export function displayObjPath(pathStack: Array<string>): string {
  let str = ''
  for (const path of pathStack) {
    // Dots will be used as long as it starts with letters
    str += path.match(/^[a-z]/i) ? `.${path}` : `['${path}']`
  }
  // If the string starts with a dot, it will be removed though
  if (str.match(/^\./)) {
    str = str.replace(/^\./, '')
  }
  return `\`${str}\``
}

/**
 * @example
 * 1 -> 1st
 * 2 -> 2nd
 * 3 -> 3rd
 * 4 -> 4th...
 */
export function displayOrdinalNumber(num: number | string): string {
  const numString = num.toString()
  const lastDigit = numString[numString.length - 1]
  if (lastDigit === '1' && !numString.match(/11$/)) {
    return `${num}st`
  } else if (lastDigit === '2' && !numString.match(/12$/)) {
    return `${num}nd`
  } else if (lastDigit === '3' && !numString.match(/13$/)) {
    return `${num}rd`
  } else {
    return `${num}th`
  }
}
