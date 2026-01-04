import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class EagleModuleArchives extends ActionCard {
  constructor() {
    super({
      name: CardName.EAGLE_MODULE_ARCHIVES,
      type: CardType.ACTIVE,
      tags: [Tag.SCIENCE, Tag.MOON],
      cost: 15,

      resourceType: CardResource.SCIENCE,

      action: {
        or: {
          autoSelect: true,
          behaviors: [
            {
              spend: {resourcesHere: 2},
              drawCard: 3,
              title: 'Spend 2 science to draw 3 cards',
            },
            {
              addResources: 1,
              title: 'Add 1 science resource to this card',
            },
          ],
        },
      },

      metadata: {
        description: '"The Eagle has landed." Historical records of humanity\'s first lunar landing.',
        cardNumber: 'SH015',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 science resource here, OR spend 2 science resources to draw 3 cards.', (ab) => {
            ab.empty().startAction.resource(CardResource.SCIENCE);
            ab.nbsp.slash().nbsp;
            ab.resource(CardResource.SCIENCE, 2).arrow().cards(3);
          });
        }),
      },
    });
  }
}

