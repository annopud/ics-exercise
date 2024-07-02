# Documentation

# Getting Started

Install dependencies

```bash
npm install
```

Start the application

```bash
npm run start
```

## For development or run locally

Install dependencies

```bash
npm install
```

Run the project for development

```bash
npm run dev
```

Additional to keep css continiously update

```bash
npm run build:css
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## For testing

Unit testing

```bash
npm run test
```

or Unit testing with automatically reload

```bash
npm run test:watch
```

### How your solution works
For the user interface, I decided to provide one textarea for users to enter their message without specifying whether the message is in English or UBCO. After that, the user can click the translate button to translate from English to UBCO and vice versa. The application will show the output and other details, including which language the application detected, which language it was translated into, and other information such as warnings when the message pattern is wrong or errors when the message is empty.

How it technically works: as I mentioned, the user doesn't have to specify the language of the message because I use a regular expression to distinguish which language the message is in. After that, I parse it into another language.

Another feature I would implement is an user experience. If I had more time, I would research the user experience from real users and gather some of their critiques and guidance so that I can develop my application for a better user experience, especially for people who live on other planets.

What I would do differently in a 'real world' scenario is I would prefer using Next.js or Nuxt.js for the UI because, in my view, using Node.js with EJS for HTML templates is a bit inconvenient. For example, when updating CSS, I have to open at least two terminal windows. Other frameworks don't require this and would be better for other developers who have to work after me.
