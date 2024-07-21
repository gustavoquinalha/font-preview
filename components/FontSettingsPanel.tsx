import React from "react";
import { Textarea } from "./ui/textarea";
import { Slider } from "./ui/slider";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Grid2X2,
  Rows3,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

interface FontSettingsPanelProps {
  previewText: string;
  handlePreviewTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  fontSize: number;
  handleFontSizeChange: (value: number[]) => void;
  lineHeight: number;
  handleLineHeightChange: (value: number[]) => void;
  letterSpacing: number;
  handleLetterSpacingChange: (value: number[]) => void;
  listMode: string;
  handleListModeChange: (checked: string) => void;
  textAlign: string;
  handleTextAlignChange: (checked: string) => void;
}

const FontSettingsPanel: React.FC<FontSettingsPanelProps> = ({
  previewText,
  handlePreviewTextChange,
  fontSize,
  handleFontSizeChange,
  lineHeight,
  handleLineHeightChange,
  letterSpacing,
  handleLetterSpacingChange,
  listMode,
  handleListModeChange,
  textAlign,
  handleTextAlignChange,
}) => {
  return (
    <div className="md:max-w-72 w-max-w-72 p-4 pb-8 md:sticky top-14 left-0 overflow-hidden z-10 h-auto md:h-[calc(100vh-56px)] overflow-y-auto">
      <div className="w-full rounded flex flex-col gap-8 items-center justify-center mx-auto">
        <div className="flex w-full flex-col gap-2">
          <h1 className="text-lg text-primary font-medium">
            Explore your installed fonts with ease.
          </h1>
          <h2 className="text-sm text-muted-foreground font-normal">
            Discover and visualize a variety of styles directly in your browser.
          </h2>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm text-primary flex items-center justify-between gap-2 w-full">
            <span className="font-medium text-primary">Text align</span>
          </label>
          <Tabs
            value={textAlign}
            onValueChange={(value) => handleTextAlignChange(value)}
            defaultValue="left"
          >
            <TabsList>
              <TabsTrigger value="left">
                <AlignLeft />
              </TabsTrigger>
              <TabsTrigger value="center">
                <AlignCenter />
              </TabsTrigger>
              <TabsTrigger value="right">
                <AlignRight />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm text-primary flex items-center justify-between gap-2 w-full">
            <span className="font-medium text-primary">List type</span>
          </label>
          <Tabs
            value={listMode}
            onValueChange={(value) => handleListModeChange(value)}
            defaultValue="grid"
          >
            <TabsList>
              <TabsTrigger value="grid">
                <Grid2X2 />
              </TabsTrigger>
              <TabsTrigger value="list">
                <Rows3 />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col items-center gap-2 w-full">
          <label className="text-sm text-primary flex items-center justify-between gap-2 w-full">
            <span className="font-medium text-primary">
              Type your text to preview
            </span>
          </label>
          <Textarea
            id="textTest"
            rows={4}
            placeholder="Hello World"
            value={previewText}
            onChange={handlePreviewTextChange}
          />
        </div>

        <div className="flex flex-col items-center gap-2 w-full">
          <label className="text-sm text-primary flex items-center justify-between gap-2 w-full">
            <span className="font-medium text-primary">Font size</span>
            <span className="text-muted-foreground">{fontSize}px</span>
          </label>
          <Slider
            defaultValue={[fontSize]}
            onValueChange={handleFontSizeChange}
            min={10}
            max={120}
            step={1}
          />
        </div>

        <div className="flex flex-col items-center gap-2 w-full">
          <label className="text-sm text-primary flex items-center justify-between gap-2 w-full">
            <span className="font-medium text-primary">Line height</span>
            <span className="text-muted-foreground">{lineHeight}</span>
          </label>
          <Slider
            defaultValue={[lineHeight]}
            onValueChange={handleLineHeightChange}
            min={0}
            max={3}
            step={0.1}
          />
        </div>

        <div className="flex flex-col items-center gap-2 w-full">
          <label className="text-sm text-primary flex items-center justify-between gap-2 w-full">
            <span className="font-medium text-primary">Letter spacing</span>
            <span className="text-muted-foreground">{letterSpacing}</span>
          </label>
          <Slider
            defaultValue={[letterSpacing]}
            onValueChange={handleLetterSpacingChange}
            min={-1}
            max={1}
            step={0.1}
          />
        </div>
      </div>
    </div>
  );
};

export default FontSettingsPanel;