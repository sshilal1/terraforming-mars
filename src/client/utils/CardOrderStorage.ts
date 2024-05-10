import {CardModel} from '@/common/models/CardModel';
import {partition} from '@/common/utils/utils';

const STORAGE_PREFIX = 'cardOrder';

export class CardOrderStorage {
  public static getCardOrder(playerId: string): {[x: string]: number} {
    try {
      const order = typeof localStorage === 'undefined' ? null : localStorage.getItem(`${STORAGE_PREFIX}${playerId}`);
      if (order === null) {
        return {};
      }
      return JSON.parse(order);
    } catch (err) {
      console.warn('unable to pull card order from local storage', err);
      return {};
    }
  }

  public static getOrdered(order: {[x: string]: number}, cards: Array<CardModel>): Array<CardModel> {
    const [misses, hits] = partition(cards, (card: CardModel) => order[card.name] === undefined);
    hits.sort((a: CardModel, b: CardModel) => {
      return order[a.name] - order[b.name];
    });
    return hits.concat(misses);
  }

  public static getCardsBySort(dir: string, cards: Array<CardModel>): Array<CardModel> {
    return cards.sort((a: CardModel, b: CardModel) => {
      if (a.calculatedCost && b.calculatedCost) {
        if (dir === 'asc') {
          return a.calculatedCost - b.calculatedCost;
        }
        return b.calculatedCost - a.calculatedCost;
      }
      return -1;
    });
  }

  public static updateCardOrder(playerId: string, order: {[x: string]: number}): void {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}${playerId}`, JSON.stringify(order));
    } catch (err) {
      console.warn('unable to update card order with local storage', err);
    }
  }
}

