# INST377-Final-Project-Mawa-Clarke
Linica - Your Ultimate Language Learning Resource
- Project Description: Linica is a language learning aid designed into a web application. The goal of this site is to help users learn a new language more efficiently by being able to provide translations, a flashcard feature, definitions (coming soon!), and linguistic context. With Linica, users have the ability to:
    - Translate any word or sentence.
    - Detect the input language automatically.
    - Create multiple flashcards to practice word and sentence retention.
    - View encyclopedic content about a word in the word's native language.
    - Be able to view definition of the words in the selected language (feature coming soon!)
This platform is great for both beginners who want quick translations along with intermediate and advanced learners who would like to go deeper with their vocabulary knowledge.
-[Go to User Manual](#user-manual)
-[Go to Developer Manual](#developer-manual)

Target Browsers
Our web applications is available for the following browsers:
- Chrome, Safari, Edge

## User Manual
- The home page gives a quick overview on the power of language learning! This is a background and context heavy page, where you gain valuable knowledge on how to approach learning a language. In the bottom of the page, you are given my contact information in the case of questions, concerns, or recommendations.
- The next page is the Translate Page. At the top, you are shown two boxes, one for the text you would like to be translated, and the box to the side is the translated output. Select the following languages: <code>English</code>, <code>French</code>, <code>Spanish</code>, <code>German</code>,<code>Japanese</code>, <code>Korean</code>, <code>Chinese (Simplified)</code>, <code>Vietnamese</code>, and <code>Tagalog</code>
- In the box under, you have the Detect Language box. Input any text in the box, and the output will be the language you had inputted.
- On the bottom of the page is the Flashcards section. Include what you would like on the front of the flashcard and in the back of the flashcard, then save it. You have the option to add as many flashcards as you would like.
- The next page is the Dictionary Page, which is currently under construction and coming soon!
- Next, we have the Wiki Page, which outputs any available Wiki page in whatever language available. Unfortunately, the database is not as saturated for the Wiki, though you have the option to see linguistic and encyclopedic content for whatever Wiki is available for a word. You also have the option to be directed to a Wiki page that will include more information on the word you are looking for. You also are able to select Wikis in other languages to practice your language reading skills by being redirected to a Wiki page in whatever word. You may also be provided with a pronounciation audio file.
- The Contact page allows the user to have the opportunity to fill out a form to get in contact with a team of native or advanced speakers in a language. This allows for the user to request tutoring serves.

## Developers Manual

### Installation
1. Clone the project repository into a directory with this command: 
    ```
    git clone git@github.com:INST377-UMD
2. Navigate into the project directory and open it using:
    ```
    cd INST
3. Install the required dependencies, including:
    ```
    npm install
4. Note, if Node.js is not already installed, use the following link:
5. Install Express:
    ```
    npm install express
6. Install Nodemon:
    ```
    npm install nodemon
7. Install Supabase package:
    ```
    npm install @supabase/supabase-js

### Running the server/application
- After installing all depndencies, run this command to run the application:
    ```
    npm start

This will start the server. To confirm, you should see <code>App is Alive 3000</code> in the terminal, which indicates that the server is running.
Your app will be available using:
    ```
    http://localhost:3000
Or using the Vercel domain:
    ```
    git c

### API Documentation
- The main API used is titled. One 
- The second is an external database using Supabase, with a POST endpoint. The database is titled "contact", and it stores users inputting their information to request for tutoring services under the <code>Contact</code> Page.

### Notes & Comments
- As mentioned before, this application will continue to be developed, as a Definition page will be added soon.
    
