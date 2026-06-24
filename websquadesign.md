# Agnostic Design System & SaaS Blueprint

This document defines the core design tokens, atomic components, and complex organisms for scalable SaaS applications. It is framework-agnostic.

Instead of dictating exact pages (like a CRM or Newsletter), this system defines the **building blocks** (tables, filters, metric cards, sidebars) required to construct *any* of those interfaces.

---

## 1. Design Tokens (Light/Dark Schema)

The system is designed for both Soft Dark and Off-White Light themes. Implementations should use CSS Variables (or equivalent framework mapping) to toggle these values based on `data-theme="light|dark"`.

### Colors: Surfaces & Text
| Token | Dark Theme (Default) | Light Theme (Off-White) | Usage |
| :--- | :--- | :--- | :--- |
| `background-base` | `#121214` | `#f8fafc` (Slate 50) | App background, behind everything |
| `surface-primary` | `#1e1e24` | `#ffffff` | Standard cards, sidebars |
| `surface-hover` | `#25252b` | `#f1f5f9` (Slate 100) | Row hovers, interactive cards |
| `surface-raised` | `#2a2a32` | `#ffffff` | Dropdowns, popovers, modals |
| `surface-input` | `rgba(0,0,0, 0.2)` | `#ffffff` | Form fields |
| `text-primary` | `#e4e4e7` (Zinc 200) | `#0f172a` (Slate 900) | Headings, primary data |
| `text-secondary` | `#a1a1aa` (Zinc 400) | `#64748b` (Slate 500) | Labels, table headers, helper text |
| `text-muted` | `#71717a` (Zinc 500) | `#94a3b8` (Slate 400) | Disabled text, placeholders |

### Colors: Brand & Semantics
*Note: These colors generally remain consistent across themes, but light theme may require slightly darker variants for contrast against white backgrounds.*
*   **Brand**: `accent-primary`: `#6366f1` (Indigo). `accent-hover`: `#4f46e5`.
*   **Semantics**:
    *   `success`: `#22c55e` (Online, Paid, Delivered)
    *   `danger`: `#ef4444` (Offline, Failed, Delete)
    *   `warning`: `#f59e0b` (Pending, Draft, Alert)
    *   `info`: `#3b82f6` (Processing, Active)
*   **Status Badges**: Use 10-15% opacity of Semantic colors for backgrounds, and 100% for text/borders.

### Colors: Borders
| Token | Dark Theme | Light Theme | Usage |
| :--- | :--- | :--- | :--- |
| `border-subtle` | `rgba(255,255,255, 0.03)` | `#f1f5f9` (Slate 100) | Dividers in tight lists |
| `border-default` | `rgba(255,255,255, 0.05)` | `#e2e8f0` (Slate 200) | Standard card/table borders |
| `border-strong` | `rgba(255,255,255, 0.1)` | `#cbd5e1` (Slate 300) | Inputs, buttons |

---

## 2. Scales & Metrics

### Spacing (8pt Grid)
*   `space-1`: 4px
*   `space-2`: 8px
*   `space-3`: 12px
*   `space-4`: 16px (Standard padding)
*   `space-6`: 24px (Section gaps)
*   `space-8`: 32px (Page padding)
*   `space-12`: 48px

### Border Radius (Radii)
*   `radius-sm`: `4px` (Checkboxes, small indicators)
*   `radius-md`: `8px` (Inputs, select menus, standard buttons)
*   `radius-lg`: `16px` (Cards, Modals, Table containers)
*   `radius-pill`: `9999px` (Badges, tags, toggle switches)
*   `radius-full`: `50%` (Avatars, circular icons)

### Typography
*   `font-sans`: `'Helvetica Neue', Helvetica, Arial, sans-serif`
*   `font-mono`: `'SF Mono', 'Menlo', monospace` (Required for IP addresses, IDs, metrics, tabular data).
*   **Styles**:
    *   *Micro/Overline*: `0.75rem`, uppercase, `letter-spacing: 0.05em`, `text-secondary`, `font-weight: 600`.
    *   *Standard*: `0.875rem` or `1rem`, `font-weight: 400`.
    *   *Heading*: `1.25rem` to `2rem`, `font-weight: 600`, `letter-spacing: -0.025em`.

### Shadows & Elevation
*   `shadow-sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.05)` (Cards in light mode. Dark mode relies on borders).
*   `shadow-md`: `0 4px 6px -1px rgba(0, 0, 0, 0.1)` (Hovered cards, Dropdowns).
*   `shadow-lg`: `0 10px 15px -3px rgba(0, 0, 0, 0.1)` (Modals, Slide-overs).
*   **Z-Index**: `z-base: 0`, `z-dropdown: 40`, `z-sticky: 50`, `z-modal: 100`.

### Animation & Transitions
*   `duration-fast`: `150ms` (Hovers, active states).
*   `duration-normal`: `250ms` (Modals, drawers opening).
*   `duration-slow`: `350ms` (Complex page transitions).
*   `ease-out`: Use for elements entering the screen.
*   `ease-in`: Use for elements leaving the screen.

---

## 3. Atomic Components

### Status Badges & Tags
*   **Base**: Radius `radius-pill`, Font size `0.75rem`, Padding `2px 8px`, Font weight `500`.
*   **Variants**: Text color matches Semantic token, Background is Semantic token at 10% opacity.

### Forms & Controls
*   **Inputs/Selects**: Radius `radius-md`, border `border-strong`, background `surface-input`. Focus state: `outline: 2px solid accent-primary; outline-offset: 1px`.
*   **Search Bar**: Input with left-padding for a search icon (magnifying glass).
*   **Toggles/Switches**: Pill-shaped background (`border-strong`), sliding circular knob (`surface-primary`). Active state background becomes `accent-primary`.

### Iconography
*   Standardize sizes: `icon-sm` (16px), `icon-md` (20px), `icon-lg` (24px). Standard stroke width `1.5px` to `2px`.

---

## 4. Complex Organisms (SaaS Blocks)

### 1. Data Tables
*   **Container**: Background `surface-primary`, border `border-default`, radius `radius-lg`. Overflow hidden.
*   **Header Row (`<th>`)**: Text uses *Micro/Overline*. Border-bottom `border-strong`.
*   **Body Rows (`<tr>`)**: Border-bottom `border-default`. Hover background `surface-hover`. Cursor `pointer` if clickable.
*   **Cells (`<td>`)**: Padding `space-4`. Right-align numbers using `font-mono`.

### 2. Modals & Slide-over Drawers
*   **Overlay**: Fixed inset-0, background `rgba(0,0,0,0.5)`, backdrop-blur (optional). Z-index `z-modal`.
*   **Modal Body**: Centered, background `surface-raised`, radius `radius-lg`, shadow `shadow-lg`. Max-width varies (e.g., 400px for alerts, 800px for forms).
*   **Slide-over**: Anchored right, full height, width 400px. Slides in `ease-out` `duration-normal`.

### 3. Tabs & Navigation
*   **Layout**: Flex row, gap `space-4`, border-bottom `border-default`.
*   **Item**: Padding-bottom `space-2`, text `text-secondary`.
*   **Active State**: Text `text-primary`, border-bottom (2px) `accent-primary`.

### 4. Toasts / Notifications
*   **Position**: Fixed, usually bottom-right or top-center. Z-index `z-modal`.
*   **Container**: Background `surface-raised`, radius `radius-md`, shadow `shadow-md`, border left (4px) matching the semantic status color (Success/Danger).

### 5. Skeleton Loaders
*   **Style**: Background `surface-hover` or `border-strong`.
*   **Animation**: Pulse opacity (100% to 50%) infinitely.
*   **Shape**: Match expected content (circles for avatars, rounded rects for text lines).

---

## 5. Agent Implementation Directives

1.  **Strict Theme Mapping**: Map tokens to CSS variables (`--bg-base: #121214;`) or Tailwind configs. Never hardcode HEX values in components. Ensure `data-theme` attribute on `<html>` or `<body>` controls the variable output.
2.  **Compose, Don't Reinvent**: Build complex views by stacking a Toolbar over a Data Table, using Status Badges for states.
3.  **Data Alignment**: In tables, always right-align numbers and monetary values. Left-align text. Use `tabular-nums` for all dynamic data.
4.  **Accessibility**: Ensure all interactive elements have the `focus-visible` offset outline ring. Ensure contrast ratios pass in Light Theme for `text-muted`.