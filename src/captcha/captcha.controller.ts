import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from "@nestjs/common";
import { CaptchaService } from "./captcha.service";
import { CreateCaptchaDto } from "./dto/create-captcha.dto";
import { UpdateCaptchaDto } from "./dto/update-captcha.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import * as svgCaptcha from 'svg-captcha';

@ApiTags("验证码")
@Controller("captcha")
export class CaptchaController {
  constructor(private readonly captchaService: CaptchaService) {
  }

  @Get()
  @ApiOperation({summary:"生成验证码"})
  generateCaptcha(@Res() res, @Req() req) {
    const captcha = svgCaptcha.create();

    // 将验证码文本存储在会话或数据库中，以便后续验证
    req.session.captcha = captcha.text;
    res.set('Content-Type', 'image/svg+xml');
    res.send(captcha.data);
  }

  @Post("verify")
  @ApiOperation({summary:"验证验证码"})
  vsrifyCaptcha(@Body() body, @Req() req) {
    const { captchaText } = body;
    const storedCaptcha = req.session.captcha;
    if (captchaText && storedCaptcha && captchaText.toLowerCase() === storedCaptcha.toLowerCase()) {
      // 验证码校验成功
      return { success: true };
    } else {
      // 验证码校验失败
      return { success: false };
    }
  }
}
