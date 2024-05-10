import {CorporationCard} from '../corporation/CorporationCard';
import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class DrawTest extends CorporationCard {
  constructor() {
    super({
      name: CardName.DRAW_TEST,
      tags: [Tag.SCIENCE],
      startingMegaCredits: 100,

      firstAction: {
        text: 'Draw 200 cards',
        drawCard: 200,
      },

      metadata: {
        cardNumber: 'R50',
        description: 'As your first action in the game, draw 100 cards. Start with 100 M€.',
        renderData: CardRenderer.builder((b) => {
          b.br;
          b.megacredits(100).nbsp.cards(3);
        }),
      },
    });
  }
}

