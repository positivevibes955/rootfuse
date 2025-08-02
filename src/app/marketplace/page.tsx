"use client";

import DashboardNavbar from "@/components/dashboard-navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Store,
  Search,
  Plus,
  Package,
  TrendingUp,
  DollarSign,
  Star,
  Filter,
  ShoppingCart,
  Leaf,
  Beaker,
  Pill,
} from "lucide-react";
import { useState } from "react";

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Premium OG Kush",
      category: "Flower",
      vendor: "Green Valley Farms",
      price: "$280/oz",
      rating: 4.8,
      reviews: 124,
      stock: "In Stock",
      thc: "24.5%",
      cbd: "0.8%",
      image: "🌿",
    },
    {
      id: 2,
      name: "Live Resin Cartridge",
      category: "Concentrates",
      vendor: "Pure Extract Labs",
      price: "$45/0.5g",
      rating: 4.9,
      reviews: 89,
      stock: "Low Stock",
      thc: "87.2%",
      cbd: "1.2%",
      image: "🧪",
    },
    {
      id: 3,
      name: "CBD Gummies 10mg",
      category: "Edibles",
      vendor: "Mountain Edibles Co",
      price: "$25/pack",
      rating: 4.6,
      reviews: 203,
      stock: "In Stock",
      thc: "0.3%",
      cbd: "10mg",
      image: "🍬",
    },
    {
      id: 4,
      name: "Hybrid Pre-Rolls",
      category: "Pre-Rolls",
      vendor: "Craft Cannabis Co",
      price: "$12/each",
      rating: 4.7,
      reviews: 156,
      stock: "In Stock",
      thc: "22.1%",
      cbd: "1.5%",
      image: "🚬",
    },
  ];

  const categories = [
    "all",
    "flower",
    "concentrates",
    "edibles",
    "pre-rolls",
    "topicals",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-dashboard-bg font-mono">
      <DashboardNavbar />

      <main className="p-4 lg:p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold font-digital text-dashboard-text mb-2">
              Cannabis Marketplace
            </h1>
            <p className="text-dashboard-text/70 font-mono">
              B2B wholesale cannabis products and supplies
            </p>
          </div>
          <Button className="bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg">
            <Plus className="h-4 w-4 mr-2" />
            List Product
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-dashboard-text/50" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-dashboard-bg border-dashboard-border text-dashboard-text"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize border-dashboard-border text-dashboard-text hover:bg-dashboard-border"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">
                    Total Products
                  </p>
                  <p className="text-2xl font-bold text-dashboard-text">
                    2,847
                  </p>
                </div>
                <Package className="h-8 w-8 text-dashboard-text/50" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">
                    Active Vendors
                  </p>
                  <p className="text-2xl font-bold text-dashboard-text">156</p>
                </div>
                <Store className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">
                    Monthly Volume
                  </p>
                  <p className="text-2xl font-bold text-dashboard-text">
                    $1.2M
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">Avg Rating</p>
                  <p className="text-2xl font-bold text-dashboard-text">4.7</p>
                </div>
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-dashboard-bg border-dashboard-border hover:border-dashboard-text/50 transition-colors"
            >
              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{product.image}</div>
                  <h3 className="text-lg font-semibold text-dashboard-text mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-dashboard-text/70">
                    {product.vendor}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <Badge
                      variant={
                        product.stock === "In Stock" ? "default" : "outline"
                      }
                      className="text-xs"
                    >
                      {product.stock}
                    </Badge>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-dashboard-text/70">THC:</span>
                    <span className="text-dashboard-text font-semibold">
                      {product.thc}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dashboard-text/70">CBD:</span>
                    <span className="text-dashboard-text font-semibold">
                      {product.cbd}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-dashboard-text">
                        {product.rating}
                      </span>
                      <span className="text-xs text-dashboard-text/70">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="text-lg font-bold text-dashboard-text">
                      {product.price}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-dashboard-border text-dashboard-text hover:bg-dashboard-border"
                    >
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Order
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Vendors */}
        <Card className="bg-dashboard-bg border-dashboard-border mt-8">
          <CardHeader>
            <CardTitle className="text-dashboard-text flex items-center">
              <Store className="h-5 w-5 mr-2" />
              Featured Vendors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  name: "Green Valley Farms",
                  specialty: "Premium Flower",
                  rating: 4.9,
                  products: 45,
                },
                {
                  name: "Pure Extract Labs",
                  specialty: "Concentrates",
                  rating: 4.8,
                  products: 23,
                },
                {
                  name: "Mountain Edibles Co",
                  specialty: "Edibles & Topicals",
                  rating: 4.7,
                  products: 67,
                },
              ].map((vendor, index) => (
                <div
                  key={index}
                  className="border border-dashboard-border rounded-lg p-4 hover:border-dashboard-text/50 transition-colors"
                >
                  <h4 className="font-semibold text-dashboard-text mb-1">
                    {vendor.name}
                  </h4>
                  <p className="text-sm text-dashboard-text/70 mb-2">
                    {vendor.specialty}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-dashboard-text">
                        {vendor.rating}
                      </span>
                    </div>
                    <span className="text-sm text-dashboard-text/70">
                      {vendor.products} products
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
