import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoalInput = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [frequency, setFrequency] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [categories, setCategories] = useState<
    { typeId: number; typeName: string }[]
  >([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://localhost:7182/goaltypes");
        if (!response.ok) throw new Error("Failed to load categories");

        const data = await response.json();
        setCategories(data); // Now categories is an array of { typeId, typeName }
      } catch (err) {
        setError("Error loading categories");
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (selectedCategory: string) => {
    const selectedType = categories.find(
      (cat) => cat.typeName === selectedCategory
    );
    if (selectedType) {
      setCategory(selectedType.typeId.toString()); // Store the typeId as a string for now
    }
    setName("");
    setDescription("");
    setFinishDate("");
    setFrequency("");
    setSubmitted(false);
  };

  const handleSubmit = async () => {
    if (!name || !description || !category || !frequency) return;

    try {
      const response = await fetch("https://localhost:7182/goals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          typeID: parseInt(category), // Convert to integer
          finishDate: finishDate || null,
          frequencyID: parseInt(frequency),
          goalcomp: false,
        }),
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
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : !category ? (
        <div>
          <h2 className="text-lg font-bold mb-4">Select a Goal Category</h2>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <button
                key={cat.typeId}
                className="mt-2 p-2 bg-white text-black border border-gray-500 rounded w-full"
                onClick={() => handleCategorySelect(cat.typeName)}
              >
                {cat.typeName}
              </button>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-bold mb-4">
            {
              categories.find((cat) => cat.typeId.toString() === category)
                ?.typeName
            }{" "}
            Goal
          </h2>
          {!submitted ? (
            <div>
              <input
                type="text"
                placeholder="Goal Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-2 p-2 border rounded w-full text-black"
              />
              <br />
              <br />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mb-2 p-2 border rounded w-full text-black"
              />
              <br />

              <input
                type="date"
                value={finishDate}
                onChange={(e) => setFinishDate(e.target.value)}
                className="mb-2 p-2 border rounded w-full text-black"
              />
              <br />
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="mb-2 p-2 border rounded w-full text-black"
              >
                <option value="">Select Frequency</option>
                <option value="1">Daily</option>
                <option value="2">Weekly</option>
                <option value="3">Monthly</option>
              </select>
              <br />
              <button
                className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
                onClick={handleSubmit}
              >
                Submit Goal
              </button>
            </div>
          ) : (
            <p className="text-green-600">Goal submitted successfully!</p>
          )}
        </div>
      )}

      {/* Always show the Back button to go back to category selection */}
      <button
        onClick={() => setCategory("")}
        className="mt-4 p-2 bg-white text-black border border-gray-500 rounded w-full"
      >
        Back to Categories
      </button>

      {/* Optionally, after submission, show this */}
      {submitted && (
        <button
          onClick={() => setCategory("")}
          className="mt-4 p-2 bg-white text-black border border-gray-500 rounded w-full"
        >
          Back to Categories
        </button>
      )}
    </div>
  );
};

export default GoalInput;
