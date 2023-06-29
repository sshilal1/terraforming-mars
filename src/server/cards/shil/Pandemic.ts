import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {CardResource} from '../../../common/CardResource';
import {Player} from '../../Player';

export class Pandemic extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.PANDEMIC,
      tags: [Tag.MICROBE],
      cost: 15,

      action: {},

      metadata: {
        cardNumber: 'PF222',
        description: 'Requires 2 cards with microbes on it',
        renderData: CardRenderer.builder((b) => {
          b.action(
            'Add a microbe to all your cards that can hold microbes',
            (eb) => {
              eb.empty().startAction.microbes(1).asterix();
            },
          );
        }),
      },
    });
  }

  public override bespokeCanPlay(player: Player): boolean {
    const cardsWithMicrobes = player.getCardsWithResources(CardResource.MICROBE);
    if (cardsWithMicrobes.length < 2) return false;
    else {
      return true;
    }
  }

  public override bespokeAction(player: Player): undefined {
    player.getResourceCards(CardResource.MICROBE).forEach((card) => {
      player.addResourceTo(card, {qty: 1, log: true});
    });
    return undefined;
  }
}
