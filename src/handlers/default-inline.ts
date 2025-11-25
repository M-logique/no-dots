import { TelegramBot, InlineQueryHandler, TelegramInlineQueryResult, TelegramInlineQuery } from '../types/telegram';
import { removeDots } from '../utils/functions';

export const defaultInlineHandler: InlineQueryHandler = {
  name: 'default-inline',
  canHandle: (query: TelegramInlineQuery) => query.query.trim() == '',
  handle: async (query: TelegramInlineQuery, bot: TelegramBot) => {
    const results: TelegramInlineQueryResult[] = [
      {
        type: 'article',
        id: 'default',
        title: removeDots('شروع به تایپ کن تا نقطه‌ها رو حذف کنم'),
        description: removeDots('هرچی اینجا بنویسی، من نقطه‌هاشو برات پاک می‌کنم.'),
        input_message_content: {
          message_text: removeDots('برای استفاده از ربات، بعد از اسم من، متنت رو بنویس تا بدون نقطه تحویل بگیری.'),
          parse_mode: 'Markdown'
        }
      }
    ];
    await bot.answerInlineQuery(query.id, results);
  },
  requiredAuth: false
}