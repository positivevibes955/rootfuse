"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Step = "signup" | "plan" | "cart" | "checkout" | "success" | "dashboard";

export default function SignupFlowTest() {
  const [currentStep, setCurrentStep] = useState<Step>("signup");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    selectedPlan: "",
    couponCode: "",
  });

  const steps = [
    { id: "signup", title: "Sign Up", completed: false },
    { id: "plan", title: "Select Plan", completed: false },
    { id: "cart", title: "Cart", completed: false },
    { id: "checkout", title: "Checkout", completed: false },
    { id: "success", title: "Success", completed: false },
    { id: "dashboard", title: "Dashboard", completed: false },
  ];

  const plans = [
    {
      name: "Core Command",
      price: 538,
      originalPrice: 538,
      features: ["1 License Type", "Up to 5 Users", "Core Features"],
    },
    {
      name: "Growth Command",
      price: 1158,
      originalPrice: 1158,
      features: ["Advanced Features", "Up to 10 Users", "Priority Support"],
      popular: true,
    },
    {
      name: "Pro Command",
      price: 1998,
      originalPrice: 1998,
      features: ["All Features", "Unlimited Users", "24/7 Support"],
    },
  ];

  const nextStep = () => {
    const stepOrder: Step[] = [
      "signup",
      "plan",
      "cart",
      "checkout",
      "success",
      "dashboard",
    ];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const stepOrder: Step[] = [
      "signup",
      "plan",
      "cart",
      "checkout",
      "success",
      "dashboard",
    ];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const renderStepIndicator = () => {
    const stepOrder: Step[] = [
      "signup",
      "plan",
      "cart",
      "checkout",
      "success",
      "dashboard",
    ];
    const currentIndex = stepOrder.indexOf(currentStep);

    return (
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                index <= currentIndex
                  ? "bg-dashboard-text text-dashboard-bg"
                  : "bg-dashboard-border text-dashboard-text"
              }`}
            >
              {index < currentIndex ? <Check className="w-4 h-4" /> : index + 1}
            </div>
            <div className="ml-2 mr-4 text-dashboard-text font-mono text-sm">
              {step.title}
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="w-4 h-4 text-dashboard-border mr-4" />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "signup":
        return (
          <Card className="bg-dashboard-bg border-dashboard-border max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-dashboard-text font-digital text-center">
                Create Your Account
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
              />
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
              />
              <Button
                onClick={nextStep}
                className="w-full bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital"
              >
                Create Account
              </Button>
            </CardContent>
          </Card>
        );

      case "plan":
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-dashboard-text font-digital text-center mb-6">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`bg-dashboard-bg border cursor-pointer transition-all ${
                    plan.popular
                      ? "border-dashboard-text shadow-lg scale-105"
                      : "border-dashboard-border hover:border-dashboard-text/50"
                  } ${
                    formData.selectedPlan === plan.name
                      ? "ring-2 ring-dashboard-text"
                      : ""
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, selectedPlan: plan.name })
                  }
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-dashboard-text text-dashboard-bg px-4 py-1 rounded-full text-sm font-digital">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-dashboard-text font-digital">
                      {plan.name}
                    </CardTitle>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-dashboard-text font-digital">
                        ${plan.price}/month
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-dashboard-text" />
                          <span className="text-dashboard-text/80 font-mono text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button
                onClick={nextStep}
                disabled={!formData.selectedPlan}
                className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital px-8"
              >
                Continue to Cart
              </Button>
            </div>
          </div>
        );

      case "cart":
        const selectedPlan = plans.find(
          (p) => p.name === formData.selectedPlan,
        );
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-dashboard-text font-digital text-center mb-6">
              Your Cart
            </h2>
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardContent className="p-6">
                {selectedPlan && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-bold text-dashboard-text font-digital">
                          {selectedPlan.name}
                        </h3>
                        <p className="text-dashboard-text/70 font-mono text-sm">
                          Monthly subscription
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-dashboard-text/70 line-through font-mono">
                          ${selectedPlan.originalPrice}
                        </div>
                        <div className="text-xl font-bold text-dashboard-text font-digital">
                          ${selectedPlan.price}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-dashboard-border pt-4">
                      <div className="flex gap-2 mb-4">
                        <Input
                          placeholder="Enter coupon code (optional)"
                          value={formData.couponCode}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              couponCode: e.target.value,
                            })
                          }
                          className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                        />
                        <Button
                          variant="outline"
                          className="border-dashboard-border text-dashboard-text"
                          onClick={() => {
                            if (
                              formData.couponCode.toLowerCase() === "rf5050"
                            ) {
                              alert(
                                "Coupon rf5050 applied! 50% off for 6 months.",
                              );
                            } else if (formData.couponCode) {
                              alert("Invalid coupon code.");
                            }
                          }}
                        >
                          Apply
                        </Button>
                      </div>

                      <div className="space-y-2">
                        {formData.couponCode.toLowerCase() === "rf5050" && (
                          <>
                            <div className="flex justify-between text-dashboard-text/70 font-mono">
                              <span>Subtotal:</span>
                              <span>${selectedPlan.originalPrice}</span>
                            </div>
                            <div className="flex justify-between text-green-400 font-mono">
                              <span>
                                Discount (rf5050 - 50% off for 6 months):
                              </span>
                              <span>
                                -${Math.round(selectedPlan.originalPrice * 0.5)}
                              </span>
                            </div>
                          </>
                        )}
                        <div className="flex justify-between text-xl font-bold text-dashboard-text font-digital border-t border-dashboard-border pt-2">
                          <span>Total:</span>
                          <span>
                            $
                            {formData.couponCode.toLowerCase() === "rf5050"
                              ? Math.round(selectedPlan.originalPrice * 0.5)
                              : selectedPlan.price}
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex gap-4 mt-6">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="flex-1 border-dashboard-border text-dashboard-text"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={nextStep}
                    className="flex-1 bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital"
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "checkout":
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-dashboard-text font-digital text-center mb-6">
              Checkout (Stripe Integration)
            </h2>
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-dashboard-border/20 rounded-lg p-4 text-center">
                    <p className="text-dashboard-text font-mono mb-2">
                      🔒 Secure Payment Processing
                    </p>
                    <p className="text-dashboard-text/70 font-mono text-sm">
                      This would integrate with Stripe for secure payment
                      processing
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Input
                      placeholder="Card Number"
                      className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        placeholder="MM/YY"
                        className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                      />
                      <Input
                        placeholder="CVC"
                        className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                      />
                    </div>
                    <Input
                      placeholder="Cardholder Name"
                      className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                    />
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="flex-1 border-dashboard-border text-dashboard-text"
                    >
                      Back to Cart
                    </Button>
                    <Button
                      onClick={nextStep}
                      className="flex-1 bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital"
                    >
                      Complete Payment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "success":
        return (
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-dashboard-text font-digital mb-4">
                  Payment Successful!
                </h2>
                <p className="text-dashboard-text/80 font-mono mb-6">
                  Welcome to Rootfuse! Your account has been created and your
                  subscription is active.
                </p>
                <div className="bg-dashboard-border/20 rounded-lg p-4 mb-6">
                  <p className="text-dashboard-text font-mono text-sm">
                    ✅ Account created successfully
                    <br />
                    ✅ Payment processed
                    <br />✅ {formData.selectedPlan} plan activated
                    <br />✅ 50% discount applied for 6 months
                  </p>
                </div>
                <Button
                  onClick={nextStep}
                  className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital px-8"
                >
                  Access Your Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case "dashboard":
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dashboard-text font-digital text-center mb-6">
              Welcome to Your Rootfuse Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-dashboard-bg border-dashboard-border">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <h3 className="text-lg font-bold text-dashboard-text font-digital mb-2">
                    Analytics
                  </h3>
                  <p className="text-dashboard-text/70 font-mono text-sm">
                    View your business metrics and KPIs
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dashboard-bg border-dashboard-border">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🌿</div>
                  <h3 className="text-lg font-bold text-dashboard-text font-digital mb-2">
                    Operations
                  </h3>
                  <p className="text-dashboard-text/70 font-mono text-sm">
                    Manage your cultivation operations
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dashboard-bg border-dashboard-border">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">⚙️</div>
                  <h3 className="text-lg font-bold text-dashboard-text font-digital mb-2">
                    Settings
                  </h3>
                  <p className="text-dashboard-text/70 font-mono text-sm">
                    Configure your account and preferences
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-dashboard-text/80 font-mono mb-4">
                🎯 Signup flow test completed successfully!
              </p>
              <Link href="/dashboard">
                <Button className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital">
                  Go to Real Dashboard
                </Button>
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-dashboard-bg py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-dashboard-text hover:text-dashboard-text/80 mb-4 font-mono"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-dashboard-text font-digital text-center">
            Signup Flow Test
          </h1>
          <p className="text-dashboard-text/80 font-mono text-center mt-2">
            Test the complete signup journey from registration to dashboard
            access
          </p>
        </div>

        {renderStepIndicator()}
        {renderCurrentStep()}
      </div>
    </div>
  );
}
