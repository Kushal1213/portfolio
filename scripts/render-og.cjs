const fs = require('node:fs')
const path = require('node:path')
const sharp = require('sharp')

const root = path.resolve(__dirname, '..')
const source = path.join(root, 'public', 'images', 'og-source.svg')
const output = path.join(root, 'public', 'images', 'og.png')

sharp(fs.readFileSync(source), { density: 144 })
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(output)
  .then(() => console.log(`Rendered ${output}`))
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
