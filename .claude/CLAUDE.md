# Agent Brief: GitHub Free-Tier Strategy for Eyris by ThemeNate

---

## 2. The Product: Eyris (Full Pro Bundle)

**Demo:** https://eyris-react.themenate.net/

### 2.1 Bundle Variants (all 4 included in Pro)

The Pro package ships as a bundle of 4 framework variants:

| Variant | Language |
|---|---|
| Next.js | TypeScript |
| Next.js | JavaScript |
| Vite | TypeScript |
| Vite | JavaScript |

### 2.2 Package Structure (per variant)

Each variant ships with two versions inside:

- **Demo** — Full showcase build with mock data and demo-purpose pages. Used for the
  live preview/marketing demo site.
- **Starter** — Clean production foundation, no demo clutter, real starting point for
  developers to build from.

### 2.3 Tech Stack

React 19 + Tailwind CSS + TypeScript. **Custom-built UI component library** — NOT
shadcn/ui or MUI wrappers. This is a genuine product differentiator.

Additional: Dark/light mode, RTL support, i18n, multiple layout options, full TypeScript
types across all components.

---

## 3. App Modules (7 Domains in Full Pro)

1. **Sales** — Dashboard, Product List, Product Details, New Product, Order List,
   New Order, Edit Order
2. **Customers** — Dashboard, Customer List, Customer Details, Leads, Lead Details,
   Helpdesk
3. **Projects** — Dashboard, Project List, Project Details, Scrumboard, Timeline,
   Tasks, Settings
4. **Analytics** — Dashboard, Forecast, Revenue, Subscriptions, Reports
5. **AI** — Chat, Image generation, Writer
6. **Crypto** — Dashboard, Market, Coin detail, Spot trading, Assets, KYC
7. **HR Management** — Dashboard, Employees, Attendance, Payroll, Leaves, Announcements

**Additional pages:**
- Accounts: Settings, Activity, Referrals, Pricing, Invoice, Users
- Authentication: Sign In, Sign Up, Forgot Password, Reset Password, OTP Verification
  (each with 3 layout variants: Simple, Side, Centred)
- Guide: Documentation, Shared Component docs, Utilities docs, Changelog

---

## 4. Decisions Already Made (do not re-debate these)

### 4.1 Free Tier = Next.js + TypeScript Only

One repo, one variant. Reasons:
- Concentrates all GitHub stars in a single repo (vs splitting across 4)
- Next.js + TypeScript is the highest-demand combination in the 2025–2026 market
- The other 3 variants (Vite TS, Vite JS, Next.js JS) are a genuine Pro differentiator
- Agencies pay specifically for framework flexibility across client projects

**Variant split summary:**

| Variant | Free | Pro |
|---|---|---|
| Next.js + TypeScript | ✅ (limited) | ✅ (full) |
| Next.js + JavaScript | ❌ | ✅ |
| Vite + TypeScript | ❌ | ✅ |
| Vite + JavaScript | ❌ | ✅ |

### 4.2 Free Tier Format = Demo-Lite + partial Starter Combined

The free repo is NOT just the blank Starter. It ships as both:
- A **curated Demo** (enough pages to wow visitors and drive stars)
- The **full clean Starter foundation** (so it's genuinely usable for real projects)


### 4.3 App Module Split: Free vs Pro

**✅ FREE — included in the free tier:**

| Module | Pages included |
|---|---|
| Sales | Dashboard |
| Customer | Customer list, Customer Details |
| Accounts | Settings |
| Authentication | Simple layout variants only |


### 4.4 UI Component Split: Free vs Pro

The component library is a core product asset. ~28 components are free, ~14 are Pro-only.
The gating logic: basics needed to build real UI = free; complex/specialized/high-effort
components = Pro.

**✅ FREE components (~28):**

| Category | Components |
|---|---|
| Common | Button, Grid, Typography, Icons, Scroll |
| Data Display | Avatar, Badge, Cards, Table, Tag, Tooltip |
| Forms | Input, Checkbox, Form Control |
| Feedback | Alert, Spinner, Toast, Skeleton, Dialog, Drawer, Progress |
| Navigation | Menu, Dropdown, Tabs, Pagination |


## 6. What You Need to Deliver

A complete, actionable GitHub Free-Tier Strategy for Eyris covering these  areas.
**Be specific and practical — the client is a developer, not a marketer.**
Write actual copy, actual names, actual feature lists. No generic advice.

### 6.1 Repository Naming & Structure
What to name the repo for maximum GitHub search discoverability. Should it lean into a
niche (e.g., `react-nextjs-admin-dashboard`) or stay branded (`eyris-free`)? Single repo
recommendation with reasoning.

### 6.2 README Design
Full structure with actual draft copy: hero section, badges, live demo link, feature
list, free-vs-pro comparison table, tech stack section, getting started, contributor
guidelines, upgrade CTA. Reference top-performing admin template READMEs as the model.

### 6.3 GitHub Topics & Metadata
Exact list of GitHub topics to tag. How to write the repo description for SEO.

### 6.4 Launch Playbook
Step-by-step with actual post copy written out for each platform: Reddit (r/reactjs,
r/webdev, r/SideProject), Hacker News Show HN, Dev.to, Twitter/X #buildinpublic,
Product Hunt, Awesome React list submissions. Include timing/spacing between posts.

### 6.5 Free-to-Paid Conversion Funnel
CTA placement in README, in-app upsell banners inside the free template, demo site
design decisions, documentation site strategy, email capture, changelog teasers for
Pro-only modules.

### 6.6 Maintenance & Community Plan
Update cadence, handling GitHub issues and PRs, realistic community engagement level
for a small team, how to keep the repo feeling actively maintained.

### 6.7 Milestones & Success Metrics
Target star counts and traffic at 1 month, 3 months, 6 months. Leading indicators the
strategy is working vs needs adjustment.

---

## 7. Reference Links

- Eyris demo: vite\TypeScript\demo\
