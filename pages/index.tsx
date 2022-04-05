import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <div className="mb-20">
        <h1 className="font-bold text-4xl mb-5">What?</h1>
        <h2 className="mb-4">
          The Intersection Observer API provides a way to asynchronously observe
          changes in the intersection of a target element with an ancestor
          element or with a top-level document's viewport.
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
          <li>Implementing "Infinite scrolling".</li>
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
        <div>
          <a
            href="https://medium.com/walmartglobaltech/infinite-scrolling-the-right-way-11b098a08815"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 font-bold font-2xl"
          >
            Infinite Scroll’ing the right way
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
