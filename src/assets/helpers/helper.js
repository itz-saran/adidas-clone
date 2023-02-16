import React from "react";
import Star from "../../components/Reviews/Star/Star";

export const debounce = (callback, delay = 50) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};

export const throttle = (callback, delay = 50) => {
  let shouldFire = true;
  return function () {
    if (shouldFire) {
      callback();
      shouldFire = false;
      setTimeout(() => {
        shouldFire = true;
      }, delay);
    }
  };
};

export const toINR = (price) => {
  const converted = price.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  });
  return converted.replace(",", " ");
};

export const fetchUrl = async (path, method, data) => {
  const BASE_URL = "http://localhost:3001";
  const OPTIONS = data
    ? {
        method: method,
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    : {
        method: method,
        headers: {
          "Content-type": "application/json",
        },
      };
  const response = await fetch(`${BASE_URL}/${path}`, OPTIONS);
  const products = await response.json();
  return products;
};

export const getStars = (rating) => {
  if (rating < 0) return;
  const remainder = parseFloat(rating - Math.floor(rating)).toFixed(1);
  rating = Math.floor(rating);
  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(<Star />);
  }
  if (stars.length < 5) stars.push(<Star fill={remainder * 100} />);
  while (stars.length < 5) stars.push(<Star fill={0 * 100} />);
  return stars;
};

/**
 * isAuth = useMemo((name, id)=>auth(name, id),[name, id])
    useCallback((sran, 1)=>auth(saran, 1),[name,id])
 */
