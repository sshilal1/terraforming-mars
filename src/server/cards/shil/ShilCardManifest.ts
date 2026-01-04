import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {SophonSurveillanceNetwork} from './SophonSurveillanceNetwork';
import {EmmettVille} from './EmmettVille';
import {MatingSeason} from './MatingSeason';
import {Pandemic} from './Pandemic';
import {TheJetsons} from './TheJetsons';
import {CoppsColony} from './CoppsColony';
import {RainestownGreens} from './RainestownGreens';
import {StudwellingtonPlanitia} from './StudwellingtonPlanitia';
import {PowerOfFriendship} from './PowerOfFriendship';
import {FloridaGrass} from './FloridaGrass';
// Apollo Moon Cards
import {ArmstrongObservatory} from './ArmstrongObservatory';
import {AldrinCyclerStation} from './AldrinCyclerStation';
import {TranquilityBaseMemorial} from './TranquilityBaseMemorial';
import {CollinsOrbitalCommand} from './CollinsOrbitalCommand';
import {EagleModuleArchives} from './EagleModuleArchives';
import {OneSmallStepFoundation} from './OneSmallStepFoundation';

export const SHIL_CARD_MANIFEST = new ModuleManifest({
  module: 'shil',
  projectCards: {
    [CardName.SOPHON_SURVEILLANCE_NETWORK]: {Factory: SophonSurveillanceNetwork},
    [CardName.EMMETT_VILLE]: {Factory: EmmettVille},
    [CardName.MATING_SEASON]: {Factory: MatingSeason},
    [CardName.PANDEMIC]: {Factory: Pandemic},
    [CardName.THE_JETSONS]: {Factory: TheJetsons},
    [CardName.COPPS_COLONY]: {Factory: CoppsColony},
    [CardName.RAINESTOWN_GREENS]: {Factory: RainestownGreens},
    [CardName.STUDWELLINGTON_PLANITIA]: {Factory: StudwellingtonPlanitia},
    [CardName.POWER_OF_FRIENDSHIP]: {Factory: PowerOfFriendship},
    [CardName.FLORIDA_GRASS]: {Factory: FloridaGrass},
    // Apollo Moon Cards
    [CardName.ARMSTRONG_OBSERVATORY]: {Factory: ArmstrongObservatory},
    [CardName.ALDRIN_CYCLER_STATION]: {Factory: AldrinCyclerStation},
    [CardName.TRANQUILITY_BASE_MEMORIAL]: {Factory: TranquilityBaseMemorial},
    [CardName.COLLINS_ORBITAL_COMMAND]: {Factory: CollinsOrbitalCommand},
    [CardName.EAGLE_MODULE_ARCHIVES]: {Factory: EagleModuleArchives},
    [CardName.ONE_SMALL_STEP_FOUNDATION]: {Factory: OneSmallStepFoundation},
  },
  corporationCards: {
    // Future corporations can be added here
  },
  preludeCards: {
    // Future preludes can be added here
  },
});

