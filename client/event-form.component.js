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
// template for event-form. No functionality added to event services.
const core_1 = require('@angular/core');
let EventFormComponent = class EventFormComponent {
};
EventFormComponent = __decorate([
    core_1.Component({
        selector: 'event-form',
        template: `
      <form class="form-horizontal" action="/api/events" method="post">
        <fieldset>

        <!-- Form Name -->
        <legend>Add your own event</legend>


        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="title">Event Name</label>  
          <div class="col-md-5">
          <input id="title" name="title" type="text" placeholder="My event" class="form-control input-md">
            
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="link">Event Link</label>  
          <div class="col-md-5">
          <input id="link" name="link" type="text" placeholder="www.event.com" class="form-control input-md">
            
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="imgUrl">Image Link</label>  
          <div class="col-md-5">
          <input id="imgUrl" name="imgUrl" type="text" placeholder="www.event.com/picture.jpg" class="form-control input-md">
            
          </div>
        </div>

        <!-- Textarea -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="description">Description</label>
          <div class="col-md-3">                     
            <textarea class="form-control" id="description" placeholder="..." name="description"></textarea>
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="eventDate">Event Date</label>  
          <div class="col-md-5">
          <input id="eventDate" name="eventDate" type="date" placeholder="" class="form-control input-md">
            
          </div>
        </div>

        <!-- Button -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="submit"></label>
          <div class="col-md-4">
            <button id="submit" name="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>

        </fieldset>
      </form>`
    }), 
    __metadata('design:paramtypes', [])
], EventFormComponent);
exports.EventFormComponent = EventFormComponent;
//# sourceMappingURL=event-form.component.js.map