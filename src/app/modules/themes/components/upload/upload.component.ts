import { Component } from '@angular/core';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  faCloudUploadAlt = faCloudUploadAlt;
}
