import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {CardResource} from '../../../common/CardResource';
import {CardRequirements} from '../requirements/CardRequirements';
import {Player} from '../../Player';

export class MatingSeason extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.MATING_SEASON,
      tags: [Tag.ANIMAL],
      cost: 23,
      requirements: CardRequirements.builder((b) => b.tag(Tag.ANIMAL, 3)),

      action: {},

      metadata: {
        cardNumber: 'PF223',
        description: 'Requires 3 animal tags',
        renderData: CardRenderer.builder((b) => {
          b.action(
            'Add an animal to all your cards that can hold animals',
            (eb) => {
              eb.empty().startAction.animals(1).asterix();
            },
          );
        }),
      },
    });
  }

  public override bespokeAction(player: Player): undefined {
    player.getResourceCards(CardResource.ANIMAL).forEach((card) => {
      player.addResourceTo(card, {qty: 1, log: true});
    });
    return undefined;
  }
}
