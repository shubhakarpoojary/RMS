import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class RmsServiceService {

  constructor() { }


  
  commonAlert(postion, icon, title, text) {
    Swal.fire({
      position: postion,
      icon: icon,
      title: title,
      // text:text,
      html: '<strong>' + text + ' </strong>',

    });
  }


  confirmationAlert(postion, icon, title, text, confirmButtonText, cancelButtonText) {
    return Swal.fire({
      position: postion,
      icon: icon,
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    })

  }
  
}
