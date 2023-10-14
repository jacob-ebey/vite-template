import * as cp from "node:child_process";

const ui = [
  {
    name: "accordion",
    type: "components:ui",
    dependencies: ["@radix-ui/react-accordion"],
    files: ["ui/accordion.tsx"],
  },
  {
    name: "alert",
    type: "components:ui",
    files: ["ui/alert.tsx"],
  },
  {
    name: "alert-dialog",
    type: "components:ui",
    dependencies: ["@radix-ui/react-alert-dialog"],
    registryDependencies: ["button"],
    files: ["ui/alert-dialog.tsx"],
  },
  {
    name: "aspect-ratio",
    type: "components:ui",
    dependencies: ["@radix-ui/react-aspect-ratio"],
    files: ["ui/aspect-ratio.tsx"],
  },
  {
    name: "avatar",
    type: "components:ui",
    dependencies: ["@radix-ui/react-avatar"],
    files: ["ui/avatar.tsx"],
  },
  {
    name: "badge",
    type: "components:ui",
    files: ["ui/badge.tsx"],
  },
  {
    name: "button",
    type: "components:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui/button.tsx"],
  },
  {
    name: "calendar",
    type: "components:ui",
    dependencies: ["react-day-picker", "date-fns"],
    registryDependencies: ["button"],
    files: ["ui/calendar.tsx"],
  },
  {
    name: "card",
    type: "components:ui",
    files: ["ui/card.tsx"],
  },
  {
    name: "checkbox",
    type: "components:ui",
    dependencies: ["@radix-ui/react-checkbox"],
    files: ["ui/checkbox.tsx"],
  },
  {
    name: "collapsible",
    type: "components:ui",
    dependencies: ["@radix-ui/react-collapsible"],
    files: ["ui/collapsible.tsx"],
  },
  {
    name: "command",
    type: "components:ui",
    dependencies: ["cmdk"],
    registryDependencies: ["dialog"],
    files: ["ui/command.tsx"],
  },
  {
    name: "context-menu",
    type: "components:ui",
    dependencies: ["@radix-ui/react-context-menu"],
    files: ["ui/context-menu.tsx"],
  },
  {
    name: "dialog",
    type: "components:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: ["ui/dialog.tsx"],
  },
  {
    name: "dropdown-menu",
    type: "components:ui",
    dependencies: ["@radix-ui/react-dropdown-menu"],
    files: ["ui/dropdown-menu.tsx"],
  },
  {
    name: "form",
    type: "components:ui",
    dependencies: [
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
      "@hookform/resolvers",
      "zod",
      "react-hook-form",
    ],
    registryDependencies: ["button", "label"],
    files: ["ui/form.tsx"],
  },
  {
    name: "hover-card",
    type: "components:ui",
    dependencies: ["@radix-ui/react-hover-card"],
    files: ["ui/hover-card.tsx"],
  },
  {
    name: "input",
    type: "components:ui",
    files: ["ui/input.tsx"],
  },
  {
    name: "label",
    type: "components:ui",
    dependencies: ["@radix-ui/react-label"],
    files: ["ui/label.tsx"],
  },
  {
    name: "menubar",
    type: "components:ui",
    dependencies: ["@radix-ui/react-menubar"],
    files: ["ui/menubar.tsx"],
  },
  {
    name: "navigation-menu",
    type: "components:ui",
    dependencies: ["@radix-ui/react-navigation-menu"],
    files: ["ui/navigation-menu.tsx"],
  },
  {
    name: "popover",
    type: "components:ui",
    dependencies: ["@radix-ui/react-popover"],
    files: ["ui/popover.tsx"],
  },
  {
    name: "progress",
    type: "components:ui",
    dependencies: ["@radix-ui/react-progress"],
    files: ["ui/progress.tsx"],
  },
  {
    name: "radio-group",
    type: "components:ui",
    dependencies: ["@radix-ui/react-radio-group"],
    files: ["ui/radio-group.tsx"],
  },
  {
    name: "scroll-area",
    type: "components:ui",
    dependencies: ["@radix-ui/react-scroll-area"],
    files: ["ui/scroll-area.tsx"],
  },
  {
    name: "select",
    type: "components:ui",
    dependencies: ["@radix-ui/react-select"],
    files: ["ui/select.tsx"],
  },
  {
    name: "separator",
    type: "components:ui",
    dependencies: ["@radix-ui/react-separator"],
    files: ["ui/separator.tsx"],
  },
  {
    name: "sheet",
    type: "components:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: ["ui/sheet.tsx"],
  },
  {
    name: "skeleton",
    type: "components:ui",
    files: ["ui/skeleton.tsx"],
  },
  {
    name: "slider",
    type: "components:ui",
    dependencies: ["@radix-ui/react-slider"],
    files: ["ui/slider.tsx"],
  },
  {
    name: "switch",
    type: "components:ui",
    dependencies: ["@radix-ui/react-switch"],
    files: ["ui/switch.tsx"],
  },
  {
    name: "table",
    type: "components:ui",
    files: ["ui/table.tsx"],
  },
  {
    name: "tabs",
    type: "components:ui",
    dependencies: ["@radix-ui/react-tabs"],
    files: ["ui/tabs.tsx"],
  },
  {
    name: "textarea",
    type: "components:ui",
    files: ["ui/textarea.tsx"],
  },
  {
    name: "toast",
    type: "components:ui",
    dependencies: ["@radix-ui/react-toast"],
    files: ["ui/toast.tsx", "ui/use-toast.ts", "ui/toaster.tsx"],
  },
  {
    name: "toggle",
    type: "components:ui",
    dependencies: ["@radix-ui/react-toggle"],
    files: ["ui/toggle.tsx"],
  },
  {
    name: "tooltip",
    type: "components:ui",
    dependencies: ["@radix-ui/react-tooltip"],
    files: ["ui/tooltip.tsx"],
  },
];

for (const component of ui) {
  cp.execSync(`npx shadcn-ui@latest add -o -y ${component.name}`, {
    stdio: "inherit",
  });
}
