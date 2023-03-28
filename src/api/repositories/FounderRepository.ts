import { EntityRepository, Repository } from "typeorm";
import { Founder } from "../models/Founder";

@EntityRepository(Founder)
export class FounderRepository extends Repository<Founder> {}