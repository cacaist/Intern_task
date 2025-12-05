# Login Task 🎄

Hi! This is the login project I built with React for my internship task. I wanted to make it festive, so I added a christmas theme with some cool animations! ❄️

##  What's inside?

* **Responsive Login UI:** Card-based login form with a holiday gradient background.
* **Input Validation:**
    * Checks if fields are empty ("Maybe you should type something first?").
    * Validates email format ("Are you sure that's an email?").
    * Enforces a minimum password length of 6 characters ("Dont be lazy...").
* **Dynamic Animations:**
    * Falling **Snowflakes** generated via JavaScript & CSS ❄️.
    * Floating **Fire** animation on the welcome screen 🔥.
* **Routing:** Uses `react-router-dom` to navigate from Login to the Welcome page.
* **State Management:** Passes the user's email to the Welcome screen to display a personalized "Happy New Year" message.

##  Tech Stack

* **Framework:** React (v19)️
* **Build Tool:** Vite
* **Routing:** React Router DOM (v7)
* **Styling:** CSS3 (Animations, Keyframes, Gradients)

##  How to run it

It's super simple:
1. **Clone the public repository**
    ```bash
    git clone https://github.com/cacaist/Intern_task
    cd login_task
    ```
2.  **Install packages:**
    ```bash
    npm install
    ```
3.  **Start the app:**
    ```bash
    npm run dev
    ```

Open the link provided in the terminal to see it in action.

##  Encountered Issues & Solutions

### Warning: Calling setState synchronously within an effect

**Issue:**
A warning was received stating: *"Calling setState synchronously within an effect can trigger cascading renders."*
**Cause:**
The `useEffect` hook runs after the component renders. Updating the state (via `setState`) immediately within the effect forces React to re-render the component again. This cycle creates unnecessary re-renders (cascading), which negatively impacts performance.

**Solution:**
The logic to clear the error message was removed from `useEffect`. Instead, the `setError("")` call was moved to the `onChange` event handlers of the input fields. This ensures the state is updated only when the user explicitly interacts with the inputs, preventing automatic render loops.
---
*Intern Task 2025 - Made by Çağatay
