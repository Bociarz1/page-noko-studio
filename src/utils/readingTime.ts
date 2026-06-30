export function getReadingTime(text: string): number {
  if (!text) return 0;
  
  const cleanText = text.replace(/<[^>]*>?/gm, '');
  
  const wordMatch = cleanText.match(/[\w\d\s,.\u0100-\u017F]+/gi);
  const words = wordMatch ? wordMatch.join(' ').split(/\s+/).length : 0;
  
  const wordsPerMinute = 200;
  
  const minutes = Math.ceil(words / wordsPerMinute);
  
  return minutes;
}
