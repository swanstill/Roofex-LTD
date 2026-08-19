"use client";
import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/config/SiteConfig";
import Image from "next/image";
import { trackLead, trackSubmitForm } from "@/lib/tracking";

interface FormData {
  propertyType: string;
  serviceType: string; 
  timeframe: string;
  postcode: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface MultiStepFormProps {
  onStepChange?: (step: number) => void;
}

const MultiStepForm = ({ onStepChange }: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    propertyType: "",
    serviceType: "",
    timeframe: "",
    postcode: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const steps = siteConfig.formData.steps;
  // Steps that use a manual Next button instead of auto-advance (1-based: 4,5,6)
  const manualSteps = [3, 4, 5];

  useEffect(() => {
    if (onStepChange) onStepChange(currentStep);
  }, [currentStep, onStepChange]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [currentStep]);

  useEffect(() => {
    trackLead();
  }, []);

  const goNext = () => {
    setCurrentStep((s) => (s < steps.length - 1 ? s + 1 : s));
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    trackSubmitForm({ ...formData });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          postcode: formData.postcode,
          propertyType: formData.propertyType,
          serviceType: formData.serviceType,
          timeframe: formData.timeframe,
        }),
      });
      if (!res.ok) console.error("Lead API error", await res.text());
    } catch (e) {
      console.error("Lead API exception", e);
    } finally {
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTextChange = (
    field: keyof FormData,
    value: string,
    isComplete: (val: string) => boolean,
  ) => {
    handleInputChange(field, value);
    if (manualSteps.includes(currentStep)) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (isComplete(value)) {
      debounceRef.current = setTimeout(() => {
        goNext();
      }, 1800);
    }
  };

  // ✅ Auto-advance for name — triggers when BOTH fields filled
  const handleNameChange = (
    field: "firstName" | "lastName",
    value: string,
    otherValue: string,
  ) => {
    handleInputChange(field, value);
    if (manualSteps.includes(currentStep)) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const newFirst = field === "firstName" ? value : otherValue;
    const newLast = field === "lastName" ? value : otherValue;
    if (newFirst.trim() !== "" && newLast.trim() !== "") {
      debounceRef.current = setTimeout(() => {
        goNext();
      }, 3800);
    }
  };

  // ✅ Auto-advance for radio
  const handleRadioSelect = (field: keyof FormData, value: string) => {
    handleInputChange(field, value);
    setTimeout(() => {
      setCurrentStep((s) => (s < steps.length - 1 ? s + 1 : s));
    }, 400);
  };

  const isStepComplete = () => {
    const step = steps[currentStep];
    if (!step) return false;
    const question = step.question.toLowerCase();

    if (step.type === "radio") {
      return formData[getRadioField()].trim() !== "";
    }
    if (step.type === "name") {
      return formData.firstName.trim() !== "" && formData.lastName.trim() !== "";
    }
    if (step.type === "text") {
      if (question.includes("postcode")) return formData.postcode.trim() !== "";
      if (question.includes("email")) return formData.email.trim() !== "";
      if (question.includes("phone")) return formData.phoneNumber.trim() !== "";
    }
    return false;
  };

 

  const getRadioField = (): keyof FormData => {
    const question = steps[currentStep]?.question.toLowerCase() ?? "";
    if (question.includes("property")) return "propertyType";
    if (question.includes("help")) return "serviceType";
    if (question.includes("soon") || question.includes("timeframe")) return "timeframe";
    return "propertyType";
  };

  const renderStepContent = () => {
    const step = steps[currentStep];
    if (!step) return null;
    const question = step.question.toLowerCase();

    // RADIO steps
    if (step.type === "radio") {
      return (
        <div className="flex flex-wrap items-center justify-center gap-3 w-full px-4">
          {step.options?.map((option) => {
            const isSelected = formData[getRadioField()] === option.label;
            return (
              <button
                type="button"
                key={option.label}
                onClick={() => handleRadioSelect(getRadioField(), option.label)}
                className={`flex flex-col gap-2 py-4 px-5 items-center justify-center rounded-xl transition-all border-2 select-none `}
                style={{
                  width: "calc(50% - 8px)",
                  maxWidth: "180px",
                  minHeight: "130px",
                  backgroundColor: isSelected ? "black" : "white",
                  borderColor: isSelected
                    ? siteConfig.brand.primary
                    : "#e5e7eb",
                }}
              >
                {option.icon && (
                  <Image
                    src={option.icon}
                    alt={option.label}
                    height={48}
                    width={48}
                    className="pointer-events-none"
                    style={{
                      filter: isSelected ? "invert(100%)" : "invert(0%)",
                    }}
                  />
                )}
                <p
                  className="w-full px-2 font-bold text-center text-xs md:text-sm leading-tight wrap-break-word pointer-events-none"
                  style={{
                    color: isSelected ? "white": "black",
                  }}
                >
                  {option.label}
                </p>
              </button>
            );
          })}
        </div>
      );
    }

    // NAME step
    if (step.type === "name") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-lg px-2">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              handleNameChange("firstName", e.target.value, formData.lastName)
            }
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none bg-white text-gray-800"
            style={{
              borderColor: formData.firstName ? siteConfig.brand.primary : "",
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              handleNameChange("lastName", e.target.value, formData.firstName)
            }
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none bg-white text-gray-800"
            style={{
              borderColor: formData.lastName ? siteConfig.brand.primary : "",
            }}
          />
        </div>
      );
    }

    // TEXT steps
    if (step.type === "text") {
      const isPostcode = question.includes("postcode");
      const isEmail = question.includes("email");
      const isPhone = question.includes("phone");

      const getValue = () => {
        if (isPostcode) return formData.postcode;
        if (isEmail) return formData.email;
        if (isPhone) return formData.phoneNumber;
        return "";
      };

      const getField = (): keyof FormData => {
        if (isPostcode) return "postcode";
        if (isEmail) return "email";
        if (isPhone) return "phoneNumber";
        return "postcode";
      };

      const getType = () => {
        if (isEmail) return "email";
        if (isPhone) return "tel";
        return "text";
      };

      const isValid = (val: string) => {
        if (isPostcode) return val.trim().length >= 5;
        if (isEmail) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        if (isPhone) return val.replace(/[\s\-()]/g, "").length >= 10;
        return false;
      };

      return (
        <div className="w-full max-w-lg px-2">
          <input
            type={getType()}
            placeholder={step.placeholder}
            value={getValue()}
            onChange={(e) =>
              handleTextChange(getField(), e.target.value, isValid)
            }
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none bg-white text-gray-800 text-base"
            style={{ borderColor: getValue() ? siteConfig.brand.primary : "" }}
          />
          {isPhone && (
            <p className="text-white/60 text-xs mt-2 text-center">
              e.g. 07911 123456 (UK number)
            </p>
          )}
        </div>
      );
    }

    return null;
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-5xl mx-auto p-6 text-center py-16">
        <svg
          className="mx-auto h-20 w-20 mb-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-3xl font-bold mb-3 text-white">Thank You!</h2>
        <p className="text-lg text-white/80 mb-1">
          We&apos;ve received your details.
        </p>
        <p className="text-white/70">
          Our team will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-8">
      {/* Question */}
      <div className="mb-6 text-center px-2">
        <h2 className="text-lg md:text-2xl font-bold text-white">
          {steps[currentStep]?.question}
        </h2>
      </div>

      {/* Step Content */}
      <div className="mb-8 min-h-45 flex items-start justify-center">
        {renderStepContent()}
      </div>

      {/* Back / Submit Buttons */}
      <div className="flex justify-between items-center max-w-2xl mx-auto w-full px-2">
        {currentStep >= 1 ? (
          <button
            onClick={handleBack}
            className="px-6 md:px-8 py-3 rounded-full font-semibold transition-all text-sm md:text-base"
            style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
          >
            Back
          </button>
        ) : (
          <span aria-hidden="true" />
        )}

        {manualSteps.includes(currentStep) ? (
          <button
            onClick={goNext}
            disabled={!isStepComplete()}
            className="px-6 md:px-8 py-3 rounded-full font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed text-sm md:text-base"
            style={{
              backgroundColor: isStepComplete()
                ? siteConfig.brand.secondary
                : "#6b7280",
            }}
          >
            Next
          </button>
        ) : currentStep === steps.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={!isStepComplete()}
            className="px-6 md:px-8 py-3 rounded-full font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed text-sm md:text-base"
            style={{
              backgroundColor: isStepComplete()
                ? siteConfig.brand.secondary
                : "#6b7280",
            }}
          >
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default MultiStepForm;