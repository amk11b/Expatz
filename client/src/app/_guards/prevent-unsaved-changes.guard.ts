import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: MemberEditComponent,
    ): boolean {
      //checks if the form has been edited
      if(component.editForm.dirty){
        return confirm('Are you sure you want to leave the page? Any unsaved changes will be lost')
      }
    return true;
  }
  
}
