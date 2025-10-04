# UI-EX

A modern, lightweight UI component library built with React and Tailwind CSS v4.

## Installation

```bash
npm install ui-ex
```

## Prerequisites

This library requires React 16.8.0 or higher and assumes you have Tailwind CSS v4 configured in your project. The library uses Tailwind's new CSS-first configuration approach.

## Usage

### Button Component

Import and use the Button component in your React application:

```jsx
import { Button } from 'ui-ex';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Primary Button
      </Button>
      
      <Button variant="secondary" size="lg">
        Secondary Button
      </Button>
      
      <Button variant="outline" size="sm">
        Outline Button
      </Button>
      
      <Button variant="ghost" disabled>
        Disabled Button
      </Button>
    </div>
  );
}
```

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The content of the button |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | The visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `onClick` | `() => void` | - | Click event handler |
| `className` | `string` | `''` | Additional CSS classes |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

### Button Variants

- **Primary**: Blue background with white text (default)
- **Secondary**: Gray background with white text
- **Outline**: White background with border and gray text
- **Ghost**: Transparent background with gray text

### Button Sizes

- **Small**: `px-3 py-1.5 text-sm`
- **Medium**: `px-4 py-2 text-base` (default)
- **Large**: `px-6 py-3 text-lg`

## Tailwind CSS v4 Features

This library takes advantage of Tailwind CSS v4's new features:

- **CSS-First Configuration**: Theme customization is done directly in CSS using the `@theme` directive
- **High-Performance Engine**: Faster build times and improved performance
- **Native Cascade Layers**: Better control over style specificity
- **Custom CSS Properties**: Components use CSS custom properties for better theming support

### Customization

You can customize the library's theme by overriding CSS custom properties in your project:

```css
@theme {
  --color-primary-600: #your-brand-color;
  --color-primary-700: #your-brand-color-darker;
}
```

## Development

To contribute to this library:

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the library: `npm run build`
4. Run type checking: `npm run type-check`

## License

MIT
