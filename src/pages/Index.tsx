import { Search, ShieldCheck, Truck, Clock, Pill, Heart, Thermometer, Stethoscope, Baby, Apple, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const categories = [
    { icon: Pill, name: "Prescription", color: "bg-primary-light text-primary" },
    { icon: Heart, name: "Wellness", color: "bg-secondary-light text-secondary" },
    { icon: Thermometer, name: "Personal Care", color: "bg-primary-light text-primary" },
    { icon: Stethoscope, name: "Medical Devices", color: "bg-secondary-light text-secondary" },
    { icon: Baby, name: "Baby Care", color: "bg-primary-light text-primary" },
    { icon: Apple, name: "Supplements", color: "bg-secondary-light text-secondary" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Vitamin D3 5000 IU",
      category: "Supplements",
      price: 24.99,
      rating: 4.8,
      reviews: 234,
      inStock: true,
      discount: 15,
    },
    {
      id: 2,
      name: "Blood Pressure Monitor",
      category: "Medical Devices",
      price: 49.99,
      rating: 4.9,
      reviews: 567,
      inStock: true,
      discount: null,
    },
    {
      id: 3,
      name: "Omega-3 Fish Oil",
      category: "Supplements",
      price: 29.99,
      rating: 4.7,
      reviews: 189,
      inStock: true,
      discount: 20,
    },
    {
      id: 4,
      name: "Digital Thermometer",
      category: "Medical Devices",
      price: 15.99,
      rating: 4.6,
      reviews: 423,
      inStock: true,
      discount: null,
    },
  ];

  const trustBadges = [
    { icon: ShieldCheck, text: "Licensed & Certified Pharmacy" },
    { icon: Truck, text: "Free Delivery on Orders $50+" },
    { icon: Clock, text: "24/7 Customer Support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">HealthCare+</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Shop
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Login</Button>
            <Button size="sm" variant="hero">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20">
                Trusted by 50,000+ Customers
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Your Health, Our Priority
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Get genuine medicines, wellness products, and health essentials delivered to your doorstep.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex gap-2 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for medicines, health products..."
                  className="pl-10 h-12 bg-background shadow-medium"
                />
              </div>
              <Button size="lg" variant="hero" className="px-8">
                Search
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="h-5 w-5 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-muted-foreground text-lg">
              Find what you need from our comprehensive healthcare range
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-2 hover:border-primary hover:shadow-medium transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Top-rated health essentials at great prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-medium transition-all duration-300">
                <div className="aspect-square bg-primary-light/30 relative">
                  {product.discount && (
                    <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                      -{product.discount}%
                    </Badge>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Pill className="h-24 w-24 text-primary/20" />
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                    <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-primary">${product.price}</p>
                      {product.discount && (
                        <p className="text-xs text-muted-foreground line-through">
                          ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                        </p>
                      )}
                    </div>
                    {product.inStock && (
                      <Badge variant="outline" className="text-secondary border-secondary">
                        In Stock
                      </Badge>
                    )}
                  </div>

                  <Button className="w-full" variant="hero">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="min-w-[200px]">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose HealthCare+?
              </h2>
              <p className="text-muted-foreground text-lg">
                Your trusted partner in health and wellness
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">100% Genuine</h3>
                <p className="text-muted-foreground">
                  All medicines sourced directly from licensed manufacturers
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-secondary-light flex items-center justify-center">
                  <Truck className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Free shipping on orders over $50, delivered in 2-3 days
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Expert pharmacists available round the clock to help you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-gradient-primary">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay Updated on Health Tips
            </h2>
            <p className="text-white/90 text-lg">
              Subscribe to our newsletter for exclusive offers and wellness advice
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                type="email"
                className="bg-white h-12"
              />
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">HealthCare+</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted online pharmacy, delivering health and wellness to your doorstep.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Return Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Prescription</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Wellness</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Personal Care</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Supplements</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pharmacist Chat</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 HealthCare+. Licensed Pharmacy #HC-2024-1234. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
