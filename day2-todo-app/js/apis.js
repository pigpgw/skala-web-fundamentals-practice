export const getDailyRandomQuote = async () => {
  const response = await fetch("data/quotes.json");

  if (!response.ok) {
    throw new Error("오늘의 한마디를 불러오지 못했습니다.");
  }

  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.quotes.length);

  return data.quotes[randomIndex];
};
