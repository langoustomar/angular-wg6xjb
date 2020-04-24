import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular';
  private dataArray = new Array();
  
  constructor(private http: HttpClient) {}
  ngOnInit () {

    /*this.http.get('https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?start_date=2018-03-27&api_key=nnJauj2aHhGn5s7BViSM').subscribe( value => {
      /*console.log(value.dataset_data.data[0]);
      console.log(value.dataset_data.column_names[0]);*/
      /*this.data = value.dataset_data.data;*/

     /* for (let i = 0; i < value.dataset_data.column_names.length; i++) {
        this.dataArray.push(new Array(value.dataset_data.column_names[i], value.dataset_data.data[0][i]));
      }

    });*/
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com");
    headers.append("x-rapidapi-key", "c819a29f80mshd060ca0936adb44p18068djsne825c892e5de");

    this.http.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol=NBEV', { headers: headers}).subscribe( value => {
      console.log(value);
    });


   
   /* this.http.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail').subscribe( value => {
      console.log(value);
    });*/

  }
}
