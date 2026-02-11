import { useState, useMemo } from "react";
import { Box, RotateCw, Download, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";

interface Pallet {
  id: number;
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  quantity: number;
}

const defaultTruck = { length: 1360, width: 245, height: 270, maxWeight: 24000 };

const PALLET_COLORS = [
  "bg-primary/70",
  "bg-emerald-500/70",
  "bg-amber-500/70",
  "bg-rose-500/70",
  "bg-violet-500/70",
  "bg-cyan-500/70",
];

let nextId = 1;
const createPallet = (): Pallet => ({
  id: nextId++,
  name: `Pallet ${nextId - 1}`,
  length: 120,
  width: 80,
  height: 150,
  weight: 800,
  quantity: 1,
});

const OptimizerTool = () => {
  const [truck, setTruck] = useState(defaultTruck);
  const [pallets, setPallets] = useState<Pallet[]>([createPallet()]);

  const addPallet = () => setPallets((p) => [...p, createPallet()]);
  const removePallet = (id: number) => setPallets((p) => p.filter((x) => x.id !== id));
  const updatePallet = (id: number, field: keyof Pallet, value: string) => {
    setPallets((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, [field]: field === "name" ? value : Math.max(0, Number(value) || 0) }
          : p
      )
    );
  };

  const result = useMemo(() => {
    const truckArea = truck.length * truck.width;
    const truckVolume = truck.length * truck.width * truck.height;

    type PlacedPallet = { x: number; y: number; l: number; w: number; h: number; colorIdx: number; name: string };
    const placed: PlacedPallet[] = [];
    let totalWeight = 0;

    // Simple greedy floor-placement per pallet type
    // Track occupied floor cells using a grid approach
    const cellSize = 1; // cm granularity simplified
    const gridCols = Math.floor(truck.width);
    const gridRows = Math.floor(truck.length);

    // Use a simpler row-based approach
    let cursorX = 0;
    let cursorY = 0;
    let rowHeight = 0;

    pallets.forEach((pallet, palletIdx) => {
      for (let q = 0; q < pallet.quantity; q++) {
        if (totalWeight + pallet.weight > truck.maxWeight) break;

        // Try normal orientation first, then rotated
        const orientations = [
          { l: pallet.length, w: pallet.width },
          { l: pallet.width, w: pallet.length },
        ];

        let placed_this = false;
        for (const orient of orientations) {
          if (orient.l > truck.length || orient.w > truck.width) continue;

          // Try to fit at cursor
          if (cursorX + orient.w <= truck.width && cursorY + orient.l <= truck.length) {
            placed.push({
              x: cursorX,
              y: cursorY,
              l: orient.l,
              w: orient.w,
              h: Math.min(pallet.height, truck.height),
              colorIdx: palletIdx % PALLET_COLORS.length,
              name: pallet.name,
            });
            totalWeight += pallet.weight;
            cursorX += orient.w;
            rowHeight = Math.max(rowHeight, orient.l);
            placed_this = true;
            break;
          }

          // Try new row
          if (orient.w <= truck.width && cursorY + rowHeight + orient.l <= truck.length) {
            cursorY += rowHeight;
            cursorX = 0;
            rowHeight = 0;

            placed.push({
              x: cursorX,
              y: cursorY,
              l: orient.l,
              w: orient.w,
              h: Math.min(pallet.height, truck.height),
              colorIdx: palletIdx % PALLET_COLORS.length,
              name: pallet.name,
            });
            totalWeight += pallet.weight;
            cursorX += orient.w;
            rowHeight = Math.max(rowHeight, orient.l);
            placed_this = true;
            break;
          }
        }
      }
    });

    const usedArea = placed.reduce((sum, p) => sum + p.l * p.w, 0);
    const usedVolume = placed.reduce((sum, p) => sum + p.l * p.w * p.h, 0);
    const totalRequested = pallets.reduce((sum, p) => sum + p.quantity, 0);

    return {
      placed,
      totalPlaced: placed.length,
      totalRequested,
      areaUtil: truckArea > 0 ? ((usedArea / truckArea) * 100).toFixed(1) : "0",
      volumeUtil: truckVolume > 0 ? ((usedVolume / truckVolume) * 100).toFixed(1) : "0",
      totalWeight,
      weightUtil: truck.maxWeight > 0 ? ((totalWeight / truck.maxWeight) * 100).toFixed(1) : "0",
    };
  }, [truck, pallets]);

  const reset = () => {
    setTruck(defaultTruck);
    nextId = 1;
    setPallets([createPallet()]);
  };

  return (
    <Layout>
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Box className="h-8 w-8 text-primary" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold">
              3D Pallet <span className="text-primary">Optimizer Tool</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Enter your truck and pallet dimensions to calculate the optimal loading configuration.
          </p>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left panel: inputs */}
            <div className="lg:col-span-1 space-y-6">
              {/* Truck dimensions */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Truck Dimensions (cm / kg)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {(["length", "width", "height", "maxWeight"] as const).map((field) => (
                    <div key={field} className="flex items-center gap-3">
                      <Label className="w-24 text-sm capitalize">
                        {field === "maxWeight" ? "Max Weight" : field}
                      </Label>
                      <Input
                        type="number"
                        value={truck[field]}
                        onChange={(e) => setTruck((t) => ({ ...t, [field]: Math.max(0, Number(e.target.value) || 0) }))}
                        className="flex-1"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Pallets */}
              <Card>
                <CardHeader className="pb-3 flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Pallets</CardTitle>
                  <Button size="sm" variant="outline" onClick={addPallet}>
                    <Plus className="h-4 w-4 mr-1" /> Add
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pallets.map((pallet, idx) => (
                    <div key={pallet.id} className="p-3 rounded-lg border border-border space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded ${PALLET_COLORS[idx % PALLET_COLORS.length]}`} />
                          <Input
                            value={pallet.name}
                            onChange={(e) => updatePallet(pallet.id, "name", e.target.value)}
                            className="h-7 text-sm font-medium w-32"
                          />
                        </div>
                        {pallets.length > 1 && (
                          <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => removePallet(pallet.id)}>
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {(["length", "width", "height", "weight", "quantity"] as const).map((f) => (
                          <div key={f} className="flex flex-col gap-1">
                            <Label className="text-xs capitalize text-muted-foreground">{f} {f === "weight" ? "(kg)" : f === "quantity" ? "" : "(cm)"}</Label>
                            <Input
                              type="number"
                              value={pallet[f]}
                              onChange={(e) => updatePallet(pallet.id, f, e.target.value)}
                              className="h-8 text-sm"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Button variant="outline" onClick={reset} className="w-full">
                <RotateCw className="h-4 w-4 mr-2" /> Reset All
              </Button>
            </div>

            {/* Right panel: visualization & results */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="border-0 card-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{result.totalPlaced}/{result.totalRequested}</div>
                    <p className="text-xs text-muted-foreground">Pallets Placed</p>
                  </CardContent>
                </Card>
                <Card className="border-0 card-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{result.areaUtil}%</div>
                    <p className="text-xs text-muted-foreground">Floor Utilization</p>
                  </CardContent>
                </Card>
                <Card className="border-0 card-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{result.volumeUtil}%</div>
                    <p className="text-xs text-muted-foreground">Volume Utilization</p>
                  </CardContent>
                </Card>
                <Card className="border-0 card-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{result.weightUtil}%</div>
                    <p className="text-xs text-muted-foreground">Weight ({result.totalWeight} kg)</p>
                  </CardContent>
                </Card>
              </div>

              {/* Top-down visualization */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Loading Plan — Top-Down View</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full overflow-auto">
                    <div
                      className="relative border-2 border-foreground/30 rounded bg-muted mx-auto"
                      style={{
                        width: "100%",
                        paddingBottom: `${(truck.length / truck.width) * 100}%`,
                        maxWidth: 500,
                      }}
                    >
                      {result.placed.map((p, i) => {
                        const left = (p.x / truck.width) * 100;
                        const top = (p.y / truck.length) * 100;
                        const width = (p.w / truck.width) * 100;
                        const height = (p.l / truck.length) * 100;
                        return (
                          <div
                            key={i}
                            className={`absolute border border-foreground/20 ${PALLET_COLORS[p.colorIdx]} flex items-center justify-center text-[10px] text-foreground font-medium`}
                            style={{
                              left: `${left}%`,
                              top: `${top}%`,
                              width: `${width}%`,
                              height: `${height}%`,
                            }}
                            title={`${p.name}: ${p.w}×${p.l}cm`}
                          >
                            {width > 8 && height > 4 ? p.name : ""}
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Truck floor: {truck.length} × {truck.width} cm — Front ↑
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Placement table */}
              {result.placed.length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Placement Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border text-left text-muted-foreground">
                            <th className="pb-2 pr-4">#</th>
                            <th className="pb-2 pr-4">Name</th>
                            <th className="pb-2 pr-4">Position (X, Y)</th>
                            <th className="pb-2 pr-4">Size (W × L × H)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.placed.map((p, i) => (
                            <tr key={i} className="border-b border-border/50">
                              <td className="py-2 pr-4">{i + 1}</td>
                              <td className="py-2 pr-4 flex items-center gap-2">
                                <span className={`w-2.5 h-2.5 rounded ${PALLET_COLORS[p.colorIdx]}`} />
                                {p.name}
                              </td>
                              <td className="py-2 pr-4">{p.x}, {p.y} cm</td>
                              <td className="py-2 pr-4">{p.w} × {p.l} × {p.h} cm</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OptimizerTool;
