import OpenAI from 'openai';

/**
 * Shared OpenAI client instance.
 * Fails fast at import time if OPENAI_API_KEY is not configured.
 */

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error(
    'OPENAI_API_KEY environment variable is not set. ' +
    'Please add it to your .env.local file. See .env.example for reference.'
  );
}

export const openai = new OpenAI({ apiKey });
