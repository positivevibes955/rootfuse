"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  item: {
    id: string;
    tier_name: string;
    base_price: number;
    extra_licenses: number;
    extra_users: number;
    upsells: Array<{ name: string; price: number }>;
    total_price: number;
  };
  onUpdateQuantity: (id: string, field: string, value: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <Card className="bg-dashboard-bg border-dashboard-border">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold font-digital text-dashboard-text">
              {item.tier_name}
            </h3>
            <p className="text-dashboard-text/70 font-mono text-sm">
              Base Price: ${item.base_price}/month
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(item.id)}
            className="text-dashboard-text/70 hover:text-dashboard-text hover:bg-dashboard-border/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Extra Licenses */}
        {item.tier_name !== "Starter Command" && (
          <div className="flex items-center justify-between mb-3">
            <span className="text-dashboard-text font-mono text-sm">
              Extra Licenses: {item.extra_licenses}
            </span>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  onUpdateQuantity(
                    item.id,
                    "extra_licenses",
                    Math.max(0, item.extra_licenses - 1),
                  )
                }
                className="h-8 w-8 p-0 border-dashboard-border text-dashboard-text hover:bg-dashboard-border"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-dashboard-text font-mono w-8 text-center">
                {item.extra_licenses}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  onUpdateQuantity(
                    item.id,
                    "extra_licenses",
                    item.extra_licenses + 1,
                  )
                }
                className="h-8 w-8 p-0 border-dashboard-border text-dashboard-text hover:bg-dashboard-border"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
        )}

        {/* Extra Users */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-dashboard-text font-mono text-sm">
            Extra Users: {item.extra_users}
          </span>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                onUpdateQuantity(
                  item.id,
                  "extra_users",
                  Math.max(0, item.extra_users - 1),
                )
              }
              className="h-8 w-8 p-0 border-dashboard-border text-dashboard-text hover:bg-dashboard-border"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-dashboard-text font-mono w-8 text-center">
              {item.extra_users}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                onUpdateQuantity(item.id, "extra_users", item.extra_users + 1)
              }
              className="h-8 w-8 p-0 border-dashboard-border text-dashboard-text hover:bg-dashboard-border"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Upsells */}
        {item.upsells && item.upsells.length > 0 && (
          <div className="mb-4">
            <p className="text-dashboard-text font-mono text-sm mb-2">
              Upsells:
            </p>
            <div className="flex flex-wrap gap-2">
              {item.upsells.map((upsell, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-dashboard-border text-dashboard-text"
                >
                  {upsell.name} - ${upsell.price}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-dashboard-border pt-4">
          <div className="flex justify-between items-center">
            <span className="text-dashboard-text font-mono text-sm">
              Total:
            </span>
            <span className="text-xl font-bold font-digital text-dashboard-text">
              ${item.total_price}/month
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
