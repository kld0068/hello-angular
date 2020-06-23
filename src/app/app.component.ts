import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
//import 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';
  public _key = environment.SecretKey.TESTSECRET;
}
