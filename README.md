# Rudra Rally

[Play the AWS-hosted portfolio](https://main.d315hq6yqhwgli.amplifyapp.com) · [GitHub source](https://github.com/RudraMaharao/rudra-rally)

Rudra Maharao’s original 3D kart-racing portfolio. Curiosity Island connects four projects with two laps, four CPU rivals, ramps, moving obstacles, shortcuts, item boxes and skill coins. Portfolio sections remain available through the top navigation without playing.

## Play

- WASD / arrow keys: accelerate, steer, brake and reverse.
- Space: boost; Shift: drift and release for a mini-turbo.
- Q: use a collected turbo, shield or rival pulse.
- R: recover to the track. P / Escape: pause.
- Phones: on-screen steering, accelerator, brake, boost, drift and item controls.
- Scenic Tour / Cruise Control: automatic steering, with items and boost still available.

The introduction covers education, experience and certifications. Four project checkpoints pause lap one; lap two has no automatic project stops. Reading and pause time are excluded. Coins add 100 points. All completed runs, including Scenic Tour, compete in **one global fastest-five leaderboard**. Saving a public name is optional; Don’t Save leads to Play Again / Home Page.

The stars open a 1–5 rating form with an optional private comment. Only the average and count are public. Browser-local identity discourages repeat reviews but is not identity verification. Written reviews are accessible only through authenticated AWS account access; no public route returns them.

## Content

FirstShot, FireGuard, CA Firm Automation, and Indian Packaged Food Nutrition Analysis. Driver profile: NMIMS MPSTME education, WeTest game testing, Anubhavi Foundation tutoring, certifications and ongoing fisheries research. Simulation and limited-test-set results are explicitly labelled.

## Build and preview

Requires Node.js 20+ and Python 3.

```sh
npm install
npm test
npm run build
npm run preview
```

Open http://127.0.0.1:8768 (an allowed development API origin). HTML and CSS live in `dist/`; changes there do not need a JavaScript rebuild. `src/main.js` renders the world and UI; `src/race.js` contains the deterministic simulation shared with Lambda. After changing `src/course.js`, run `npm run build:course`, rebuild and update Lambda. Version the course before changing competitive physics so incompatible old times do not mix.

## AWS implementation

See [AWS.md](AWS.md) for architecture, privacy, operating instructions and deployment details.

```sh
python3 tools/provision.py
npm run build
python3 deploy.py
```

The provisioning script manages the existing Rally resources using the signed-in AWS CLI profile. Preserve the local `infrastructure.json` state when rerunning it. Deployment uploads `dist/` to the existing Amplify app’s `main` branch. Signed upload URLs remain in memory. Signing secrets are never part of the browser bundle or source archive. This is a manual deployment, not Git-connected auto-deploy.

## Credits

Procedural karts, scenery, track and UI are original. Apex Groove is an original 136 BPM composition made for this portfolio: syncopated bass, bright lead, rhythmic keys and punchy drums; synthesis source is in `tools/compose_funk.py`. No Mario Kart or other game soundtrack/assets are used. Three.js uses the MIT licence; Manrope and Bungee use the SIL Open Font License. Licence files ship in `dist/assets/`.

## Validation

Pure-engine tests cover manual and scenic two-lap finishes, checkpoint order, four rivals, jump/coin accounting, deterministic replay, rejected partial/malformed replays, cruise transitions, items and repeat-coin prevention. The AWS API was checked for merged ordering across both modes and private review storage; temporary QA records were removed. Browser verification covers the full checkpoint flow and desktop/phone layouts. See [CHECKLIST.md](CHECKLIST.md) for submission requirements that still need external confirmation.
