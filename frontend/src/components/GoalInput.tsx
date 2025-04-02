import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GoalInput.css";

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
  const navigate = useNavigate();

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

    const formattedDate = finishDate
      ? new Date(finishDate).toISOString()
      : null;
    console.log("Formatted Date:", formattedDate);

    const payload = {
      userId: 1,
      gName: name, // Correct field name
      gDescription: description, // Correct field name
      typeId: parseInt(category), // Ensure category is an integer
      finDate: formattedDate, // Ensure correct date format
      suggestId: null, // This is optional based on your schema
      freqId: parseInt(frequency), // Ensure frequency matches FreqID
      goalComp: false, // Assuming this column exists
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await fetch("https://localhost:7182/AddGoal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit goal");
        const errorResponse = await response.text();
        console.error("Server Response:", errorResponse);
      }
    } catch (error) {
      console.error("Error submitting goal:", error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto flex flex-col items-center text-center">
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
                  className="my-button"
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

                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mb-2 p-2 border rounded w-full text-black"
                />

                <input
                  type="date"
                  value={finishDate}
                  onChange={(e) => setFinishDate(e.target.value)}
                  className="mb-2 p-2 border rounded w-full text-black"
                />

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

                <button className="my-button" onClick={handleSubmit}>
                  Submit Goal
                </button>
              </div>
            ) : (
              <p className="text-green-600">Goal submitted successfully!</p>
            )}
          </div>
        )}

        {/* Show the Back button only after a category is selected */}
{category && (
  <button onClick={() => setCategory("")} className="my-button mt-4">
    Back
  </button>
)}

      </div>
    </div>
  );
};

export default GoalInput;
