# Create Worker

```sh
pnpm dlx wrangler generate my-project
```

# Run worker local

```sh
pnpm start
```

# Trigger Cron Job

[documentation](https://developers.cloudflare.com/workers/runtime-apis/handlers/scheduled/)  
[Multiple Cron Triggers](https://developers.cloudflare.com/workers/examples/multiple-cron-triggers/)

Cron Triggers can be tested using Wrangler by passing in the --test-scheduled flag to wrangler dev. This will expose a /\_\_scheduled route which can be used to test using a http request. To simulate different cron patterns, a cron query parameter can be passed in.

```sh
pnpm trigger
```

# Other info

-   [Setting Cron Triggers](https://developers.cloudflare.com/workers/examples/cron-trigger/)
-   [Cron Triggers](https://developers.cloudflare.com/workers/configuration/cron-triggers/)
-   [Triggers](https://developers.cloudflare.com/workers/wrangler/configuration/#triggers)
-   [Migrate from Service Workers to ES Modules](https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/)
-   [BUG: Scheduled Handler not found in Local Dev](https://github.com/cloudflare/workers-sdk/issues/5548)
