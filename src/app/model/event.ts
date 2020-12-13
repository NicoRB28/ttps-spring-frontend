import { EventPlannerSandbox } from '../modules/eventplanner/eventplanner.sandbox';

export class Event {
  id: number;
  // trucks: Truck[];
  // eventPlanner: EventPlanner;
  state: string;
  name: string;
  address: string;
  zipCode: string;
  latitud: number;
  longitud: number;
  province: string;
  dayAndTime: Date;
  mail: string;
  phone: string;
  description: string;
  payment: string;

}
