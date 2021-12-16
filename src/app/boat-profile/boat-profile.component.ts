import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-boat-view',
  templateUrl: './boat-profile.component.html',
  styleUrls: ['./boat-profile.component.scss']
})
export class BoatProfileComponent implements OnInit {

  form: FormGroup
  boats: any;

  base64textString: any;
  selectedBoatId: any;
  id: any;
  user: any;
  images: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, 
    private sanitizer: DomSanitizer,
    private router: Router, private activatedRoute: ActivatedRoute) 
  {
    let jsonUser = localStorage.getItem('user');
    this.images = [];;
    if(jsonUser) {
      this.user = JSON.parse(jsonUser);
    }

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });


    this.form = this.formBuilder.group({
  
    });

    this.getImages();
  }

  ngOnInit(): void {
    this.getBoats();
  }

  getImages() {

    this.api.getBoatImages({id: this.id}).subscribe((response: any) => {
      this.images = [];

      for(let image of response) {
        this.images.push(image.content)
      }

      console.log(this.images);

    });

  }

  getBoats() {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : '' 

    this.api.getBoats({id: this.id}).subscribe((response: any) => {
      this.boats = [response];
    })
  }

  onSubmit() {
    console.log(this.id)
    this.api.deleteBoat({
     id: this.id,
    }).subscribe((response: any) => {
      this.router.navigate(['/boatView']);
    })
  }

  handleFileInput(event: any | null, boatId: any) {

    if(event.target.files === null) {
      return;
    }

    let file = event.target.files.item(0);

    if (file) {
      const reader = new FileReader();
      console.log(event, boatId);
      this.selectedBoatId = boatId;
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
}

  handleReaderLoaded(e: any) {
  this.base64textString = ('data:image/png;base64,' + btoa(e.target.result));

  this.api.createImage({
    houseId: this.selectedBoatId,
    content: this.base64textString
  }).subscribe((response: any) => {
    this.getImages();
  })
  }
}
