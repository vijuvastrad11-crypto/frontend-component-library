# frontend-component-library# practice# Approach

## Overview

This project was built as a small reusable component library using **Preact**, **TypeScript**, **Tailwind CSS**, and **Storybook**. The goal was to create accessible, maintainable, and themeable UI components that closely match the provided Figma designs.

## Project Structure

The project is organised by component, with each component containing its implementation, styles, types, and Storybook stories.

Storybook is used as the primary development environment so each component can be developed, tested, and reviewed in isolation.

## Theming

The supplied design tokens are processed through a token generation pipeline.

To ensure the final UI closely matches the provided Figma designs, the application currently uses the manually curated theme values. The generated token pipeline remains in the project and can be extended to fully replace the manual theme as the token mapping grows.

This approach demonstrates both the token workflow and a practical implementation that produces the expected UI.

## Component Design

Each component was designed to be reusable, composable, and configurable through props rather than hardcoded values.

Implemented components include:

- Button
- Input
- Dropdown
- PromoCard

These reusable components are then composed together to build the Login Drawer.

## Accessibility

Accessibility was considered throughout the implementation by:

- Using semantic HTML elements
- Providing labels for form controls
- Supporting keyboard focus states
- Implementing disabled, error, and success states
- Maintaining visible focus indicators
- Creating Storybook stories for different component states

## Storybook

Storybook was used as the primary development environment.

Each component includes stories covering its common states, including:

- Default
- Focus
- Selected
- Opened
- Disabled
- Error
- Success

This allows each component to be reviewed independently and provides a solid foundation for future visual and interaction testing.

## Future Improvements

Given additional time, I would:

- Expand the generated token mapping so it completely replaces the manual theme.
- Add automated unit tests and interaction tests.
- Add visual regression testing.
- Improve responsive behaviour across additional screen sizes.
- Extend accessibility testing and keyboard navigation.

Overall, the focus was on producing clean, reusable, maintainable components with a structure that can scale as the design system grows.

## AI Usage

AI was used as a development assistant during this exercise, similar to how I use GitHub Copilot and other AI-assisted tools in day-to-day development.

It was used to:

- Help troubleshoot Storybook, Vite, and Tailwind configuration issues.
- Explain TypeScript and runtime errors during development.
- Review component structure and suggest improvements.
- Refine project documentation.

All implementation decisions, component development, styling, theming, debugging, testing, and final code review were completed manually. Every AI suggestion was reviewed, adapted where necessary, and verified before being included in the final solution.
