import { Component } from '@angular/core';
//import countries from './files/countries.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  //public countryList:{name:string, code:string,states:string}[] = countries.countries;
  // public stateList:{name:string}[] = countries.countries.states;
 code:any
 value:any=[]
 states:any=[]
 city:any=[]
  countries= [
    {
        "name": "India",
        "countryCode": "91",
        "states": [
            {
                "name": "Kerala",
                "cities": [
                    {
                        "name": "Thrissur",
                        "code": "680111"
                    },
                    {
                        "name": "Kochi",
                        "code": "680222"
                    },
                    {
                        "name": "Trivandrum",
                        "code": "680333"
                    }
                ]
            }, {
                "name": "TamilNadu",
                "cities": [
                    {
                        "name": "Chennai",
                        "code": "380111"
                    },
                    {
                        "name": "Coimbatore",
                        "code": "380222"
                    }
                ]
            }]
    },
    {
        "name": "Germany",
        "countryCode": "49",
        "states": [
            {
                "name": "Bayern",
                "cities": [
                    {
                        "name": "Nurnburg",
                        "code": "123"
                    },
                    {
                        "name": "Munich",
                        "code": "125"
                    }
                ]
            }, {
                "name": "Berlin",
                "cities": [
                    {
                        "name": "Berlin",
                        "code": "223"
                    }
                ]
            }]
    }
]


val(submit:any)
{
this.value=this.countries.filter(el=>el.name==submit.select);
// this.value.push(data1)


//console.log(this.value);



}

state(stasubmit:any){
  
  for(let details of this.value){
   
this.states.push(details.states)
  }

this.states=this.states.flat(Infinity)
this.states=this.states.filter((el:any)=>el.name==stasubmit.select1)
//console.log(this.city);
//console.log(stasubmit.select1);
//console.log(this.states);

}

cities(citysubmit:any)
{
 for(let i of this.states){

  this.city=i.cities
 }
 this.city=this.city.flat(Infinity)
 this.city.filter((el:any)=>el.name==citysubmit.select2)
 console.log(this.city);
 console.log(citysubmit.select2);
 
}


}
