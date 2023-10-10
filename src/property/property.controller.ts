import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { PropertyService } from './property.service';
import Property from 'src/models/Property';

@Controller('property')
export class PropertyController {
    constructor(
        private propertyService: PropertyService
    ) {}

    @Get()
    @HttpCode(200)
    async index(): Promise<Property[]> {
        return await this.propertyService.index();
    }

    @Get(":id")
    @HttpCode(200)
    async show(@Param() params: any): Promise<Property> {
        return await this.propertyService.show(params.id);
    }

    @Post()
    @HttpCode(201)
    async create(@Body() body: Property): Promise<Property> {
        return await this.propertyService.create(body);
    }

    @Delete(':id')
    @HttpCode(204)
    async destroy(@Param() params: any) {
        return await this.propertyService.destroy(params.id);
    }
}
