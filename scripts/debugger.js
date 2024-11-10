const debuggerPathMap = {
  debugger: {
    compiler: 'src/compiler/debugger/index.ts',
    core: 'src/core/debugger/index.ts'
  }
}

function flattenDebuggerPathMap(pathMap) {
  const result = {}

  function flatten(obj, prefix = '') {
    for (const key in obj) {
      const value = obj[key]
      const newKey = prefix ? `${prefix}.${key}` : key

      if (typeof value === 'object') {
        flatten(value, newKey)
      } else {
        result[newKey] = value
      }
    }
  }

  flatten(pathMap)
  return result
}

exports.debuggerPathMap = debuggerPathMap
exports.flattenDebuggerPathMap = flattenDebuggerPathMap(debuggerPathMap)
