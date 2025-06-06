import {
  BIBLIOGRAPHY_PART_TYPEID,
  CATEGORIES_PART_TYPEID,
  CHRONOLOGY_FRAGMENT_TYPEID,
  CHRONOTOPES_PART_TYPEID,
  COMMENT_FRAGMENT_TYPEID,
  COMMENT_PART_TYPEID,
  DOC_REFERENCES_PART_TYPEID,
  EXTERNAL_IDS_PART_TYPEID,
  INDEX_KEYWORDS_PART_TYPEID,
  METADATA_PART_TYPEID,
  NAMES_PART_TYPEID,
  NOTE_PART_TYPEID,
  TOKEN_TEXT_PART_TYPEID,
  PIN_LINKS_PART_TYPEID,
  PIN_LINKS_FRAGMENT_TYPEID,
  HISTORICAL_EVENTS_PART_TYPEID,
} from '@myrmidon/cadmus-part-general-ui';
import {
  APPARATUS_FRAGMENT_TYPEID,
  ORTHOGRAPHY_FRAGMENT_TYPEID,
} from '@myrmidon/cadmus-part-philology-ui';
import { PartEditorKeys } from '@myrmidon/cadmus-core';

import { ASSERTED_LOCATIONS_PART_TYPEID } from '@myrmidon/cadmus-part-geo-asserted-locations';
import { ASSERTED_TOPONYMS_PART_TYPEID } from '@myrmidon/cadmus-part-geo-asserted-toponyms';

import { EPI_SCRIPTS_PART_TYPEID } from '@myrmidon/cadmus-part-epigraphy-scripts';
import { EPI_SUPPORT_PART_TYPEID } from '@myrmidon/cadmus-part-epigraphy-support';
import { EPI_SUPPORT_FRR_PART_TYPEID } from '@myrmidon/cadmus-part-epigraphy-support-frr';
import { EPI_SIGNS_PART_TYPEID } from '@myrmidon/cadmus-part-epigraphy-signs';

const GENERAL = 'general';
const PHILOLOGY = 'philology';
const GEOGRAPHY = 'geography';
const EPIGRAPHY = 'epigraphy';

const TOKEN_TEXT_LAYER_PART_TYPEID = 'it.vedph.token-text-layer';

/**
 * The parts and fragments editor keys for this UI.
 * Each property is a part type ID, mapped to a value of type PartGroupKey,
 * having a part property with the part's editor key, and a fragments property
 * with the mappings between fragment type IDs and their editor keys.
 */
export const PART_EDITOR_KEYS: PartEditorKeys = {
  [BIBLIOGRAPHY_PART_TYPEID]: {
    part: GENERAL,
  },
  [CATEGORIES_PART_TYPEID]: {
    part: GENERAL,
  },
  [CHRONOTOPES_PART_TYPEID]: {
    part: GENERAL,
  },
  [COMMENT_PART_TYPEID]: {
    part: GENERAL,
  },
  [DOC_REFERENCES_PART_TYPEID]: {
    part: GENERAL,
  },
  [EXTERNAL_IDS_PART_TYPEID]: {
    part: GENERAL,
  },
  [HISTORICAL_EVENTS_PART_TYPEID]: {
    part: GENERAL,
  },
  [INDEX_KEYWORDS_PART_TYPEID]: {
    part: GENERAL,
  },
  [METADATA_PART_TYPEID]: {
    part: GENERAL,
  },
  [NAMES_PART_TYPEID]: {
    part: GENERAL,
  },
  [NOTE_PART_TYPEID]: {
    part: GENERAL,
  },
  [PIN_LINKS_PART_TYPEID]: {
    part: GENERAL,
  },
  [TOKEN_TEXT_PART_TYPEID]: {
    part: GENERAL,
  },
  // geography
  [ASSERTED_LOCATIONS_PART_TYPEID]: {
    part: GEOGRAPHY,
  },
  [ASSERTED_TOPONYMS_PART_TYPEID]: {
    part: GEOGRAPHY,
  },
  // epigraphy
  [EPI_SUPPORT_PART_TYPEID]: {
    part: EPIGRAPHY,
  },
  [EPI_SUPPORT_FRR_PART_TYPEID]: {
    part: EPIGRAPHY,
  },
  [EPI_SCRIPTS_PART_TYPEID]: {
    part: EPIGRAPHY,
  },
  [EPI_SIGNS_PART_TYPEID]: {
    part: EPIGRAPHY,
  },
  // layer parts
  [TOKEN_TEXT_LAYER_PART_TYPEID]: {
    part: GENERAL,
    fragments: {
      // general
      [CHRONOLOGY_FRAGMENT_TYPEID]: GENERAL,
      [COMMENT_FRAGMENT_TYPEID]: GENERAL,
      [PIN_LINKS_FRAGMENT_TYPEID]: GENERAL,
      // philology
      [APPARATUS_FRAGMENT_TYPEID]: PHILOLOGY,
      [ORTHOGRAPHY_FRAGMENT_TYPEID]: PHILOLOGY,
    },
  },
};
