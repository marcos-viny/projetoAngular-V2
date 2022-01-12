import { Injectable } from '@angular/core';
import Swal, {SweetAlertIcon} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public success(message: string, title?:any):void{
    this.showAlert(message, title, 'success');
  };

  public error(message:string, title?:any):void{
    this.showAlert(message, title, 'error');
  };

  public info(message:string, title?:any):void{
    this.showAlert(message, title, 'info')
  };

  private showAlert(title:string, message:string, icon:SweetAlertIcon) :void{
    Swal.fire(title, message, icon);
  }
}
