import { TelegramMessage, MessageHandler, TelegramBot} from "../types/telegram"
import { hasDots, removeDots } from "../utils/functions"

export const notStartHandler: MessageHandler = {
  name: 'start',
  canHandle: (message: TelegramMessage) => !(message.text?.startsWith('/start') ?? false) && hasDots(message.text ?? ''),
  handle: async (message: TelegramMessage, bot: TelegramBot) => {
    if (message.text) {
        const dotlessText: string = removeDots(message.text);
        await bot.sendMessage(message.chat.id, dotlessText);
    };
  }, 
  requiredAuth: false
}