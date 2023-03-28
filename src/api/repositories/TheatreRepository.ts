import { EntityRepository, Repository } from "typeorm";
import { Theatre } from "../models/TheatreModel";

@EntityRepository(Theatre)
export class TheatreRepository extends Repository<Theatre> {}
