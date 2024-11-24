import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaBook, FaClock, FaGraduationCap, FaClipboardList, FaArrowLeft } from "react-icons/fa";
import styles from "../styles/InitialSetup.module.css";

const InitialSetup = () => {
  const router = useRouter();

  // State Management
  const [goals, setGoals] = useState([
    {
      description: "Improve GPA",
      category: "Study Skills",
      timeframe: "Long-term",
      priority: 5,
    },
    {
      description: "Prepare for Midterms",
      category: "Exam Preparation",
      timeframe: "Short-term",
      priority: 4,
    },
    {
      description: "Balance studies with work",
      category: "Time Management",
      timeframe: "Long-term",
      priority: 3,
    },
  ]);
  const [goalDescription, setGoalDescription] = useState("");
  const [category, setCategory] = useState("");
  const [timeframe, setTimeframe] = useState("Short-term");
  const [priority, setPriority] = useState(3);

  const handleAddGoal = () => {
    if (goalDescription && category) {
      const newGoal = { description: goalDescription, category, timeframe, priority };
      setGoals([...goals, newGoal]);
      setGoalDescription("");
      setCategory("");
      setTimeframe("Short-term");
      setPriority(3);
    }
  };

  const handleContinue = () => {
    router.push("/dashboard"); // Simulated navigation
  };

  const handleBack = () => {
    router.push("/"); // Navigate back to the index page
  };

  return (
    <div className={styles["initial-setup"]}>
      {/* Back to Index Button */}
      <button className={styles["back-button"]} onClick={handleBack}>
        <FaArrowLeft className={styles["back-icon"]} /> Back to Home
      </button>

      <h1 className={styles["title"]}>
        <FaGraduationCap className={styles["title-icon"]} />
        Let's set up your goals!
      </h1>

      <div className={styles["form-container"]}>
        <div className={styles["form-field"]}>
          <label className={styles["label"]}>Goal Description</label>
          <input
            type="text"
            placeholder="Enter your goal description"
            value={goalDescription}
            onChange={(e) => setGoalDescription(e.target.value)}
            className={styles["input"]}
          />
        </div>

        <div className={styles["form-field"]}>
          <label className={styles["label"]}>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles["select"]}
          >
            <option value="">Select a category</option>
            <option value="Time Management">Time Management</option>
            <option value="Study Skills">Study Skills</option>
            <option value="Exam Preparation">Exam Preparation</option>
            <option value="Productivity">Productivity</option>
            <option value="Career Planning">Career Planning</option>
          </select>
        </div>

        <div className={styles["form-field"]}>
          <label className={styles["label"]}>Timeframe</label>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className={styles["select"]}
          >
            <option value="Short-term">Short-term</option>
            <option value="Long-term">Long-term</option>
          </select>
        </div>

        <div className={styles["form-field"]}>
          <label className={styles["label"]}>Priority Level</label>
          <input
            type="range"
            min="1"
            max="5"
            value={priority}
            onChange={(e) => setPriority(parseInt(e.target.value, 10))}
            className={styles["slider"]}
          />
          <p className={styles["priority-label"]}>Priority: {priority}</p>
        </div>

        <button className={styles["add-goal-button"]} onClick={handleAddGoal}>
          Add Goal
        </button>
      </div>

      <div className={styles["goals-list"]}>
        <h2>
          <FaClipboardList className={styles["section-icon"]} /> Your Goals
        </h2>
        {goals.length > 0 ? (
          <ul className={styles["goal-list"]}>
            {goals.map((goal, index) => (
              <li key={index} className={styles["goal-item"]}>
                <strong>{goal.description}</strong> - {goal.category} (
                {goal.timeframe}, Priority: {goal.priority})
              </li>
            ))}
          </ul>
        ) : (
          <p>No goals added yet. Start adding goals!</p>
        )}
      </div>

      <button className={styles["continue-button"]} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default InitialSetup;
