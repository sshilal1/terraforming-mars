import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {AltSecondaryTag} from '../../../common/cards/render/AltSecondaryTag';
import {IPlayer} from '../../IPlayer';
import {MoonExpansion} from '../../moon/MoonExpansion';
import {TileType} from '../../../common/TileType';
import {moonHabitatTile} from '../render/DynamicVictoryPoints';

export class TranquilityBaseMemorial extends Card {
  constructor() {
    super({
      name: CardName.TRANQUILITY_BASE_MEMORIAL,
      type: CardType.AUTOMATED,
      tags: [Tag.MOON, Tag.BUILDING],
      cost: 24,
      victoryPoints: 'special',

      behavior: {
        production: {megacredits: 3},
        moon: {habitatTile: {}},
      },

      reserveUnits: {titanium: 1},

      metadata: {
        description: 'Spend 1 titanium. Increase your M€ production 3 steps. Place a habitat tile on The Moon and raise the habitat rate 1 step.',
        cardNumber: 'SH013',
        victoryPoints: moonHabitatTile(1),
        renderData: CardRenderer.builder((b) => {
          b.minus().titanium(1).production((pb) => pb.megacredits(3)).br;
          b.moonHabitat({secondaryTag: AltSecondaryTag.MOON_HABITAT_RATE}).br;
          b.vpText('1 VP for each habitat on The Moon.');
        }),
      },
    });
  }

  public override getVictoryPoints(player: IPlayer): number {
    return MoonExpansion.spaces(player.game, TileType.MOON_HABITAT).length;
  }
}
