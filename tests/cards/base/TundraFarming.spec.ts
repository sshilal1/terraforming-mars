import {expect} from 'chai';
import {setTemperature} from '../../TestingUtils';
import {TundraFarming} from '../../../src/server/cards/base/TundraFarming';
import {IGame} from '../../../src/server/IGame';
import {TestPlayer} from '../../TestPlayer';
import {testGame} from '../../TestGame';

describe('TundraFarming', () => {
  let card: TundraFarming;
  let player: TestPlayer;
  let game: IGame;

  beforeEach(() => {
    card = new TundraFarming();
    [game, player] = testGame(2);
  });

  it('Can not play', () => {
    expect(card.canPlay(player)).is.not.true;
  });

  it('Should play', () => {
    setTemperature(game, -6);
    expect(card.canPlay(player)).is.true;

    card.play(player);
    expect(player.production.plants).to.eq(1);
    expect(player.production.megacredits).to.eq(2);
    expect(player.plants).to.eq(1);

    expect(card.getVictoryPoints(player)).to.eq(2);
  });
});
