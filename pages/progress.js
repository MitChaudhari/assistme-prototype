import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaTasks, FaStar, FaRegStar, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Chart from 'chart.js/auto';
import styles from '../styles/Progress.module.css';

const Progress = () => {
  const router = useRouter();
  const chartRef = useRef(null);
  const [goals, setGoals] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedback, setFeedback] = useState({
    rating: 0,
    comment: '',
    resourceId: null,
  });
  const [thankYouMessage, setThankYouMessage] = useState(false);

  // New state to check if component is mounted on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true after component mounts
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      // Fetch goals from local storage or API
      const storedGoals = JSON.parse(localStorage.getItem('goals')) || [
        {
          id: 1,
          description: 'Master Time Management',
          category: 'Time Management',
          timeframe: 'Short-term',
          priority: 4,
          progress: 50,
        },
        {
          id: 2,
          description: 'Prepare for Midterm Exams',
          category: 'Exam Preparation',
          timeframe: 'Short-term',
          priority: 5,
          progress: 30,
        },
        {
          id: 3,
          description: 'Develop a Study Plan',
          category: 'Study Skills',
          timeframe: 'Long-term',
          priority: 3,
          progress: 70,
        },
        {
          id: 4,
          description: 'Balance Work and Study',
          category: 'Work-Life Balance',
          timeframe: 'Long-term',
          priority: 3,
          progress: 80,
        },
      ];
      setGoals(storedGoals);
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy previous chart instance if exists
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }

      chartRef.current.chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: goals.map((goal) => goal.description),
          datasets: [
            {
              label: 'Goal Progress (%)',
              data: goals.map((goal) => goal.progress),
              backgroundColor: '#4caf50',
              borderColor: '#4caf50',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: { color: '#f0f0f0' },
              grid: { color: '#444' },
            },
            x: {
              ticks: { color: '#f0f0f0' },
              grid: { color: '#444' },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: '#f0f0f0',
              },
            },
          },
        },
      });
    }
  }, [goals, isClient]);

  // Overall progress calculation
  const overallProgress =
    goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length || 0;

  // Handle feedback submission
  const handleFeedbackSubmit = () => {
    console.log('Feedback submitted:', feedback);
    setShowFeedbackModal(false);
    setThankYouMessage(true);
    setFeedback({
      rating: 0,
      comment: '',
      resourceId: null,
    });
    setTimeout(() => setThankYouMessage(false), 3000);
  };

  if (!isClient) {
    // While waiting for the component to mount on the client, render nothing or a loader
    return null;
  }

  return (
    <div className={styles.progressPage}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => router.back()}>
          <FaArrowLeft className={styles.icon} /> Back
        </button>
        <h1 className={styles.title}>
          <FaTasks className={styles.icon} /> Your Progress
        </h1>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Overall Progress</h2>
          <div className={styles.chartContainer}>
            <canvas ref={chartRef} />
          </div>
          <p className={styles.overallProgressText}>
            Average Progress: {overallProgress.toFixed(2)}%
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Individual Goal Progress</h2>
          <div className={styles.goalsList}>
            {goals.map((goal) => (
              <div key={goal.id} className={styles.goalItem}>
                <h3 className={styles.goalTitle}>{goal.description}</h3>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <p className={styles.progressText}>{goal.progress}% Complete</p>
                <button
                  className={styles.feedbackButton}
                  onClick={() => {
                    setSelectedGoal(goal);
                    setShowFeedbackModal(true);
                    setFeedback({ ...feedback, resourceId: goal.id });
                  }}
                >
                  Provide Feedback
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Weekly Summary</h2>
          <p className={styles.summaryText}>
            Activities Completed: {Math.floor(overallProgress / 10)}
          </p>
          <p className={styles.summaryText}>
            Time Spent on Tasks: {Math.floor(overallProgress * 1.5)} hours
          </p>
        </section>

        <button
          className={styles.adjustGoalsButton}
          onClick={() => router.push('/goals')}
        >
          Adjust Goals
        </button>
      </main>

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowFeedbackModal(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setShowFeedbackModal(false)}
            >
              <FaTimes />
            </button>
            <h2 className={styles.modalTitle}>Provide Feedback</h2>
            <p className={styles.modalPrompt}>
              How helpful was the resource "{selectedGoal?.description}"?
            </p>
            <div className={styles.rating}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={styles.starButton}
                  onClick={() => setFeedback({ ...feedback, rating: star })}
                >
                  {feedback.rating >= star ? <FaStar /> : <FaRegStar />}
                </button>
              ))}
            </div>
            <textarea
              className={styles.comments}
              placeholder="Additional comments..."
              value={feedback.comment}
              onChange={(e) =>
                setFeedback({ ...feedback, comment: e.target.value })
              }
            ></textarea>
            <button
              className={styles.submitButton}
              onClick={handleFeedbackSubmit}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      )}

      {/* Thank You Message */}
      {thankYouMessage && (
        <div className={styles.thankYouMessage}>
          <p>Thank you for your feedback!</p>
        </div>
      )}
    </div>
  );
};

export default Progress;
