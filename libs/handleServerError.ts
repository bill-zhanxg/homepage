export default function handleServerError(error: { message: string; stack?: string }) {
	console.error(error);

	// Send error via Webhook
	fetch(process.env.ERROR_LOGGER_WEBHOOK, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			embeds: [
				{
					color: 11730954,
					title: 'Homepage Error',
					description: `\`\`\`${error?.stack}\`\`\``,
				},
			],
		}),
	})
		.catch((err) => console.error(err));
}
