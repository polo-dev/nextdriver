import { OnInit, NgZone, ElementRef, Renderer, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { ViewChild } from "@angular/core/src/metadata/di";
import { ApiService } from 'app/service/api.service';

// export class Login {
//   email: string;
//   password: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: '../html/inscription_step2.html',
  styleUrls: ['../css/inscription.component.css']
})

export class Inscription2Component implements OnInit {
  @ViewChild("search") city;
  public latitude: number;
  public longitude: number;
  public zoom: number;

  constructor(  
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private rd: Renderer,
    private api: ApiService
  ) {}

  title = 'Inscription';
  birthday:string = '';
  gender: any = 'f';
  phone: any = '';
  cityError: boolean = false;
  birthdayError: boolean = false;
  phoneError: boolean = false;
  adressName: any;
  codePostal: any;
  searchCity: any;
  fullAdress: any = '';

  onSubmit()
  {
    if(!this.validationErrors())
    {
      console.log(this.gender);
      let data = {
        birthDate: this.birthday,
        civility: this.gender,
        phoneNumber: this.phone,
        address: this.fullAdress
      }
       this.api.createAccount2(data)
        .then((rep) => {

          console.log(JSON.parse(rep._body).responseCode);

          if(JSON.parse(rep._body).responseCode !== 200) 
          {
            console.log('error');
          }
          else 
          {
            this.router.navigate(['questions/info']);
          }
        })
        .catch((e) => console.log(e));
    }
  }

  validationErrors() {
    this.cityError = (this.fullAdress.length < 2) ? true : false;
    this.birthdayError = (this.birthday.length < 5) ? true : false;
    this.phoneError = (this.phone.length < 6) ? true : false;

    return (this.phoneError || this.birthdayError || this.cityError) ? true : false;
  }

   ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete( this.city.nativeElement , {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          
          console.log(place);
          console.log(place.address_components[place.address_components.length - 1].short_name);
          console.log(place.formatted_address);
          this.adressName = place.name;
          this.searchCity = place.formatted_address;//place.vicinity;
          this.codePostal = place.address_components[place.address_components.length - 1].short_name;
          this.fullAdress = place.formatted_address;
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
