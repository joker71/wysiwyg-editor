import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserSeviceService } from '../user-sevice.service'


@Component({
  selector: 'app-hintlist',
  templateUrl: './hintlist.component.html',
  styleUrls: ['./hintlist.component.css']
})
export class HintlistComponent implements OnInit {

  @Input() arrList:any;
  @Output() getMail= new EventEmitter();
  listUser: any= [];
  constructor(private ser: UserSeviceService) { }

  ngOnInit(): void {
    
    //this.getMail.emit(this.listUser);
  }
  setMailFunction(person: any)
  {
    this.getMail.emit(person);
  }

}
