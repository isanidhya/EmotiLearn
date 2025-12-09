# **App Name**: EmotiLearn

## Core Features:

- Authentication UI: Login/Signup with Firebase Authentication (Email/Password + Google Sign-In). Role-based redirects (Student, Teacher, Coordinator/Admin).
- Emotion Data Input: Accept emotion data from webcam or external ML API payload. Data format: studentId, emotion, confidence, timestamp. Using an external emotion recognition tool.
- Student Dashboard: Display daily emotion timeline, emotion pie chart, and stress status badge (Low/Medium/High). Provide simple mental health tips.
- Teacher Dashboard: Show live class emotion distribution, student stress heatmap. Alert banner when >40% students stressed or any student has repeated high stress. Filter by class, subject, date.
- Admin/Coordinator Dashboard: Display school-wide analytics, weekly & monthly trend graphs, stress incidents log. Configuration panel for alert thresholds and emotion categories.
- Real-time Notifications: Implement real-time alert banners, toast notifications, and an alert history panel on the frontend.  Firebase functions handles trigger logic externally.
- Self-Feedback Input: Allow students to submit optional self-feedback to complement emotion data. Leverage generative AI tool to suggest potential intervention measures.

## Style Guidelines:

- Primary color: Google Blue (#4285F4) to align with Google's design principles and evoke trust and reliability.
- Background color: Light blue (#E3F2FD), a desaturated version of the primary color for a calm, supportive ambiance.
- Accent color: Soft Green (#8BC34A), an analogous color, yet different in saturation and brightness from the primary and background, to signal positive feedback and improvements in well-being.
- Body and headline font: 'PT Sans', a humanist sans-serif for a modern yet warm feel.
- Use Google Material Design icons to maintain consistency and clarity. Represent emotions and data points with clear, intuitive icons.
- Employ a responsive layout using Material Design components like rounded cards and Floating Action Buttons (FAB). Optimize for desktop (Teachers/Admin) and tablet/mobile (Students).
- Incorporate subtle animations for smooth transitions and user feedback, enhancing the overall user experience without causing distraction.