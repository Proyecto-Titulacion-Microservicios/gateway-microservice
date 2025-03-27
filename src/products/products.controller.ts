import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StripTypeScriptTypesOptions } from 'module';


@Controller('products')
export class ProductsController {
  constructor(){}

  @Post()
  createProduct(){
    return 'Create un producto';
  }

  @Get()
  findAllProduct(){
    return 'Esta funcion regresa varios productos'
  }

  @Get(':id')
  findOneProduct(@Param('id') id: string){
    return'Esta funcion regresa un sollo producto ' + id;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string){
    return'Esta funcion elimina un producto ' + id;

  }

  @Patch(':id')
  patchProduct(
    @Param('id') id: string,
    @Body('id') body: any){
    return'Esta funcion actualiza el producto ' + id;

  }
 
}
