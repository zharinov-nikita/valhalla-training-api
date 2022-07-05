import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function start() {
  try {
    const app = await NestFactory.create(AppModule)
    app.enableCors()
    await app.listen(5000)
  } catch (e) {
    console.log(e)
  }
}
start()
