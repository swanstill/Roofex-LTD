"use client";
import { useState } from "react";
import { siteConfig } from "@/config/SiteConfig";
import Stepper from "./Stepper";
import MultiStepForm from "./MultiStepForm";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section
      id="quote-form"
      className="flex flex-col gap-4 py-8 justify-center items-center px-4"
      style={{ backgroundColor: siteConfig.brand.primary }}
    >
      {/* Heading */}
      <div className="text-center px-2">
        <h2 className="text-white font-bold text-xl md:text-4xl">
          {siteConfig.formData.formHeading}
        </h2>
      </div>

      {/* Stepper */}
      <div className="bg-white rounded-xl w-full max-w-5xl mx-auto p-2 md:p-6 overflow-hidden">
        <Stepper currentStep={currentStep} />
      </div>

      {/* Multi Step Form */}
      <MultiStepForm onStepChange={setCurrentStep} />
    </section>
  );
};

export default Form;
