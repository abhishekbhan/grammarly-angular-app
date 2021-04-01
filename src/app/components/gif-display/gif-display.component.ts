import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClientService } from 'src/app/services/http-client.service';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-gif-display',
  templateUrl: './gif-display.component.html',
  styleUrls: ['./gif-display.component.scss']
})
export class GifDisplayComponent implements OnInit {

  gifs: Gif[];
  gifSubscription: Subscription;

  constructor(private http: HttpClientService) { }

  ngOnInit() {
    this.gifSubscription = this.http.gifObservable.subscribe((gifs: Gif[])=> {
      this.gifs = gifs;
    })
  }

  ngOnDestroy() {
    this.gifSubscription.unsubscribe();
  }

}
