# Prague Discovery

Prague Discovery is an interactive web application for exploring Prague's districts and learning about the city through quizzes and quests.

## Features

- **Interactive Map**: Explore 16 districts of Prague with data powered by the Golemio API.
- **Quest System**: Complete quests to earn XP and unlock new areas.
- **Quizzes**: Test your knowledge of Prague's history and culture.
- **Progress Tracking**: Level up and earn coins as you discover more of the city.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/prague-discovery.git
    cd prague-discovery
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up environment variables:
    Copy the template and add your Golemio API token:
    ```bash
    cp .env.template .env
    ```
    Edit `.env` and fill in `VITE_GOLEMIO_API_TOKEN`. You can get a token at [api.golemio.cz](https://api.golemio.cz/).

4.  Run the development server:
    ```bash
    npm run dev
    ```

## Technology Stack

- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Vanilla CSS
- **Data Source**: Golemio API (Prague District Data)

## License

MIT
