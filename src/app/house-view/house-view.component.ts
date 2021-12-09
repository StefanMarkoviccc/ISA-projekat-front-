import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.scss']
})
export class HouseViewComponent implements OnInit {

  form: FormGroup
  houses: any;

  base64textString: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });
  }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses() {
    this.api.getHouses({search: ''}).subscribe((response: any) => {
      this.houses = response;
    })
  }

  onSubmit() {
    this.getHouses();
  }

  handleFileInput(event: any | null) {

    if(event.target.files === null) {
      return;
    }

    let file = event.target.files.item(0);

    if (file) {
      const reader = new FileReader();
  
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
}

handleReaderLoaded(e: any) {
  this.base64textString = ('data:image/png;base64,' + btoa(e.target.result));
  console.log(this.base64textString)
}

>>>>>>> a3b22392c7026a6b823728b37621e944b196042a
}
