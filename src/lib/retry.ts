/**
 * Retry-with-backoff utility for OpenAI API calls.
 * Replaces hand-rolled retry loops in extract, validate, and refine routes.
 */

export interface RetryOptions {
  /** Maximum number of attempts (default: 3) */
  maxRetries?: number;
  /** Base delay in ms between retries (default: 1000) */
  baseDelayMs?: number;
  /** Label for log messages */
  label?: string;
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const { maxRetries = 3, baseDelayMs = 1000, label = 'Operation' } = options;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      console.warn(`${label} attempt ${attempt + 1}/${maxRetries} failed:`, err);
      if (attempt === maxRetries - 1) throw err;
      await new Promise(resolve => setTimeout(resolve, baseDelayMs * (attempt + 1)));
    }
  }

  // TypeScript requires this — unreachable in practice
  throw new Error(`${label} failed after ${maxRetries} attempts`);
}
