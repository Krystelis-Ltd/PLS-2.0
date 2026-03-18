/**
 * Shared constants used across the application.
 * Eliminates magic numbers and duplicated arrays.
 */

/** AI model used across all API routes */
export const AI_MODEL = 'gpt-5.4';

/** Metadata keys that are injected by the extraction agent and stripped before rendering */
export const METADATA_KEYS = [
  'confidence_score',
  'source_quote',
  'source_file',
  'source_page',
  'source_section',
] as const;

/** Keys stripped from AI responses before document patching */
export const CITATION_KEYS_TO_REMOVE = [
  'source',
  '_citations',
  'citations',
  'reasoning',
  ...METADATA_KEYS,
] as const;

/** Number of prompts processed concurrently per extraction batch */
export const EXTRACTION_BATCH_SIZE = 7;

/** Maximum chatbot questions per session */
export const MAX_CHATBOT_QUESTIONS = 30;

/** Maximum allowed file size for uploads (50 MB) */
export const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

/** Allowed file extensions for upload */
export const ALLOWED_FILE_EXTENSIONS = ['.pdf', '.docx', '.txt'] as const;

/** Table header colors used in DOCX generation */
export const TABLE_HEADER_COLORS = ['EC6602', '0460A9', '2E74B5', '0091DF', '326496', '3C7896'] as const;

/** Treatment table color palette */
export const TREATMENT_COLOR_PALETTE = ['10384F', '00617F', '2E74B5', '0091DF', '326496', '3C7896'] as const;
