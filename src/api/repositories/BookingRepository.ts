import { EntityRepository, Repository } from "typeorm";
import { Booking } from "../models/BookingModel";

@EntityRepository(Booking)
export class BookingRepository extends Repository<Booking> {}
