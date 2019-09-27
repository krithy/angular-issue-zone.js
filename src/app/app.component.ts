import { Component ,OnInit ,NgZone } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="col-lg-12 col-md-12 col-sm-12  column pull-left noPadding fullheight">
  <div style="height:calc(100%);" class="relparentwrapper "  id="RelationWrapper"  #RelationContainer>
  <ng-container *ngFor="let rel of this.table; let i = index">
    <div         
      [ngDraggable]="draggable"  
      #block="ngDraggable"     
      (started)="onDivDragStart($event)"
      (edges)="checkEdge($event,i)"
      [bounds]="RelationContainer"       
      [inBounds]="inRelationContainer"    
      (stopped)="onDragEnd($event,i,block); false"   
      [preventDefaultEvent]="true"
      [handle]="DragHandle"       
      (movingOffset)="onMoving($event,i,block)"
      class="col-lg-2 col-md-12 col-sm-12 rectangle wrapper"
      [zIndexMoving]=980 
    >
    <table class="rel_column_table">
      <thead  #DragHandle class="drag-block-handle" style="cursor: pointer;">
        <tr>
          <th colspan="3" class="thcontext" >
            {{rel['name']}}
             
          </th>
          
        </tr>
      </thead>     
      <tbody class="col_table_tbody">

       <ng-container *ngFor="let col of rel['columns'];let c=index">
        <tr  class="tbodytr dim">
            <div
            (stopped)="dragended($event,c,lhsrelblock)"
            [ngDraggable]="childdraggable"
            #lhsrelblock="ngDraggable"
            (started)="onDragStart($event,c,lhsrelblock)"
            (edges)="checkEdge($event,c)"
          [bounds]="RelationContainer"       
          [inBounds]="inlhsRelationContainer"       
          [preventDefaultEvent]="true"   
          (movingOffset)="onconnMoving($event,c,lhsrelblock)"
          (endOffset)="onMoveEnd($event,c,lhsrelblock)"
          [zIndexMoving]=980      
         >
              </div>
          <td   class="column_content measureDivClm dim noselect">
              {{col['key']}}
          </td>
       
        <div
        (stopped)="rhsdragended($event,c,relblock)"
        [ngDraggable]="childrhsdraggable"
        #relblock="ngDraggable"
        (started)="rhsonDragStart($event,c,relblock)"
        (edges)="checkEdge($event,c)"
      [bounds]="RelationContainer"       
      [inBounds]="inrhsRelationContainer"       
      [preventDefaultEvent]="true"   
      (movingOffset)="rhsonconnMoving($event,c,relblock)"
      (endOffset)="rhsonMoveEnd($event,c,relblock)"
      [zIndexMoving]=980
     >
           
          </div>         
        </tr>
        </ng-container>
      </tbody>
    </table>
  </div>
</ng-container>

</div>


</div>

`,
  styles: [ `h2 { font-weight: normal; }
  `]
})


export class AppComponent implements OnInit  {

edge = {
top: true,
bottom: true,
left: true,
right: true
};
public draggable=true;
public childdraggable=true;
public childrhsdraggable=true;
public edgesArray: Array<object> = [];
inRelationContainer=true;
inrhsRelationContainer=true;
inlhsRelationContainer=true;
table=[
  {
    "name": "raw_data_kafka",
    "columns": [
        {
            "key": "kafka.topic.name",
        },
        {
            "key": "bootstrap.servers",
        },
        {
            "key": "group.id",
        },
        {
            "key": "key.deserializer",
        },
        {
            "key": "value.deserializer",
        },
        {
            "key": "auto.offset.reset",
        },
        {
          "key": "zookeeper.connection",
        },
         {
          "key": "max.poll.records",
        },
        {
          "key":"poll.time.ms",
        },
        {
          "key":"session.timeout.ms",
        },
        {
          "key": "kafka.topic.name",
      },
      {
          "key": "bootstrap.servers",
      },
      {
          "key": "group.id",
      },
      {
          "key": "key.deserializer",
      },
      {
          "key": "value.deserializer",
      },
      {
          "key": "auto.offset.reset",
      },
      {
        "key": "zookeeper.connection",
      },
       {
        "key": "max.poll.records",
      },
      {
        "key":"poll.time.ms",
      },
      {
        "key":"session.timeout.ms",
      },
      {
        "key": "kafka.topic.name",
    },
    {
        "key": "bootstrap.servers",
    },
    {
        "key": "group.id",
    },
    {
        "key": "key.deserializer",
    },
    {
        "key": "value.deserializer",
    },
    {
        "key": "auto.offset.reset",
    },
    {
      "key": "zookeeper.connection",
    },
     {
      "key": "max.poll.records",
    },
    {
      "key":"poll.time.ms",
    },
    {
      "key":"session.timeout.ms",
    },
    {
      "key": "kafka.topic.name",
  },
  {
      "key": "bootstrap.servers",
  },
  {
      "key": "group.id",
  },
  {
      "key": "key.deserializer",
  },
  {
      "key": "value.deserializer",
  },
  {
      "key": "auto.offset.reset",
  },
  {
    "key": "zookeeper.connection",
  },
   {
    "key": "max.poll.records",
  },
  {
    "key":"poll.time.ms",
  },
  {
    "key":"session.timeout.ms",
  },
  {
    "key": "kafka.topic.name",
},
{
    "key": "bootstrap.servers",
},
{
    "key": "group.id",
},
{
    "key": "key.deserializer",
},
{
    "key": "value.deserializer",
},
{
    "key": "auto.offset.reset",
},
{
  "key": "zookeeper.connection",
},
 {
  "key": "max.poll.records",
},
{
  "key":"poll.time.ms",
},
{
  "key":"session.timeout.ms",
},
{
  "key": "kafka.topic.name",
},
{
  "key": "bootstrap.servers",
},
{
  "key": "group.id",
},
{
  "key": "key.deserializer",
},
{
  "key": "value.deserializer",
},
{
  "key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
  "key": "kafka.topic.name",
},
{
  "key": "bootstrap.servers",
},
{
  "key": "group.id",
},
{
  "key": "key.deserializer",
},
{
  "key": "value.deserializer",
},
{
  "key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
  "key": "kafka.topic.name",
},
{
  "key": "bootstrap.servers",
},
{
  "key": "group.id",
},
{
  "key": "key.deserializer",
},
{
  "key": "value.deserializer",
},
{
  "key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
  "key": "kafka.topic.name",
},
{
  "key": "bootstrap.servers",
},
{
  "key": "group.id",
},
{
  "key": "key.deserializer",
},
{
  "key": "value.deserializer",
},
{
  "key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
  "key": "kafka.topic.name",
},
{
  "key": "bootstrap.servers",
},
{
  "key": "group.id",
},
{
  "key": "key.deserializer",
},
{
  "key": "value.deserializer",
},
{
  "key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
  "key": "kafka.topic.name",
},
{
  "key": "bootstrap.servers",
},
{
  "key": "group.id",
},
{
  "key": "key.deserializer",
},
{
  "key": "value.deserializer",
},
{
  "key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
  "key": "kafka.topic.name",
},
{
  "key": "bootstrap.servers",
},
{
  "key": "group.id",
},
{
  "key": "key.deserializer",
},
{
  "key": "value.deserializer",
},
{
  "key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
  "key": "kafka.topic.name",
},
{
  "key": "bootstrap.servers",
},
{
  "key": "group.id",
},
{
  "key": "key.deserializer",
},
{
  "key": "value.deserializer",
},
{
  "key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},

        
    ]
 },
 {
  "name": "raw_data_kafka",
  "columns": [
      {
          "key": "kafka.topic.name",
      },
      {
          "key": "bootstrap.servers",
      },
      {
          "key": "group.id",
      },
      {
          "key": "key.deserializer",
      },
      {
          "key": "value.deserializer",
      },
      {
          "key": "auto.offset.reset",
      },
      {
        "key": "zookeeper.connection",
      },
       {
        "key": "max.poll.records",
      },
      {
        "key":"poll.time.ms",
      },
      {
        "key":"session.timeout.ms",
      },
      {
        "key": "kafka.topic.name",
    },
    {
        "key": "bootstrap.servers",
    },
    {
        "key": "group.id",
    },
    {
        "key": "key.deserializer",
    },
    {
        "key": "value.deserializer",
    },
    {
        "key": "auto.offset.reset",
    },
    {
      "key": "zookeeper.connection",
    },
     {
      "key": "max.poll.records",
    },
    {
      "key":"poll.time.ms",
    },
    {
      "key":"session.timeout.ms",
    },
    {
      "key": "kafka.topic.name",
  },
  {
      "key": "bootstrap.servers",
  },
  {
      "key": "group.id",
  },
  {
      "key": "key.deserializer",
  },
  {
      "key": "value.deserializer",
  },
  {
      "key": "auto.offset.reset",
  },
  {
    "key": "zookeeper.connection",
  },
   {
    "key": "max.poll.records",
  },
  {
    "key":"poll.time.ms",
  },
  {
    "key":"session.timeout.ms",
  },
  {
    "key": "kafka.topic.name",
},
{
    "key": "bootstrap.servers",
},
{
    "key": "group.id",
},
{
    "key": "key.deserializer",
},
{
    "key": "value.deserializer",
},
{
    "key": "auto.offset.reset",
},
{
  "key": "zookeeper.connection",
},
 {
  "key": "max.poll.records",
},
{
  "key":"poll.time.ms",
},
{
  "key":"session.timeout.ms",
},
{
  "key": "kafka.topic.name",
},
{
  "key": "bootstrap.servers",
},
{
  "key": "group.id",
},
{
  "key": "key.deserializer",
},
{
  "key": "value.deserializer",
},
{
  "key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
"key": "kafka.topic.name",
},
{
"key": "bootstrap.servers",
},
{
"key": "group.id",
},
{
"key": "key.deserializer",
},
{
"key": "value.deserializer",
},
{
"key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
"key": "kafka.topic.name",
},
{
"key": "bootstrap.servers",
},
{
"key": "group.id",
},
{
"key": "key.deserializer",
},
{
"key": "value.deserializer",
},
{
"key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
"key": "kafka.topic.name",
},
{
"key": "bootstrap.servers",
},
{
"key": "group.id",
},
{
"key": "key.deserializer",
},
{
"key": "value.deserializer",
},
{
"key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
"key": "kafka.topic.name",
},
{
"key": "bootstrap.servers",
},
{
"key": "group.id",
},
{
"key": "key.deserializer",
},
{
"key": "value.deserializer",
},
{
"key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
"key": "kafka.topic.name",
},
{
"key": "bootstrap.servers",
},
{
"key": "group.id",
},
{
"key": "key.deserializer",
},
{
"key": "value.deserializer",
},
{
"key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
"key": "kafka.topic.name",
},
{
"key": "bootstrap.servers",
},
{
"key": "group.id",
},
{
"key": "key.deserializer",
},
{
"key": "value.deserializer",
},
{
"key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
"key": "kafka.topic.name",
},
{
"key": "bootstrap.servers",
},
{
"key": "group.id",
},
{
"key": "key.deserializer",
},
{
"key": "value.deserializer",
},
{
"key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},
{
"key": "kafka.topic.name",
},
{
"key": "bootstrap.servers",
},
{
"key": "group.id",
},
{
"key": "key.deserializer",
},
{
"key": "value.deserializer",
},
{
"key": "auto.offset.reset",
},
{
"key": "zookeeper.connection",
},
{
"key": "max.poll.records",
},
{
"key":"poll.time.ms",
},
{
"key":"session.timeout.ms",
},

      
  ]
}
];
constructor(private ngZone: NgZone) {

}

ngOnInit() {

}


checkEdge(event,i) {
  this.ngZone.runOutsideAngular(() => {
this.edgesArray[i] = event;
  });
}

onDragTrStart(event){
  this.ngZone.runOutsideAngular(() => {

});
}
onDivDragStart(){
  this.ngZone.runOutsideAngular(() => {
  event.stopPropagation();
  });
}
rhsonDragStart(event,i,block){  
  this.ngZone.runOutsideAngular(() => {
   
  });
}
onDragStart(event,i,block){  
  this.ngZone.runOutsideAngular(() => {
   
  });
}

onMoving(event,i,block) {
  this.ngZone.runOutsideAngular(() => {

  });
}


onconnMoving(e,i,block){
  this.ngZone.runOutsideAngular(() => {

});
}
rhsonconnMoving(e,i,block){
  this.ngZone.runOutsideAngular(() => {

});
}
rhsdragended(event,i,block){
  this.ngZone.runOutsideAngular(() => {

  });
}

dragended(event,i,block){
  this.ngZone.runOutsideAngular(() => {

  });
}

rhsonMoveEnd(event,i,block) {
  this.ngZone.runOutsideAngular(() => {

  });
}
onMoveEnd(event,i,block) {
  this.ngZone.runOutsideAngular(() => {

  });
}
onDragEnd(event,i,block){
  this.ngZone.runOutsideAngular(() => {

  });
}

}
