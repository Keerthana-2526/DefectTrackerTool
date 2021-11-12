import { Component, OnInit } from '@angular/core';
import { DefectService } from '../create-defect/defect.service';
import {MatDialog} from '@angular/material/dialog';
import { DeletePopupComponent } from 'src/app/delete-popup/delete-popup.component';
@Component({
  selector: 'app-list-defect',
  templateUrl: './list-defect.component.html',
  styleUrls: ['./list-defect.component.css']
})
export class ListDefectComponent implements OnInit {
  defects:any[]=[];
  constructor(private defectService: DefectService,public dialog: MatDialog) { }

  ngOnInit(): void {
   let defectList= this.defectService.getDefects()
   console.log("defectList----",defectList)
   this.defects=defectList;
  }

  deleteDefect(title:any){
    let popup= this.dialog.open( DeletePopupComponent );
        popup.afterClosed().subscribe(data=>{
          console.log(data);
          if(data===true){
            this.defects=this.defects.filter(element=>
              element.title !== title
            )
            this.defectService.deleteDefect(title);
          }
          else{
              return data;
          }
        })
      }

}
