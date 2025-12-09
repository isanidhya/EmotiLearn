# EmotiLearn

**Understanding Students Beyond Academics.**

EmotiLearn is a web application designed to help educational institutions monitor and support the emotional well-being of their students. It provides a platform for students to report their feelings, for teachers to view class-wide emotional trends, and for administrators to get a high-level overview of the school's emotional climate. The app leverages AI to provide actionable insights and suggestions.

## ✨ Features

### For Students
- **Dashboard:** View a daily summary of your emotional state through intuitive charts.
- **Self-Feedback:** Share how you're feeling in your own words and receive AI-powered intervention suggestions to help you at the moment.
- **Well-being Resources:** Access a curated list of quick mental health tips and exercises.
- **Profile Management:** Update your personal information securely.

### For Teachers
- **Class Dashboard:** Get a real-time overview of the emotional distribution in your classes.
- **Student Stress Heatmap:** Quickly identify students who may need additional support.
- **High-Stress Alerts:** Receive notifications when a significant portion of a class reports high stress levels.

### For Administrators
- **School-wide Analytics:** Monitor overall emotional trends across the entire institution on a weekly and monthly basis.
- **Stress Incident Log:** Track and manage high-stress events reported by the system.
- **System Configuration:** Customize alert thresholds and other system parameters to fit your institution's needs.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Generative AI:** [Google's Genkit](https://firebase.google.com/docs/genkit)
- **Authentication:** [Firebase Authentication](https://firebase.google.com/docs/auth)
- **Database:** [Cloud Firestore](https://firebase.google.com/docs/firestore)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later)
- npm or a compatible package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/isanidhya/EmotiLearn.git
    cd EmotiLearn
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Firebase:**
    - Create a new project in the [Firebase Console](https://console.firebase.google.com/).
    - In your project's settings, add a new Web App.
    - Copy the `firebaseConfig` object provided.
    - Paste this object into `src/lib/firebase/config.ts`.
    - Enable **Email/Password** and **Google** sign-in methods in the Firebase Authentication section.
    - Set up **Cloud Firestore** in your project.

4.  **Set up Environment Variables:**
    - Create a `.env` file in the root of the project.
    - Add your Gemini API key for AI features:
      ```
      GEMINI_API_KEY=your_gemini_api_key_here
      ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Firestore Security Rules

The project includes a `firestore.rules` file with basic security rules. To apply them:

1.  Go to your **Firestore Database** in the Firebase Console.
2.  Click on the **Rules** tab.
3.  Copy the content of `firestore.rules` and paste it into the editor.
4.  Click **Publish**.
