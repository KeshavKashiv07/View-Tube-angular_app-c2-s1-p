import { Component } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent {

  video$: Array<any> = this.videoService.videoList.items;
  constructor(private videoService: VideoService) {
  }

}
