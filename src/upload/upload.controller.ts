import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from "@nestjs/common";
import { UploadService } from "./upload.service";
import { CreateUploadDto } from "./dto/create-upload.dto";
import { UpdateUploadDto } from "./dto/update-upload.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";

@ApiTags("文件上传接口")
@Controller("upload")
export class UploadController {
  constructor(private readonly uploadService: UploadService) {
  }

  @Post("album")
  @ApiOperation({ summary: "文件上传" })
  @UseInterceptors(FileInterceptor("file"))
  upload(@UploadedFile() file) {
    return { filename: file.filename };
  }
}
