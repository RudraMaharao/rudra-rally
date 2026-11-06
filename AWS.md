# AWS implementation and operation

Live portfolio: https://main.d315hq6yqhwgli.amplifyapp.com
Region: ap-south-1 (Mumbai).

| Service | Purpose |
|---|---|
| AWS Amplify Hosting | HTTPS static website and distributed delivery of the Three.js bundle, artwork, fonts and original music |
| Amazon API Gateway HTTP API | Public endpoints for starting/verifying runs, saving records and submitting reviews; CORS for the portfolio and local preview; throttling of 5 requests/second with burst 10 |
| AWS Lambda (Node.js 22) | Validates input, issues signed run tokens, replays the shared simulation and writes validated results |
| Amazon DynamoDB (on demand) | Persistent race results, private review comments, and rating aggregates |
| IAM | Lambda role scoped to the Rally table and function logs |
| Amazon CloudWatch Logs | Backend error diagnostics |

## Data flow

A start request receives a server seed and HMAC-signed token. The browser records changes in controls at 60 simulation ticks/second. After finishing, Lambda replays that input against the same course and checks the wall-clock lower bound. It returns a signed finish receipt; the visitor may attach a public name. The score endpoint returns only the five fastest names, times and coin scores across both existing mode partitions. This validates simulation results, but is not a guarantee against bots or scripted input.

Ratings use a DynamoDB transaction to save one browser identifier and update total/count together. GET `/reviews/summary` returns only count and average. There is no public comment-list endpoint. Clearing browser storage can permit another review; the anonymous system does not claim strong spam prevention.

## Read private reviews

Sign into the AWS account, open DynamoDB → `rudra-rally-scores-v1` → Explore table items, and query partition key `private-reviews`. This is the owner’s view; visitors cannot query DynamoDB directly.

Alternatively, with your authenticated AWS CLI:

```sh
aws dynamodb query --region ap-south-1 \
  --table-name rudra-rally-scores-v1 \
  --key-condition-expression 'pk = :p' \
  --expression-attribute-values '{":p":{"S":"private-reviews"}}'
```

Keep this output private. Do not put written reviews in public screenshots or source control.

## Hosting and judging

Keep the Amplify app, API, Lambda and table active for the whole judging period. No automatic expiry is configured. A successful deployment is a point-in-time verification, not a promise of uninterrupted future availability. Check the live link before submission and during judging; monitor AWS billing and service status in your account.

Amplify app: `d315hq6yqhwgli`, branch `main`. API: `dk3pfpa8al`. Function: `rudra-rally-api-v1`. DynamoDB table: `rudra-rally-scores-v1`. Deployment metadata is kept in local `deployment.json`; provisioning state is in local `infrastructure.json`.

The frontend Content Security Policy permits only its own files and this API connection. Credentials and the signing secret are not distributed to visitors. Public infrastructure identifiers are not credentials.
