
import { Component, OnInit } from '@angular/core';
import { UserSeviceService } from '../user-sevice.service'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { from } from 'rxjs';
@Component({
  selector: 'app-editor-component',
  templateUrl: './editor-component.component.html',
  styleUrls: ['./editor-component.component.css']
})
export class EditorComponentComponent implements OnInit {

  arrayList: any= [];
  nameHint: any={};
  arr: any= [];
  userHint: any= "";
  textIn: any;
  listuser: any= [];
  nextcom: any= "";
  tag: any="";
  ok: boolean= false;
  flag: any;
  public Editor: any;
  editorData: any;
  constructor(public userSer:UserSeviceService ) { }

  ngOnInit(): void {
    this.Editor= ClassicEditor;
  }
  public onReady( editor ) 
  {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
  
  }
  hintText(text: any)
  {
    this.textIn = text;
    let len= text.length;
    console.log(this.textIn);
    if(this.textIn[len-5]=='@')
    { 
      this.ok=true;
      this.flag= len-1;
    }
    console.log(this.ok);
    console.log(this.arr)
    if(this.ok==true){
      // this.fillEmail();

      this.arr = text.split('@');
      this.userHint = this.arr[1];
      if(this.userHint!="" && this.userHint!=" "){
        this.getList(this.userHint);
      }
      else
      {
        this.nameHint= [];
      }
    }
  }
  getList(value:any){
    value= value.toUpperCase();
    this.userSer.getUserlist().subscribe((data:{})=>{
      this.arrayList = data;
      setTimeout(()=>{
        this.arrayList.forEach((dta:any) => {
          if(dta.name.includes(value))
            this.nameHint.push(dta);
            this.nextcom = 'hintlist';
        });
      }, 100)
    })
    

  }
  getEmail(mail: any)
  {
    this.tag= mail;
    this.textIn=this.textIn.substring(0, this.flag);
    this.textIn= this.textIn+this.tag;
    this.nextcom="";
    this.ok= false;
  }
}
