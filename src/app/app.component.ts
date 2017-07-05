import { Pipe, PipeTransform } from '@angular/core';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
 template: `

 <br><br><br>
 <div style="Background-color:#003366;padding:20px">
 <h1 color> Angular Pipes</h1>
 <br><br>
<h1> {{ name | uppercase }}</h1>
<h2> {{ name | lowercase }}</h2>
<h3> {{ birthday | date:'shortDate' }}</h3>
<h3> {{ birthday | date:'longDate' }}</h3>
<h3> {{ birthday | date:'shortTime' }}</h3>

<h4> {{ price | currency:'USD' }}</h4>
<h4> {{ price | currency:'GBP':'true' }}</h4>
</div>`,
  styleUrls:['./app.component.css'],
 
  
})
export class AppComponent {
  private name;
  private birthday;
  private price;
  


  constructor() {  
    this.name = 'Afroz M';
    this.birthday = new Date(1947, 8, 15);
    this.price = 200;
    
  
  }
}
