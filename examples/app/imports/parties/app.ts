'use strict';

import {Component, provide, enableProdMode} from '@angular/core';

import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

import './parties/parties.ts';

import {PartiesCmp} from './parties/parties';

import './party-details/party-details.ts';

import {PartyDetailsCmp} from './party-details/party-details';

@Component({
  selector: 'socially',
  templateUrl: '/imports/parties/layout.html',
  directives: [ROUTER_DIRECTIVES, PartiesCmp]
})
@RouteConfig([
  {path: '/', name: 'PartiesList', component: PartiesCmp},
  {path: '/party/:partyId', name: 'PartyDetails', component: PartyDetailsCmp}
])
export class Socially {}
