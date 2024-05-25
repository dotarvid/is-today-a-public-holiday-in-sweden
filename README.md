# Is today a public holiday in Sweden?

This is a simple web app that tells you if today is a public holiday in Sweden. It uses the [Nager.Date](https://github.com/nager/Nager.Date) API to get the data.

Please, if you are an employer, feel free to look at it. I just want to make it clear that [is-even](https://www.npmjs.com/package/is-even) and [is-is-even](https://www.npmjs.com/package/is-is-even) is used as a joke. Looking for something more serious? Go back and look at other stuff I have published. 💚

## Table of Contents

- [Is today a public holiday in Sweden?](#is-today-a-public-holiday-in-sweden)
  - [Table of Contents](#table-of-contents)
  - [Background](#background)
    - [Web API](#web-api)
    - [Packages](#packages)
  - [Getting Started](#getting-started)
    - [Disclaimer](#disclaimer)
    - [Pre requisites](#pre-requisites)
    - [Installation](#installation)
  - [Running the project](#running-the-project)
  - [Contributing](#contributing)
  - [License](#license)

## Background

This project is a part of a course in [Flerplattformsapplikationer med webbtekniker](https://mau-webb.github.io/resurser/da395a-vt24/) at [Malmö University](https://mau.se/). For the full instructions, see [GitHub Pages for the course](https://mau-webb.github.io/resurser/da395a-vt24/vg-assignment/) (in Swedish).

I wanted to create a simple web app that tells you if today is a public holiday in Sweden. The project was built with [Next.js](https://nextjs.org/).

We were required to build a web app that uses an API to get data, and use two packages.

### Web API

The API used in this project is the [Nager.Date](https://github.com/nager/Nager.Date) API. It provides data about public holidays in different countries.

### Packages

The two packages used in this project are:

- [is-even](https://www.npmjs.com/package/is-even) - A package that tells you if a number is even or not.
- [is-is-even](https://www.npmjs.com/package/is-is-even) - A package that tells you if a given function is the same as the is_even function from the is-even npm package.

These packages were used to demonstrate how to use npm packages in a project. This choice was clearly made as a joke, as the packages are not very useful. 🤪

## Getting Started

### Disclaimer

This project has only been tested on macOS. It should work on Windows and Linux as well, but I cannot guarantee that it will work as expected.

### Pre requisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)
- [git](https://git-scm.com/)

To run this project you need to have [Node.js](https://nodejs.org/en/) installed. You can download it [here](https://nodejs.org/en/). The project was built for version **20.5.1 LTS**.

### Installation

First, clone the repository:

```bash
git clone https://github.com/arvid-berndtsson/is-today-a-public-holiday-in-sweden.git
```

Then, navigate to the project folder:

```bash
cd is-today-a-public-holiday-in-sweden
```

Install the dependencies:

```bash
npm install
```

## Running the project

```bash
npm run dev
```

The project will start on port 3000. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If the port is already in use, it will automatically switch to the next available port. Please check the terminal for the correct port.

## Contributing

Pull requests are welcome. Please make sure to submit the pull requests to the [dev branch](https://github.com/arvid-berndtsson/is-today-a-public-holiday-in-sweden/tree/dev). For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

