import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-wisestep';
 inputLocation='';
 cardText:string[]=[];
 count=0;
 cardExtra:string[]=[];
  locArray:string[] =['Hyderabad','Delhi','Banglore','Chennai'];

  onenter(){
    if(this.count<2){
    this.cardText.push(this.inputLocation);
    this.inputLocation='';
    this.count+=1;
    console.log(this.count);
    }
    else{
      this.cardExtra.push(this.inputLocation);
      console.log(this.cardExtra);
      this.inputLocation='';
      this.count+=1;
      console.log(this.count);
    }
  }
}
