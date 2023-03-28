import { EntityRepository, Repository } from "typeorm";
import { Seat } from "../models/SeatModel";

@EntityRepository(Seat)
export class SeatRepository extends Repository<Seat> {}
