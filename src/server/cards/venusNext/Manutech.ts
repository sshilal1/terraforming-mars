import {CorporationCard} from '../corporation/CorporationCard';
import {IPlayer} from '../../IPlayer';
import {Tag} from '../../../common/cards/Tag';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class Manutech extends CorporationCard {
  constructor() {
    super({
      name: CardName.MANUTECH,
      tags: [Tag.BUILDING],
      startingMegaCredits: 32,

      metadata: {
        cardNumber: 'R23',
        description: 'You start with 32 M€.',
        renderData: CardRenderer.builder((b) => {
          b.br.br;
          b.megacredits(32);
          b.corpBox('effect', (ce) => {
            ce.effect('For each step you increase the production of a resource, including this, you also gain that resource.', (eb) => {
              eb.production((pb) => pb.wild(1)).startEffect.wild(1);
            });
          });
        }),
      },
    });
  }

  public onProductionGain(player: IPlayer, resource: Resource, amount: number) {
    if (amount > 0) {
      player.stock.add(resource, amount);
    }
  }
}
