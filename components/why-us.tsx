'use client';

import { Icon } from '@iconify/react';

const WhyUsPage = ({ dictionary }: { dictionary: any }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-2 px-4 md:px-8">
      <div className="max-w-[90rem] mx-auto relative">
        {/* Left image - absolute positioned */}
        <div className="hidden lg:block absolute left-[1rem] top-64">
          <img
            src="/en/logo/openai.png"
            alt={dictionary.whyUs.leftImageAlt}
            className="rounded-lg w-[400px]"
          />
        </div>

        {/* Right image - absolute positioned */}
        <div className="hidden lg:block absolute right-3 top-0">
          <img
            src="/en/logo/transparent-logo.png"
            alt={dictionary.whyUs.rightImageAlt}
            className="rounded-lg w-[400px]"
          />
        </div>

        {/* Main content in center column */}
        <div className="max-w-3xl mx-auto relative">
          {/* Top section with logo and title */}

          {/* Hero section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {dictionary.whyUs.title}
            </h1>
            <p className="text-lg">
              {dictionary.whyUs.heroText}{' '}
              <span className="text-gray-400">{dictionary.whyUs.heroSubtext}</span>
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-16">
            {/* Feature 1 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon icon="vaadin:diploma-scroll" className="size-5" />
                <h3 className="font-medium text-gray-900 ml-1">
                  {dictionary.whyUs.features.expertise.title}
                </h3>
              </div>
              <p className="text-gray-400">{dictionary.whyUs.features.expertise.description}</p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon icon="healthicons:artificial-intelligence" className="size-6" />
                <h3 className="font-medium text-gray-900">{dictionary.whyUs.features.ai.title}</h3>
              </div>
              <p className="text-gray-400">{dictionary.whyUs.features.ai.description}</p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon icon="ant-design:code-filled" className="size-5" />
                <h3 className="font-medium text-gray-900">
                  {dictionary.whyUs.features.innovation.title}
                </h3>
              </div>
              <p className="text-gray-400">{dictionary.whyUs.features.innovation.description}</p>
            </div>

            {/* Feature 4 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon icon="fluent:people-community-16-filled" className="size-5" />
                <h3 className="font-medium text-gray-900">
                  {dictionary.whyUs.features.support.title}
                </h3>
              </div>
              <p className="text-gray-400">{dictionary.whyUs.features.support.description}</p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="border-l-2 border-gray-200 pl-6">
            <p className="text-sm text-gray-500 mb-4 tracking-wider italic">
              {dictionary.whyUs.testimonial}
            </p>
            <div
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.open('https://www.spliiit.com/en', '_blank')}
              role="link"
              aria-label={dictionary.whyUs.spliiitLinkAriaLabel}
            >
              <SpliitLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SpliitLogo = () => {
  return (
    <svg
      width="71"
      height="30"
      viewBox="0 0 81 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.1989 12.0428C52.9441 12.0428 54.5043 10.887 54.5043 9.22277C54.5043 8.14794 53.7993 6.88818 52.0195 6.88818C50.2744 6.88818 48.8297 8.22884 48.8297 9.8931C48.8181 11.1528 49.8583 12.0428 51.1989 12.0428Z"
        fill="currentColor"
      ></path>
      <path
        d="M59.0119 11.9734C60.7571 11.9734 62.3173 10.8177 62.3173 9.15343C62.3173 8.0786 61.6123 6.81885 59.8325 6.81885C58.0873 6.81885 56.6427 8.1595 56.6427 9.82376C56.6311 11.0835 57.6713 11.9734 59.0119 11.9734Z"
        fill="currentColor"
      ></path>
      <path
        d="M67.3562 12.0428C69.1013 12.0428 70.6616 10.887 70.6616 9.22277C70.6616 8.14794 69.9566 6.88818 68.1767 6.88818C66.4316 6.88818 64.9869 8.22884 64.9869 9.8931C64.9754 11.1528 66.0155 12.0428 67.3562 12.0428Z"
        fill="currentColor"
      ></path>
      <path
        d="M80.4276 21.3695C80.2427 21.3695 80.0231 21.4851 79.8729 21.7047C77.3418 25.3106 76.0127 25.7498 75.3077 25.7498C74.4871 25.7498 74.048 24.8599 74.048 23.2187C74.048 21.7278 74.3138 20.1676 74.6836 18.6882C79.2141 18.538 80.5547 16.9084 80.5547 15.1632C80.5547 14.1578 80.0347 13.6723 79.6302 13.6723C79.295 13.6723 79.1447 14.308 77.5152 15.0823C76.9604 15.3366 76.3248 15.5331 75.6198 15.718C76.2901 13.9035 77.0644 12.297 77.7347 11.1528C78.4051 9.96244 79.2603 9.00318 79.2603 8.55244C79.2603 7.32736 78.1046 6.65704 77.2493 6.65704C75.9549 6.65704 74.9841 7.88212 73.7937 10.1474C72.9038 11.8578 72.0832 14.0075 71.4129 16.1687H71.3435C70.2687 16.1687 69.8526 15.8336 69.5984 15.8336C69.4135 15.8336 69.2979 16.0532 69.2979 16.319C69.2979 17.0933 69.9335 17.8446 70.8235 18.2491C70.6039 19.0696 70.4189 19.8786 70.2687 20.5836C70.1762 21.0344 70.0953 21.4851 70.0376 21.9243C67.6221 25.3106 66.5357 25.5302 65.8538 25.5302C65.3337 25.5302 64.8483 25.1257 64.8483 24.0046C64.8483 22.7449 65.3684 20.8148 66.4779 18.6882C67.0326 17.6481 67.3678 17.2782 67.3678 16.6079C67.3678 15.3828 66.5935 14.3773 65.2528 14.3773C63.8775 14.3773 62.8027 16.3074 61.8781 18.6073C61.3811 19.8324 60.9881 21.3002 60.7801 22.6409C58.7113 25.3453 57.7405 25.5302 57.1049 25.5302C56.5848 25.5302 56.0994 25.1257 56.0994 24.0046C56.0994 22.7449 56.6195 20.8148 57.729 18.6882C58.2837 17.6481 58.6189 17.2782 58.6189 16.6079C58.6189 15.3828 57.8445 14.3773 56.5039 14.3773C55.1286 14.3773 54.0537 16.3074 53.1292 18.6073C52.6322 19.8324 52.2392 21.3002 52.0312 22.6409C49.9855 25.3453 49.0147 25.5302 48.3791 25.5302C47.859 25.5302 47.3736 25.1257 47.3736 24.0046C47.3736 22.7449 47.8937 20.8148 49.0032 18.6882C49.5579 17.6481 49.8931 17.2782 49.8931 16.6079C49.8931 15.3828 49.1187 14.3773 47.7781 14.3773C46.4028 14.3773 45.3279 16.3074 44.4034 18.6073C43.9064 19.8324 43.5134 21.2886 43.3054 22.6293C41.2135 25.3684 40.0578 25.7382 39.4221 25.7382C38.6016 25.7382 38.2664 24.9177 38.2664 23.5886C38.2664 22.4328 38.486 20.9882 38.8211 19.4626C44.022 15.0477 46.842 9.24588 46.842 5.72089C46.842 3.3054 46.0676 2.01098 44.2415 2.01098C40.6357 2.01098 36.8911 10.5865 35.0535 17.4054C34.6489 15.7758 33.5857 14.4351 31.6787 14.4351C29.009 14.4351 26.9286 17.1511 25.588 19.6706C25.7729 18.8963 25.8885 18.2259 25.8885 17.7405C25.8885 16.5155 24.8136 15.7296 23.9584 15.7296C22.8258 15.7296 22.1323 16.735 21.67 18.0526C19.555 12.7709 10.9564 11.7538 10.9564 6.80728C10.9564 3.83704 13.8919 2.24213 16.3768 2.24213C17.9717 2.24213 19.2777 3.01647 19.2777 4.43802C19.2777 5.69778 18.4224 6.48368 16.9431 6.92285C16.7582 6.95753 16.6426 7.10777 16.6426 7.29269C16.6426 7.88212 17.4632 8.58711 19.2777 8.58711C21.4273 8.58711 24.2589 7.36203 24.2589 4.49581C24.2589 1.41 20.8032 0 17.0933 0C10.9217 0 5.68622 3.70991 5.68622 8.57556C5.68622 15.7758 16.8275 16.4461 16.8275 22.6871C16.8275 25.8076 14.2618 28.0035 10.9564 28.0035C7.43138 28.0035 5.5013 25.7382 5.5013 23.2881C5.5013 21.2771 6.69171 20.6877 6.69171 19.9827C6.69171 19.2777 5.5822 18.3068 4.12597 18.3068C1.71049 18.3068 0 20.3872 0 22.872C0 26.6281 3.79081 30.1531 9.99711 30.1531C13.9844 30.1531 17.4054 28.72 19.6013 26.4895C19.1274 28.304 18.7229 29.7486 18.7229 29.7486C18.7229 29.7486 16.7582 35.0535 16.7582 36.9142C16.7582 38.1046 17.5441 40 19.4741 40C22.2248 40 23.369 34.6836 24.1549 27.7376C24.7905 28.4426 25.8307 28.7085 26.8246 28.7085C29.8526 28.7085 32.4415 26.5126 33.9208 23.8081C33.9208 23.8659 33.9208 23.9237 33.9208 23.9699C33.9208 27.1598 35.2962 28.72 37.4112 28.72C39.2025 28.72 41.0748 27.9688 43.1552 25.1604C43.3516 27.206 44.3918 28.7663 46.3681 28.7663C47.9052 28.7663 49.7891 28.015 51.8925 25.195C52.0659 27.206 53.106 28.7663 55.0939 28.7663C56.631 28.7663 58.5149 28.015 60.6183 25.195C60.8032 27.206 61.8434 28.7663 63.8313 28.7663C65.484 28.7663 67.5412 27.8995 69.8526 24.5016C69.9104 26.998 71.1355 28.7663 73.3083 28.7663C75.5735 28.7663 77.9543 27.5758 80.7397 22.56C80.8899 22.3057 80.9246 22.1092 80.9246 21.9243C80.913 21.5891 80.6934 21.3695 80.4276 21.3695ZM44.1375 7.40826C44.438 7.40826 44.542 7.62785 44.542 7.99769C44.542 9.25744 43.0974 13.0483 39.4915 17.024C40.9477 12.2277 43.2476 7.40826 44.1375 7.40826ZM27.5874 26.5357C26.5819 26.5357 25.9347 26.2236 25.5071 25.8076C24.9408 25.2413 24.7212 24.6865 24.8945 24.0277C25.4031 22.2479 28.5698 18.1219 30.0953 18.1219C30.9159 18.1219 31.4707 18.8616 31.4707 20.4218C31.4707 23.1725 30.3381 26.5357 27.5874 26.5357Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default WhyUsPage;
