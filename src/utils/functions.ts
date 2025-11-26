export function escapeMarkdown(text: string) {
    return text
      .replace(/_/g, '\\_')
      .replace(/\*/g, '\\*')
      .replace(/\[/g, '\\[')
      .replace(/\]/g, '\\]')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)')
      .replace(/~/g, '\\~')
      .replace(/`/g, '\\`')
      .replace(/>/g, '\\>')
      .replace(/#/g, '\\#')
      .replace(/\+/g, '\\+')
      .replace(/-/g, '\\-')
      .replace(/=/g, '\\=')
      .replace(/\|/g, '\\|')
      .replace(/\{/g, '\\{')
      .replace(/\}/g, '\\}')
      .replace(/\./g, '\\.')
      .replace(/!/g, '\\!');
  }
  
export function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function cutDownText(text: string) {
  var cuttedText = text.split("\n")[0].slice(0, 100)
  if (cuttedText !== text) {
    cuttedText+= "..."
  }
  return cuttedText
}

export function removeDots(str: string): string {
  const manualMap: Record<string, string> = {
    // Persian characters
    'ب': 'ٮ', 'پ': 'ٮ', 'ت': 'ٮ', 'ث': 'ٮ', 'ن': 'ں', 'ی': 'ى',
    'ق': 'ٯ', 'ف': 'ڡ', 'ج': 'ح', 'چ': 'ح', 'خ': 'ح', 'ز': 'ر',
    'ژ': 'ر', 'ض': 'ص', 'ظ': 'ط', 'غ': 'ع', 'ذ': 'د', 'ش': 'س',
    'ة': 'ه', 'ي': 'ى',
    // Special Latin characters
    'i': 'ı',
    'j': 'ȷ',

    // Actual Dots
    '.': ' ',
    ':': ' ',
    '·': ' ',
  };

  // First, apply the manual replacements for specific characters
  let result = str.replace(/./g, c => manualMap[c] ?? c);

  // Then, use Unicode normalization to decompose other characters (e.g., 'ü' -> 'u' + '¨')
  // and a regex with the Unicode 'Mark' property (`\p{M}`) to remove all diacritics.
  result = result.normalize('NFD').replace(/\p{M}/gu, '');

  return result;
}

export function hasDots(str: string): boolean {
  // This is now the most reliable way to check, as it's directly tied
  // to the logic of the removeDots function itself.
  return str !== removeDots(str);
}
