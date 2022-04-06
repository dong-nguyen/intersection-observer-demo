import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="w-[900px] m-auto max-w-full">
      <div className="mb-20">
        <h1 className="font-bold text-4xl mb-5">What?</h1>
        <h2 className="mb-4">
          The Intersection Observer API provides a way to asynchronously observe
          changes in the intersection of a target element with an ancestor
          element or with a top-level document&apos;s viewport.
        </h2>
      </div>
      <div className="mb-20">
        <h1 className="font-bold text-4xl mb-5">Why?</h1>
        <h2 className="mb-4">
          It is a difficult task and low performance for detecting visibility of
          an element, or the relative visibility of two elements in relation to
          each other
        </h2>
        <h2 className="font-bold mb-2">Several use cases:</h2>
        <ul className="list-disc italic pl-10">
          <li>
            Lazy-loading of images or other content as a page is scrolled.
          </li>
          <li>Implementing &quot;Infinite scrolling&quot;.</li>
          <li>
            Deciding whether or not to perform tasks or animation processes
            based on whether or not the user will see the result.
          </li>
        </ul>
      </div>
      <div className="mb-20">
        <h1 className="font-bold text-4xl mb-5">How?</h1>
        <img src="code_example1.png" className="w-[600px] max-w-full" />
        <img src="code_example2.png" className="w-[600px] max-w-full" />
        <div className="mt-10">
          <dl>
            <dt className="mb-4" key="1">
              <code className="bg-slate-100">root</code>
            </dt>
            <dd className="mb-10">
              <p>
                The element that is used as the viewport for checking visibility
                of the target. Must be the ancestor of the target. Defaults to
                the browser viewport if not specified or if <code>null</code>.
              </p>
            </dd>
            <dt className="mb-4" key="2">
              <code className="bg-slate-100">rootMargin</code>
            </dt>
            <dd className="mb-10">
              <p>
                Margin around the root. Can have values similar to the CSS{' '}
                <a href="/en-US/docs/Web/CSS/margin">
                  <code>margin</code>
                </a>{' '}
                property, e.g. &quot;<code>10px 20px 30px 40px&quot;</code>{' '}
                (top, right, bottom, left). The values can be percentages. This
                set of values serves to grow or shrink each side of the root
                element&apos;s bounding box before computing intersections.
                Defaults to all zeros.
              </p>
            </dd>
            <dt className="mb-4" key="3">
              <code className="bg-slate-100">threshold</code>
            </dt>
            <dd className="mb-10">
              <p>
                Either a single number or an array of numbers which indicate at
                what percentage of the target&apos;s visibility the
                observer&apos;s callback should be executed. If you only want to
                detect when visibility passes the 50% mark, you can use a value
                of 0.5. If you want the callback to run every time visibility
                passes another 25%, you would specify the array [0, 0.25, 0.5,
                0.75, 1]. The default is 0 (meaning as soon as even one pixel is
                visible, the callback will be run). A value of 1.0 means that
                the threshold isn&apos;t considered passed until every pixel is
                visible.
              </p>
            </dd>
          </dl>
        </div>
      </div>
      <div className="mb-20">
        <h1 className="font-bold text-4xl mb-5">Notes</h1>
        <div>
          <ul className="list-disc italic pl-10">
            <li>
              Intersection Observer API is a new API so please add polyfill to
              make sure the app doesn&apos;t crash
            </li>
            <li>
              There are some the other cool APIs of observer pattern you can
              try: ResizeObserver, MutationObserver
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-20">
        <h1 className="font-bold text-4xl mb-5">Resources</h1>
        <div className="mb-3">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 font-bold font-2xl"
          >
            Intersection Observer API
          </a>
        </div>
        <div className="mb-3">
          <a
            href="https://medium.com/walmartglobaltech/infinite-scrolling-the-right-way-11b098a08815"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 font-bold font-2xl"
          >
            Infinite Scroll’ing the right way
          </a>
        </div>
        <div className="mb-3">
          <a
            href="https://github.com/w3c/IntersectionObserver/tree/main/polyfill"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 font-bold font-2xl"
          >
            IntersectionObserver polyfill
          </a>
        </div>
        <div className="mb-3">
          <a
            href="https://www.dofactory.com/javascript/design-patterns/observer"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 font-bold font-2xl"
          >
            JavaScript Observer
          </a>
        </div>
        <div className="mb-3">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 font-bold font-2xl"
          >
            ResizeObserver
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
