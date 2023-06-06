import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import colors from '@colors/colors'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(colors.rainbow('database connected'))

    app.listen(config.port, () => {
      console.log(
        colors.rainbow(`Example app listening on port ${config.port}`)
      )
    })
  } catch (error) {
    console.log('failed to connect database', error)
  }
}

main()
