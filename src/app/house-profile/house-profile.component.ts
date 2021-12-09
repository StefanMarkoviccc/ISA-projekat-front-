import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-house-profile',
  templateUrl: './house-profile.component.html',
  styleUrls: ['./house-profile.component.scss']
})
export class HouseProfileComponent implements OnInit {

  form: FormGroup
  houses: any;

  base64textString: any;
  selectedHouseId: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) 
  {
    this.form = this.formBuilder.group({
  
    });
  }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses() {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : '' 

    this.api.getHouses({search: search}).subscribe((response: any) => {
      this.houses = response;
    })
  }

  onSubmit() {
    this.api.deleteHouse({
     deleted: true,
    }).subscribe((response: any) => {
      this.router.navigate(['/home']);
    })
  }

  handleFileInput(event: any | null, houseId: any) {

    if(event.target.files === null) {
      return;
    }

    let file = event.target.files.item(0);

    if (file) {
      const reader = new FileReader();
      console.log(event, houseId);
      this.selectedHouseId = houseId;
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
}

  handleReaderLoaded(e: any) {
  this.base64textString = ('data:image/png;base64,' + btoa(e.target.result));

  this.api.createImage({
    houseId: this.selectedHouseId,
    content: this.base64textString
  }).subscribe((response: any) => {

  })
  }

}
