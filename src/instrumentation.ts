export async function register() {
  // Application Insights only runs on the Node.js server side
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Only start if the connection string is provided (usually injected by Azure)
    if (process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
      // We use await import() because Next.js compilation might otherwise complain about require()
      const appInsights = await import('applicationinsights');
      
      appInsights.setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING)
        .setAutoCollectRequests(true)
        .setAutoCollectExceptions(true)
        .setAutoCollectDependencies(true)
        .start();
        
      console.log('✅ Azure Application Insights initialized successfully');
    } else {
      console.warn('⚠️ APPLICATIONINSIGHTS_CONNECTION_STRING is missing. App Insights will not track telemetry.');
    }
  }
}
