import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
export declare class CoffeesController {
    private readonly coffeesService;
    constructor(coffeesService: CoffeesService);
    findAll(): import("./entities/coffees.entity").Coffee[];
    findOne(id: number): import("./entities/coffees.entity").Coffee;
    create(createCoffeeDto: CreateCoffeeDto): void;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): import("./entities/coffees.entity").Coffee;
    delete(id: string): void;
}
