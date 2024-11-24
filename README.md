
# AssistMe Prototype

AssistMe is a modern and interactive prototype designed to enhance the academic journey of students. Acting as a personal assistant, it helps students set, track, and achieve their academic goals. By providing curated resources, personalized tips, and progress tracking, AssistMe aims to improve productivity, study habits, and time management for students.

> **Note:** AssistMe is currently a prototype providing a simulated experience. The backend can be integrated with AI models like OpenAI to deliver a fully dynamic, intelligent assistant capable of real-time recommendations and feedback.

---

## Table of Contents

1. [Overview](#overview)
2. [Live Demo](#live-demo)
3. [Features](#features)
4. [File Structure](#file-structure)
5. [Technologies Used](#technologies-used)
6. [Setup Instructions](#setup-instructions)
7. [Future Enhancements](#future-enhancements)
8. [License](#license)

---

## Overview

AssistMe is designed to empower students to:

- Set academic goals aligned with their aspirations.
- Track progress visually through detailed graphs and charts.
- Access personalized resources to improve productivity and study habits.
- Provide feedback on resources to help the assistant learn and improve.

This prototype simulates the experience of a student assistant. While it currently focuses on static data, future enhancements can integrate AI models like OpenAI to make the assistant adaptive and dynamic.

---

## Live Demo

Experience AssistMe live:

🔗 **[Try the Live Demo Here](https://assistme-prototype.vercel.app/)**

> *Website `https://assistme-prototype.vercel.app/` *

---

## Features

### 🎯 **Goal Setting and Tracking**
- Define academic goals with details such as categories, priorities, and timeframes.
- Monitor progress through interactive progress bars and visualizations.

### 📚 **Curated Resources**
- Explore a curated set of resources and actionable tips to enhance learning and productivity.

### 📊 **Visual Progress Tracking**
- Get an overview of goal progress with interactive charts and a detailed weekly summary.

### 💬 **Feedback System**
- Provide feedback on resources to simulate an adaptive learning assistant.

### 🌟 **User-Centered Design**
- A clean and modern UI ensures an engaging and user-friendly experience.

---

## File Structure

```
AssistMe/
├── pages/
│   ├── index.js          # Landing page with an overview of AssistMe.
│   ├── initial-setup.js  # Guides users through initial setup of goals and preferences.
│   ├── dashboard.js      # Main dashboard for navigating between features.
│   ├── goals.js          # Manage and track academic goals.
│   ├── resources.js      # Explore curated resources and actionable tips.
│   ├── progress.js       # View progress with interactive graphs and charts.
├── styles/               # Custom CSS modules for styling pages.
├── components/           # Reusable UI components for modularity.
├── public/               # Static assets like images and icons.
└── README.md             # Project overview and documentation.
```

---

## Technologies Used

- **Frontend**: React.js, Next.js
- **Styling**: CSS Modules for modular and reusable styles
- **Icons**: FontAwesome (react-icons) for modern and accessible icons
- **Data Visualization**: Chart.js for interactive progress charts
- **State Management**: React Hooks

---

## Setup Instructions

Follow these steps to run the AssistMe prototype on your local machine:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/MitChaudhari/assistme-prototype.git
    cd assistme-prototype
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

4. **Access the application**:
    Open your browser and navigate to `http://localhost:3000`.

---

## Future Enhancements

The current version of AssistMe is a static prototype. Here’s what we envision for its future:

1. **AI Integration**:
   - Use AI models like OpenAI to provide personalized recommendations and feedback in real-time.

2. **Backend Integration**:
   - Implement backend services to store user data and progress securely.
   - Sync user settings and goals across devices.

3. **Mobile Compatibility**:
   - Develop a mobile-friendly version for better accessibility on smartphones and tablets.

4. **Gamification**:
   - Add features like streaks, badges, and leaderboards to motivate students.

5. **Advanced Analytics**:
   - Provide detailed insights into learning patterns and goal progress.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contributors

- **Project Lead and Developer** - Mitansh Chaudhari
- **Analysis Report, Team Test Plan, and Design Report** - Anjana Gnanaseelan Jishnu Janardanan Mitansh Chaudhari Sreeja Gopu Alexander Azroui

---

## Screenshots

### HomePage View
![Dashboard Screenshot](https://github.com/MitChaudhari/assistme-prototype/raw/main/public/screenshots/homePage.png)

### Goal Setup
![Goals Screenshot](https://github.com/MitChaudhari/assistme-prototype/raw/main/public/screenshots/setupPage.png)

### Dashboard View
![Dashboard Screenshot](https://github.com/MitChaudhari/assistme-prototype/raw/main/public/screenshots/dashboard.png)

### Goal Management
![Goals Screenshot](https://github.com/MitChaudhari/assistme-prototype/raw/main/public/screenshots/goalPage.png)

### Resources Page
![Goals Screenshot](https://github.com/MitChaudhari/assistme-prototype/raw/main/public/screenshots/resourcesPage.png)

### Progress Tracking
![Progress Screenshot](https://github.com/MitChaudhari/assistme-prototype/raw/main/public/screenshots/progressPage1.png)
![Progress Screenshot](https://github.com/MitChaudhari/assistme-prototype/raw/main/public/screenshots/progressPage2.png)

---

### Notes
For any queries or feedback, feel free to reach out via [mchaudhari1@hawk.iit.edu](mailto:mchaudhari1@hawk.iit.edu).
