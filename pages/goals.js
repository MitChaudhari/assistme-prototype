import React, { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaTasks,
  FaArrowLeft,
  FaTimes,
  FaBook,
  FaBookOpen,
  FaChartLine, // Added import
} from "react-icons/fa";
import { useRouter } from "next/router";
import styles from "../styles/Goals.module.css";

const Goals = () => {
  const router = useRouter();
  const [goals, setGoals] = useState([
    {
      id: 1,
      description: "Master Time Management",
      category: "Time Management",
      timeframe: "Short-term",
      priority: 4,
      progress: 50,
      content: `To master time management:
- Use the **Eisenhower Matrix** to prioritize tasks.
- Implement the **Pomodoro Technique** for focused work sessions.
- Schedule your day using a planner or digital calendar.
- Minimize distractions by setting boundaries for social media and entertainment.`,
    },
    {
      id: 2,
      description: "Prepare for Midterm Exams",
      category: "Exam Preparation",
      timeframe: "Short-term",
      priority: 5,
      progress: 30,
      content: `For effective midterm exam preparation:
- Create a study schedule covering all topics.
- Review past exam papers to understand the question patterns.
- Form a study group to discuss challenging concepts.
- Take regular breaks to avoid burnout and keep your mind fresh.`,
    },
    {
      id: 3,
      description: "Develop a Study Plan",
      category: "Study Skills",
      timeframe: "Long-term",
      priority: 3,
      progress: 70,
      content: `To develop a comprehensive study plan:
- Identify your learning objectives for each subject.
- Allocate specific time slots for studying different topics.
- Set achievable milestones and track your progress.
- Incorporate various learning methods like reading, practice problems, and teaching others.`,
    },
    {
      id: 4,
      description: "Balance Work and Study",
      category: "Work-Life Balance",
      timeframe: "Long-term",
      priority: 3,
      progress: 80,
      content: `To balance work and study:
- Prioritize your tasks and focus on the most important ones.
- Communicate your schedule with employers and family.
- Use time-blocking to allocate dedicated time for work, study, and rest.
- Practice self-care to maintain physical and mental health.`,
    },
  ]);

  const [selectedGoal, setSelectedGoal] = useState(null);
  const [showAddGoalForm, setShowAddGoalForm] = useState(false);
  const [goalInput, setGoalInput] = useState({
    description: "",
    category: "",
    timeframe: "Short-term",
    priority: 3,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGoalInput({ ...goalInput, [name]: value });
  };

  const handleAddGoal = () => {
    setGoals([
      ...goals,
      {
        ...goalInput,
        progress: 0,
        id: goals.length + 1,
        content:
          "Here you can add detailed steps or resources for your new goal.",
      },
    ]);
    setShowAddGoalForm(false);
    setGoalInput({
      description: "",
      category: "",
      timeframe: "Short-term",
      priority: 3,
    });
  };

  const handleDeleteGoal = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this goal?"
    );
    if (confirmDelete) {
      setGoals(goals.filter((goal) => goal.id !== id));
    }
  };

  const openModal = (goal) => {
    setSelectedGoal(goal);
  };

  const closeModal = () => {
    setSelectedGoal(null);
  };

  return (
    <div className={styles.goals}>
      <header className={styles.header}>
        <div className={styles.headerButtons}>
          <button
            className={styles.backButton}
            onClick={() => window.history.back()}
          >
            <FaArrowLeft className={styles.icon} /> Back
          </button>
          <div className={styles.rightButtons}>
            <button
              className={styles.resourcesButton}
              onClick={() => router.push("/resources")}
            >
              <FaBookOpen className={styles.icon} /> Resources
            </button>
            <button
              className={styles.progressButton}
              onClick={() => router.push("/progress")}
            >
              <FaChartLine className={styles.icon} /> Progress
            </button>
          </div>
        </div>
        <h1 className={styles.title}>
          <FaTasks className={styles.titleIcon} /> Manage Your Goals
        </h1>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Goals</h2>
          <div className={styles.goalList}>
            {goals.map((goal) => (
              <div
                key={goal.id}
                className={styles.goalItem}
                onClick={() => openModal(goal)}
              >
                <div className={styles.goalHeader}>
                  <h3 className={styles.goalDescription}>
                    <FaBook className={styles.goalIcon} /> {goal.description}
                  </h3>
                  <div className={styles.goalActions}>
                    <button
                      className={styles.editButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(
                          `Edit Goal functionality for "${goal.description}" is simulated.`
                        );
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteGoal(goal.id);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <p className={styles.goalDetails}>
                  Category: <span>{goal.category}</span> | Timeframe:{" "}
                  <span>{goal.timeframe}</span> | Priority:{" "}
                  <span>{goal.priority}</span>
                </p>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <p className={styles.progressText}>{goal.progress}% Complete</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <button
            className={styles.addGoalButton}
            onClick={() => setShowAddGoalForm(!showAddGoalForm)}
          >
            <FaPlus /> Add New Goal
          </button>

          {showAddGoalForm && (
            <div className={styles.addGoalForm}>
              <h3>Add a New Goal</h3>
              <input
                type="text"
                name="description"
                placeholder="Goal Description"
                value={goalInput.description}
                onChange={handleInputChange}
                className={styles.input}
              />
              <select
                name="category"
                value={goalInput.category}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">Select Category</option>
                <option value="Time Management">Time Management</option>
                <option value="Study Skills">Study Skills</option>
                <option value="Exam Preparation">Exam Preparation</option>
                <option value="Productivity">Productivity</option>
                <option value="Career Planning">Career Planning</option>
              </select>
              <select
                name="timeframe"
                value={goalInput.timeframe}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="Short-term">Short-term</option>
                <option value="Long-term">Long-term</option>
              </select>
              <label>
                Priority:{" "}
                <input
                  type="range"
                  name="priority"
                  min="1"
                  max="5"
                  value={goalInput.priority}
                  onChange={handleInputChange}
                  className={styles.slider}
                />
              </label>
              <button className={styles.submitButton} onClick={handleAddGoal}>
                Save Goal
              </button>
            </div>
          )}
        </section>
      </main>

      {selectedGoal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              <FaTimes />
            </button>
            <h2 className={styles.modalTitle}>{selectedGoal.description}</h2>
            <p className={styles.modalContent}>{selectedGoal.content}</p>
            <p>
              <strong>Category:</strong> {selectedGoal.category}
            </p>
            <p>
              <strong>Timeframe:</strong> {selectedGoal.timeframe}
            </p>
            <p>
              <strong>Priority:</strong> {selectedGoal.priority}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Goals;
