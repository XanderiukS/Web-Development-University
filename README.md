# 🌐 Web Development & University Projects

Welcome to my repository! This space documents my journey into the world of web development. Here, I group my university projects, labs, and personal practices focused on building a solid foundation in frontend technologies, responsive design, and API integrations.

This repository reflects my learning path, problem-solving skills, and my evolution in writing clean, scalable, and optimized web applications.

---

## 📂 Repository Contents

The repository is divided into independent folders, each focused on developing specific skills and solving different challenges:

### 1. country-explorer
A dynamic Single Page Application (SPA) designed to fetch and display real-time data from countries around the world.
* **Applied Concepts:** API consumption using `HttpClient`, asynchronous data handling with Observables (`RxJS`), dependency injection through Services, and modern Angular structural directives (like `@for` and `@empty`).
* **Key Features:** Grid layout styling with CSS3, dynamic image rendering (flags), and external public API integration. *(Work in progress: Text-based search and continent filtering).*

### 2. motofix
A commercial landing page for an automotive repair shop ("Tu Taller de Confianza", 15+ years of experience), built with Angular 21.
* **Applied Concepts:** Routing with lazy loading of standalone components (`loadComponent` in `app.routes.ts`), external REST API integration with data transformation, and loading/error state handling within components.
* **Key Features:** Multi-section home page (hero, services, about, location, navbar, footer) covering 6 services (engine tuning, brake system, suspension and steering, computerized diagnostics, oil change, transmission) each with its own description and feature list; an additional `/clientes` route (`ClientsComponent`) that consumes the public `https://jsonplaceholder.typicode.com/users` API through `UsersService` and transforms the user data into a client listing with initials, colored avatars, and formatted phone numbers.

### 3. dograndom
An Angular 21 standalone application that displays a gallery of randomly generated dog images.
* **Applied Concepts:** Reactive state management using Angular Signals (`signal`, `computed`) instead of plain RxJS for UI state (loading/success/error), consumption of a public REST API, standalone component-based architecture, and dependency injection via `inject()`.
* **Key Features:** `DogService` fetches 20 random dog images from the public `https://dog.ceo/api/breeds/image/random/20` API and extracts each dog's breed by parsing the image URL; `GalleryComponent` manages the loading/success/error state with Signals; component structure split into standalone `header`, `gallery`, and `dog-card` components.

*(More projects will be added as my university courses progress).*

---

## 🛠️ Technologies & Tools

* **Core Languages:** HTML5, CSS3, TypeScript
* **Framework:** Angular (versions ranging from v17+ to v21, depending on the project)
* **Architecture:** Component-Based Architecture / Single Page Application (SPA)
* **Data Management:** RESTful APIs / JSON
* **IDE:** Visual Studio Code
* **Version Control:** Git & GitHub

---

---

## 💡 Core Learnings & Best Practices

Beyond just writing code, this repository reflects my focus on modern web development standards:

* **Modern Angular Ecosystem:** Leveraging Standalone Components and the new Control Flow syntax (`@for`, `@empty`) for cleaner, module-free templates.
* **Responsive Design:** Implementing fluid layouts using CSS Grid and Flexbox to ensure applications look great on desktop and mobile devices.
* **Clean Code & Architecture:** Separating business logic into injectable Services and keeping Components strictly focused on UI rendering.
* **Asynchronous Programming:** Handling HTTP requests and API responses cleanly using RxJS Observables.

---
