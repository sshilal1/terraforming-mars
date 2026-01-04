import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {IPlayer} from '../../IPlayer';
import {MoonExpansion} from '../../moon/MoonExpansion';
import {TileType} from '../../../common/TileType';
import {moonRoadTile} from '../render/DynamicVictoryPoints';

export class ArmstrongObservatory extends Card {
  constructor() {
    super({
      name: CardName.ARMSTRONG_OBSERVATORY,
      type: CardType.AUTOMATED,
      tags: [Tag.SCIENCE, Tag.MOON],
      cost: 25,
      victoryPoints: 'special',

      behavior: {
        drawCard: 2,
        moon: {logisticsRate: 1},
      },

      metadata: {
        description: '"That\'s one small step for man..." Draw 2 cards. Raise the logistic rate 1 step.',
        cardNumber: 'SH011',
        victoryPoints: moonRoadTile(1, true),
        renderData: CardRenderer.builder((b) => {
          b.cards(2).moonLogisticsRate().br;
          b.vpText('1 VP for each road on The Moon.');
        }),
      },
    });
  }

  public override getVictoryPoints(player: IPlayer): number {
    return MoonExpansion.spaces(player.game, TileType.MOON_ROAD).length;
  }
}
