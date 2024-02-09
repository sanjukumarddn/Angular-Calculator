import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 
 
 
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
 
export class AppComponent {
  stringtoEvalutate:string=" "
 
takeinput(num:string){
 this.stringtoEvalutate=this.stringtoEvalutate+num;
 
  }
 
evaluateresult(){
  if(this.stringtoEvalutate != " "){
    this.stringtoEvalutate=eval(this.stringtoEvalutate);
  }
}  
resetevaluate(){
  this.stringtoEvalutate=" ";
}
}


