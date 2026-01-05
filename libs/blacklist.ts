// Blacklist of words and phrases that are not allowed in contact form emails
const EMAIL_BLACKLIST = [
	'viagra',
	'casino',
	'lottery',
	'click here',
	'buy now',
	'limited offer',
	'act now',
	'urgent',
	'guaranteed',
	'risk-free',
	'no credit card',
	'free money',
	'free shipping',
	'work from home',
	'make money fast',
	'mlm',
	'pyramid scheme',
	'crypto',
	'bitcoin',
	'nft',
	'spam',
	'buy cheap',
	'weight loss',
	'debt relief',
	'payday loan',
	'refinance',
];

/**
 * Checks if a message contains any blacklisted words or phrases
 * @param message - The message to check
 * @returns boolean - true if message contains blacklisted content, false otherwise
 */
export function containsBlacklistedContent(message: string): boolean {
	const lowerMessage = message.toLowerCase();

	return EMAIL_BLACKLIST.some((word) => lowerMessage.includes(word.toLowerCase()));
}

/**
 * Gets the blacklist for reference
 * @returns string[] - The array of blacklisted words and phrases
 */
export function getBlacklist(): string[] {
	return [...EMAIL_BLACKLIST];
}
