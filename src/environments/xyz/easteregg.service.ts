import { Injectable } from '@angular/core';
import { Share } from "../../../generated/api/models/share";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class EastereggService {q:Set<string>=new Set<string>();w:boolean=false;e:Set<string>=new Set<string>();public t:Subject<void>=new Subject<void>();y(u:string,i:Share[]){this.e.add(u);i.forEach(o=>this.q.add(<string>o.id));let p=this.e.size===this.q.size;let g=[...(this.e)];let a=g.every(s=>{return this.q.has(s);});if(p&&a){let f=!this.w;if(f){this.t.next();this.d();}}}d(){this.w=true;}}
