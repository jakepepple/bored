"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const common_1 = require('@angular/common');
const event_service_1 = require('./event.service');
let AppLayoutComponent = class AppLayoutComponent {
    constructor(eventService) {
        this.eventService = eventService;
        eventService.events.subscribe(events => this.events = events, error => console.error('error ' + error), () => console.log('Completed!'));
    }
    ngOnInit() {
        console.log('Initialized!');
    }
};
AppLayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-layout',
        template: `<div><login-button></login-button></div>
    <div><add-event-button></add-event-button></div>
    <div class="col-md-12" id="header"><h1>BORED<span class="question">?</span></h1>
    <h4 class="subtitle">A local event aggregator</h4>
  </div>
    <div class="container">
      <div class="events">
        <div class="row">
          <div class="col-md-4" id="event" *ngFor="let event of events; let i = index">
            <div class="details">
              <a target="_new" href="{{event.link}}">
                <h3>{{ event.title }}</h3>
              </a>
              <img src="{{ event.imgUrl }}">
            </div>
          </div>
        </div>
      </div>
   </div>`,
        directives: [common_1.NgFor]
    }), 
    __metadata('design:paramtypes', [event_service_1.EventService])
], AppLayoutComponent);
exports.AppLayoutComponent = AppLayoutComponent;
//# sourceMappingURL=app-layout.component.js.map