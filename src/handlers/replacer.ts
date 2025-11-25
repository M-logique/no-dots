import { TelegramBot, InlineQueryHandler, TelegramInlineQueryResult, TelegramInlineQuery } from "../types/telegram";
import { removeDots } from '../utils/functions'

export const replacerHandler: InlineQueryHandler = {
    name: 'replacer',
    canHandle: (query: TelegramInlineQuery) => query.query.trim() != '',
    handle: async (query: TelegramInlineQuery, bot: TelegramBot) => {
        const text: string = query.query;
        const dotlessText: string = removeDots(text);
        const results: TelegramInlineQueryResult[] = [
            {
                type: 'article',
                id: 'replacer',
                title: removeDots('متن بدون نقطه'),
                description: removeDots('رو این کلیک کن تا متنت رو بدون نقطه ببینی!'),
                input_message_content: {
                    message_text: dotlessText,
                    parse_mode: 'Markdown'
                }
            }
        ];

        await bot.answerInlineQuery(query.id, results);
    },
    requiredAuth: false,
};