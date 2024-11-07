const debuggerPathMap = {
  compiler: {
    index: 'src/compiler/debugger/index.ts',
    parser: 'src/compiler/debugger/parser.ts',
    codegen: 'src/compiler/debugger/codegen.ts',
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
