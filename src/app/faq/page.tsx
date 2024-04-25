import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { CardStackDemo } from "../components/cstack";

export default function SpotlightPreview() {
  return (
    <>
      <section className="bg-black text-gray-100 py-32 min-h-screen">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-yellow-500 text-4xl font-bold leadi text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is Fitnesspergram?
              </summary>
              <div className="px-4 pb-4">
                <p>
                Fitnesspergram is a health-focused meal delivery service that provides calorie-counted, portion-controlled meals designed to support a balanced diet and fitness goals.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does Fitnesspergram work?
              </summary>
              <div className="px-4 pb-4">
                <p>
                Customers can subscribe to our meal plans on our website. We offer a variety of meal options to choose from. Once subscribed, meals are delivered daily based on the chosen plan.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              What types of meals does Fitnesspergram offer?
              </summary>
              <div className="px-4 pb-4">
                <p>
                We offer a range of meals for once a day during lunch hours . Our meals are designed to be nutritious, balanced, and tailored to specific dietary needs.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              Can I customize my meals?
              </summary>
              <div className="px-4 pb-4">
                <p>
                No, to ensure consistency , fitnesspergram doesn't offer any customization options other than topups as mentioned in the menu section of our website.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              Where does Fitnesspergram deliver?
              </summary>
              <div className="px-4 pb-4">
                <p>
                Currently, we deliver in select areas of Narengi, Guwahati. We are working towards expanding our delivery network to cover more locations in the future.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              What are the subscription options available?
              </summary>
              <div className="px-4 pb-4">
                <p>
                We offer flexible subscription plans including weekly and monthly options. Customers can choose the plan that best suits their needs and lifestyle.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              How are the meals packaged and delivered?
              </summary>
              <div className="px-4 pb-4">
                <p>
                Our meals are freshly prepared and delivered in convenient packaging. They are delivered in bulk at a designated time slot to ensure freshness.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              Is there a minimum subscription period?
              </summary>
              <div className="px-4 pb-4">
                <p>
                No, there is no minimum subscription period. Customers can subscribe and cancel their plan at any time.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              What if I have specific dietary requirements or allergies?
              </summary>
              <div className="px-4 pb-4">
                <p>
                Although we do not accommodate specific dietary requirements, Please feel free to inform us of any restrictions or preferences when placing your order.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is Fitnesspergram's cancellation policy?
              </summary>
              <div className="px-4 pb-4">
                <p>
                We do not offer a refund on any cancellations. once an order is placed , it can be cancelled any time but no refund will be issued to the customer.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
