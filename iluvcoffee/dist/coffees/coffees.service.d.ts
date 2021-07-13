import { Coffee } from './entities/coffees.entity';
export declare class CoffeesService {
    private coffees;
    findAll(): Coffee[];
    findOne(id: string): Coffee;
    create(createCoffeeDto: any): void;
    update(id: string, updateCoffeeDto: any): Coffee;
    delete(id: string): void;
}
