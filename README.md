# Lynx React Color Tap App

A lightweight interactive color-switching app built using **Lynx.js React**. Tap the screen to cycle through beautiful backgrounds—from solid colors to multi-color gradients. Perfect as a visual demo or playful UI inspiration.

##  Features

-   27 color states: solid, 2-color, 3-color, 4-color, and 5-color gradients
    
-   Smooth transitions and a pulsing text animation
    
-   Works cross-platform: Web, iOS, Android (via Lynx)
    

----------

##  Setup & Installation


```bash
# Clone the project
git clone https://github.com/mahmud-r-farhan/Lynx-React-Screen-Test-App
cd Lynx-React-Screen-Test-App

# Install dependencies
npm install

```

----------

##  Project Structure

```
Lynx-React-Screen-Test-App/
├── src/
│ 	├── App.css 		# Styles & gradients
│ 	├── App.jsx 		# Main App logic
│ 	└── App.scss 		# Styles & gradients
├── lynx.config.json 	# Lynx configuration
├── package.json
├── README.md
└── vitest.config.js

```

----------

##  Customizing Colors

Open `App.css` and modify or extend these classes:

```css
/* Example: Adding a new color gradient */
.color-27 {
  background: linear-gradient(135deg, #00c6ff, #0072ff);
}

```

Then, update the `maxColors` value in `App.jsx`:

```js
const maxColors = 28; // updated to include new color

```

----------

##  Developing Locally

### Start the Web Preview

```bash
npm run dev

```

This will open the app in your Mobile using [LynxExplorer](https://github.com/lynx-family/lynx/releases/tag/3.2.0).

----------

##  Building for Platforms

###  Web Build

```bash
lynx build:web

```

Output is in `dist/web/`

----------

###  iOS Build

```bash
lynx build:ios

```

1.  Ensure you have Xcode and a Mac system.
    
2.  Open the `.xcworkspace` file inside `dist/ios/` in Xcode.
    
3.  Run on simulator or device.
    

----------

###  Android Build

```bash
lynx build:android

```

1.  Requires Android Studio & SDKs installed.
    
2.  Open the Android project inside `dist/android/`.
    
3.  Run via emulator or connected device.
    

----------

## Enhancements Task

-   Add haptic feedback on tap (via Lynx's native modules)

----------

## Credits

> Built with ❤️ using [Lynx.js React](https://lynxjs.org/) by  [Mahmud](https://github.com/mahmud-r-farhan/)


