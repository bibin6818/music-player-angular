import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Song {
  id: number;
  name: string;
  artist: string;
  genre: string;
  album: string;
  coverImage: string;
  popularity: number;
}

@Component({
  selector: 'app-music-library',
  templateUrl: './music-library.component.html',
  styleUrls: ['./music-library.component.css']
})
export class MusicLibraryComponent implements OnInit {
  songs: Song[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Song[]>('assets/songs.json').subscribe(data => {
      this.songs = data;
    });
  }

  searchSongs(): Song[] {
    return this.songs.filter(song =>
      song.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
