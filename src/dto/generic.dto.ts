import { IsOptional } from "class-validator";

export class GenericDto<T>{
    @IsOptional()
    id: T;
}