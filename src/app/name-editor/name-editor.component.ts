import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');

  constructor(private http: HttpClient) {

  }

  updateName() {
    this.http.post('http://mockbin.org/bin/f1ac595a-2dea-4719-8365-1f6dfa4192df?foo=bar&foo=baz', { name: this.name.value })
      .subscribe(console.log);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/