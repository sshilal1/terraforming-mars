import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {IPlayer} from '../../IPlayer';
import {MoonExpansion} from '../../moon/MoonExpansion';
import {TileType} from '../../../common/TileType';
import {moonMiningTile} from '../render/DynamicVictoryPoints';

export class CollinsOrbitalCommand extends Card {
  constructor() {
    super({
      name: CardName.COLLINS_ORBITAL_COMMAND,
      type: CardType.AUTOMATED,
      tags: [Tag.SPACE, Tag.MOON],
      cost: 26,
      victoryPoints: 'special',

      behavior: {
        production: {titanium: 1},
        moon: {miningRate: 1},
      },

      requirements: {tag: Tag.MOON, count: 2},
      reserveUnits: {titanium: 1},

      metadata: {
        description: 'Requires 2 Moon tags. Spend 1 titanium. Increase your titanium production 1 step. Raise the mining rate 1 step. "There\'s someone in the command module going around the moon..."',
        cardNumber: 'SH014',
        victoryPoints: moonMiningTile(1, true),
        renderData: CardRenderer.builder((b) => {
          b.minus().titanium(1).production((pb) => pb.titanium(1)).moonMiningRate().br;
          b.vpText('1 VP for each mine on The Moon.');
        }),
      },
    });
  }

  public override getVictoryPoints(player: IPlayer): number {
    return MoonExpansion.spaces(player.game, TileType.MOON_MINE).length;
  }
}
