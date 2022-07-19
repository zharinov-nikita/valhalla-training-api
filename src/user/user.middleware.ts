import { Injectable, NestMiddleware, Req, Res } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { FindUserDto } from './dto/find-user.dto'
import { UserService } from './user.service'

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}

  async use(
    @Req() req: { headers: FindUserDto },
    @Res() res: Response,
    next: NextFunction
  ) {
    const { login, password } = req.headers

    if (login && password) {
      const user = await this.userService.findByField({ login, password })

      if (user.length > 0) {
        return next()
      }

      return res.status(403).json({
        statusCode: 403,
        message: 'Invalid login or password!',
      })
    }

    return res.status(403).json({
      statusCode: 403,
      message: 'Access to unauthorized users is prohibited!',
    })
  }
}
