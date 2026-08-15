import { siteConfig } from "@/config/SiteConfig";

interface StepperProps {
  currentStep?: number;
  className?: string;
}

const Stepper = ({ currentStep = 0, className = "" }: StepperProps) => {
  const steps = siteConfig.formData.formSteps;
  const totalSteps = steps.length;

  return (
    <div
      className={`w-full max-w-5xl mx-auto py-2 px-2 md:py-4 md:px-4 ${className}`}
    >
      <div className="relative">
        {/* Connector Lines */}
        <div className="hidden md:block absolute top-4 left-0 right-0 h-1 -translate-y-1/2 pointer-events-none z-0">
          {/* Background gray line connecting everything */}
          <div 
            className="absolute top-0 bottom-0 bg-[#ccc]" 
            style={{
              left: `calc(100% / ${totalSteps} / 2)`,
              right: `calc(100% / ${totalSteps} / 2)`
            }}
          />
          
          {/* Active colored line representing progress */}
          <div 
            className="absolute top-0 bottom-0 h-full transition-all duration-300"
            style={{
              background: siteConfig.brand.primary,
              left: `calc(100% / ${totalSteps} / 2)`,
              width: `calc((100% - 100% / ${totalSteps}) * ${Math.min(currentStep, totalSteps - 1)} / ${totalSteps - 1})`
            }}
          />
        </div>

        {/* Steps */}
        <div className="flex items-start relative z-10 gap-1 md:gap-4 overflow-x-auto pb-1">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div
                key={index}
                className="shrink-0 md:flex-1 flex flex-col items-center"
                style={{ minWidth: "48px" }}
              >
                <div
                  className="w-7 h-7 md:w-8 md:h-8 shrink-0 flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      isCompleted || isActive
                        ? siteConfig.brand.secondary
                        : "#ccc",
                    color: "white",
                  }}
                >
                  <span className="text-xs md:text-sm font-semibold">
                    {isCompleted ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </span>
                </div>
                <h6
                  className="text-[8px] md:text-xs font-semibold mt-1 text-center leading-tight hidden md:block"
                  style={{ color: siteConfig.brand.secondary }}
                >
                  {step}
                </h6>
                {/* Mobile: show only for active step */}
                <h6
                  className="text-[8px] font-semibold mt-1 text-center leading-tight md:hidden"
                  style={{
                    color: isActive
                      ? siteConfig.brand.secondary
                      : "transparent",
                  }}
                >
                  {step}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stepper;