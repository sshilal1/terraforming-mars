import {IMilestone} from './IMilestone';
import {IPlayer} from '../IPlayer';
import {Player} from '../Player';
import {Turmoil} from '../turmoil/Turmoil';

export class Terraformer implements IMilestone {
  public readonly name = 'Terraformer';
  private terraformRating: number = 35;
  private terraformRatingTurmoil: number = 35;
  public readonly description;
  constructor() {
    this.description = 'Have a terraform rating of 35 (or 35 with Turmoil.)';
  }
  public getScore(player: IPlayer): number {
    return player.getTerraformRating();
  }
  public canClaim(player: Player): boolean {
    const target = Turmoil.ifTurmoilElse(player.game, () => this.terraformRatingTurmoil, () => this.terraformRating);
    const score = this.getScore(player);
    return score >= target;
  }
}
