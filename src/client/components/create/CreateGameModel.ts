import {CardName} from '@/common/cards/CardName';
import {ColonyName} from '@/common/colonies/ColonyName';
import {RandomMAOptionType} from '@/common/ma/RandomMAOptionType';
import {GameId} from '@/common/Types';
import {AgendaStyle} from '@/common/turmoil/Types';
import {BoardNameType, NewPlayerModel} from '@/common/game/NewGameConfig';

export interface CreateGameModel {
  allOfficialExpansions: boolean;
  altVenusBoard: boolean;
  aresExtension: boolean;
  bannedCards: Array<CardName>;
  board: BoardNameType;
  boards: Array<BoardNameType>;
  ceoExtension: boolean;
  clonedGameId: GameId | undefined;
  colonies: boolean;
  communityCardsOption: boolean;
  corporateEra: boolean;
  customCeos: Array<CardName>;
  customColonies: Array<ColonyName>;
  customCorporations: Array<CardName>;
  customPreludes: Array<CardName>;
  showBannedCards: boolean;
  showCorporationList: boolean;
  showColoniesList: boolean;
  showPreludesList: boolean;
  seed: number;
  solarPhaseOption: boolean;
  shuffleMapOption: boolean;
  promoCardsOption: boolean;
  shilCardsOption: boolean;
  politicalAgendasExtension: AgendaStyle;
  moonExpansion: boolean;
  pathfindersExpansion: boolean;
  undoOption: boolean;
  showTimers: boolean;
  fastModeOption: boolean;
  removeNegativeGlobalEventsOption: boolean;
  removeTerraformingLossOption: boolean;
  includeVenusMA: boolean;
  includeFanMA: boolean;
  startingCorporations: number;
  soloTR: boolean;
  requiresVenusTrackCompletion: boolean;
  requiresMoonTrackCompletion: boolean;
  moonStandardProjectVariant: boolean;
  seededGame: boolean;
  escapeVelocityMode: boolean;
  escapeVelocityThreshold: number;
  draftVariant: boolean;
  escapeVelocityBonusSeconds: number;
  escapeVelocityPenalty: number;
  escapeVelocityPeriod: number;
  firstIndex: number;
  includedCards: Array<CardName>;
  initialDraft: boolean;
  players: Array<NewPlayerModel>;
  playersCount: number;
  prelude: boolean;
  preludeDraftVariant: boolean | undefined;
  prelude2Expansion: boolean;
  randomFirstPlayer: boolean;
  randomMA: RandomMAOptionType;
  showIncludedCards: boolean;
  showOtherPlayersVP: boolean;
  startingCeos: number;
  starWarsExpansion: boolean,
  turmoil: boolean;
  twoCorpsVariant: boolean;
  underworldExpansion: boolean,
  venusNext: boolean;
}
