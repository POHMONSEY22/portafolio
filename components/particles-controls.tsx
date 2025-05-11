"use client"

import { useState } from "react"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface ParticlesControlsProps {
  onSettingsChange: (settings: {
    particleCount: number
    connectionDistance: number
    interactiveForce: number
    enabled: boolean
  }) => void
  defaultSettings: {
    particleCount: number
    connectionDistance: number
    interactiveForce: number
    enabled: boolean
  }
}

export default function ParticlesControls({ onSettingsChange, defaultSettings }: ParticlesControlsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState(defaultSettings)

  const handleChange = (key: string, value: number | boolean) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    onSettingsChange(newSettings)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-64">
        <CollapsibleTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 h-10 w-10 shadow-md hover:shadow-lg transition-all"
          >
            <Settings className="h-4 w-4" />
            <span className="sr-only">Ajustes de partículas</span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-4 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="particles-enabled">Partículas</Label>
              <Switch
                id="particles-enabled"
                checked={settings.enabled}
                onCheckedChange={(checked) => handleChange("enabled", checked)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="particle-count">Cantidad</Label>
                <span className="text-xs text-muted-foreground">{settings.particleCount}</span>
              </div>
              <Slider
                id="particle-count"
                min={20}
                max={200}
                step={10}
                value={[settings.particleCount]}
                onValueChange={(value) => handleChange("particleCount", value[0])}
                disabled={!settings.enabled}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="connection-distance">Distancia de conexión</Label>
                <span className="text-xs text-muted-foreground">{settings.connectionDistance}px</span>
              </div>
              <Slider
                id="connection-distance"
                min={50}
                max={300}
                step={10}
                value={[settings.connectionDistance]}
                onValueChange={(value) => handleChange("connectionDistance", value[0])}
                disabled={!settings.enabled}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="interactive-force">Fuerza interactiva</Label>
                <span className="text-xs text-muted-foreground">{settings.interactiveForce}</span>
              </div>
              <Slider
                id="interactive-force"
                min={1}
                max={10}
                step={1}
                value={[settings.interactiveForce]}
                onValueChange={(value) => handleChange("interactiveForce", value[0])}
                disabled={!settings.enabled}
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
