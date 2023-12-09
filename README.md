# Kanban Board React Application

This project is a React-based Kanban board application that interacts with the provided API to manage and display tickets in a visually organized manner. The application supports dynamic grouping and sorting of tickets based on user preferences.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)

## Overview

The Kanban board allows users to group and sort tickets based on three distinct options: Status, User, and Priority. Additionally, users can sort the displayed tickets by Priority or Title. The project includes a clean and minimalistic UI with icons representing various ticket attributes.

## Features

- Group tickets by Status, User, or Priority.
- Sort tickets by Priority or Title.
- Save user's view state even after page reload.
- Responsive design for an optimal user experience.

## Project Structure

The project is structured into several components to ensure maintainability and reusability. Key components include:

- **Board:** The main component orchestrating the Kanban board.
- **Column:** Represents a column in the board and contains individual cards.
- **Card:** Displays information about a specific ticket.
- **Dropdown:** A dropdown component for selecting grouping and sorting options.
