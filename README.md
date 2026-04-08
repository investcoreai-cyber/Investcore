# InvestCore Supabase Hive Integration

## Project name, goals, and main features
InvestCore is a static multi-page investment platform UI upgraded for Supabase-backed authentication and moderated reviews across a multi-project “hive mind” setup.

Main goals:
- Add Supabase email/password signup and login
- Support hive failover across multiple Supabase projects
- Protect portfolio access with session checks
- Merge legacy static reviews with approved Supabase reviews
- Add admin review moderation across all configured hives

## Currently completed features
- Added `config.js` with Supabase hive placeholders and shared helper utilities
- Added Supabase JS CDN integration to `index.html`, `admin.html`, `register.html`, `login.html`, and `portfolio.html`
- Updated `register.html` to use Supabase email/password signup with hive failover
- Updated `login.html` to use Supabase password login with hive failover
- Added password reset request flow in `login.html` using `resetPasswordForEmail()`
- Added portfolio auth guard in `portfolio.html` to redirect unauthenticated users to `login.html`
- Created `reviews-data.js` for legacy/static review storage plus merge helpers
- Updated `index.html` to:
  - load static reviews from `reviews-data.js`
  - fetch approved reviews across Supabase hives
  - merge static + DB reviews
  - submit logged-in user reviews as `approved=false`
  - support helpful actions for logged-in users
- Updated `admin.html` to:
  - require a temporary password prompt gate
  - add a Reviews tab
  - fetch pending reviews across hives
  - approve reviews and add optional admin reply

## Summary of current functional entry URIs
- `/index.html`
  - Public landing page
  - Reads static reviews and approved Supabase reviews
  - Allows logged-in users to submit reviews
- `/register.html`
  - Email/password registration
  - Stores selected hive context in localStorage
- `/login.html`
  - Email/password login
  - Forgot password trigger via email reset flow
  - Reset redirect target currently configured via `config.js`
- `/portfolio.html`
  - Protected user dashboard
  - Redirects to `/login.html` if no valid Supabase user session is found
- `/admin.html`
  - Temporary admin password prompt gate
  - Review moderation tab for pending reviews across hives
- `/config.js`
  - Shared frontend configuration and Supabase helper functions
- `/reviews-data.js`
  - Static review seed data and merge/normalize helper functions

## Features not yet implemented
- Full password reset completion UI for setting a new password after redirect
- Real Supabase admin-role enforcement using `is_admin` metadata instead of temporary prompt
- RPC-based atomic helpful counter increment
- Strong deduplication rules based on final production schema
- Full migration of existing localStorage dashboard data to Supabase tables
- Production-grade error reporting and validation for all flows

## Recommended next steps for development
1. Replace placeholder Supabase URLs and anon keys in `config.js`
2. Build a dedicated reset password completion page or add hash-based recovery handling in `login.html`
3. Replace admin prompt auth with main-project admin login and metadata/role checks
4. Add stricter schema validation and sanitize review rendering if rich input is expected
5. Add database-backed tables for portfolio/deposit/trade/admin data currently still handled outside Supabase auth flow
6. Add end-to-end browser testing for registration, login, moderation, and review submission

## Public URLs
- Production website URL: not published yet
- Deployment: use the **Publish tab** to make the site live
- Supabase API endpoints: determined by the project URLs inserted into `config.js`

## Data models, structures, and storage services used
### Frontend storage
- `localStorage`
  - `investcore_hiveId`
  - `investcore_userId`
  - `investcore_userEmail`
  - `investcore_fullName`
  - per-hive Supabase auth storage keys like `investcore-sb-auth-{index}`

### Supabase services
- Supabase Auth
  - email/password signup
  - email/password login
  - password reset email flow
- Supabase Database
  - `reviews`
  - `review_likes`

### Expected Supabase table structure
#### `reviews`
- `id: uuid`
- `user_id: uuid`
- `name: text` 
- `text: text`
- `rating: int`
- `helpful_count: int default 0`
- `approved: boolean default false`
- `reply: text nullable`
- `created_at: timestamptz default now()`

#### `review_likes`
- `id: uuid`
- `review_id: uuid`
- `user_id: uuid`

## Manual Supabase setup notes
Create one main admin project and multiple user hives. In each project:
- Enable Email provider
- Disable forced email confirmation for normal signup/login if you want immediate password auth
- Keep password reset email flow enabled
- Create `reviews` and `review_likes` tables
- Configure RLS as planned for authenticated inserts and moderated visibility
- Add admin metadata such as `{ is_admin: true }` in the main project for the future admin-role implementation
