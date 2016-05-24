'use strict';

import {Component, NgZone} from '@angular/core';

import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Mongo} from 'meteor/mongo';
import {ReactiveVar} from 'meteor/reactive-var';

import '../party-form/party-form.ts';

import {PartyForm} from '../party-form/party-form';

import {MeteorComponent} from 'angular2-meteor';

import {Parties} from '../../../parties';

@Component({
  selector: 'parties',
  templateUrl: '/imports/parties/parties/parties.html',
  directives: [ROUTER_DIRECTIVES, PartyForm]
})
export class PartiesCmp extends MeteorComponent {
  parties: Mongo.Cursor<Party>;
  location: ReactiveVar<String>;

  constructor(ngZone: NgZone) {
    super();

    this.subscribe('parties', 'Palo Alto');
    this.location = new ReactiveVar('Palo Alto');

    this.autorun(() => {
      var selector = { location: this.location.get() };
      this.parties = Parties.find(selector);
    });
  }

  searchLocation(location) {
    this.subscribe('parties', location, () => {
      if (!this.parties.count()) {
        alert('Nothing found');
      }
    });
    this.location.set(location);
  }
}
