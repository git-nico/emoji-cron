/**
 * Welcome to Cloudflare Workers! This is your first scheduled worker.
 *
 * - Run `wrangler dev --local` in your terminal to start a development server
 * - Run `curl "http://localhost:8787/cdn-cgi/mf/scheduled"` to trigger the scheduled event
 * - Go back to the console to see what your worker has logged
 * - Update the Cron trigger in wrangler.toml (see https://developers.cloudflare.com/workers/wrangler/configuration/#triggers)
 * - Run `wrangler deploy --name my-worker` to deploy your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/runtime-apis/scheduled-event/
 */

/**
 * ABOVE COMMENTS DO NOT WORK
 *
 * - Run `wrangler dev --test-scheduled` in your terminal to start a development server
 * - Run `curl "http://localhost:8787/__scheduled"` to trigger the scheduled event
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;

	API_ENDPOINT: string;
}

export default {
	async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
		ctx.waitUntil(fetchUrl(env.API_ENDPOINT));
	},
};

async function fetchUrl(url: string) {
	try {
		const response = await fetch(url, {
			method: 'GET', // or 'POST' if needed
			headers: {
				'Content-Type': 'application/json',
				// Add any other required headers
			},
			// body: JSON.stringify({}), // Uncomment for POST/PUT requests
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.text();
		console.log('Request successful:', data);
		return data;
	} catch (error) {
		console.error('Fetch failed:', error);
		throw error;
	}
}
