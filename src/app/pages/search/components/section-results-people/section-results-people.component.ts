import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/service/data.service';
@Component({
  selector: 'app-section-results-people',
  templateUrl: './section-results-people.component.html',
  styleUrls: ['./section-results-people.component.css']
})
export class SectionResultsPeopleComponent implements OnInit {

  urlDNI:string = ""
  funcionario: any = []
  data: any = []
  pdfSource = "https://cors-anywhere.herokuapp.com/"+"https://s3.amazonaws.com/spic-informes-publicados/informes/2021/11/2021CPO047000014_ADJUNTO.pdf";

  constructor(private route: Router,private dataService: DataService) { }

  ngOnInit(): void {
    this.urlDNI = this.route.url;
    this.data =  this.dataService.data;
    this.funcionario = this.data.find((x:any)=>x.numero_documento==this.urlDNI.replace("/search/",""));
    // this.pdfSource = this.funcionario.url_informe;
  }

}
