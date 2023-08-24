import {IProjectCard} from '../IProjectCard';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {CardResource} from '../../../common/CardResource';
import {Player} from '../../Player';

export class TheJetsons extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.THE_JETSONS,
      tags: [],
      cost: 14,

      action: {},

      metadata: {
        cardNumber: 'PF226',
        description: 'Requires at least 2 cards with floaters',
        renderData: CardRenderer.builder((b) => {
          b.action(
            'Add a floater to all your cards that can hold floaters',
            (eb) => {
              eb.empty().startAction.floaters(1).asterix();
            },
          );
        }),
      },
    });
  }

  public override bespokeCanPlay(player: Player): boolean {
    const cardsWithFloaters = player.getCardsWithResources(CardResource.FLOATER);
    if (cardsWithFloaters.length < 2) return false;
    else {
      return true;
    }
  }

  public override bespokeAction(player: Player): undefined {
    player.getResourceCards(CardResource.FLOATER).forEach((card) => {
      player.addResourceTo(card, {qty: 1, log: true});
    });
    return undefined;
  }
}
