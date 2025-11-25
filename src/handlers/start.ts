import { TelegramMessage, MessageHandler, TelegramBot} from "../types/telegram"
import { removeDots } from "../utils/functions";

export const startHandler: MessageHandler = {
  name: 'start',
  canHandle: (message: TelegramMessage) => message.text?.startsWith('/start') ?? false,
  handle: async (message: TelegramMessage, bot: TelegramBot) => {
    const startMessage = removeDots(`سلام!
من یه ربات ساده‌ام که نقطه‌های متنت رو پاک می‌کنه.
برای استفاده، توی هر چتی اسم منو تایپ کن و بعدش متنت رو بنویس تا بدون نقطه تحویل بگیری.`);
    await bot.sendMessage(message.chat.id, startMessage)
  }, 
  requiredAuth: false
}