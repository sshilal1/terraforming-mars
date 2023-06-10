import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {DrawTest} from './DrawTest';
import {DrawTest2} from './DrawTest2';
import {DrawTestCard} from './DrawTestCard';

export const SHIL_CARD_MANIFEST = new ModuleManifest({
  module: 'shil',

  projectCards: {
    [CardName.DRAW_TEST_CARD]: {Factory: DrawTestCard},
  },

  corporationCards: {
    [CardName.DRAW_TEST]: {Factory: DrawTest},
    [CardName.DRAW_TEST_2]: {Factory: DrawTest2},
  },
});
