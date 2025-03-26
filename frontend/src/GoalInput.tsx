import React, { useState } from "react";

const GoalInput = () => {
  const [category, setCategory] = useState("");
  const [goal, setGoal] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const predefinedCategories = [
    "Physical",
    "Spiritual",
    "Social",
    "Emotional",
    "Other",
  ];

  const handleCategorySelect = (
    selectedCategory: React.SetStateAction<string>
  ) => {
    setCategory(selectedCategory);
    setGoal("");
    setSubmitted(false);
  };

  const handleSubmit = async () => {
    if (!goal || !category) return;

    try {
      const response = await fetch("https://your-api-endpoint.com/goals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, goal }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit goal");
      }
    } catch (error) {
      console.error("Error submitting goal:", error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {!category ? (
        <div>
          <h2 className="text-lg font-bold mb-4">Select a Goal Category</h2>
          {predefinedCategories.map((cat) => (
            <button
              key={cat}
              className="m-2 p-2 border rounded"
              onClick={() => handleCategorySelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-bold mb-4">{category} Goal</h2>
          {!submitted ? (
            <div>
              <input
                type="text"
                placeholder="Enter your goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="mb-2 p-2 border rounded w-full"
              />
              <button
                className="mt-2 p-2 bg-blue-500 text-white rounded"
                onClick={handleSubmit}
              >
                Submit Goal
              </button>
            </div>
          ) : (
            <p className="text-green-600">Goal submitted successfully!</p>
          )}
          <button
            className="mt-4 p-2 border rounded"
            onClick={() => setCategory("")}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default GoalInput;
