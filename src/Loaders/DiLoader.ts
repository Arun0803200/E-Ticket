import { MicroframeworkLoader, MicroframeworkSettings } from "microframework";
import { useContainer as routingContainer } from "routing-controllers";
import { useContainer as classValidatorContainer } from "class-validator";
import { useContainer as ormContainer } from "typeorm";
import {Container} from 'typedi';

export const diLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings) => {
    if (settings) {
        routingContainer(Container);
        classValidatorContainer(Container);
        ormContainer(Container);
    }    
}
