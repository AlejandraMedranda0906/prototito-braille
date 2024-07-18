
import { ApiProperty } from "@nestjs/swagger";

export class CreateBrailleDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    age: number;

    @ApiProperty({ default: false })  // Aquí se especifica el valor predeterminado correctamente
    register?: { usageTime: Date }[] = [{ usageTime: new Date() }];  // Inicialización con un objeto por defecto
}


/*export class CreateBrailleDto {
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    age: number;
    @ApiProperty( default: false)
    register?: {
    usageTime: Date;
    
    }[];
}  */