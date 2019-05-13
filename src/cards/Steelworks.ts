
import { IActionCard } from "./ICard";
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class Steelworks implements IProjectCard, IActionCard {
    public cost: number = 15;
    public tags: Array<Tags> = [Tags.STEEL];
    public name: string = "Steelworks";
    public cardType: CardType = CardType.ACTIVE;
    public text: string = "";
    public actionText: string = "Spend 4 energy to gain 2 steel and increase oxygen 1 step.";
    public description: string = "Turning the soil into stee and oxygen sounds good. It just takes a lot of energy.";
    public canPlay(): boolean {
        return true;
    }
    public canAct(player: Player): boolean {
        return player.energy >= 4;
    }
    public action(player: Player, game: Game) {
        player.energy -= 4;
        player.steel += 2;
        return game.increaseOxygenLevel(player, 1);
    }
    public play() {
        return undefined;
    }
}
