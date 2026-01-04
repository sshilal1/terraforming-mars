import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {all} from '../Options';

export class AldrinCyclerStation extends Card {
  constructor() {
    super({
      name: CardName.ALDRIN_CYCLER_STATION,
      type: CardType.AUTOMATED,
      tags: [Tag.SPACE, Tag.MOON],
      cost: 22,
      victoryPoints: 2,

      behavior: {
        production: {megacredits: {moon: {road: {}}, all}},
        moon: {logisticsRate: 1},
      },

      requirements: {tag: Tag.SPACE, count: 2},
      reserveUnits: {titanium: 2},

      metadata: {
        description: 'Requires 2 space tags. Spend 2 titanium. Increase your M€ production 1 step for each road on The Moon. Raise the logistic rate 1 step.',
        cardNumber: 'SH012',
        renderData: CardRenderer.builder((b) => {
          b.minus().titanium(2).br;
          b.production((pb) => pb.megacredits(1).slash().moonRoad({all}));
          b.moonLogisticsRate();
        }),
      },
    });
  }
}

