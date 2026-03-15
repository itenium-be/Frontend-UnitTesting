import '@testing-library/jest-dom/vitest';

// Suppress wired-elements/roughjs errors in jsdom (missing hachure filler)
process.on('unhandledRejection', (reason: unknown) => {
  const message = reason instanceof Error ? reason.message : String(reason);
  if (message.includes('fillPolygon')) {
    return;
  }
  throw reason;
});
