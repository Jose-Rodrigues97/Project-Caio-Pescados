import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  faCloudUploadAlt = faCloudUploadAlt;
  selectedFiles: any = null;
  @Input() image!: Blob;
  @Output() clickButton: EventEmitter<Blob> = new EventEmitter();

  ngOnChange(event: any) {
    this.selectedFiles = <FileList>event.srcElement.files;
    const q = document.querySelector("#inputArchive");
    const documentName = this.selectedFiles[0].name;

    if (this.selectedFiles && q) {
      q.innerHTML = documentName;
    }
    this.clickButton.emit(this.selectedFiles[0]);
  }
}
