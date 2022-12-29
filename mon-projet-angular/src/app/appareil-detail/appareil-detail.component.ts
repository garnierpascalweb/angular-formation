import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-detail',
  templateUrl: './appareil-detail.component.html',
  styleUrls: ['./appareil-detail.component.scss']
})
/**
 * Composant présentatant le detail d'un appareil
 */
export class AppareilDetailComponent implements OnInit {

  name: string;
  status: string;

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) {
    this.name = '';
    this.status = '';
  }

  ngOnInit(): void {
    // this.name = this.route.snapshot.params['id'];
    const id = this.route.snapshot.params['id'];
    const currentAppareil = this.appareilService.getAppareilById(+id);
    if (currentAppareil !== undefined) {
      this.name = currentAppareil.name;
      this.status = currentAppareil.status;
    }
  }

}
