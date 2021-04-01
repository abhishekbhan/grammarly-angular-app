import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';
import { Gif } from '../../models/gif.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { getParentInjectorView } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss']
})
export class GifSearchComponent implements OnInit {
  keyword:string = '';

  @ViewChild('inputGif') inputGif;

  inputGifKeyWordChanged: Subject<string> = new Subject<string>();

  constructor(private http: HttpClientService) { 
    // TODO: Updated after getParentInjectorView (there was syntax error)
    this.inputGifKeyWordChanged
    .pipe(debounceTime(1000))
    .pipe(distinctUntilChanged())
    .subscribe(model => {
      this.keyword = model;

      // Call your function which calls API or do anything you would like do after a lag of 1 sec
      this.fetchGifs(false);
     });
          
  }

  ngOnInit() {
  
  }


  fetchGifs(resetKeyword: boolean = true) {
    if(this.keyword) {
      this.http.getGifs(this.keyword).subscribe((res: any)=> {
        if(resetKeyword) this.keyword = null;
        this.setGifs(res.data);
      })
    }
  }

  fetchGifsOnChange(e) {
    console.log(e);
    this.inputGifKeyWordChanged.next(e);
  }
 
  setGifs(gifs) {
    this.http.setGifs(gifs);
  }

}
