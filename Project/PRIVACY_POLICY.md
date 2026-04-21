# Privacy Policy

**Aura Farm** — operated by [Codebox](https://www.codeboxorg.com/)
**Effective date:** April 20, 2026

---

## Overview

This policy covers two surfaces:

1. **This website** — the Aura Farm marketing/landing page (`aurafarm.app` or similar)
2. **The Aura Farm mobile app** — the React Native application users download to play

We keep things simple: we only collect what we need, we don't sell your data, and we try to be upfront about everything.

---

## 1. The Landing Page (this website)

The landing page is a static marketing site. It does **not** have sign-up forms, accounts, or payment flows. However, a small amount of data may be collected automatically:

| Data | Source | Purpose |
|---|---|---|
| IP address, browser/device type, referring URL | Web server / hosting provider (Vercel) | Infrastructure security, abuse prevention, and aggregate traffic analytics |
| Font requests | Google Fonts (Inter, Geist Mono) | Rendering typography — Google may log requests per their own [privacy policy](https://policies.google.com/privacy) |

We do not set any tracking cookies on the landing page. Any analytics are aggregate and do not identify individual users.

---

## 2. The Aura Farm Mobile App

When you create an account and use the Aura Farm app, we collect the following:

### 2a. Account & Identity

| Data | What it is | Why we collect it |
|---|---|---|
| **Email address** | The address you sign up with | Account creation, authentication, and password recovery via Supabase Auth |
| **Display name** | The name you choose | Shown on your profile, leaderboard, and in-app social feed |

### 2b. Location

| Data | What it is | Why we collect it |
|---|---|---|
| **GPS coordinates** | Your device location at the moment you submit a challenge | Geo-fencing — we verify you are physically present at a challenge location before awarding points |

We do **not** continuously track your location in the background. Location is only read at the moment you tap "submit" on a challenge.

### 2c. Photos & Content

| Data | What it is | Why we collect it |
|---|---|---|
| **Photos you submit** | Images captured or selected from your camera roll | Proof of challenge completion — stored in Supabase Storage and visible to other users in the social feed |
| **Captions** | Text you write alongside a submission | Displayed with your post in the feed |

### 2d. Activity & Usage

| Data | What it is | Why we collect it |
|---|---|---|
| **Aura points** | Your cumulative score | Core game mechanic — displayed on your profile and the leaderboard |
| **Streak data** | Date of your last completed challenge | Tracking daily streaks and rewarding consistency |
| **Challenge completions** | Which challenges you've completed and when | Enforcing the one-completion-per-challenge rule and building your activity history |
| **Likes received** | Reactions other users give your posts | Social engagement within the app |
| **Flags submitted** | Reports you file on other users' submissions | Moderation — reviewed by admins to remove inappropriate content |

---

## 3. How We Use Your Data

We use the data above strictly to operate and improve Aura Farm:

- **Authentication** — keeping your account secure with JWT tokens issued by Supabase
- **Gameplay** — awarding points, enforcing geo-fencing, tracking streaks, and preventing duplicate completions
- **Personalization** — showing your own profile, history, and standing on the leaderboard
- **Social features** — displaying your posts and name in the community feed
- **Moderation** — reviewing flagged content to keep the community safe
- **App improvement** — understanding aggregate usage patterns to fix bugs and add features

We do **not** use your data for advertising, sell it to third parties, or share it with anyone outside of the services needed to run the app (listed below).

---

## 4. Third-Party Services

| Service | What they handle | Their privacy policy |
|---|---|---|
| **Supabase** | Auth (JWT), user sessions, photo storage | [supabase.com/privacy](https://supabase.com/privacy) |
| **PostgreSQL / Neon** | Structured data (users, challenges, completions) | Operated by us via Supabase infrastructure |
| **Vercel** | Hosting for this website and the backend API | [vercel.com/legal/privacy-policy](https://vercel.com/legal/privacy-policy) |
| **Google Fonts** | Typography on the landing page | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 5. Data Retention

- **Account data** is kept as long as your account is active.
- **Submitted photos** remain visible in the feed unless you delete your post or your account.
- **Completion records** are kept to maintain leaderboard integrity.
- You may request deletion of your account and associated data at any time (see Contact below).

---

## 6. Children's Privacy

Aura Farm is intended for college/university students. We do not knowingly collect data from anyone under the age of 13. If you believe a minor has created an account, contact us and we will remove it promptly.

---

## 7. Your Rights

Depending on where you live, you may have the right to:

- Access the personal data we hold about you
- Correct inaccurate data
- Delete your account and associated data
- Object to certain processing

To exercise any of these rights, email us at the address below.

---

## 8. Changes to This Policy

We may update this policy as the app evolves. When we do, we'll update the **Effective date** at the top. Continued use of the app after changes constitutes acceptance of the updated policy.

---

## 9. Contact

Questions, concerns, or data requests:

**Codebox**
[codeboxorg.com](https://www.codeboxorg.com/)

---

*This policy was last reviewed on April 20, 2026.*
