import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }

  reloadUrl(router: Router) {
    let currentUrl = router.url;
    router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => router.navigate([currentUrl]));
  }
}
