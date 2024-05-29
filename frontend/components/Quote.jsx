import { useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/quote');
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={fetchQuote}
        className="p-2 bg-gray-800 text-white dark:bg-darkaccent rounded"
      >
        {loading ? "Loading..." : "Get Wavy"}
      </button>
      {quote && (
        <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded transition-transform transform duration-500">
          {quote}
        </div>
      )}
    </div>
  );
};

export default Quote;
