import {expect} from 'chai';
import {SmallAnimals} from '../../../src/server/cards/base/SmallAnimals';
import {IGame} from '../../../src/server/IGame';
import {Resource} from '../../../src/common/Resource';
import {TestPlayer} from '../../TestPlayer';
import {runAllActions, setOxygenLevel} from '../../TestingUtils';
import {testGame} from '../../TestGame';

describe('SmallAnimals', () => {
  let card: SmallAnimals;
  let player: TestPlayer;
  let player2: TestPlayer;
  let game: IGame;

  beforeEach(() => {
    card = new SmallAnimals();
    [game, player, player2] = testGame(2);
  });

  it('Can not play if oxygen level too low', () => {
    player2.production.add(Resource.PLANTS, 1);
    setOxygenLevel(game, 5);
    expect(card.canPlay(player)).is.not.true;
  });

  it('Can not play if no one has plant production', () => {
    setOxygenLevel(game, 6);
    expect(card.canPlay(player)).is.not.true;
  });

  it('Should act', () => {
    player.playedCards.push(card);
    card.action(player);
    runAllActions(game);
    expect(card.resourceCount).to.eq(1);
  });

  it('Should play', () => {
    setOxygenLevel(game, 6);
    player2.production.add(Resource.PLANTS, 1);
    expect(card.canPlay(player)).is.true;

    player.playedCards.push(card);
    card.play(player);
    const input = game.deferredActions.peek()!.execute();
    expect(input).is.undefined;
    expect(player2.production.plants).to.eq(0);
  });

  it('Gives victory points', () => {
    player.addResourceTo(card, 3);
    expect(card.getVictoryPoints(player)).to.eq(1);

    player.addResourceTo(card);
    expect(card.getVictoryPoints(player)).to.eq(2);
  });
});
