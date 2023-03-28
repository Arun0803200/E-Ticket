import { EntityRepository, Repository } from "typeorm";
import { Screen } from "../models/ScreenModel";

@EntityRepository(Screen)
export class ScreenRepository extends Repository<Screen> {}
