# Room Homepage - Frontend Mentor Challenge

This project is a solution to the [Room Homepage Challenge](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq) on Frontend Mentor. The goal was to create a homepage using HTML, CSS, and JavaScript with React, while adhering closely to the provided design.

## Table of Contents

- [Room Homepage - Frontend Mentor Challenge](#room-homepage---frontend-mentor-challenge)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [What I Learned](#what-i-learned)
  - [Challenges](#challenges)

## Overview

The "Room Homepage" project is a homepage for a furniture website. It offers users a dynamic main image section that can be navigated via buttons. The displayed images are optimized for both desktop and mobile views. The site is designed to be fully responsive and functional across various screen sizes.

## Features

- **Responsive Layout**: The design adapts to different screen sizes, including both desktop and mobile versions.
- **Dynamic Image Carousel**: Utilizes `framer-motion` for smooth transitions between main images.
- **Navbar for Mobile and Desktop**: A hamburger menu appears on mobile with a close button for easy navigation.
- **Animated Transitions**: Uses `framer-motion` for fluid animations during image changes.
- **Navigation Buttons**: Users can navigate between carousel images via custom navigation buttons.

## Technologies Used

- **React**: Used to build the user interface.
- **CSS (without framework)**: For styling the application.
- **Framer Motion**: To handle animations and image transitions.
- **Vite**: Used for fast bundling during development.

## What I Learned

This project allowed me to improve in several areas:

- **Image Layout**: I learned to use CSS Grid to position images more effectively, which has always been a challenge for me in the past.
- **Framer Motion**: I discovered how to create smooth and responsive animations to enhance the user experience.
- **useRef and Dynamic Width Calculation**: One part I am most proud of is the calculation I implemented to manage the carousel navigation buttons using `useRef` to dynamically calculate the width.

## Challenges

- **Responsive Design**: Transitioning from the desktop version to the mobile version required careful management of images and layout. I used React hooks to detect screen size and change images based on window width.
