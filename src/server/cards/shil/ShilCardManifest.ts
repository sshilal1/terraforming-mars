import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
// import {DrawTest} from './DrawTest';
// import {DrawTest2} from './DrawTest2';
// import {DrawTestCard} from './DrawTestCard';
import {EmmettVille} from './EmmettVille';
import {CoppsColony} from './CoppsColony';
import {StudwellingtonPlanitia} from './StudwellingtonPlanitia';
import {RainestownGreens} from './RainestownGreens';
import {Pandemic} from './Pandemic';
import {MatingSeason} from './MatingSeason';
import {TheJetsons} from './TheJetsons';

export const SHIL_CARD_MANIFEST = new ModuleManifest({
  module: 'shil',

  projectCards: {
    // [CardName.DRAW_TEST_CARD]: {Factory: DrawTestCard},
    [CardName.EMMETT_VILLE]: {Factory: EmmettVille},
    [CardName.COPPS_COLONY]: {Factory: CoppsColony},
    [CardName.STUDWELLINGTON_PLANITIA]: {Factory: StudwellingtonPlanitia},
    [CardName.RAINESTOWN_GREENS]: {Factory: RainestownGreens},
    [CardName.PANDEMIC]: {Factory: Pandemic},
    [CardName.MATING_SEASON]: {Factory: MatingSeason},
    [CardName.THE_JETSONS]: {Factory: TheJetsons},
  },

  // corporationCards: {
  //   [CardName.DRAW_TEST]: {Factory: DrawTest},
  //   [CardName.DRAW_TEST_2]: {Factory: DrawTest2},
  // },
});
