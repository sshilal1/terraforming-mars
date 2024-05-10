import {Card} from '../Card';
import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';

export class DrawTestCard extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.DRAW_TEST_CARD,
      tags: [Tag.SCIENCE],

      cost: 10,

      behavior: {
        drawCard: 50,
      },

      metadata: {
        cardNumber: '',
        description: 'Requires 3 science tags. Draw 50 cards',
        renderData: CardRenderer.builder((b) => b.cards(3)),
      },
    });
  }
}

