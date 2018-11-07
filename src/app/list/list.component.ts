import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  db = [
    {
      key: 'Rick and Morty',
      value: [
        {
          name : 'The Devils a Part Timer',
          picture: 'https://img1.ak.crunchyroll.com/i/spire1/84618be75ad3f94f530b2b1e7c821ed61492723563_full.jpg',
          description: 'With no real-world skills, the devil is forced to make ends meet flipping burgers at a fast food joint!',
          pic_height: 150,
          pic_width : 150
        },
        {
          name: 'Shimoneta',
          picture: '../../assets/shimoneta.jpg',
          description: 'In a world where dirty jokes dont exist, a hero must rise up as a symbol for all things lewd and rude.',
          pic_height: 150,
          pic_width : 140
        },
        {
          name: 'Miss Kobayashis Dragon Maid',
          picture: '../../assets/mkd.jpg',
          description: 'Miss Kobayashi is your average office worker who lives a boring life, until she saves the life of a female dragons',
          pic_height: 200,
          pic_width : 200
        }
      ],
    },
    {
      key: 'The Flash',
      value: [
        {
          name : 'My Hero Academia',
          picture: '../../assets/mha.jpg',
          description: 'Izuku has dreamt of being a hero all his life sespecially challenging for a kid with no superpowers.',
          pic_height: 100,
          pic_width : 100
        },
        {
          name: 'One Punch Man',
          link: '',
          picture: '../../assets/opm.jpg',
          description: 'In a world of superhuman beings, Saitama is a unique hero, he can defeat enemies with a single punch.',
          pic_height: 100,
          pic_width : 100
        },
        {
          name: 'Bungou Stray Dogs',
          picture: '../../assets/bungou.jpg',
          description: 'Kicked out of his orphanage and on the verge of starving to death, Nakajima Atsushi meets some strange men. ',
          pic_height: 100,
          pic_width : 100,
        }
      ],
    },
    {
      key: 'Stranger Things',
      value: ['Tokyo Ghoul']
    },
  ];
  searchText;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchText = params['search'];
      console.log(this.searchText);
    });
  }

}
