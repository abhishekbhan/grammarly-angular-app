import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';
import { Gif } from '../models/gif.model';

@Injectable()
export class HttpClientService {
    
    readonly ROOT_URL:string='https://api.giphy.com/v1/gifs';
    readonly API_KEY: string = 'ImuOFEF59vXLXXqBQEgEsxqS0a3ZJcG7';

    gifSubject: BehaviorSubject = new BehaviorSubject<Gif[]>([]);
    gifObservable: Observable = this.gifSubject.asObservable();

    constructor(private http: HttpClient) { 
        
    }

    // api.giphy.com/v1/gifs/search

    getGifs(keyword: string) : Observable<any> {
        let params = new HttpParams().set('api_key', this.API_KEY).set('q', keyword);
        return this.http.get(`${this.ROOT_URL}/search`, {params});
    }

    setGifs(gifs) {
        this.gifSubject.next(gifs);
    }

}