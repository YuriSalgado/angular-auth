import { EventEmitter } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

export class Emitters {
  static authEmitter = new EventEmitter<boolean>();
  static authObservable = new Subject<boolean>();
}
