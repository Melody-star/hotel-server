import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { RoomModule } from "./room/room.module";
import { OrderModule } from "./order/order.module";
import { MenuItemModule } from "./menu-item/menu-item.module";
import { OrderDetailModule } from "./order-detail/order-detail.module";
import { FinancialInfoModule } from "./financial-info/financial-info.module";
import { UploadModule } from "./upload/upload.module";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql", //数据库类型
    username: "root", //账号
    password: "123456", //密码
    host: "localhost", //host
    port: 3306, //端口
    database: "hotel", //库名
    synchronize: true, //synchronize字段代表是否自动将实体类同步到数据库
    retryDelay: 500, //重试连接数据库间隔
    retryAttempts: 10,//重试连接数据库的次数
    autoLoadEntities: true //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
  }), UserModule, RoomModule, OrderModule, MenuItemModule, OrderDetailModule, FinancialInfoModule, UploadModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
