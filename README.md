# asher
A Discord bot for Best Friends In the World et. al.

## Structure
This bot is based on *Routines*. A *Routine* is a function that takes an event as a parameter, and is then registered to an event type.

If you want to add new functionality, you probably want to add a new *Routine*!

Write a routine as a short module (you can see examples inside!), then add it to `src/routines/routineManifest.js`, and it will get hooked into discord events automatically.