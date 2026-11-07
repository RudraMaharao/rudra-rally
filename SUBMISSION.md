# Rudra Rally — A portfolio with horsepower

Draft for the hackathon’s “Your project” form. Review before publishing.

**Live website:** https://main.d315hq6yqhwgli.amplifyapp.com

**Source:** https://github.com/RudraMaharao/rudra-rally

## My creative feature

I turned my portfolio into a kart-racing island inspired by my interest in games and my experience testing gameplay and user experience at WeTest. Visitors meet me through a short introduction covering my academics, work and certifications, then race two laps against four CPU rivals.

Each district represents a real project: paint colour matching at Colour Canyon, edge-AI fire detection at Ember Ridge, document automation at Automation Avenue, and nutrition analytics at Nutrition Gardens. On the first lap, each checkpoint pauses the race and explains the project. Reading time does not count toward the race result. The second lap keeps the action moving.

Skill coins add points. Ramps, drift boosts, item boxes, shields, rival pulses, shortcuts and moving obstacles make the circuit playful. Pure Raceway, a CC0 synth racing track by MintoDog, gives it an upbeat arcade feel. Music is credited and self-hosted on AWS. A shared fastest-five leaderboard lets visitors optionally save a name and their two-lap time. The rating stars accept feedback; written notes are private, while the average rating and count are public.

The portfolio remains easy to use: Projects, The driver, Skill garage and contact details are always accessible from the menu. Scenic Tour provides automatic driving, and touch controls support phones.

## How I built it

The frontend uses Three.js and vanilla JavaScript. Track, karts, buildings and scenery are generated in code. A deterministic simulation runs in the browser and in AWS Lambda. The browser sends its recorded control changes after a race; Lambda replays them before issuing a signed result receipt.

AWS Amplify Hosting serves the site over HTTPS. API Gateway routes the backend requests to Lambda, and DynamoDB persists results and reviews. IAM limits the function’s table access. The code and deployment steps are documented in the repository.

## Challenges and lessons

Expanding the track exposed depth-rendering artifacts: almost-overlapping road surfaces flickered. Removing the competing surface and improving camera depth precision made the road stable. Large world signs also needed to fade near the chase camera to avoid briefly blocking the view.

A portfolio is a reading experience as well as a game. Bigger text required bigger panels, a scrollable body, and a Continue button that stays visible. Pausing the simulation at project stops keeps reading from disadvantaging a visitor’s time.

Persistent leaderboards require more than a browser-stored stopwatch. Sharing the same simulation with Lambda made run validation possible. It checks valid physics and completion, although anonymous public gameplay cannot guarantee protection against all scripted play.

For reviews, I separated what visitors may see from what the owner may read. The public endpoint returns an aggregate, not the written comments. This kept the interaction useful while respecting the privacy promised by the form.

## Screenshots to attach

Use the homepage (desktop and mobile), a project checkpoint, and the racing screenshot from screenshots/. Also attach actual Amplify deployment and API/Lambda/DynamoDB setup screenshots from the AWS console. Keep secrets and private review text out of screenshots.

## Credits and originality

Original procedural scenery, kart models, track, UI and soundtrack. Three.js is MIT licensed; Manrope and Bungee fonts are SIL OFL licensed. No commercial game characters or soundtrack were used. Built with coding-agent assistance; the design direction, résumé content and feature decisions came from Rudra.
