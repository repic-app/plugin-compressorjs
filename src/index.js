import Compressor from 'compressorjs'

export default (task, preferences) => new Promise((resolve, reject) => {
  new Compressor(task.file, {
    quality: preferences.outputQuality * 1,
    checkOrientation: preferences.tryFixOrientation,
    convertSize: Infinity,
    success: (data) => resolve({ data }),
    error: reject
  })
})