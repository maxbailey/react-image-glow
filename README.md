# react-image-glow

`react-image-glow` is a React component that adds a glowing background effect to images, similar to YouTube's ambient mode. It’s lightweight and customizable, letting you control the glow radius, saturation, and opacity for a stunning visual effect.

![react-image-glow](https://raw.githubusercontent.com/maxbailey/react-image-glow/refs/heads/master/react-image-glow-preview.png)

## Installation

Install the package using **npm** or **yarn**:

```bash
npm install react-image-glow
```

or

```bash
yarn add react-image-glow
```

## Usage

Wrap any `<img>` element with the `ImageGlow` component to apply a glowing effect. You can customize the intensity of the glow with optional props.

### Basic Example

```tsx
import ImageGlow from 'react-image-glow';

<ImageGlow>
  <img src="https://picsum.photos/300" alt="Placeholder" />
</ImageGlow>
```

### Advanced Example with Custom Properties

```tsx
import ImageGlow from 'react-image-glow';

<ImageGlow
  radius={30}
  saturation={1.5}
  opacity={0.8}
  className="example"
>
  <img
    src="https://picsum.photos/300"
    alt="Placeholder"
    className="max-w-[300px]"
  />
</ImageGlow>
```

## Props

| Prop        | Type      | Default | Description                                                                                 |
|-------------|-----------|---------|---------------------------------------------------------------------------------------------|
| `children`  | `ReactNode` | N/A     | A single `<img>` element. The component expects exactly one `<img>` as its child.          |
| `radius`    | `number`  | `50`    | The radius of the blur effect applied to the background.                                    |
| `saturation`| `number`  | `2`     | Saturation level for the glowing background. A higher value increases the intensity of colors. |
| `opacity`   | `number`  | `1`     | The opacity of the glowing background (0 = fully transparent, 1 = fully opaque).            |
| `className` | `string`  | `''`    | An optional class name to apply to the `<img>` element. Useful for additional styling.      |

## Error Handling

- **ImageGlow expects a single `<img>` element** as its child. If the child element is not an `<img>`, an error will be logged to the console.

## Styling

The component uses inline styles for layout, ensuring the glowing effect aligns perfectly with the image. You can still pass custom styles to the `<img>` element or apply classes via the `className` prop for further customization.

## How It Works

The `ImageGlow` component creates two layers:
1. **Base Image Layer**: The provided `<img>` element is displayed with any custom styles or classes.
2. **Glow Layer**: A blurred, saturated, and optionally semi-transparent version of the image is placed behind the original image to create a glow effect.

This is achieved using CSS properties like `filter: blur` and `saturate` to manipulate the image’s background.