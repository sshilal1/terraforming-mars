import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {digit} from '../Options';

export class OneSmallStepFoundation extends Card {
  constructor() {
    super({
      name: CardName.ONE_SMALL_STEP_FOUNDATION,
      type: CardType.AUTOMATED,
      tags: [Tag.MOON, Tag.SCIENCE],
      cost: 14,

      behavior: {
        drawCard: {count: {tag: Tag.MOON, per: 2}},
        tr: 1,
      },

      metadata: {
        description: '"...one giant leap for mankind." Draw 1 card per 2 Moon tags you have, including this. Gain 1 TR.',
        cardNumber: 'SH016',
        renderData: CardRenderer.builder((b) => {
          b.cards(1).slash().tag(Tag.MOON, {amount: 2, digit}).br;
          b.tr(1);
        }),
      },
    });
  }
}

