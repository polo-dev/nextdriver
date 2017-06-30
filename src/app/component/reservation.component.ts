import { OnInit, NgZone, ElementRef, Renderer, Component, ViewContainerRef, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

// export class Login {
//   email: string;
//   password: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: '../html/reservation.html',
  styleUrls: ['../css/reservation.component.css']
})

export class ReservationComponent implements OnInit {
  title = 'Réservation'

  constructor(private route: Router,overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal){
    overlay.defaultViewContainer = vcRef;
  }

  day = [
    {day: 'Lundi, 3 juillet 2017',
    times : [ 
      '15:00 (2 heures)',
      '17:00 (1 heures)'
    ]},
    {day: 'Mardi, 4 juillet 2017',
    times : [
      '16:00 (2 heures)',
      '19:00 (2 heures)'
    ]},
    {day: 'Mercredi, 5 juillet 2017',
    times : [
      '17:00 (2 heures)'
    ]},
    {day: 'Jeudi, 6 juillet 2017',
    times : [
      '15:00 (2 heures)',
      '17:00 (2 heures)'
    ]}
  ]

  /*day = [
    {day: '2017-07-03',
    times : [ 
      '15:00:00',
      '17:00:00'
    ]},
    {day: '2017-07-04',
    times : [
      '16:00:00',
      '19:00:00'
    ]},
    {day: '2017-07-05',
    times : [
      '17:00:00'
    ]},
    {day: '2017-07-06',
    times : [
      '15:00:00',
      '17:00:00'
    ]}
  ]*/

  onReservation(d, t) {
    console.log(d);
    console.log(t);
    this.modal.confirm()
    .size('sm')
    .isBlocking(true)
    .showClose(true)
    .keyboard(27)
    .title('Confirmer le cours ?')
    .body('<p>Réserver un cours pour le '+ d.day +'<br> à '+ t +'?</p>')
    .okBtn('Réserver')
    .okBtnClass('btn-app')
    .cancelBtn('Annuler')
    .cancelBtnClass('btn-app')
    .open();
  }

  ngOnInit() {
    
  }
}