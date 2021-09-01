import { Subject } from "rxjs";

export class Emitters {
  static authObservable = new Subject<boolean>();
}
