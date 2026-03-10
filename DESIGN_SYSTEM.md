# AI Agent Encyclopedia - Design System

**Generated**: 2026-03-10
**Purpose**: Educational Wikipedia for Open Source AI Agents & Agentic Coders
**Style**: Minimal Swiss / Wikipedia-inspired

---

## Design Philosophy

| Principle | Implementation |
|-----------|----------------|
| **Readability First** | Long-form content optimized, 80-char line width |
| **Accessibility** | WCAG AAA compliance, high contrast |
| **Neutral & Trustworthy** | Minimal design, focus on content |
| **Fast Loading** | No heavy animations, optimized assets |

---

## Color Palette

| Role | Light Mode | Dark Mode | CSS Variable |
|------|------------|-----------|--------------|
| **Primary** | `#1E40AF` (Blue-700) | `#3B82F6` (Blue-500) | `--color-primary` |
| **Secondary** | `#64748B` (Slate-500) | `#94A3B8` (Slate-400) | `--color-secondary` |
| **Background** | `#FFFFFF` | `#0F172A` (Slate-900) | `--color-bg` |
| **Surface** | `#F8FAFC` (Slate-50) | `#1E293B` (Slate-800) | `--color-surface` |
| **Text Primary** | `#0F172A` (Slate-900) | `#F8FAFC` (Slate-50) | `--color-text` |
| **Text Muted** | `#475569` (Slate-600) | `#94A3B8` (Slate-400) | `--color-text-muted` |
| **Accent (Links)** | `#2563EB` (Blue-600) | `#60A5FA` (Blue-400) | `--color-link` |
| **Success** | `#059669` (Emerald-600) | `#10B981` (Emerald-500) | `--color-success` |
| **Warning** | `#D97706` (Amber-600) | `#F59E0B` (Amber-500) | `--color-warning` |
| **Border** | `#E2E8F0` (Slate-200) | `#334155` (Slate-700) | `--color-border` |

---

## Typography

### Font Stack

```css
/* Heading: Newsreader - Editorial, trustworthy */
--font-heading: 'Newsreader', 'Georgia', serif;

/* Body: Inter - Clean, highly readable */
--font-body: 'Inter', 'system-ui', sans-serif;

/* Code: JetBrains Mono - Developer-friendly */
--font-mono: 'JetBrains Mono', 'Consolas', monospace;
```

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Page Title) | `2.5rem / 40px` | 700 | 1.2 |
| H2 (Section) | `1.875rem / 30px` | 600 | 1.3 |
| H3 (Subsection) | `1.5rem / 24px` | 600 | 1.4 |
| H4 | `1.25rem / 20px` | 600 | 1.5 |
| Body | `1rem / 16px` | 400 | 1.75 |
| Small | `0.875rem / 14px` | 400 | 1.6 |
| Code | `0.875rem / 14px` | 400 | 1.6 |

---

## Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight gaps |
| `--space-sm` | 8px | List item gaps |
| `--space-md` | 16px | Paragraph gaps |
| `--space-lg` | 24px | Section padding |
| `--space-xl` | 32px | Section margins |
| `--space-2xl` | 48px | Chapter breaks |
| `--space-3xl` | 64px | Major sections |

---

## Layout

### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Content area (for readability) */
.content {
  max-width: 720px;
  margin: 0 auto;
}
```

### Grid

```css
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .grid-2, .grid-3 {
    grid-template-columns: 1fr;
  }
}
```

---

## Components

### 1. Article Header

```css
.article-header {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.article-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text);
}

.article-meta {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-top: var(--space-sm);
}

.article-toc {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: var(--space-md);
  margin-top: var(--space-lg);
}
```

### 2. Info Box (Wikipedia-style)

```css
.infobox {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-primary);
  border-radius: 8px;
  padding: var(--space-md);
  margin: var(--space-lg) 0;
  float: right;
  width: 300px;
  margin-left: var(--space-xl);
}

.infobox-title {
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: var(--space-sm);
}

.infobox-row {
  display: flex;
  justify-content: space-between;
  padding: var(--space-xs) 0;
  border-bottom: 1px solid var(--color-border);
}

.infobox-label {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

.infobox-value {
  font-weight: 500;
}
```

### 3. Comparison Table

```css
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--space-xl) 0;
}

.comparison-table th {
  background: var(--color-surface);
  font-weight: 600;
  text-align: left;
  padding: var(--space-md);
  border-bottom: 2px solid var(--color-border);
}

.comparison-table td {
  padding: var(--space-md);
  border-bottom: 1px solid var(--color-border);
  vertical-align: top;
}

.comparison-table tr:hover {
  background: var(--color-surface);
}
```

### 4. Code Block

```css
.code-block {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: var(--space-md);
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.6;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-sm);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}

.code-lang {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
}
```

### 5. Badge

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.badge-open-source {
  background: #DCFCE7;
  color: #166534;
}

.badge-commercial {
  background: #FEF3C7;
  color: #92400E;
}

.badge-active {
  background: #DBEAFE;
  color: #1E40AF;
}
```

---

## Navigation

### Sidebar

```css
.sidebar {
  position: sticky;
  top: 24px;
  width: 280px;
  flex-shrink: 0;
}

.sidebar-section {
  margin-bottom: var(--space-lg);
}

.sidebar-title {
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: var(--space-sm);
}

.sidebar-link {
  display: block;
  padding: var(--space-xs) 0;
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.875rem;
}

.sidebar-link:hover {
  color: var(--color-primary);
}

.sidebar-link.active {
  color: var(--color-primary);
  font-weight: 500;
}
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column, sidebar hidden |
| Tablet | 640px - 1024px | Sidebar collapsible |
| Desktop | > 1024px | Full layout with sidebar |

---

## Accessibility Checklist

- [ ] Color contrast 7:1+ (WCAG AAA)
- [ ] Focus states visible (3px ring)
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] `prefers-reduced-motion` respected
- [ ] Alt text on all images
- [ ] Semantic HTML (article, nav, aside)
- [ ] Skip links present
