import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Response } from "./common/response";
import { HttpFilter } from "./common/filter";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import * as session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //跨域配置
  app.enableCors({
    origin:'http://localhost:5173',
    credentials:true
  });

  // 配置 Swagger 文档
  const config = new DocumentBuilder()
    .setTitle("酒店管理系统接口文档")
    .setDescription("API description")
    .setVersion("1.0")
    .addTag("api")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);

  app.useGlobalInterceptors(new Response());
  app.useGlobalFilters(new HttpFilter());
  app.useStaticAssets(join(__dirname, "images"), {
    prefix: "/images"
  });

  // sessios配置
  app.use(session({
    secret: "iodgjsihowiejr",
    resave: false,
    saveUninitialized: true,
    cook: { secure: false }
  }));

  await app.listen(3000);
}

bootstrap();
